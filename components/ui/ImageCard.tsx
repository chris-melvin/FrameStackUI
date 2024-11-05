import { ImageCardProps } from './types/CardTypes';

export function ImageCard({ title, description, imageUrl, imageAlt, className }: ImageCardProps) {
  return (
    <div className={`overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 ${className}`}>
      <div className="aspect-video relative">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
} 