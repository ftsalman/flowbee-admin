import React from "react";
import { IconHamburger } from "../../assets/icons/InterfaceIcons";
import { Button } from "../../ui/button/Button";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SCREEN_SIZES } from "../../utils/utils";
import { useSidebar } from "../../hooks/useSidebar";

export const NavHamburger = () => {
  const windowSize = useWindowSize();
  const { onToggle, onCollapse } = useSidebar();

  const isSmallDevice = windowSize.width < SCREEN_SIZES.md;

  return (
    <Button
      variant="tertiary"
      className="p-0 size-9 flex-shrink-0 rounded-md md:hidden hover:bg-gray-50 text-brand-secondary-500"
      title="Menu"
      onClick={() => {
        
        isSmallDevice ? onToggle() : onCollapse();
      }}
    >
      <IconHamburger size="18" />
    </Button>
  );
};
