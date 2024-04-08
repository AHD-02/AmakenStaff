export interface ModalProps {
    title?: string;
    children: JSX.Element
    isOpen: boolean;
    onClose: () => void;
    primaryButtonTitle?: string;
    primaryButtonAction?: () => void
    isPrimaryButtonDisabled?: boolean;
    secondaryButtonTitle?: string;
    secondaryButtonAction?: () => void;
    isSecondaryButtonDisabled?: boolean;
}