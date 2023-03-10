import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /examples (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|examples/|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "redirekt.biz";

  const isBaseApp =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname === "redirekt.biz" || hostname === process.env.VERCEL_URL
      : hostname === "localhost:3000";

  if (isBaseApp) return NextResponse.next();
  else {
    return NextResponse.redirect(new URL(`/api/abrakadabra?domain=${hostname}`, req.url))
  }
}
