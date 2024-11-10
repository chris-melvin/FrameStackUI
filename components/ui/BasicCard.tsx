import { ButtonCardProps } from "./types/CardTypes";

export function BasicCard({
  title,
  description,
  buttonText,
  onClick,
  className,
}: ButtonCardProps) {
  return (
    <div
      className={`rounded-lg border max-w-sm bg-card text-card-foreground shadow-sm transition-colors dark:bg-gray-800 p-6 ${className}`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
      {buttonText && (
        <button
          onClick={onClick}
          className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export const BasicCardCode = `
<div className="rounded-lg border max-w-sm bg-card text-card-foreground shadow-sm transition-colors dark:bg-gray-800 p-6">
  <h3 className="text-lg font-semibold">title</h3>
  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Card Description</p>
</div>
`;
