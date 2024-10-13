// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  // If no token exists, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Continue to the protected page if authenticated
  return NextResponse.next();
}

// Apply middleware only to specific paths (like '/product', or '/dashboard')
export const config = {
  matcher: ["/product/:path*", "/dashboard/:path*"], // Add paths of protected routes
};
