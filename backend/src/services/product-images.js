const path = require('path');
const fs = require('fs');

const saveByUrl = async ({url, filename, slug}) => {
    filename = !filename
     ? Math.random().toString(16).slice(2)
     : filename;

    let response = await fetch(url);
    let mimeType = response.headers.get("content-type");
    let extension = mimeType.split('/').pop();
    let content = Buffer.from(await response.arrayBuffer());
    let directory = path.resolve(`${process.env.UPLOAD_BASE_DIR}/${slug}`);

    if(!fs.existsSync(directory)) {
        fs.mkdirSync(directory, {recursive: true});
    }

    let file = `${directory}/${filename}.${extension}`;
    fs.writeFileSync(file, content);


    return {
        relativePath: `${slug}/${filename}.${extension}`
    }
}

const deleteSingle = (relativePath) => {
    let file = path.resolve(`${process.env.UPLOAD_BASE_DIR}/${relativePath}`);

    if(fs.existsSync(file)) {
        fs.rmSync(file);
        return true;
    }
    return false;
}

const deleteMany = (relativePaths) => {
    for(let relativePath of relativePaths) {
        deleteSingle(relativePath);
    }
}

module.exports = {
    saveByUrl, deleteSingle, deleteMany
}