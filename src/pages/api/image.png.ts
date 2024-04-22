export async function GET({ params, request }: { params: any, request: any }) {
    const response = await fetch("https://docs.astro.build/assets/full-logo-light.png");
    return new Response(await response.arrayBuffer());
}