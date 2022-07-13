// Make first letter uppercase
export const firstLetterUppercase = (word: string) => {
    return word ? word[0].toUpperCase() + word.slice(1, word.length) : ''
}

// Scroll to element
export const scrollToElement = (selectors: string) => {
    const dev = document.querySelector(selectors);
    const scrollHeight = dev ? dev.getBoundingClientRect().top : 0;
    window.scrollBy(0, scrollHeight);
}