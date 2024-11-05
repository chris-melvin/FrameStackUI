import { HighlightCardProps } from './types/CardTypes';

export function HighlightCard({ title, description, icon, accentColor = 'bg-primary', className }: HighlightCardProps) {
  return (
    <div className={`rounded-lg ${accentColor}/5 p-6 ring-1 ring-${accentColor}/10 ${className}`}>
      {icon && <div className={`mb-4 text-${accentColor}`}>{icon}</div>}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
} 