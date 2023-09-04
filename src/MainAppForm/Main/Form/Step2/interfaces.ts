import { StepsProps, PlanProps } from "../interfaces";

export interface Step2Props extends StepsProps {
  selectedPlan: PlanProps;
  plan?: PlanItemProps;
}

export interface PlanItemProps {
  id: number;
  icon: React.ReactNode;
  name: string;
  priceMonthly: string;
  priceYearly: string;
}
