import { pbFetch } from '@functions';
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://floristik.pockethost.io');

export async function GET() {

    let data = await pbFetch({
        collection: "species",
        sort: "scientific"
    });

    let longestArray = 0
    data.forEach((element: any) => {
        if (element.images.length > longestArray) {
            longestArray = element.images.length
        }
    });

    let css: string = ''
    for (let i = 0; i < longestArray; i++) {
        css += `.image-slider-container-container:has(section label:nth-child(${i + 1}) > input[type="radio"]:checked) > flex img {transform: translate(-${i * 100}%, 0)}`
    }

    return new Response( css , {
        headers: {
            'Content-Type': 'text/css'
        }
    });
}
