import { ButtonCardProps } from './types/CardTypes';

export function InteractiveCard({ title, description, buttonText, onClick, className }: ButtonCardProps) {
  return (
    <div 
      className={`rounded-lg border bg-card p-6 text-card-foreground shadow-sm 
        transition-all duration-200 hover:scale-[1.02] hover:shadow-lg dark:bg-gray-800 
        cursor-pointer ${className}`}
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
      {buttonText && (
        <span className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
          {buttonText}
        </span>
      )}
    </div>
  );
} 