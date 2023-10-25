// Modify these according to you needs/requirements

import { jwtVerify } from "jose";
const jwt_secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function verifyToken(token) {
  try {
    const verified = await jwtVerify(token, jwt_secret);
    return verified.payload;
  } catch (error) {
    throw new Error("Jwt token is expired or invalid");
  }
}
