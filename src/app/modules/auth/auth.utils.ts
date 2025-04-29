import jwt, { Secret, SignOptions } from "jsonwebtoken";

export const createToken = (
  payload: { email: string; id: number },
  secret: Secret,
  expiresIn: string | number
): string => {
  const options: SignOptions = {
    expiresIn: expiresIn as SignOptions['expiresIn'],
  };

  return jwt.sign(payload, secret, options);
};
