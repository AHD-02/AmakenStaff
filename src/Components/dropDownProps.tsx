
export type DropDownItem = {
    value: string | number | undefined
    label: string | undefined
  }
interface DropDownProps {
    options: Array<DropDownItem>
    label: string
    value: string | Array<number> | undefined | number;
    onChange: (value: any) => void
    error?: string|any
    placeholder?: string
    required?: boolean
    disableClearable?: boolean;
    className?: string
    isDisabled?: boolean;
    isLoading?: boolean;
    isNotVisible?: boolean
}
export default DropDownProps
