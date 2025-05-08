import { auth } from "@/auth";

export default auth((req) => {
  const isAuthenticated = !!req.auth;
  const { pathname } = req.nextUrl;

  // Prevent authenticated users from accessing the login page
  if (isAuthenticated && pathname === "/sign-in") {
    return Response.redirect(new URL("/", req.url));
  }

  // Allow unauthenticated users to access only sign-in and public pages
  const publicPaths = ["/sign-in", "/about", "/contact", "/"];
  const isPublic =
    publicPaths.includes(pathname) || pathname.startsWith("/_next");

  if (!isAuthenticated && !isPublic) {
    return Response.redirect(new URL("/sign-in", req.url));
  }
});
export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"], // excludes _next and public assets
};
