// Modify these according to you needs/requirements
// Modify these according to you needs/requirements
// Modify these according to you needs/requirements

import { NextResponse } from "next/server";
import { verifyToken } from "./utils/auth";

export async function middleware(request) {
  return NextResponse.next();
}
//   const { pathname } = request.nextUrl;
//   const cookie = request.headers.get("cookie");
//   const token = cookie?.split("=")[1] || "";

//   //verify token
//   const isTokenValid = await verifyToken(token).catch(() => false);

//   const redirect = (path) => {
//     const url = new URL(path, request.nextUrl.origin);
//     return NextResponse.redirect(url);
//   };

//   if (
//     (pathname.startsWith("/API/admin/actions") ||
//       pathname.startsWith("/admin/actions")) &&
//     !isTokenValid
//   ) {
//     return redirect("/admin");
//   }

//   if (pathname === "/admin" && isTokenValid) return redirect("/admin/actions");

//   return NextResponse.next();
// }

export const config = {
  api: { bodyParser: true },
  middleware: true,
};
