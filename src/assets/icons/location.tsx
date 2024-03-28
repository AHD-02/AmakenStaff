type Props = {
    onClick?: () => void;
}
const LocationIcon = ({onClick}: Props) => {
    return (
        <svg width="20" height="21" onClick={onClick} viewBox="0 0 20 21" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.0004 12.3084C8.22539 12.3084 6.77539 10.8667 6.77539 9.08337C6.77539 7.30003 8.22539 5.8667 10.0004 5.8667C11.7754 5.8667 13.2254 7.30837 13.2254 9.0917C13.2254 10.875 11.7754 12.3084 10.0004 12.3084ZM10.0004 7.1167C8.91706 7.1167 8.02539 8.00003 8.02539 9.0917C8.02539 10.1834 8.90872 11.0667 10.0004 11.0667C11.0921 11.0667 11.9754 10.1834 11.9754 9.0917C11.9754 8.00003 11.0837 7.1167 10.0004 7.1167Z"
                fill="#7C8493"/>
            <path
                d="M10.0004 19.4666C8.76706 19.4666 7.52539 19 6.55872 18.075C4.10039 15.7083 1.38372 11.9333 2.40872 7.44163C3.33372 3.36663 6.89206 1.54163 10.0004 1.54163C10.0004 1.54163 10.0004 1.54163 10.0087 1.54163C13.1171 1.54163 16.6754 3.36663 17.6004 7.44996C18.6171 11.9416 15.9004 15.7083 13.4421 18.075C12.4754 19 11.2337 19.4666 10.0004 19.4666ZM10.0004 2.79163C7.57539 2.79163 4.45872 4.08329 3.63372 7.71663C2.73372 11.6416 5.20039 15.025 7.43372 17.1666C8.87539 18.5583 11.1337 18.5583 12.5754 17.1666C14.8004 15.025 17.2671 11.6416 16.3837 7.71663C15.5504 4.08329 12.4254 2.79163 10.0004 2.79163Z"
                fill="#7C8493"/>
        </svg>


    )
}
export default LocationIcon;