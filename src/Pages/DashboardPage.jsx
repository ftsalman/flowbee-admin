import React, { useState } from "react";
import { GreetHeader } from "../Components/dashboard/GreetHeader";
import { Button } from "../ui/button/Button";
import {
  IconClock,
  IconSort,
  IconUsersAlt2,
} from "../assets/icons/InterfaceIcons";
import { StatsCards } from "../Components/dashboard/StatsCards";
import PlanChartSection from "../Components/dashboard/PlanChartSection";
import { PlansStatsCard } from "../Components/dashboard/PlansStatsCard";
import { SectionHeader } from "../Components/dashboard/SectionHeader";
import PerformanceChart from "../Components/dashboard/PerformanceChart";

const dummyStats = {
  OPEN: 1300.03,
  COUNT: 150,
  CUST: 50,
  RENEW: 20,
  TRAILS: 10,
  PLAN: 5,
};

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState(dummyStats);

  return (
    <div className="flex flex-col lg:flex-row gap-4 overflow-x-hidden ">
      <div className="flex- space-y-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-1 sm:px-6 md:px-8 py-2 gap-2">
          <GreetHeader
            isLoadding={false}
            userName="Muhammad Arshad"
            className="text-gray-800"
            userNameClassName="md:text-lg  text-sm"
          />
          <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            <Button variant="secondary">Last 90 Days</Button>
            <Button variant="secondary">Last 30 Days</Button>
            <Button
              variant="secondary"
              className="border-gray-300 text-white bg-black px-5"
            >
              <IconSort />
              Filter
            </Button>
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="px-4 sm:px-6 md:px-8 border-b border-gray-200 pb-10">
          <StatsCards isLoading={isLoading} data={dashboardData} />
        </div>

        {/* CHARTS AND MINI CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 md:px-8">
          {/* LEFT SIDE */}
          <div className="grid grid-cols-1 gap-6">
            {/* Plan Details */}
            <div>
              <SectionHeader
                head="Plan Details"
                headClassName="border-none font-bold"
              />
              <div className="grid grid-cols-1 md:grid-cols-3  gap-4 pt-2">
                <PlansStatsCard
                  title="Expired"
                  count={213}
                  icon={<IconUsersAlt2 size="24" />}
                />
                <PlansStatsCard
                  IconClassName="bg-yellow-50"
                  title="Active"
                  count={34}
                  icon={<IconClock size="24" />}
                />
                <PlansStatsCard
                  IconClassName="bg-yellow-50"
                  title="Total"
                  count={247}
                  icon={<IconClock size="24" />}
                />
              </div>
            </div>

            {/* Plan Wise Expiry */}
            <div>
              <SectionHeader
                head="No of Expiring (Plan Wise)"
                headClassName="border-none font-bold"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 pt-2 gap-4">
                <PlansStatsCard
                  title="Starter"
                  count={100}
                  icon={<IconUsersAlt2 size="24" />}
                />
                <PlansStatsCard
                  IconClassName="bg-yellow-50"
                  title="Smart"
                  count={50}
                  icon={<IconClock size="24" />}
                />
                <PlansStatsCard
                  IconClassName="bg-yellow-50"
                  title="Pro"
                  count={30}
                  icon={<IconClock size="24" />}
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Chart */}
          <div className="overflow-x-auto">
            <PlanChartSection
              isLoading={isLoading}
              data={{
                STARTER: 100,
                SMART: 50,
                PRO: 30,
              }}
            />
          </div>
        </div>

        {/* PERFORMANCE CHART */}
        <div className="px-4 sm:px-6 md:px-8 space-y-4 overflow-x-auto">
          <PerformanceChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
