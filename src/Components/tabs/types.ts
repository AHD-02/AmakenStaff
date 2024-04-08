import { ReactNode } from "react";

export interface ITabs {
    label: string;
    iconLabel?: string;
    component?: ReactNode;
}

export interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

export interface BasicTabsProps {
    tabsItems: ITabs[]
    onChange: (event?: React.SyntheticEvent, index?: number) => void;
    isCentered?: boolean;
    initialValue?: number;
}