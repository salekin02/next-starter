import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log('Middleware', request.url)
    return NextResponse.rewrite(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    api: {
        bodyParser: false,
    },
    matcher: '/about/:path*',
}