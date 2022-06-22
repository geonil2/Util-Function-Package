export const shortCutAddress = (address: string, unit: number = 5) => {
    return `${address.substr(0, unit)}...${address.substr(address.length - unit)}`
}