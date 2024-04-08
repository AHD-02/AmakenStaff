

interface BaseInputProps{
    value:any
    onChange: (value:never, event: InputEvent) => any
    label?: string
    name?: string
    error?: string
}

export default BaseInputProps;
