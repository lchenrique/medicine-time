import { ReactNode } from "react";
import { Card, ICardProps } from "../general/card";
import { cn } from "@/lib/utils";


export interface IStatsProps extends Partial<ICardProps> {
  total: ReactNode;
  label: ReactNode
  icon: ReactNode
}

const Stats = ({ icon, label, total, className, ...props }: IStatsProps) => {
  return (
    <Card className={cn("min-w-48 hover:shadow-lg transition-all", className)} {...props}>
      <div className="flex items-center w-full">
        <div> 
          <div id="stats-total" className="text-2xl font-bold">{total}</div>
          <div id="stats-label" className="text-sm text-muted-foreground">{label}</div>
        </div>
        <div className="bg-foreground/10 dark:bg-black/10 p-3 ml-auto rounded-2xl text-primary dark:text-primary-foreground">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export { Stats };