import User from "../models/User";
import {
  HTTPError,
  HttpStatusCode,
  route,
  verifyJWT,
} from "../utils/utilities";

export const register = route(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (!!existingUser)
    throw new HTTPError(HttpStatusCode.CONFLICT, "User already exists");

  await new User({ name, email, password }).save();

  res.status(200).json({ message: "User registered successfully" });
});

export const login = route(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user)
    throw new HTTPError(HttpStatusCode.NOT_FOUND, "User does not exist");

  const match = await user.matchPassword(password);
  if (!match) throw new HTTPError(HttpStatusCode.UNAUTHORIZED, "Auth failed");

  if (!user.verified)
    throw new HTTPError(HttpStatusCode.UNAUTHORIZED, "User not verified");
});

export const verify = route(async (req, res) => {
  const { token } = req.params;
  const secret = process.env.ACCESS_TOKEN_SECRET;
  if (!secret) throw new Error("Environment Invalid");

  //@ts-ignore
  const { id } = verifyJWT(token, secret);
  await User.updateOne({ id }, { verified: true });

  res.sendStatus(200);
});
