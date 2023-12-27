import React from 'react'

interface InputProps {
    id: string,
    onChange: any,
    value: string,
    label: string,
    type?:string
}

const Input: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type
}) => {
  return (
    <div className="relative group">
      <input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        className="
                rounded-[4px] px-6 pt-6 pb-1 w-full text-md text-white
                bg-[#333] group-focus-within:bg-[#454545] 
                lg:opacity-70 appearance-none 
                focus:outline-none focus:ring-0 peer
                autofill:bg-[#333] autofill:text-white
            "
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="
            absolute top-4 -translate-y-3 left-6 text-[#8c8c8c] 
            text-[14px] md:text-[16px] font-light 
            scale-75 origin-[0] 
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3
            transition-all duration-200 select-none cursor-text"
      >
        {label || 'Import props label please!'}
      </label>
      
    </div>
  );
}

export default Input;
