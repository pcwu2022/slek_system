export { default } from "next-auth/middleware";

// config pages that should be authenticated for use
export const config = { matcher: ["\/projects/(.*)"] };