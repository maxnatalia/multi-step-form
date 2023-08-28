import { useState } from "react";
import StepsLayout from "../StepsLayout";
import { dataPlan } from "./dataPlan";
import {
  BoxIcon,
  Free,
  Icon,
  Name,
  Period,
  PeriodContainer,
  Plan,
  PlanContainer,
  Price,
} from "./styled";

const Step2 = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleChooseOffer = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleChangePeriod = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <StepsLayout
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <PlanContainer>
        {dataPlan.map(plan => (
          <Plan
            clicked={selectedPlan === plan.name ? plan.name : undefined}
            key={plan.id}
            onClick={() => handleChooseOffer(plan.name)}
          >
            {plan.icon}
            <div>
              <Name>{plan.name}</Name>
              {isMonthly ? (
                <Price>{plan.priceMonthly}</Price>
              ) : (
                <>
                  <Price>{plan.priceYearly}</Price>
                  <Free>2 months free</Free>
                </>
              )}
            </div>
          </Plan>
        ))}
      </PlanContainer>
      <PeriodContainer>
        <Period period={isMonthly ? "true" : "false"}>Monthly</Period>
        <BoxIcon
          onClick={handleChangePeriod}
          move={isMonthly ? "false" : "true"}
        >
          <Icon />
        </BoxIcon>
        <Period period={!isMonthly ? "true" : "false"}>Yearly</Period>
      </PeriodContainer>
    </StepsLayout>
  );
};

export default Step2;
