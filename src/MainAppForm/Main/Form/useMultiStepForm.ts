import { useState } from "react";
import { convertToNumber } from "../../../utils/helpers";
import { PlanProps, AddonProps } from "./interfaces";

export const useMultiStepForm = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<PlanProps>({
    planName: "Arcade",
    planPriceMonthly: "$12/mo",
    planPriceYearly: "$90/yr",
  });
  const [selectedArrayAddons, setSelectedArrayAddons] = useState<AddonProps[]>(
    []
  );

  const handleChangePeriod = () => {
    setIsMonthly(!isMonthly);
  };

  const handleChooseOffer = (
    planName: string,
    planPriceMonthly: string,
    planPriceYearly: string
  ) => {
    const planObject = {
      planName: planName,
      planPriceMonthly: planPriceMonthly,
      planPriceYearly: planPriceYearly,
    };
    setSelectedPlan(planObject);
  };

  const handleClickCheckmark = (item: AddonProps) => {
    setSelectedArrayAddons(prevSelectedArrayAddons => {
      const isItemAlreadySelected = prevSelectedArrayAddons.some(
        selectedItem => selectedItem.id === item.id
      );

      if (isItemAlreadySelected) {
        const updatedSelectedArrayAddons = prevSelectedArrayAddons.filter(
          selectedItem => selectedItem.id !== item.id
        );
        return updatedSelectedArrayAddons;
      } else {
        const newSelectedArrayAddons = [...prevSelectedArrayAddons, item];
        return newSelectedArrayAddons;
      }
    });
  };

  const calculateTotal = () => {
    const pricePlan = isMonthly
      ? convertToNumber(selectedPlan.planPriceMonthly, 1)
      : convertToNumber(selectedPlan.planPriceYearly, 1);

    const priceProp = isMonthly ? "priceMonthly" : "priceYearly";
    const priceAdd = selectedArrayAddons.reduce(
      (total, item) => total + convertToNumber(item[priceProp], 2),
      0
    );
    const totalAmount = pricePlan + priceAdd;

    const priceText = `+$${totalAmount}/${isMonthly ? "mo" : "yr"}`;
    return priceText;
  };

  return {
    selectedArrayAddons,
    isMonthly,
    selectedPlan,
    handleChangePeriod,
    handleChooseOffer,
    handleClickCheckmark,
    calculateTotal,
  };
};
