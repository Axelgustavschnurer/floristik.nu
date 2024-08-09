import { pbFetch } from '@functions';
import { generate_styles_image_slider } from './functions.css';
 
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

    const styles_image_slider: string = generate_styles_image_slider(longestArray)

    return new Response( styles_image_slider , {
        headers: {
            'Content-Type': 'text/css'
        }
    });
}
