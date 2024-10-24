export default function ServiceCard(props) {
    return `
        <div class="service-card">
            <p class="service-title text-[16px] ">Serviço <strong>${props.name}</strong></p>
            <p class="service-info">Prazo <strong>${props.days} dias</strong></p>
            <p class="service-price">
                <span class="old-price text-gray-400">R$ ${props.price}</span>
                <span class="new-price font-bold">R$ ${props.priceWithDiscount}</span>
            </p>
            <p class="service-date">Data da postagem <strong>16/09/2024</strong></p>
        </div>
    `;
}