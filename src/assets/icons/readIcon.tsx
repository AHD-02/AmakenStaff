type IProps = {
    color?: string;
};

const ReadIcon = ({color}: IProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="15"
            viewBox="0 0 34.875 20.115"
        >
            <path
                id="Icon_material-done-all"
                data-name="Icon material-done-all"
                d="M27,10.5,24.885,8.385l-9.51,9.51L17.49,20.01Zm6.36-2.115L17.49,24.255,11.22,18,9.105,20.115,17.49,28.5l18-18L33.36,8.385ZM.615,20.115,9,28.5l2.115-2.115L2.745,18Z"
                transform="translate(-0.615 -8.385)"
                fill={color ? color : "#fff"}
            />
        </svg>
    );
};

export default ReadIcon;
