import React, { useState } from "react";
import { PageContainer } from "../ui/PageContainer";
import { PageToolbar } from "../ui/PageToolbar";
import DataTableAlt from "../ui/DataTableAlt";
import { Avathar } from "../ui/Avathar";
import {
  IconArrowCircle,
  IconPauseCircle,
  IconRefresh,
} from "../assets/icons/InterfaceIcons";

const SubscriptionPage = ({}) => {
  const TABLE_CONFIG = [
    {
      id: "1",
      head: "Date",
      key: "DATE",
      isSortable: true,
      isFixed: false,
    },
    {
      id: "2",
      head: "Customer ID",
      key: "CUSTOMER_ID",
      isSortable: true,
      isFixed: false,
    },
    {
      id: "3",
      head: "Customer Name",
      key: "CUSTOMER_NAME",
      isSortable: true,
      isFixed: false,
      render: (row) => (
        <div className="flex items-center gap-2">
          <Avathar
            loading={false}
            imgUrl={row?.AVATHAR_URL || ""}
            name={row?.CUSTOMER_NAME || ""}
            className="size-8"
          />
          <span className="">{row?.CUSTOMER_NAME || "N/A"}</span>
        </div>
      ),
    },
    {
      id: "4",
      head: "Plan",
      key: "PLAN",
      isSortable: true,
      isFixed: false,
      render: (row) => (
        <div className="w-full flex text-center font-semibold">
          {row?.PLAN || "N/A"}
        </div>
      ),
    },
    {
      id: "5",
      head: "Status",
      key: "STATUS",
      isSortable: true,
      isFixed: false,
    },
    {
      id: "6",
      head: "Expiry Date",
      key: "EXPIRY_DATE",
      isSortable: true,
      align: "center", // optional depending on your table lib
      className: "text-center", // for some table components like react-table
      isFixed: false,
      render: (row) => (
        <div className="w-full text-center whitespace-nowrap ">
          {row?.EXPIRY_DATE || "N/A"}
        </div>
      ),
    },
    {
      id: "7",
      head: "Billing Type",
      key: "BILLING_TYPE",
      isSortable: true,
      isFixed: false,
    },
    {
      id: "8",
      head: "Action",
      key: "ACTION",
      isSortable: true,
      isFixed: false,
      render: (row) => (
        <div className=" flex  cursor-pointer gap-4 w-full text-center">
          <IconRefresh size="17" />
          <IconPauseCircle size="17" />
          <IconArrowCircle size="17" />
        </div>
      ),
    },
  ];

  const DUMMY_REFERRALS = [
    {
      DATE: "2023-10-01",
      CUSTOMER_ID: "CUST123",
      CUSTOMER_NAME: "John Doe",
      AVATHAR_URL:
        "https://i.pinimg.com/736x/04/ec/02/04ec02f20962977a78042833e48c5155.jpg",
      PLAN: "Premium",
      STATUS: "Active",
      EXPIRY_DATE: "2023-12-31",
      BILLING_TYPE: "Monthly",
      ACTION: "View Details",
    },
    {
      DATE: "2023-09-15",
      CUSTOMER_ID: "CUST456",
      AVATHAR_URL:
        "https://i.pinimg.com/736x/ce/03/8d/ce038de86a16fb771691c22476108682.jpg",
      CUSTOMER_NAME: "Jane Smith",
      PLAN: "Basic",
      STATUS: "Inactive",
      EXPIRY_DATE: "2023-12-31",
      BILLING_TYPE: "Monthly",
      ACTION: "View Details",
    },
    {
      DATE: "2023-08-20",
      CUSTOMER_ID: "CUST789",
      CUSTOMER_NAME: "Alice Johnson",
      AVATHAR_URL:
        "https://i.pinimg.com/736x/26/7d/79/267d79265a2c03b311507c4d76e46e33.jpg",
      PLAN: "Standard",
      STATUS: "Active",
      EXPIRY_DATE: "2023-12-31",
      BILLING_TYPE: "Monthly",
      ACTION: "View Details",
    },
    {
      DATE: "2023-08-20",
      CUSTOMER_ID: "CUST789",
      CUSTOMER_NAME: "Alice Johnson",
      AVATHAR_URL:
        "https://i.pinimg.com/736x/26/7d/79/267d79265a2c03b311507c4d76e46e33.jpg",
      PLAN: "Standard",
      STATUS: "Active",
      EXPIRY_DATE: "2023-12-31",
      BILLING_TYPE: "Monthly",
      ACTION: "View Details",
    },
    {
      DATE: "2023-08-20",
      CUSTOMER_ID: "CUST789",
      CUSTOMER_NAME: "Alice Johnson",
      AVATHAR_URL:
        "https://i.pinimg.com/736x/26/7d/79/267d79265a2c03b311507c4d76e46e33.jpg",
      PLAN: "Standard",
      STATUS: "Active",
      EXPIRY_DATE: "2023-12-31",
      BILLING_TYPE: "Monthly",
      ACTION: "View Details",
    },
    {
      DATE: "2023-08-20",
      CUSTOMER_ID: "CUST789",
      CUSTOMER_NAME: "Alice Johnson",
      AVATHAR_URL:
        "https://i.pinimg.com/736x/26/7d/79/267d79265a2c03b311507c4d76e46e33.jpg",
      PLAN: "Standard",
      STATUS: "Active",
      EXPIRY_DATE: "2023-12-31",
      BILLING_TYPE: "Monthly",
      ACTION: "View Details",
    },
  ];

  const [subscriptionData, setSubscriptionData] = useState(DUMMY_REFERRALS);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <PageContainer className=" pb-0">
        <PageToolbar
          pageHead="Subscriptions"
          className="bg-white font-semibold "
          count={subscriptionData.length}
        />
        <div className=" overflow-x-auto flex-1 container">
          <DataTableAlt
            columns={TABLE_CONFIG}
            data={subscriptionData}
            isLoading={false}
            className="w-full max-w-full"
          />
        </div>
      </PageContainer>
    </>
  );
};

export default SubscriptionPage;
