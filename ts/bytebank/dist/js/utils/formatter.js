import DateFormat from "../types/DateFormat.js";
export function formatCurrency(valor) {
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
}
export function formatDate(date, format = DateFormat.padrao) {
    switch (format) {
        case DateFormat.diaMes:
            return date.toLocaleString("pt-br", {
                day: "2-digit",
                month: "2-digit",
            });
            break;
        case DateFormat.mesAno:
            return date.toLocaleString("pt-br", {
                month: "2-digit",
                year: "2-digit",
            });
            break;
        case DateFormat.diaSemanaData:
            return date.toLocaleString("pt-br", {
                weekday: "long",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            });
            break;
        default:
            return date.toLocaleString("pt-br", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            });
            break;
    }
}
