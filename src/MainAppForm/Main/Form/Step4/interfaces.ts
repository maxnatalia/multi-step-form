import { AddonProps, PlanProps, StepsProps } from "../interfaces";

export interface Step4Props extends StepsProps {
  selectedPlan: PlanProps;
  selectedArrayAddons: AddonProps[];
}
