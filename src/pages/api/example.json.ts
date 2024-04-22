
export async function GET({ params, request } : { params: any, request: any }) {

    console.log(params, request);

    return new Response(
        JSON.stringify({
            name: 'Astro',
            url: 'https://astro.build/'
        })
    )
}