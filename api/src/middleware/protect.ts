import jwt from "jsonwebtoken";
import { Role } from "../utils/types";
import { HTTPError, HttpStatusCode, route } from "../utils/utilities";

export default (role: Role) =>
  route(async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Bearer"))
      throw new HTTPError(HttpStatusCode.UNAUTHORIZED, "Auth failed");

    const token = authorization.split(" ")[1];

    // if (role !== user.role)
    //   throw new HTTPError(HttpStatusCode.FORBIDDEN, "Forbidden");
  });
