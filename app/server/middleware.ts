import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { account } from '../server/appwrite';

export async function middleware(request: NextRequest) {
  try {
    const user = await account.get();

    if (
      user &&
      (request.nextUrl.pathname === '/login' ||
        request.nextUrl.pathname === '/register')
    ) {
      return NextResponse.redirect(new URL('/profile', request.url));
    }

    return NextResponse.next();
  } catch {
    if (
      request.nextUrl.pathname.startsWith('/profile') ||
      request.nextUrl.pathname.startsWith('/dashboard')
    ) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/login', '/register', '/profile', '/dashboard'],
};
