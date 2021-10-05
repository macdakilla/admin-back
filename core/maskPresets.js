import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import emailMask from 'text-mask-addons/dist/emailMask.js'

// First, you need to create the `numberMask` with your desired configurations
const currency = createNumberMask({
    prefix: '',
    suffix: '',
    thousandsSeparatorSymbol: ' ',
    integerLimit: 9,
})

const email = emailMask;

export {currency, email};
