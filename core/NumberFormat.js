class NumberFormat {
    constructor() {
        this.numberFormat = {};
    }

    ruFormat(number) {
        return new Intl.NumberFormat('ru-RU').format(parseInt(number, 10).toFixed(0))
    }

    removeTags(number) {
        number += '';

        return number.replace(/[\(\)_\-\s]*/g, '');
    }

    currency(element) {
        return new Intl.NumberFormat('ru-RU').format(parseInt(element, 10).toFixed(0))   + ' ₽'
    }
}

export default NumberFormat;
