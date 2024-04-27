function Input({
  value,
  onChange,
  id,
  label,
  type,
  placeholder,
  disabled,
  ...props
}) {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <label htmlFor={id} className="text-gray-700 font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="w-full px-4 py-2 bg-transparent border-[1.5px] border-gray-300 rounded-md"
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        {...props}
        required
      />
    </div>
  );
}

export default Input;
