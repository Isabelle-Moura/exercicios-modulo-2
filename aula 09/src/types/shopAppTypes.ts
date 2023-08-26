interface DigitalProducts {
    type: "digital"
    name: string
    price: number
    buyingLink: string
}

interface FisicalProducts {
    type: "fisical"
    name: string
    price: number
    weight: string
}

type Products = DigitalProducts | FisicalProducts