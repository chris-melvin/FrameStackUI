import { InputProps } from "../types/InputTypes";

export function SimpleTextInput({
  label,
  error,
  placeholder,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
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
          placeholder:text-gray-400
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
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

export const SimpleTextInputCode = `
<div className="flex flex-col gap-1.5">
  <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
    Label
  </label>
  <input
    type="text"
    placeholder="Enter text..."
    className="px-3 py-2 rounded-lg border bg-white dark:bg-gray-800 shadow-sm 
      outline-none transition-all placeholder:text-gray-400 border-gray-300 
      focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
      disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
  
  />

  {/* Conditional error styles:
    border-red-500 focus:ring-2 focus:ring-red-500/20
    
      Replace these classes when error is true:
      border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
    */}
  {/* Error message appears here when error prop is provided:
    <p className="text-sm text-red-500">{error}</p>
  */}
</div>
`;
