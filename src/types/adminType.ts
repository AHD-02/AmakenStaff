import * as yup from "yup";

export type AdminType = {
  email: string;
  name: string;
  status: string;
};

export type AdminRequestType = {
  email: string;
  name: string;
  status: string;
  password: string;
};

export const adminInitialValue: AdminRequestType = {
  email: "",
  name: "",
  password: "",
  status: "OK",
};

export const adminRequestValidationSchema = yup.object({
  email: yup.string().email("Invalid email format").required("required"),
  name: yup.string().required("required"),
  status: yup.string(),
  password: yup.string().required("required"),
});
