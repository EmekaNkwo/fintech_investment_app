"use client";
import {
  IconPercentage,
  IconMoneybag,
  IconTrophy,
  IconTargetArrow,
  IconTrendingUp,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { ReactNode } from "react";

import { MetricResponse } from "@/shared/models";
import { Skeleton } from "../ui/skeleton";
import useDashboard from "./useDasboard";
interface BalanceCardProps {
  title: string;
  amount: string;
  rightDesc?: ReactNode;
  isFooterAvailable?: boolean;
  footer?: ReactNode;
}

const AchievementCard = ({
  icon: Icon,
  title,
  amount,
}: {
  icon: React.ElementType;
  title: string;
  amount: string;
}) => (
  <div className="line-clamp-1 flex gap-1 font-medium items-start">
    <Icon className="size-4 mt-[1px]" />
    <div className="flex flex-col">
      <span className="text-muted-foreground text-xs">{title}</span>
      <span>{amount}</span>
    </div>
  </div>
);

const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  amount,
  footer,
  isFooterAvailable,
  rightDesc,
}) => {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {amount}
        </CardTitle>
        {rightDesc && (
          <CardAction>
            <Badge variant="outline">{rightDesc}</Badge>
          </CardAction>
        )}
      </CardHeader>

      {isFooterAvailable && (
        <>
          <Separator />
          <CardFooter className="flex items-center justify-between gap-1.5 text-sm">
            {footer}
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export function SectionCards() {
  const { metricsData: metrics } = useDashboard();
  const metricsData: MetricResponse = metrics?.data?.data;
  const balanceCardsData = [
    {
      title: "Total Balance",
      amount: `NGN ${metricsData?.totalBalance?.toLocaleString()}`,
      rightDesc: null,
      isFooterAvailable: false,
      footer: null,
    },
    {
      title: "Investment Portfolio",
      amount: `NGN ${metricsData?.investmentPortfolio?.amount?.toLocaleString()}`,
      rightDesc: null,
      isFooterAvailable: false,
      footer: null,
    },
    {
      title: "Saving Balance",
      amount: `NGN ${metricsData?.savingsBalance?.amount?.toLocaleString()}`,
      rightDesc: null,
      isFooterAvailable: true,
      footer: (
        <>
          <AchievementCard
            icon={IconPercentage}
            title="Interest in 1 days"
            amount="1,676.89"
          />
          <AchievementCard
            icon={IconMoneybag}
            title="AutoSave"
            amount="#2,000 daily"
          />
        </>
      ),
    },
    {
      title: "Goals & Targets",
      amount: `NGN ${metricsData?.goalsBalance?.amount?.toLocaleString()}`,
      rightDesc: (
        <>
          <IconTrendingUp />
          {metricsData?.goalsBalance?.interest / 100}%
        </>
      ),
      isFooterAvailable: true,
      footer: (
        <>
          <AchievementCard
            icon={IconTrophy}
            title="Target Achieved"
            amount={`NGN ${metricsData?.goalsBalance?.targetAchieved?.toLocaleString()}`}
          />
          <AchievementCard
            icon={IconTargetArrow}
            title="This month Target"
            amount={`NGN ${metricsData?.goalsBalance?.targetSet?.toLocaleString()}`}
          />
        </>
      ),
    },
  ];

  if (metrics.isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        <Skeleton className="h-38 w-full rounded" />
        <Skeleton className="h-38 w-full rounded" />
        <Skeleton className="h-38 w-full rounded" />
        <Skeleton className="h-38 w-full rounded" />
      </div>
    );
  }
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {balanceCardsData.map((card, index) => (
        <BalanceCard
          key={index}
          title={card.title}
          amount={String(card.amount)}
          rightDesc={card.rightDesc}
          isFooterAvailable={card.isFooterAvailable}
          footer={card.footer}
        />
      ))}
    </div>
  );
}
