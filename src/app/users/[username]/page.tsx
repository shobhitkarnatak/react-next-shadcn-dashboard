import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const Usernamepage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Shobhit K</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col xl:flex-row gap-6">
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-3 rounded-lg"></div>
          <div className="bg-primary-foreground p-3 rounded-lg"></div>
          <div className="bg-primary-foreground p-3 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        <div className="w-full xl:w-2/3 space-y-6">
        <div className="bg-primary-foreground p-3 rounded-lg"></div>
          <div className="bg-primary-foreground p-3 rounded-lg"></div>
          <div className="bg-primary-foreground p-3 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usernamepage;
