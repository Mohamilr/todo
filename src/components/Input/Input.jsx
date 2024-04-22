import "./Input.css"

const Input = ({name, placeholder, value, onChange}) => {
    return (
        <input className="todo-input" name={name} value={value} placeholder={placeholder}  onChange={onChange} />
    )
} 

export default Input