import { SelectProps } from "../types/InputTypes";

export function ResponsiveSelect({
  label,
  error,
  placeholder = "Select an option",
  className = "",
  options = [],
  ...props
}: SelectProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <select
        className={`
          px-3 
          py-2 
          rounded-lg 
          border 
          bg-white 
          dark:bg-gray-800 
          shadow-sm 
          outline-none
          transition-all
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          }
          disabled:bg-gray-50 
          disabled:text-gray-500 
          disabled:cursor-not-allowed
        `}
        {...props}
      >
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
