import React from "react";
import CardContainer from "../ui/CardContainer";
import { Button } from "../ui/button/Button";
import {
  IconCheverontDown,
  IconLanguage,
  IconPlus,
} from "../assets/icons/InterfaceIcons";
import { SettingsSection } from "../Components/settings/SettingsSection";

const SettingsPage = () => {
  return (
    <>
      <div>
        <SettingsSection />
      </div>
    </>
  );
};

export default SettingsPage;

// const SettingsSection = ({ title = "", descp = "", children = "" }) => (
//   <div className="flex flex-col lg:flex-row gap-4">
//     <div className="flex-shrink-0 w-full lg:max-w-[300px]">
//       <h6 className="font-semibold text-gray-800">{title}</h6>
//       <p className="mt-2 text-sm  text-gray-400">{descp}</p>
//     </div>
//     <div className="space-y-6 flex-grow p-4 lg:p-6 rounded-[32px] border border-gray-200">
//       {children}
//     </div>
//   </div>
// );
