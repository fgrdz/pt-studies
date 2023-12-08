import './style.scss'

interface InputProps{
    type: string, 
    name: string, 
    id: string, 
    placeholder: string;
}

const Input: React.FC<InputProps> = ({type,name,id,placeholder})=>{
    return(
        <>
            <input
                
                type={type}
                name={name}
                id= {id}
                placeholder={placeholder}
            />
            
        </>
    )
}

export default Input