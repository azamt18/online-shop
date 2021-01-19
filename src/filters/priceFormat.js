export default function toFormattedPrice(value) {
    let parts  = value.toString().split('.');
    parts[0] = new Intl.NumberFormat('ru-RU').format(parts[0]);
    return parts.join('.');
}