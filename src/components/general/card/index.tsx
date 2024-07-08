import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Card as UiCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface ICardProps {
  children: ReactNode
  title?: ReactNode;
  description?: ReactNode;
  extra?: ReactNode;
  footer?: ReactNode;
  className?: string;
  contentClassName?: string;
}

const Card = ({ title, description, extra, children, footer, className , contentClassName}: ICardProps) => {
  return (
    <UiCard className={cn("", className)}>
    {( title || description  || extra) &&  <CardHeader >
       <div className="flex items-center">
          {(title || description) &&
            <div className="flex flex-col gap-1">
              {title && <CardTitle>{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </div>}
          {extra}
        </div>
      </CardHeader>}
      <CardContent className={cn(( title || description  || extra)? "":"pt-6","w-full", contentClassName )}>
        {children}
      </CardContent>
      {footer && <CardFooter className="flex justify-between">
        {footer}
      </CardFooter>}
    </UiCard>
  );
};

export { Card };