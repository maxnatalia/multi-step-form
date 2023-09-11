import { ChangeEvent } from "react";

export type ValidationFunction = (value: string) => boolean;

export interface UserFieldsProps {
  value: string;
  hasError: boolean;
  valueChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  inputBlurHandler: () => void;
  isValid: boolean;
  setIsTouched?: (value: boolean) => void;
}

export interface StepsProps {
  isMonthly?: boolean;
  handleChangePeriod?: () => void;
  handleChooseOffer?: (
    planName: string,
    planPriceMonthly: string,
    planPriceYearly: string
  ) => void;
  handleClickCheckmark?: (item: AddonProps) => void;
  calculateTotal?: () => string;
}

export interface PlanProps {
  planName: string;
  planPriceMonthly: string;
  planPriceYearly: string;
}

export interface AddonProps {
  id?: number;
  name?: string;
  description?: string;
  priceMonthly: string;
  priceYearly: string;
}

export interface FormProps extends StepsProps {
  selectedPlan: PlanProps;
  selectedArrayAddons: AddonProps[];
}
