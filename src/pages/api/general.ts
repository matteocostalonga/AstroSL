import type { APIRoute } from 'astro';

const usernames = ['alice', 'bob', 'carol'];

export const GET: APIRoute = ({ params, request }) => {

    // params accept only hardcoded values

    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id')) || NaN;

    return new Response(
        JSON.stringify({
            user: usernames[id],
            type: 'softcoded',
            date: new Date().toISOString(),
        })
    );
}