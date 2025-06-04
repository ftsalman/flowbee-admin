import React, { useState } from "react";
import CardContainer from "../ui/CardContainer";
import { Button } from "../ui/button/Button";
import {
  IconCheverontDown,
  IconLanguage,
  IconPlus,
} from "../assets/icons/InterfaceIcons";
import { PageToolbar } from "../ui/PageToolbar";
import DataTableAlt from "../ui/DataTableAlt";
import { PageContainer } from "../ui/PageContainer";
import { ActionCell } from "../Components/table-data/DataTabelCell";

const dummyData = [
  {
    PLAN_NO: "1",
    PLAN_NAME: "Charlie Davis",
    FEATURES: "Enterprise",
    MONTHLY: "2025-06-20",
    YEARLY: "2025-06-20",
    DISCOUNT: "50%",
  },
  {
    PLAN_NO: "2",
    PLAN_NAME: "Charlie Davis",
    FEATURES: "Enterprise",
    MONTHLY: "2025-06-20",
    YEARLY: "2025-06-20",
    DISCOUNT: "50%",
  },
  {
    PLAN_NO: "3",
    PLAN_NAME: "Charlie Davis",
    FEATURES: "Enterprise",
    MONTHLY: "2025-06-20",
    YEARLY: "2025-06-20",
    DISCOUNT: "50%",
  },
];

//  otherDummyData
const otherDummyData = [
  {
    OPTIONS: "New Branch",
    STARTER: "AED 100.00",
    GROWTH: "AED 399",
    PRO: "AED 399",
  },
  {
    OPTIONS: "New Branch",
    STARTER: "AED 100.00",
    GROWTH: "AED 399",
    PRO: "AED 399",
  },
  {
    OPTIONS: "New Branch",
    STARTER: "AED 100.00",
    GROWTH: "AED 399",
    PRO: "AED 399",
  },
  {
    OPTIONS: "New Branch",
    STARTER: "AED 100.00",
    GROWTH: "AED 399",
    PRO: "AED 399",
  },
];

//  otherDummyData
const AddpluginsDummyData = [
  {
    OPTIONS: "Appointment",
    STARTER: "AED 100.00",
    GROWTH: "AED 399",
    PRO: "AED 399",
  },
  {
    OPTIONS: "E-Commerece",
    STARTER: "AED 100.00",
    GROWTH: "AED 399",
    PRO: "AED 399",
  },
   {
    OPTIONS: "Appointment",
    STARTER: "AED 100.00",
    GROWTH: "AED 399",
    PRO: "AED 399",
  },
  {
    OPTIONS: "E-Commerece",
    STARTER: "AED 100.00",
    GROWTH: "AED 399",
    PRO: "AED 399",
  },
  
];

const columnsOtherPricing = [
  { id: "1", head: "Options", key: "OPTIONS", align: "center" },
  { id: "2", head: "Starter", key: "STARTER", align: "center" },
  { id: "3", head: "Growth", key: "GROWTH", align: "center" },
  { id: "4", head: "Pro", key: "PRO", align: "center" },
  {
    id: "4",
    head: "Action",
    key: "ACTIONS",
    align: "center",
    render: (item) => (
      <ActionCell
        data={item}
        actions={{
          delete: (data) => createAction("delete", data),
          edit: (data) => createAction("edit", data),
        }}
      />
    ),
  },
];

const columns = [
  {
    id: "i1",
    head: "Plan No",
    key: "PLAN_NO",
    isFixed: false,
    isLeftFixed: false,
    align: "center",
  },
  {
    id: "2",
    head: "Plan Name",
    key: "PLAN_NAME",
    isFixed: false,
    isLeftFixed: false,
    align: "center",
  },
  {
    id: "3",
    head: "Features",
    key: "FEATURES",
    isFixed: false,
    isLeftFixed: false,
    align: "center",
  },
  {
    id: "4",
    head: "Monthly",
    key: "MONTHLY",
    isFixed: false,
    isLeftFixed: false,
    align: "center",
  },
  {
    id: "5",
    head: "Yearly",
    key: "YEARLY",
    isFixed: false,
    isLeftFixed: false,
    align: "center",
  },
  {
    id: "6",
    head: "Discount % (Yearly)",
    key: "DISCOUNT",
    isFixed: false,
    isLeftFixed: false,
    align: "center",
  },
  {
    id: "7",
    head: "Actions",
    key: "ACTIONS",
    align: "center",
    isFixed: false,
    isLeftFixed: false,
    render: (item) => (
      <ActionCell
        data={item}
        actions={{
          delete: (data) => createAction("delete", data),
          edit: (data) => createAction("edit", data),
        }}
      />
    ),
  },
];

const SettingsPage = () => {
  const [planManagementData, setPlanManagementData] = useState(dummyData);
  const [otherPricingData, setOtherPricingData] = useState(otherDummyData);
  const [PluginsData, setPluginsData] = useState(AddpluginsDummyData);

  return (
    <>
      <PageContainer className="">
        {/* PLANS SECTION  ⬇️*/}

        <SettingsSection
          head="Plan Management "
          action={
            <div className=" flex items-center  gap-2">
              <Button
                variant="secondary"
                size="md"
                className=" flex items-center gap-1"
              >
                <IconLanguage size="20" />
                ALL
                <IconCheverontDown />
              </Button>
              {/* Add New */}

              <Button
                variant="secondary"
                size="md"
                className=" bg-black text-white"
              >
                <IconPlus />
                Add
              </Button>
            </div>
          }
        >
          <DataTableAlt
            columns={columns}
            data={planManagementData}
            isLoading={false}
            showPagination={false}
            tableClasses={{
              thead: "bg-white border-b border-gray-200",
            }}
          />
        </SettingsSection>

        {/* Other Pricing */}
        <SettingsSection
          head="Other Pricing "
          action={
            <div className=" flex items-center  gap-2">
              <Button
                variant="secondary"
                size="md"
                className=" flex items-center gap-1"
              >
                <IconLanguage size="20" />
                ALL
                <IconCheverontDown />
              </Button>
              {/* Add New */}

              <Button
                variant="secondary"
                size="md"
                className=" bg-black text-white"
              >
                <IconPlus />
                Add
              </Button>
            </div>
          }
        >
          <DataTableAlt
            columns={columnsOtherPricing}
            data={otherPricingData}
            isLoading={false}
            showPagination={false}
            tableClasses={{
              thead: "bg-white border-b border-gray-200",
            }}
          />
        </SettingsSection>
        {/* Add On plugins */}
        <SettingsSection head="Add On plugins">
          <DataTableAlt
            columns={columnsOtherPricing}
            data={PluginsData}
            className=" overflow-auto"
            showPagination={false}
            isLoading={false}
            tableClasses={{
              thead: "bg-white border-b border-gray-200",
            }}
          />
        </SettingsSection>
      </PageContainer>
    </>
  );
};

export default SettingsPage;

const SettingsSection = ({ head, descp, action = null, children }) => (
  <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-xl bg-white">
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center w-full px-2">
      <div className="flex-1">
        <h2 className="text-lg text-[#05004E] font-bold">{head}</h2>
        {descp && <p className="mt-1 text-sm text-gray-600">{descp}</p>}
      </div>
      <div className="flex-shrink-0">{action}</div>
    </div>
    <div>{children}</div>
  </div>
);
