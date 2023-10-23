import * as yup from "yup";
import { passwordRegex } from "utilities/Regex";

const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(16, "Password must not exceed 16 characters")
    .matches(
      passwordRegex,
      "Password must contain at least one letter, one digit, and one special character (6-16 characters)"
    ),
});

export default LoginFormSchema;
