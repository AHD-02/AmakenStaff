type Props = {
    onClick?: () => void;
};
const EditIcon = ({onClick}: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.127"
            height="11.127"
            viewBox="0 0 11.127 11.127"
            onClick={() => onClick?.()}
            style={{cursor: "pointer"}}
        >
            <path
                id="Icon_material-edit"
                data-name="Icon material-edit"
                d="M4.5,13.305v2.318H6.818l6.836-6.836L11.336,6.469ZM15.446,6.995a.616.616,0,0,0,0-.871L14,4.677a.616.616,0,0,0-.871,0L12,5.808l2.318,2.318Z"
                transform="translate(-4.5 -4.496)"
                fill="#0e777a"
            />
        </svg>
    );
};
export default EditIcon;
