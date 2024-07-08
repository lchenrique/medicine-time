import { LineBarChart } from "@/components/charts/Line-bar";
import { Stats } from "@/components/stats";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { theme } from "@/styles/theme";
import { faker } from "@faker-js/faker";
import { Heart, CalendarCheck2, Cross } from "lucide-react";

const StatsGroup = () => {
  const { theme: appTheme } = useTheme()
  const myTheme = appTheme as string

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="stats-card-container stats-card-container-2 col-span-1 sm:col-span-2     ">
        <div className="h-32 w-32 border border-white rounded-full absolute -right-6 -top-6 " />
        <div className="h-36 w-36 border border-white rounded-full absolute -right-6 -top-6" />
        <div className="h-32 w-32 border border-white rounded-full absolute -left-6 -bottom-6" />
        <div className="h-36 w-36 border border-white rounded-full absolute -left-6 -bottom-6" />
        <Stats
          label={<p className="text-white/90 bg-primary pr-1 whitespace-nowrap rounded-md"> total patients</p>}
          total={<h4 className="text-white">{faker.number.int({ min: 0, max: 100 })}</h4>}
          icon={<Heart className="text-white" />}
          className={`stats-custom h-72 w-full bg-primary `}
        />

        <Button variant="default" className="absolute  left-6 bottom-6 text-primary hover:text-primary bg-white hover:bg-slate-100" >Check details</Button>
      </div>
      <div className="stats-card-container  col-span-1 rounded-lg">
        <Stats
          label="appointment"
          total={faker.number.int({ min: 0, max: 100 })}
          icon={<CalendarCheck2 />}
          className="h-72"
        />
        <div className="absolute -bottom-2 h-full w-[calc(100%+10px)] -left-1 pt-16 ">
          <LineBarChart color={theme[myTheme as keyof typeof theme]?.primary} />
        </div>
      </div>
      <div className="stats-card-container  col-span-1s rounded-lg">
        <Stats
          label="total nurses"
          total={faker.number.int({ min: 0, max: 100 })}
          icon={<Cross />}
          className="h-72 flex-1"
        />
       <div className="absolute -bottom-2 h-full w-[calc(100%+10px)] -left-1 pt-16 ">
            <LineBarChart color={theme[myTheme as keyof typeof theme]?.auxiliary} />
        </div>
      </div>
    </div>
  );
};

export { StatsGroup };