// import * as yup from 'yup';
// import {useTranslation} from "react-i18next";

export type SignupModel = {
    email: string
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    termsAndConditions: boolean
    plan: string;
    companyName: string;
    countryId: string;
    cityId: string;
}

// export const signupValidationSchema = () => {
//     const {t} = useTranslation("translation", {keyPrefix: 'signupPage'});
//
//     return yup.object({
//         firstName: yup.string().required(t('requiredField')),
//         lastName: yup.string().required(t('requiredField')),
//         email: yup.string().required(t('requiredField')).email(t('invalidEmail')),
//         password: yup.string().required(t('requiredField')),
//         confirmPassword: yup
//             .string()
//             .oneOf([yup.ref('password'), null as any], t('passwrdMustMatch'))
//             .required(t('requiredField')),
//         termsAndConditions: yup
//             .boolean()
//             .oneOf([true], t('acceptTerms'))
//             .required(t('requiredField')),
//         plan: yup.string().required(t('mustSelectPlan')),
//         companyName: yup.string().required(t('requiredField')),
//         countryId: yup.string().required(t('requiredField')),
//         cityId: yup.string().required(t('requiredField')),
//     })
// };
//
//
// export const signupInitialValues: SignupModel = {
//     email: "",
//     firstName: "",
//     lastName: "",
//     password: "",
//     confirmPassword: "",
//     termsAndConditions: false,
//     plan: "",
//     companyName: "",
//     countryId: "",
//     cityId: "",
// }
export type PlansModel = {
    name: string
    amount: string
}

export type SignUpResponse = {
    jwt: string,
    refreshToken: string,
    verificationToken: string
}

export type verifyEmailRequest = {
    VerificationToken: string;
    email: string;
}

export type verifyEmailResponseType = {
    success: boolean,
    message: string,
    jwt: string,
    refreshToken: string,
}