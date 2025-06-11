import React, { useState } from "react";
import CardContainer from "../../ui/CardContainer";
import Emptyblocks from "../../ui/Emptyblocks";
import { IconCheverontDown } from "../../assets/icons/InterfaceIcons";

// Sample modes and labels
const GRAPH_MODES = [
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
  { label: " Year", value: "year" },
];

const GRAPH_LABELS = {
  week: "Week",
  month: "Month",
  year: "This Year",
};

const PlanChartSection = ({
  data = {},
  isLoading = false,
  onFetchData = () => {},
}) => {
  const [graphMode, setGraphMode] = useState("");

  const starter = data?.STARTER || 0;
  const smart = data?.SMART || 0;
  const pro = data?.PRO || 0;

  const total = starter + smart + pro;

  const starterAngle = total ? (starter / total) * 360 : 0;
  const smartAngle = total ? (smart / total) * 360 : 0;
  const proAngle = total ? (pro / total) * 360 : 0;

  const pieChartStyle = {
    backgroundImage: `conic-gradient(
      #FFD45C 0deg ${starterAngle}deg,
      #F5B400 ${starterAngle}deg ${starterAngle + smartAngle}deg,
      #3D2D00 ${starterAngle + smartAngle}deg
    )`,
  };

  return (
    <CardContainer className="min-h-[2rem] flex flex-col items-center shadow-md justify-center gap-3">
      <div className="w-full flex justify-between items-center px-2">
        <h2 className="text-lg font-bold text-gray-800">📊 Plan Performance</h2>

        {/* Date Mode Selector */}
        <div className="relative min-w-[10px]">
          <select
            className="appearance-none w-[7rem]  text-gray-600 font-semibold outline-0 px-3 py-2 pr-8 rounded-lg border  border-gray-300 text-sm"
            value={graphMode}
            onChange={({ target: { value } }) => {
              setGraphMode(value);
              // onFetchData(value, "graph-loading-meta");
            }}
          >
            {GRAPH_MODES.map((mode) => (
              <option key={mode.value} value={mode.value}>
                {mode.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
            <IconCheverontDown />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="w-full h-full rounded-xl animate-pulse bg-gray-200"></div>
      ) : total === 0 ? (
        <Emptyblocks />
      ) : (
        <>
          <div
            className="size-[210px] rounded-full"
            style={pieChartStyle}
          ></div>

          <div className="h-fit p-4 w-full flex items-center gap-2 flex-wrap divide-gray-200">
            {[
              { label: "Starter", value: starter, color: "#FFD45C" },
              { label: "Smart", value: smart, color: "#F5B400" },
              { label: "Pro", value: pro, color: "#3D2D00" },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                className="flex flex-col gap-2 flex-grow items-center justify-center"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="size-5 rounded-md"
                    style={{ backgroundColor: color }}
                  ></div>
                  <p className="text-sm text-gray-800">{label}</p>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  {((value / total) * 100).toFixed(0)}%
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </CardContainer>
  );
};

export default PlanChartSection;
