type Props = {
    onClick?: () => void;
};

const DeleteIcon = ({onClick}: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="12.857"
            viewBox="0 0 10 12.857"
            onClick={() => onClick?.()}
            style={{cursor: "pointer"}}
        >
            <path
                id="Icon_material-delete"
                data-name="Icon material-delete"
                d="M8.214,15.929a1.433,1.433,0,0,0,1.429,1.429h5.714a1.433,1.433,0,0,0,1.429-1.429V7.357H8.214ZM17.5,5.214H15L14.286,4.5H10.714L10,5.214H7.5V6.643h10Z"
                transform="translate(-7.5 -4.5)"
                fill="#b90e0e"
            />
        </svg>
    );
};
export default DeleteIcon;
