import React from "react";
import CardContainer from "../../ui/CardContainer";
import Emptyblocks from "../../ui/Emptyblocks";

const PlanChartSection = ({ data = {}, isLoading = true }) => {
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
      <h2 className="text-lg self-start flex-grow font-bold text-gray-800">
        📊 Plan Performance
      </h2>

      {isLoading ? (
        <div className="w-full h-full rounded-xl animate-pulse bg-gray-200"></div>
      ) : total === 0 ? (
        <Emptyblocks />
      ) : (
        <>
          <div className="size-[210px] rounded-full" style={pieChartStyle}></div>

          <div className="h-fit p-4 w-full flex items-center gap-2 flex-wrap divide-gray-200   shadow-gray-50 border-gray-50">
            <div className="flex flex-col gap-2 flex-grow items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-md bg-[#F5B400]"></div>
                <p className="line-clamp-1 text-sm text-gray-800">Starter</p>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {((starter / total) * 100).toFixed(0)}%
              </p>
            </div>

            <div className="flex flex-col gap-2 flex-grow items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-md bg-[#F5B400]"></div>
                <p className="line-clamp-1 text-sm text-gray-800">Smart</p>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {((smart / total) * 100).toFixed(0)}%
              </p>
            </div>

            <div className="flex flex-col gap-2 flex-grow items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-md bg-[#3D2D00]"></div>
                <p className="line-clamp-1 text-sm text-gray-800">Pro</p>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {((pro / total) * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </>
      )}
    </CardContainer>
  );
};

export default PlanChartSection;
