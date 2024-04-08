
export type SelectItem = {
    value: string | number | undefined
    label: string | undefined
  }

  interface AutocompleteProps {
    options?: Array<SelectItem>
    placeholder?: string;
    onChange: (value:Array<string | undefined | number>, name?:string) => void
    value: Array<number | string | undefined> | undefined;
    isLoading?: boolean;
    limitTags?: number;
    label?: string;
    required?: boolean
    error?: string | string[]
    isDisabled?: boolean
    isRenderTagsHidden?: boolean
}
  
export default AutocompleteProps;  