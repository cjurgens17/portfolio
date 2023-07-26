const bitContainer = document.querySelector('.bit-container');
const bit = document.querySelector('.bits');

function getBitTranslation() {
    const bitContainerWidth = bitContainer.clientWidth;
    const bitWidth = bit.clientWidth;
    return `${bitContainerWidth - bitWidth}px`;
}

document.documentElement.style.setProperty('--bit-distance', getBitTranslation());
