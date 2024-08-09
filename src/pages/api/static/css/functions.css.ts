export function generate_styles_image_slider(length: number) {
    let css: string = ''
    for (let i = 0; i < length; i++) {
        css += `
            .image-slider-container-container:has(section label:nth-child(${i + 1}) > input[type="radio"]:checked) > flex img {
                transform: translate(-${i * 100}%, 0)
            }`
    }

    return css
}