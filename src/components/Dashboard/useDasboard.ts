import {
  useGetDashboardMetricsQuery,
  useGetDashboardStatsQuery,
  useGetDashboardTransactionQuery,
} from "@/redux/api/dashboardApi";
import { useEffect, useState } from "react";
import { SortingState } from "@tanstack/react-table";
import { useIsMobile } from "@/hooks/use-mobile";

const useDashboard = () => {
  const isMobile = useIsMobile();

  const [type, setType] = useState<string>("all");
  const [timeRange, setTimeRange] = useState("last3months");

  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const statsData = useGetDashboardStatsQuery({
    range: timeRange,
  });

  const transData = useGetDashboardTransactionQuery({
    type: type === "all" ? undefined : type,
  });

  // Chart Data
  const metricsData = useGetDashboardMetricsQuery({});

  const filteredData = statsData?.data?.data?.filter(
    (item: { date: string | number | Date }) => {
      const date = new Date(item.date);
      const now = new Date();
      let daysToSubtract = 90;
      if (timeRange === "last30days") {
        daysToSubtract = 30;
      } else if (timeRange === "last7days") {
        daysToSubtract = 7;
      }
      const startDate = new Date(now);
      startDate.setDate(startDate.getDate() - daysToSubtract);
      return date >= startDate && date <= now;
    }
  );

  useEffect(() => {
    if (isMobile) {
      setTimeRange("last7days");
    }
  }, [isMobile, setTimeRange]);

  return {
    setType,
    type,
    sorting,
    setSorting,
    pagination,
    setPagination,
    transData,
    metricsData,
    statsData,
    filteredData,
    timeRange,
    setTimeRange,
    isMobile,
  };
};

export default useDashboard;
