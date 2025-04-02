import { NextResponse } from "next/server";
import { chartData } from "@/shared/data"; // Ensure this contains the updated chart data

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get("range"); // Expected values: "last3months", "last30days", "last7days"

  const now = new Date();
  let lowerBound: Date;

  // Validate the range parameter
  if (!range || !["last3months", "last30days", "last7days"].includes(range)) {
    return NextResponse.json(
      {
        message:
          "Invalid range parameter. Expected values: last3months, last30days, last7days.",
      },
      { status: 400 }
    );
  }

  // Calculate the lower bound based on the range
  switch (range) {
    case "last3months":
      lowerBound = new Date();
      lowerBound.setMonth(now.getMonth() - 3);
      break;
    case "last30days":
      lowerBound = new Date();
      lowerBound.setDate(now.getDate() - 30);
      break;
    case "last7days":
      lowerBound = new Date();
      lowerBound.setDate(now.getDate() - 7);
      break;
    default:
      // If no valid range is provided, return all data.
      return NextResponse.json({
        message: "No valid range provided. Returning all data.",
        data: chartData,
      });
  }

  // Filter the chartData array based on the date range
  const filteredChartData = chartData.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= lowerBound && itemDate <= now;
  });

  return NextResponse.json({
    message: "Chart data filtered successfully",
    data: filteredChartData,
  });
}
