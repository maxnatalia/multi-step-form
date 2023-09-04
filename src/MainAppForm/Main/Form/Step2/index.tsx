import StepsLayout from "../StepsLayout";
import { Step2Props } from "./interfaces";
import { dataPlan } from "./dataPlan";
import Period from "./Period";
import PlanItem from "./PlanItem";
import { PlanContainer } from "./styled";

const Step2 = ({
  isMonthly,
  handleChangePeriod,
  handleChooseOffer,
  selectedPlan,
}: Step2Props) => {
  return (
    <StepsLayout
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <PlanContainer>
        {dataPlan.map(plan => (
          <PlanItem
            key={plan.id}
            plan={plan}
            selectedPlan={selectedPlan}
            handleChooseOffer={handleChooseOffer}
            isMonthly={isMonthly}
          />
        ))}
      </PlanContainer>
      <Period isMonthly={isMonthly} handleChangePeriod={handleChangePeriod} />
    </StepsLayout>
  );
};

export default Step2;
