import { IconApproval, IconBar, IconDashboard, IconSettings, IconUsersAlt2 } from "../assets/icons/InterfaceIcons";

export const SIDEBAR_DATA = [
  {
    label: "Dashboard",
    path: "/dashboard",
    tooltip: "Go to Dashboard",
    icon: <IconDashboard  size="24"/>,
  },
  {
    label: "Subscription",
    path: "/dashboard/subscription",
    tooltip: "subscription",
    icon: <IconApproval size="24" />,
  },
  {
    label: "Contacts",
    path: "/dashboard/contacts",
    tooltip: "contacts",
    icon: <IconUsersAlt2 size="24" />,
  },
  {
    label: "Reports",
    path: "/dashboard/reports",
    tooltip: "reports",
    icon: <IconBar size="24" />,
  },
    {
    label: "Settings",
    path: "/dashboard/settings",
    tooltip: "settings",
    icon: <IconSettings size="24" />,
  },
];
