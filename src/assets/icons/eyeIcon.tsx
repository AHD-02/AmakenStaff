
type IProps = {
    color: string;
    onClick?: () => void;
}

const EyeIcon = ({color, onClick}: IProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="29.25" height="19.5" viewBox="0 0 29.25 19.5" onClick={onClick}>
            <path id="Path_2079" data-name="Path 2079"
                  d="M98.265,108.75a3.43,3.43,0,1,0,3.43,3.43A3.433,3.433,0,0,0,98.265,108.75Zm0-6.32c-6.477,0-12.867,4.645-14.625,9.75,1.758,5.1,8.148,9.75,14.625,9.75s12.867-4.645,14.625-9.75C111.132,107.076,104.742,102.43,98.265,102.43Zm0,15.332a5.582,5.582,0,1,1,5.582-5.582A5.588,5.588,0,0,1,98.265,117.762Z"
                  transform="translate(-83.64 -102.43)" fill={color}/>
        </svg>

    )
}
export default EyeIcon
