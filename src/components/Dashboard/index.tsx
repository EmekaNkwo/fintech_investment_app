import React from "react";
import { SectionCards } from "./section-cards";
import { ChartAreaInteractive } from "./chart-area-interactive";
import { DataTable } from "./data-table";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-6 flex justify-between gap-2">
            <Label className="text-[18px]">Hello, John</Label>
            <div className="flex items-center gap-2">
              <Button>Save More</Button>
              <Button variant={"secondary"}>Invest Now</Button>
            </div>
          </div>
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
