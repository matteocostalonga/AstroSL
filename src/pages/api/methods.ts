import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ params, request }) => { 
    return new Response(JSON.stringify({
        type: 'GET Request',
        date: new Date().toISOString(),
    }));
}

export const POST: APIRoute = async ({ params, request }) => { 

    if (request.headers.get("Content-Type") === "application/json") {

        try {
            const body = await request.json();

            return new Response(JSON.stringify({
                type: 'POST Request',
                date: new Date().toISOString(),
                body: body,
            }), { status: 200 });

        } catch (e) {
            console.error(e);
        }
    }

    return new Response(null, { status: 400 });
}

export const PUT: APIRoute = ({ params, request }) => { 
    return new Response(JSON.stringify({
        type: 'PUT Request',
        date: new Date().toISOString(),
    }));
}

export const DELETE: APIRoute = ({ params, request }) => { 
    return new Response(JSON.stringify({
        type: 'DELETE Request',
        date: new Date().toISOString(),
    }));
}

export const OPTIONS: APIRoute = ({ params, request }) => { 
    return new Response(JSON.stringify({
        allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        date: new Date().toISOString(),
    }), { status: 204 });
}