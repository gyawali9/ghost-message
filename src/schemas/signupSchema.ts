import * as z from "zod";

export const userNameValidation = z
  .string()
  .min(2, "Username must be at least 2 characters long")
  .max(100, "Username cannot exceed 100 characters long")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Username can only contain letters, numbers, and underscores",
  );

export const emailValidation = z
  .email({ message: "Invalid email address" })
  .max(100, { message: "Email cannot exceed 100 characters long" });

export const passwordValidation = z
  .string()
  .min(6, { message: "Password must be at least 6 characters long" })
  .max(100, { message: "Password cannot exceed 100 characters long" });

export const signUpSchema = z.object({
  username: userNameValidation,
  email: emailValidation,
  password: passwordValidation,
});
