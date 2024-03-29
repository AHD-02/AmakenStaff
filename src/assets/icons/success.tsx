type IProps = {
    onClick?: () => void;
};

const SuccessIcon = ({onClick}: IProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.27"
            height="18.27"
            viewBox="0 0 18.27 18.27"
            onClick={() => onClick?.()}
            style={{cursor: "pointer"}}

        >
            <path
                id="check_circle_FILL0_wght400_GRAD0_opsz48"
                d="M87.787-866.709l6.463-6.463L93.2-874.2l-5.412,5.412-2.74-2.74L84.019-870.5Zm1.347,4.979a8.838,8.838,0,0,1-3.54-.719,9.263,9.263,0,0,1-2.912-1.964,9.264,9.264,0,0,1-1.964-2.912,8.839,8.839,0,0,1-.719-3.54,8.9,8.9,0,0,1,.719-3.563,9.129,9.129,0,0,1,1.964-2.9,9.365,9.365,0,0,1,2.912-1.953,8.84,8.84,0,0,1,3.54-.719,8.9,8.9,0,0,1,3.563.719,9.226,9.226,0,0,1,2.9,1.953,9.224,9.224,0,0,1,1.953,2.9,8.9,8.9,0,0,1,.719,3.563,8.839,8.839,0,0,1-.719,3.54,9.363,9.363,0,0,1-1.953,2.912,9.126,9.126,0,0,1-2.9,1.964A8.894,8.894,0,0,1,89.135-861.73Zm0-1.37a7.471,7.471,0,0,0,5.5-2.272,7.5,7.5,0,0,0,2.261-5.492,7.491,7.491,0,0,0-2.261-5.5,7.491,7.491,0,0,0-5.5-2.261,7.5,7.5,0,0,0-5.492,2.261,7.472,7.472,0,0,0-2.272,5.5,7.483,7.483,0,0,0,2.272,5.492A7.482,7.482,0,0,0,89.135-863.1ZM89.135-870.865Z"
                transform="translate(-80 880)"
                fill="#a9cbb8"
            />
        </svg>
    );
};
export default SuccessIcon;
