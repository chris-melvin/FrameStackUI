export const ResponsiveSelectCode = `
<div className="flex flex-col gap-1.5">
  <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
    Select Option
  </label>
  <select className="px-3 py-2 rounded-lg border bg-white dark:bg-gray-800 shadow-sm 
    outline-none transition-all border-gray-300 focus:ring-2 
    focus:ring-blue-500/20 focus:border-blue-500
    disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed">
    <option value="" disabled selected>Select an option</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
  {/* Error message appears here when error prop is provided:
    <p className="text-sm text-red-500">{error}</p>
  */}
</div>
`;
