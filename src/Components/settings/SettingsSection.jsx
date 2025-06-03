import React from "react";
import CardContainer from "../../ui/CardContainer";
import { Button } from "../../ui/button/Button";
import { IconCheverontDown, IconLanguage, IconPlus } from "../../assets/icons/InterfaceIcons";

export const SettingsSection = ({ data = [], isLoading = true }) => {
  return (
    <CardContainer className="h-fit space-y-2">
      {/* Header */}
     <div className="flex items-center justify-between px-2">
      <h2 className="text-lg font-bold text-[#05004E]">Plan Management</h2>
      <div className="flex items-center gap-2">
        <Button variant="secondary">
          {" "}
          <IconLanguage size="24" /> All <IconCheverontDown />
        </Button>

        <Button
          variant="secondary"
          className="flex  bg-black text-white items-center"
        >
          <IconPlus />
          Add
        </Button>
      </div>
    </div>

      {/* Settings Sections */}

        


      
    </CardContainer>
  );
};
