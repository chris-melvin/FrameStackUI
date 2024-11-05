export interface BaseCardProps {
  title: string;
  description: string;
  className?: string;
}

export interface ButtonCardProps extends BaseCardProps {
  buttonText?: string;
  onClick?: () => void;
}

export interface ImageCardProps extends BaseCardProps {
  imageUrl: string;
  imageAlt: string;
}

export interface ProfileCardProps {
  name: string;
  bio: string;
  avatarUrl: string;
  role?: string;
  className?: string;
}

export interface HighlightCardProps extends BaseCardProps {
  icon?: React.ReactNode;
  accentColor?: string;
  className?: string;
} 