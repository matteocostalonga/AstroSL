import type { APIRoute } from 'astro';

const usernames = ['alice', 'bob', 'carol'];

export const GET: APIRoute = ({ params }) => {

    console.log(params);

    const id = Number(params.id);

    return new Response(
        JSON.stringify({
            user: usernames[id],
            type: 'hardcoded',
            date: new Date().toISOString(),
        })
    );
}

// being that Astro is a static site builder, it is crucial to define all the paths that will be generated at build time
export function getStaticPaths() {
    return usernames.map((_, id) => ({ params: { id: String(id) } }))
}
