import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  // Simple check for session cookie or NextAuth session
  // In a real Edge middleware, we'd verify the JWT.
  // For this hackathon, we rely on the session token presence essentially.

  // Note: 'auth' helper from next-auth v5 is the official way,
  // but for stability/simplicity in v4-style or specific next-auth ver, we can check cookies manually if needed.
  // But let's try the standard export config if using auth() wrapper.

  const sessionToken =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token");

  const { pathname } = request.nextUrl;

  const isProtected =
    pathname.startsWith("/textbook") || pathname.startsWith("/chat");
  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/signup");

  if (isProtected && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthPage && sessionToken) {
    return NextResponse.redirect(new URL("/textbook", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/textbook/:path*", "/chat/:path*", "/login", "/signup"],
};
