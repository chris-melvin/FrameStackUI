import { ProfileCardProps } from "./types/CardTypes";

export function ProfileCard({
  name,
  bio,
  avatarUrl,
  role,
  className,
}: ProfileCardProps) {
  return (
    <div
      className={`rounded-lg border bg-card p-6 text-card-foreground shadow-sm max-w-sm dark:bg-gray-800 ${className}`}
    >
      <div className="flex items-center space-x-4">
        <img
          src={avatarUrl}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          {role && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{bio}</p>
    </div>
  );
}
