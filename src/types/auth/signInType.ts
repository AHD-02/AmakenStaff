import * as yup from 'yup';

export type SignInResponse = {
    jwt: string,
    refreshToken: string,
    wizardRequired: boolean,
}

export type SignInRequest = {
    userName: string,
    password: string,
}

export const signInValidationSchema = yup.object({
    userName: yup.string().email('invalid').required('required'),
    password: yup.string().required('required'),
});


export const signInInitialValues: SignInRequest = {
    userName: "hello@email.com",
    password: "12345678",
}


export type ExternalAuthConfigModel = {
    msalClientId: string | null
    msalRedirectUri: string | null
    googleClientId: string | null
}

