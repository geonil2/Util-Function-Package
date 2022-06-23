// Make first letter uppercase
export const firstLetterUppercase = (word: string) => {
    return word ? word[0].toUpperCase() + word.slice(1, word.length) : ''
}

