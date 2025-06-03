import React, { useState } from "react";
import { PageToolbar } from "../ui/PageToolbar";
import DataTableAlt from "../ui/DataTableAlt";
import { Avathar } from "../ui/Avathar";

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
    head: "Invoice No",
    key: "INVOICE_NO",
    isSortable: true,
    isFixed: false,
  },
  {
    id: "3",
    head: "Customer Id",
    key: "CUSTOMER_ID",
    isSortable: true,
    isFixed: false,
  },
  {
    id: "4",
    head: "Customer Name",
    key: "CUSTOMER_NAME",
    isSortable: true,
    isFixed: false,
    render: (row) => (
      <div className="flex items-center gap-2">
        <Avathar
          imgUrl={row?.AVATHER_URL || ""}
          loading={false}
          name={row?.CUSTOMER_NAME || "N/A"}
          className="size-8"
        />
        <span>{row?.CUSTOMER_NAME || "N/A"}</span>
      </div>
    ),
  },
  {
    id: "5",
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
    id: "6",
    head: "Amount",
    key: "AMOUNT",
    isSortable: true,
    isFixed: false,
    render: (row) => (
      <div className="">AED {parseFloat(row?.AMOUNT || 0).toFixed(2)}</div>
    ),
  },
  {
    id: "7",
    head: "Tax",
    key: "TAX",
    isSortable: true,
    isFixed: false,
    render: (row) => (
      <div className="">AED {parseFloat(row?.AMOUNT || 0).toFixed(2)}</div>
    ),
  },
  {
    id: "8",
    head: "Total Amount",
    key: "TOTAL_AMOUNT",
    isSortable: true,
    isFixed: false,
    render: (row) => (
      <div className="">
        AED {parseFloat(row?.TOTAL_AMOUNT || 0).toFixed(2)}
      </div>
    ),
  },
];

const dummyData = [
  {
    DATE: "2023-10-01",
    INVOICE_NO: "INV001",
    CUSTOMER_ID: "#CUST001",
    CUSTOMER_NAME: "John Doe",
    AVATHER_URL:
      "https://i.pinimg.com/736x/d5/07/49/d50749f9c34b1ba48297e5a724577392.jpg",
    PLAN: "Pro",
    AMOUNT: 1000,
    TAX: 100,
    TOTAL_AMOUNT: 1100,
  },
  {
    DATE: "2023-10-02",
    INVOICE_NO: "INV002",
    CUSTOMER_ID: "#CUST002",
    CUSTOMER_NAME: "Jane Smith",
    AVATHER_URL:
      "https://i.pinimg.com/736x/d5/07/49/d50749f9c34b1ba48297e5a724577392.jpg",
    PLAN: "Starter",
    AMOUNT: 500,
    TAX: "ADE 5000",
    TOTAL_AMOUNT: 550,
  },
  {
    DATE: "2023-10-02",
    INVOICE_NO: "INV002",
    CUSTOMER_ID: "#CUST002",
    CUSTOMER_NAME: "Jane Smith",
    AVATHER_URL:
      "https://i.pinimg.com/736x/d5/07/49/d50749f9c34b1ba48297e5a724577392.jpg",
    PLAN: "Growth",
    AMOUNT: 500,
    TAX: "ADE 5000",
    TOTAL_AMOUNT: 550,
  },
];

const ReportsPage = () => {
  const [reportsData, setReportsData] = useState(dummyData);
  return (
    <div className=" rounded-xl shadow">
      <PageToolbar
        pageHead="Reports"
        className="bg-white font-semibold "
        count={reportsData?.length || 0}
      />
      <div className=" overflow-x-auto flex-1 container">
        <DataTableAlt
          isLoading={false}
          columns={TABLE_CONFIG}
          data={reportsData}
        />
      </div>
    </div>
  );
};

export default ReportsPage;
