export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] }; //it will only show this page to logged in users

//basically it make this dashboard page only accessible to logged in users i.e. private page
