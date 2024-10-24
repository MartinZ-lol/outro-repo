export default function Address(props) {
    return `${props.logradouro}, ${props.bairro}, ${props.localidade}, ${props.estado}, ${props.cep}`;
}