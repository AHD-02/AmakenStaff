import * as yup from 'yup';

export type ResetPassword = {
    oldPassword: "",
    password: "",
    confirmPassword: "",
}

export const ResetPasswordValidationSchema = yup.object({
    oldPassword: yup.string().required('Please complete this field'),
    password: yup.string().required('Please complete this field'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
});


export const ResetPasswordInitialValues: ResetPassword = {
    oldPassword: "",
    confirmPassword: "",
    password: "",
}
