import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export type CheckItem = {
    value: number;
    label: string;
}
interface MenuProps {
    items: Array<CheckItem>
    icon:ReactJSXElement
    onClick: (arg:number) => void;
}

export default MenuProps;