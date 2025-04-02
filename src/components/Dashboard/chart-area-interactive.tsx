"use client";

import * as React from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChartGraph } from "@/shared/UIs";
import useDashboard from "./useDasboard";
import { Skeleton } from "../ui/skeleton";

const chartConfig = {
  title: {
    label: "Account Statistics",
  },
  savings: {
    label: "Savings",
    color: "var(--primary)",
  },
  spending: {
    label: "Spending",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const { timeRange, setTimeRange, filteredData, isMobile, metricsData } =
    useDashboard();

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Monthly Comparison</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last{" "}
            {timeRange === "last3months"
              ? "3 months"
              : timeRange === "last30days"
              ? "30 days"
              : "7 days"}
          </span>
          <span className="@[540px]/card:hidden">
            Last{" "}
            {timeRange === "last3months"
              ? "3 months"
              : timeRange === "last30days"
              ? "30 days"
              : "7 days"}
          </span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="last3months">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="last30days">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="last7days">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
              defaultValue={timeRange}
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="last3months" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="last30days" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="last7days" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        {metricsData.isFetching ? (
          <Skeleton className="h-40 w-full rounded" />
        ) : (
          <ChartGraph
            chartConfig={chartConfig}
            data={filteredData}
            isMobile={isMobile}
          />
        )}
      </CardContent>
    </Card>
  );
}
