import * as yup from 'yup';

export type SignInResponse = {
    jwt: string,
    refreshToken: string,
    wizardRequired: boolean,
    token: string
}

export type SignInRequest = {
    email: string,
    password: string,
}

export const signInValidationSchema = yup.object({
    email: yup.string().email('invalid').required('required'),
    password: yup.string().required('required'),
});


export const signInInitialValues: SignInRequest = {
    email: "hello@email.com",
    password: "12345678",
}


export type ExternalAuthConfigModel = {
    msalClientId: string | null
    msalRedirectUri: string | null
    googleClientId: string | null
}

