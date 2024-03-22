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



export type RadioButtonOptionsType = {
  value: string | number | boolean;
  label: string;
  description?: string;
};

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