import { ReactNode } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export interface IPageHeaderProps {
  extra?: ReactNode
  activePage?: string
  breadcrumbs?: { name: string, path: string }[]
}

const PageHeader = ({ extra, breadcrumbs, activePage = "Patients" }: IPageHeaderProps) => {
  return (
    <div className="flex min-h-[100px] items-center justify-between">

      {!!breadcrumbs?.length &&
        <Breadcrumb className="py-8">
          <BreadcrumbList>
            {
              breadcrumbs.map((v) => {
                return <div key={v.path}>
                  <BreadcrumbItem>
                    {activePage === v.name
                      ? <BreadcrumbPage>{v.name}</BreadcrumbPage>
                      : <BreadcrumbLink href={v.path}>{v.name}</BreadcrumbLink>}
                  </BreadcrumbItem>
                  {activePage !== v.name && <BreadcrumbSeparator />}
                </div>

              })
            }
          </BreadcrumbList>
        </Breadcrumb>}
      <div className="ml-auto py-8">
        {extra}
      </div>
    </div>
  );
};

export { PageHeader };