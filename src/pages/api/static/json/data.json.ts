import { pbFetch } from "@functions";

export async function GET() {

    let data = await pbFetch({
        collection: "species",
        sort: "scientific"
    });


    return new Response(JSON.stringify({
        data
    }))
    
}