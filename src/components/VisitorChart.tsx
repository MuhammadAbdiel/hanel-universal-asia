import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface VisitData {
  date: string;
  daily_visits: number;
  unique_visitors: number;
}

interface VisitorChartProps {
  stats: any[];
}

const processVisitorData = (
  stats: any[]
): {
  dailyData: VisitData[];
  monthlyData: VisitData[];
  yearlyData: VisitData[];
} => {
  const dailyVisits: Record<
    string,
    { visits: number; uniqueVisitors: Set<string> }
  > = {};
  const monthlyVisits: Record<
    string,
    { visits: number; uniqueVisitors: Set<string> }
  > = {};
  const yearlyVisits: Record<
    string,
    { visits: number; uniqueVisitors: Set<string> }
  > = {};

  stats.forEach((stat) => {
    if (!stat.visit_time) return;

    const visitDate = new Date(stat.visit_time.replace(" ", "T"));

    // Daily data
    const dailyKey = visitDate.toISOString().split("T")[0];
    dailyVisits[dailyKey] = dailyVisits[dailyKey] || {
      visits: 0,
      uniqueVisitors: new Set(),
    };
    dailyVisits[dailyKey].visits++;
    dailyVisits[dailyKey].uniqueVisitors.add(stat.ip_address);

    // Monthly data
    const monthKey = `${visitDate.getFullYear()}-${String(
      visitDate.getMonth() + 1
    ).padStart(2, "0")}`;
    monthlyVisits[monthKey] = monthlyVisits[monthKey] || {
      visits: 0,
      uniqueVisitors: new Set(),
    };
    monthlyVisits[monthKey].visits++;
    monthlyVisits[monthKey].uniqueVisitors.add(stat.ip_address);

    // Yearly data
    const yearKey = `${visitDate.getFullYear()}`;
    yearlyVisits[yearKey] = yearlyVisits[yearKey] || {
      visits: 0,
      uniqueVisitors: new Set(),
    };
    yearlyVisits[yearKey].visits++;
    yearlyVisits[yearKey].uniqueVisitors.add(stat.ip_address);
  });

  // Convert to array and process
  const dailyData = Object.entries(dailyVisits)
    .map(([date, data]) => ({
      date,
      daily_visits: data.visits,
      unique_visitors: data.uniqueVisitors.size,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const monthlyData = Object.entries(monthlyVisits)
    .map(([date, data]) => ({
      date,
      daily_visits: data.visits,
      unique_visitors: data.uniqueVisitors.size,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const yearlyData = Object.entries(yearlyVisits)
    .map(([date, data]) => ({
      date,
      daily_visits: data.visits,
      unique_visitors: data.uniqueVisitors.size,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return { dailyData, monthlyData, yearlyData };
};

export const VisitorChart: React.FC<VisitorChartProps> = ({ stats }) => {
  const [chartType, setChartType] = useState<"daily" | "monthly" | "yearly">(
    "daily"
  );
  const [processedData, setProcessedData] = useState<{
    dailyData: VisitData[];
    monthlyData: VisitData[];
    yearlyData: VisitData[];
  }>({ dailyData: [], monthlyData: [], yearlyData: [] });

  useEffect(() => {
    if (stats && stats.length > 0) {
      const data = processVisitorData(stats);
      setProcessedData(data);
    }
  }, [stats]);

  const renderChart = () => {
    let data: VisitData[] = [];
    let xAxisLabel = "";

    switch (chartType) {
      case "daily":
        data = processedData.dailyData;
        xAxisLabel = "Date";
        break;
      case "monthly":
        data = processedData.monthlyData;
        xAxisLabel = "Month";
        break;
      case "yearly":
        data = processedData.yearlyData;
        xAxisLabel = "Year";
        break;
    }

    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis
            dataKey="date"
            label={{ value: xAxisLabel, position: "insideBottom", offset: -10 }}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            label={{ value: "Visitors", angle: -90, position: "insideLeft" }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: "8px",
            }}
            labelStyle={{ fontWeight: "bold" }}
          />
          <Legend verticalAlign="top" height={36} iconType="circle" />
          {/* <Line
            type="monotone"
            dataKey="daily_visits"
            stroke="#3182CE"
            activeDot={{ r: 8 }}
            name="Total Visits"
          /> */}
          <Line
            type="monotone"
            dataKey="unique_visitors"
            stroke="#48BB78"
            activeDot={{ r: 8 }}
            name="Visitor Website"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="bg-white rounded-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Visitor Analytics
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setChartType("daily")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              chartType === "daily"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setChartType("monthly")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              chartType === "monthly"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setChartType("yearly")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              chartType === "yearly"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>
      {renderChart()}
    </div>
  );
};
