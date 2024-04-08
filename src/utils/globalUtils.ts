import { LookUpMetaTypes, LookupType } from "types";

export const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  for (i = 0; i < string?.length; i += 1) {
    hash = string?.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value?.toString(16)}`?.slice(-2);
  }

  return color;
};

export const stringAvatar = (name: string, color?: string) => {
  return {
    sx: {
      bgcolor: color ?? stringToColor(name),
      "&.MuiAvatar-root": {
        border: "none",
      },
    },
    children: `${name?.split(" ")?.[0]?.[0] ?? ""}${
      name?.split(" ")?.[1]?.[0] ?? ""
    }`,
  };
};

type IProps = {
  id?: string | number | null;
  type: LookUpMetaTypes;
};

export const returnLookups = ({ type, id }: IProps) => {
  // @ts-ignore
  const hook = meta[type]?.(id);
  if (Array.isArray(hook?.data)) {
    return hook?.data;
  }

  return [];
};

export const lookupResolver = (
  lookupArray: Array<LookupType>,
  value: string | Array<number> | undefined | number
) => {
  return lookupArray?.find((e: LookupType) => e.value === value)?.label ?? ""
};


export const handleDownloadUrl = (path: string) => {
  const baseUrl = "https://";
  const fullUrl = path.startsWith("http://") || path.startsWith("https://") ? path : baseUrl + path;
  const link = document.createElement("a");
  link.href = fullUrl;
  link.click();
  link.remove();
};