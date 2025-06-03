import React from "react";
import CardContainer from "../../ui/CardContainer";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const dummyData = [
  { name: "Jan", Performance: 10000 },
  { name: "Feb", Performance: 16000 },
  { name: "Mar", Performance: 30000 },
  { name: "Apr", Performance: 15000 },
  { name: "May", Performance: 28000 },
  { name: "Jun", Performance: 90000 },
  { name: "Jul", Performance: 50000 },
  { name: "Aug", Performance: 70000 },
  { name: "Sep", Performance: 60000 },
  { name: "Oct", Performance: 80000 },
  { name: "Nov", Performance: 20000 },
  { name: "Dec", Performance: 40000 },
];

const PerformanceChart = () => {
  return (
    <CardContainer className="flex flex-col gap-4 p-6 bg-white shadow-sm rounded-lg">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-start justify-start">
          <h2 className="text-lg font-bold text-[#05004E]">
            Performance Chart
          </h2>
        </div>
      </div>

      {/* CHART SECTION ⬇️*/}

      <div className="w-full min-h-[300px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={dummyData}
            barCategoryGap="10%"
            barSize={16}
            margin={{ top: 30, right: 0, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="0"
              stroke="#e4d6d689"
              vertical={false}
              strokeWidth={1}
            />
            <XAxis
              dataKey="name"
              padding={{ left: 0 }}
              tick={{ dy: 16 }}
              tickSize={0}
              axisLine={false}
              fontSize={14}
              fill="#676767"
            />
            <YAxis
              tickFormatter={(value) => `${value / 1000}k`}
              padding={{ top: 10 }}
              stroke="#7B91B0"
              axisLine={false}
              tickSize={0}
              tickCount={5}
            />
            <Tooltip formatter={(value) => `${value / 1000}k`} />
            {/* <Legend
                  verticalAlign="bottom"
                  align="center"
                //   payload={[
                //     {
                //       value: "No.of.customers",
                //       type: "circle",
                //       color: "#00000",
                //       id: "Performance",
                //     },
                //   ]}
                  formatter={(value) => (
                    <span style={{ color: "#000000", fontWeight: 500 , }}>
                      {value}
                    </span>
                  )}
                /> */}
            <ReferenceLine y={0} stroke="#EFF1F3" strokeWidth={2} />
            <Bar
              dataKey="Performance"
              fill="#00000"
              radius={[5, 5, 0, 0]}
              name="Performance"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContainer>
  );
};

export default PerformanceChart;
