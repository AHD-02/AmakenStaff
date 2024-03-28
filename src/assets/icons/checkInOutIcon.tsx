type Props = {
    color: string;
};
const CheckInOutIcon = ({color}: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32.882"
            height="32.882"
            viewBox="0 0 42.882 42.882"
        >
            <g id="noun-clock-5601921" transform="translate(451 259.929)">
                <path
                    id="Path_2078"
                    data-name="Path 2078"
                    d="M2,23.441A21.441,21.441,0,1,1,23.441,44.882,21.441,21.441,0,0,1,2,23.441ZM25.585,12.72a2.144,2.144,0,1,0-4.288,0v8.5c0,.5,0,1.01.041,1.451a4,4,0,0,0,1.58,2.951c.345.279.769.562,1.185.839l4.582,3.054a2.144,2.144,0,0,0,2.379-3.568L26.54,22.93c-.5-.333-.753-.5-.923-.642l-.008-.007V22.27c-.02-.218-.023-.523-.023-1.124Z"
                    transform="translate(-452.999 -261.929)"
                    fill={color}
                    fillRule="evenodd"
                />
            </g>
        </svg>
    );
};
export default CheckInOutIcon;
