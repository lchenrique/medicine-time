/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "@/layout/container";
import "./style.css"
import { StatsGroup } from "./comps/stats-group";
import { VerticalBarChart } from "@/components/charts/vertical-bar";
import { Card } from "@/components/general/card";
import { Avatar } from "@/components/avatar";
import { faker } from "@faker-js/faker";
import { ChevronRight, Timer } from "lucide-react";
import { cn, fakeMedicineName, fakeTime } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {

  return (
    <Container>
      {/* <PageHeader activePage="Dashboard" breadcrumbs={[{ name: "Dashboard", path: "/" }]} /> */}
      <div className="grid gap-3 pt-10">
        <StatsGroup />
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          <Card title="Next medications" className=" col-span-1 lg:col-span-2 " >
            {Array.from({ length: 4 }).map((_, i) => {
              return <div
                key={i}
                className={cn(
                  "flex gap-3 items-center px-3",
                  "border-b py-3 cursor-pointer",
                  "hover:scale-[1.01] transition-all",
                  {
                    "bg-auxiliary/70 rounded-xl text-white hover:text-white dark:hover:text-white": i === 0
                  }
                )}>
                <div
                  className="flex items-center gap-2 justify-between w-full"
                >

                  <div className="w-full flex flex-col">
                    <span className="text-left font-semibold" >{fakeMedicineName()}</span>
                    <p
                      className={cn(
                        "text-left text-sm text-muted-foreground leading-6",
                        {
                          "text-white/70 dark:text-white/40": i === 0
                        }
                      )}>
                      {faker.person.fullName()}
                    </p>
                    <Progress className="mt-3" indicatorClassName={cn(
                      {
                        "dark:bg-primary-foreground": i === 0
                      }
                    )} value={i === 0 ? 98 : faker.number.int({ max: 100, min: 1 })} />
                  </div>

                  <div className="flex gap-1 items-center justify-end">
                    <Timer className="size-4" />
                    <div className="text-right">
                      {fakeTime()}
                    </div>
                  </div>
                </div>
              </div>
            })}
          </Card>
          <Card title="Last patients" className=" col-span-1 lg:col-span-2" >
            {Array.from({ length: 5 }).map((_, i) => {
              return <div key={i} className="flex gap-3 items-center border-b py-3 cursor-pointer hover:scale-[1.01] transition-all  hover:text-primary dark:hover:text-primary-foreground">
                <Avatar src={`https://avatar.iran.liara.run/public/${faker.number.int({ min: 10, max: 60 })}`} fallback={faker.person.firstName()[0] + faker.person.firstName()[1]} className="rounded-full" />
                <div className="flex items-center gap-2 justify-between w-full"> {faker.person.fullName()}  <div className="flex gap-1">a: {faker.number.int({ min: 10, max: 60 })}  <ChevronRight className="size-4" /></div> </div>
              </div>
            })}
          </Card>


          <Card title="Patients Frequency" className="col-span-1 sm:col-span-2 lg:col-span-2" >
            <VerticalBarChart />
          </Card>
        </div>

      </div>

    </Container>
  );
};

export { Dashboard };