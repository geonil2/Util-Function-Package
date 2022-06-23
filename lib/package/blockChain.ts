export const shortCutAddress = (address: string, unit: number = 5) => {
    if (!address || address.length < unit * 2) {
        return address;
    }
    return `${address.substr(0, unit)}...${address.substr(address.length - unit)}`
}