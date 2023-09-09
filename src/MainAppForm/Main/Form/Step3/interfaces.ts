import { AddonProps, StepsProps } from "../interfaces";

export interface Step3Props extends StepsProps {
  selectedArrayAddons: AddonProps[];
  item?: ItemCheckmarkProps;
}

export interface ItemCheckmarkProps {
  id: number;
  name: string;
  description: string;
  priceMonthly: string;
  priceYearly: string;
}
