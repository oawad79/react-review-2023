type House = {
    id: number;
    address: string
    country: string
    price: number
    image?: string
    description?: string
}

type ContextProps = {
    current: string;
    param?: House;
    navigate?: (navTo: string, param?: House) => void
}