import { AvatarFallback } from "@radix-ui/react-avatar";
import { AvatarImage, Avatar as UiAvatar } from "../ui/avatar";
import { cn } from "@/lib/utils";

export interface IAvatarProps extends React.ComponentProps<typeof UiAvatar> {
  src: string;
  alt?: string;
  fallback?: string;
}

const Avatar = ({src, alt, fallback, className, ...props}: IAvatarProps) => {
  return (
    <UiAvatar {...props} className={cn("flex items-center justify-center", className)} >
      <AvatarImage src={src} alt={alt} />
     { <AvatarFallback>{fallback}</AvatarFallback>}
    </UiAvatar>
  );
};

export { Avatar };