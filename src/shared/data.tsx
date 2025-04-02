import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconFileAi,
  IconFileDescription,
  IconHelp,
  IconListDetails,
  IconMoneybag,
  IconSettings,
  IconTarget,
} from "@tabler/icons-react";
import { ITransaction } from "./models";
export const sidebarData = {
  user: {
    name: "Emeka Quidos",
    email: "emeka@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Transactions",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Investment",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Savings",
      url: "#",
      icon: IconMoneybag,
    },
    {
      title: "Goals",
      url: "#",
      icon: IconTarget,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
  ],
};

export const goalsData = [{ label: "January", desktop: 1260, mobile: 570 }];

export const chartData = [
  { date: "2024-12-01", savings: 3000, spending: 1200 },
  { date: "2024-12-02", savings: 7000, spending: 3100 },
  { date: "2024-12-03", savings: 5000, spending: 2500 },
  { date: "2024-12-05", savings: 12000, spending: 6500 },
  { date: "2024-12-06", savings: 11000, spending: 8000 },
  { date: "2024-12-08", savings: 8000, spending: 4000 },
  { date: "2024-12-09", savings: 4000, spending: 1800 },
  { date: "2024-12-10", savings: 16000, spending: 9800 },
  { date: "2024-12-12", savings: 15000, spending: 9500 },
  { date: "2024-12-14", savings: 9000, spending: 3000 },
  { date: "2024-12-15", savings: 7500, spending: 4000 },
  { date: "2024-12-17", savings: 13000, spending: 7000 },
  { date: "2024-12-18", savings: 14000, spending: 8000 },
  { date: "2024-12-20", savings: 11500, spending: 4900 },
  { date: "2024-12-21", savings: 17000, spending: 10200 },
  { date: "2024-12-23", savings: 12000, spending: 6000 },
  { date: "2024-12-24", savings: 18000, spending: 11000 },
  { date: "2024-12-26", savings: 14000, spending: 6500 },
  { date: "2024-12-27", savings: 9000, spending: 2700 },
  { date: "2024-12-29", savings: 20000, spending: 12500 },
  { date: "2024-12-30", savings: 13500, spending: 5600 },
  { date: "2025-01-01", savings: 9500, spending: 3200 },
  { date: "2025-01-02", savings: 6000, spending: 2200 },
  { date: "2025-01-04", savings: 18000, spending: 11000 },
  { date: "2025-01-06", savings: 8500, spending: 3700 },
  { date: "2025-01-08", savings: 20000, spending: 12500 },
  { date: "2025-01-10", savings: 17500, spending: 8500 },
  { date: "2025-01-12", savings: 13000, spending: 7400 },
  { date: "2025-01-14", savings: 19000, spending: 10200 },
  { date: "2025-01-16", savings: 15000, spending: 8000 },
  { date: "2025-01-18", savings: 11000, spending: 4500 },
  { date: "2025-01-20", savings: 21000, spending: 13500 },
  { date: "2025-01-22", savings: 10000, spending: 4800 },
  { date: "2025-01-24", savings: 19000, spending: 11500 },
  { date: "2025-01-26", savings: 16000, spending: 8000 },
  { date: "2025-01-28", savings: 14000, spending: 7200 },
  { date: "2025-01-30", savings: 17500, spending: 9600 },
  { date: "2025-02-02", savings: 18500, spending: 9000 },
  { date: "2025-02-06", savings: 23000, spending: 14000 },
  { date: "2025-02-10", savings: 15000, spending: 7500 },
  { date: "2025-02-14", savings: 21000, spending: 11000 },
  { date: "2025-02-18", savings: 25000, spending: 15000 },
  { date: "2025-02-22", savings: 17500, spending: 9800 },
  { date: "2025-02-26", savings: 20000, spending: 11000 },
  { date: "2025-03-02", savings: 23000, spending: 14000 },
  { date: "2025-03-06", savings: 18000, spending: 9200 },
  { date: "2025-03-10", savings: 25000, spending: 15000 },
  { date: "2025-03-14", savings: 19000, spending: 10200 },
  { date: "2025-03-18", savings: 16000, spending: 7500 },
  { date: "2025-03-22", savings: 22000, spending: 13500 },
  { date: "2025-03-26", savings: 17000, spending: 7200 },
  { date: "2025-03-30", savings: 19000, spending: 9800 },
];

export const transactionTableData: ITransaction[] = [
  {
    id: 1,
    description: "Salary deposit",
    type: "savings",
    status: "Done",
    amount: "5000.00",
    beneficiary: "Employer",
  },
  {
    id: 2,
    description: "Investment in mutual funds",
    type: "savings",
    status: "Done",
    amount: "2000.00",
    beneficiary: "Investment Portfolio",
  },
  {
    id: 3,
    description: "Rent payment",
    type: "spending",
    status: "Done",
    amount: "1200.00",
    beneficiary: "Landlord",
  },
  {
    id: 4,
    description: "Grocery shopping",
    type: "spending",
    status: "Done",
    amount: "250.00", // Reduced from 300
    beneficiary: "Supermarket",
  },
  {
    id: 5,
    description: "Investment in stocks",
    type: "savings",
    status: "Done",
    amount: "3500.00",
    beneficiary: "Stock Market",
  },
  {
    id: 6,
    description: "Dining out",
    type: "spending",
    status: "Done",
    amount: "100.00", // Reduced from 150
    beneficiary: "Restaurant",
  },
  {
    id: 7,
    description: "Freelance income",
    type: "savings",
    status: "Done",
    amount: "2500.00",
    beneficiary: "Freelance Client",
  },
  {
    id: 8,
    description: "Vacation savings (Goals)",
    type: "savings",
    status: "Done",
    amount: "700.00",
    beneficiary: "Vacation Fund",
  },
  {
    id: 9,
    description: "Car maintenance",
    type: "spending",
    status: "Done",
    amount: "300.00", // Reduced from 400
    beneficiary: "Auto Repair Shop",
  },
  {
    id: 10,
    description: "Emergency fund deposit",
    type: "savings",
    status: "Done",
    amount: "1500.00",
    beneficiary: "Emergency Savings",
  },
  {
    id: 11,
    description: "Charity donation",
    type: "spending",
    status: "Done",
    amount: "150.00", // Reduced from 200
    beneficiary: "Local Charity",
  },
  {
    id: 12,
    description: "House down payment savings (Goals)",
    type: "savings",
    status: "Done",
    amount: "2500.00",
    beneficiary: "House Fund",
  },
  {
    id: 13,
    description: "Investment in bonds",
    type: "savings",
    status: "Done",
    amount: "3000.00",
    beneficiary: "Bond Market",
  },
  {
    id: 14,
    description: "Gym membership",
    type: "spending",
    status: "Done",
    amount: "50.00", // Reduced from 60
    beneficiary: "Fitness Center",
  },
  {
    id: 15,
    description: "Monthly utility bills",
    type: "spending",
    status: "Done",
    amount: "200.00", // Reduced from 250
    beneficiary: "Utility Provider",
  },
];
