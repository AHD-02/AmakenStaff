import React, { useMemo } from "react";
import { LookUpMetaTypes, LookupType } from "types";
import DropDown from "components/dropDown/dropDown";

type Props = {
  id?: string | number | null;
  value: string | Array<number> | undefined | number;
  onChange: (value: any) => void;
  required?: boolean;
  label: string;
  readonly?: boolean;
  type: LookUpMetaTypes;
  error?: string | undefined;
  placeholder?: string;
};

const LookupDropdown: React.FC<Props> = ({
  value,
  onChange,
  required,
  label,
  readonly,
  type,
  error,
  id,
  placeholder,
}: Props) => {
  // @ts-ignore
  const hook = meta[type]?.(id);
  const data: Array<LookupType> = useMemo(() => {
    if (!Array.isArray(hook?.data)) 
      return [];
    
    return hook?.data;
  }, [hook]);
  
  return (
    <DropDown
      error={error}
      options={data ?? []}
      label={label}
      placeholder={placeholder}
      key={`${(id || label) ?? ""}_SelectboxInput`}
      isDisabled={readonly || hook?.isFetching}
      onChange={onChange}
      required={required}
      value={value}
      isLoading={hook?.isLoading ?? false}
    />
  );
};

export default React.memo(LookupDropdown);
