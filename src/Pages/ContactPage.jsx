import React, { useState } from "react";
import { PageToolbar } from "../ui/PageToolbar";
import DataTableAlt from "../ui/DataTableAlt";
import { Avathar } from "../ui/Avathar";
import { IconPauseCircle, IconRefresh } from "../assets/icons/InterfaceIcons";
import { PageContainer } from "../ui/PageContainer";

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
    id: "3",
    head: "Country",
    key: "COUNTRY",
    isSortable: true,
    isFixed: false,
  },
  {
    id: "4",
    head: "State",
    key: "STATE",
    isSortable: true,
    isFixed: false,
  },
  {
    id: "5",
    head: "Mobile No",
    key: "MOBILE_NO",
    isSortable: true,
    isFixed: false,
  },
  {
    id: "6",
    head: "Email",
    key: "EMAIL",
    isSortable: true,
    isFixed: false,
  },
  {
    id: "7",
    head: "Status",
    key: "STATUS",
    isSortable: true,
    isFixed: false,
  },
  {
    id: "8",
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
    id: "9",
    head: "Action",
    key: "ACTION",
    isSortable: false,
    isFixed: false,
    render: (row) => (
      <div className="flex items-center gap-2">
        <button className="cursor-pointer">
          <IconRefresh size="20" />
        </button>
        <button className="cursor-pointer">
          <IconPauseCircle size="20" />
        </button>
      </div>
    ),
  },
];

const dummyData = [
  {
    DATE: "2023-10-01",
    CUSTOMER_NAME: "John Doe",
    AVATHAR_URL:
      "https://i.pinimg.com/736x/59/c4/52/59c452231925f874d9b0becac0651695.jpg",
    COUNTRY: "India",
    STATE: "kerala",
    MOBILE_NO: "+1234567890",
    EMAIL: "JohnDoe@gmail.com",
    STATUS: "Active",
    PLAN: "Starter",
  },

  {
    DATE: "2023-10-01",
    CUSTOMER_NAME: "John Doe",
    AVATHAR_URL:
      "https://i.pinimg.com/736x/59/c4/52/59c452231925f874d9b0becac0651695.jpg",
    COUNTRY: "India",
    STATE: "kerala",
    MOBILE_NO: "+1234567890",
    EMAIL: "JohnDoe@gmail.com",
    STATUS: "Active",
    PLAN: "Starter",
  },

  {
    DATE: "2023-10-01",
    CUSTOMER_NAME: "John Doe",
    AVATHAR_URL:
      "https://i.pinimg.com/736x/59/c4/52/59c452231925f874d9b0becac0651695.jpg",
    COUNTRY: "India",
    STATE: "kerala",
    MOBILE_NO: "+1234567890",
    EMAIL: "JohnDoe@gmail.com",
    STATUS: "Active",
    PLAN: "Starter",
  },

  {
    DATE: "2023-10-01",
    CUSTOMER_NAME: "John Doe",
    AVATHAR_URL:
      "https://i.pinimg.com/736x/59/c4/52/59c452231925f874d9b0becac0651695.jpg",
    COUNTRY: "India",
    STATE: "kerala",
    MOBILE_NO: "+1234567890",
    EMAIL: "JohnDoe@gmail.com",
    STATUS: "Active",
    PLAN: "Starter",
  },
];

const ContactPage = () => {
  const [contactData, setContactData] = useState(dummyData);
  const [isLoading, setIsLoading] = useState();

  return (
    <PageContainer className="pb-0 overflow-y-hidden">
      <PageToolbar
        pageHead="Contacts"
        className="bg-white font-semibold "
        count={contactData.length}
      />

      <div className=" overflow-x-auto flex-1 container">
        <DataTableAlt
          columns={TABLE_CONFIG}
          data={contactData}
          isLoading={false}
          className="w-full max-w-full"
        />
      </div>
  </PageContainer>
  );
};

export default ContactPage;
