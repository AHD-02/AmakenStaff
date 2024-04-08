export type PagedModel<T> = {
  limit: number;
  matches: T[];
  offset: number;
  total: number;
};

export type PagedSearch<T> = {
  lookup?: boolean;
  limit?: number;
  offset?: number;
  orderBy?: string;
  orderByDesc?: boolean;
} & T;

export type Tokens = {
  accessToken?: string;
  refreshToken?: string;
  isBlocked?: boolean;
};

export type LookupModel = {
  value: number | string;
  label: string;
};

export type RefreshToken = {
  jwt: string;
  refreshToken?: string;
};

export type BasePagedSearch<T> = {
  limit: number | null;
  offset: number | null;
  lookup?: boolean | null;
} & T;

export type Locale = "en" | "ar" | "cn";

type CheckItem = { label: string; value: string };
export const LocaleOptions: CheckItem[] = [
  { label: "English", value: "en" },
  { label: "العربية", value: "ar" },
  { label: "中文", value: "cn" },
];

export type LookupType = {
  value: string | number;
  label: string;
  description?: string;
};

export type RadioButtonOptionsType = {
  value: string | number | boolean;
  label: string;
  description?: string;
};

export const genders = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

export type legacyUserObj = {
  LegacyUserId?: number;
  LegacyEmployeeId?: number;
};

export type LookUpMetaTypes =
  | "useGetCitiesQuery"
  | "useGetCountriesQuery"
  | "useGetZonesQuery"
  | "useGetNationalitiesQuery"
  | "useGetAllowncesTypeQuery"
  | "useGetDeductionTypeQuery"
  | "useGetZoneTypesQuery"
  | "useGetLicenseTypesQuery"
  | "useGetCurrenciesQuery"
  | "useGetEmployeeLeaveCycleQuery"
  | "useGetCompaniesQuery"
  | "useGetCompanyFormsQuery"
  | "useGetFormCategoriesQuery"
  | "useGetCompanyUsersQuery"
  | "useFormCategoriesLookupQuery"
  | "useGetEmployeePropertiesQuery";

export type HeadCell = {
  disablePadding: boolean;
  id: string;
  label: string;
  align: "center" | "left" | "right" | "inherit" | "justify" | undefined;
};

export type SelectItem = {
  value: string | number | undefined;
  label: string;
};

export enum STATUSES {
  APPROVED = "Approved",
  SUCCESS = "Success",
  PENDING = "Pending",
}