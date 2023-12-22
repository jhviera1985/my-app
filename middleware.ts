import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRouters: [
        '/'
    ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 