import './style.scss'

interface LabelProps{
    name: string,
    HtmlFor:string;
}
const Label: React.FC<LabelProps> =({HtmlFor, name})=>{

    return(
        <>
            <label
                htmlFor={HtmlFor}
            >
                {name}
            </label>
        </>
    )
}

export default Label