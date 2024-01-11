import { I_Input } from 'types/input';


const Input:React.FC<I_Input> = ({ type, value, handleChange, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Input;
