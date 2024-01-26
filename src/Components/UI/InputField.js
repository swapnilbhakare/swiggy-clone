import React from "react";
const InputField = ({
  id,
  type,
  placeholder,
  label,
  value,
  onChange,
  classes,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className={`${classes} block px-5 py-5 w-80 text-base text-gray-900 dark:bg-gray-700 border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-none peer`}
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="absolute text-base mb-3 px-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
    </div>
  );
};
export default InputField;
