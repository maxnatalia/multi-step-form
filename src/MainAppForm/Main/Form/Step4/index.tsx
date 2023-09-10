import { useStepsContext } from "../../../stepsContext";
import StepsLayout from "../StepsLayout";
import { Step4Props } from "./interfaces";
import {
  AddonsItem,
  AddonsList,
  AddonsName,
  ChangeLink,
  PlanBox,
  PlanName,
  SummaryWrapper,
  Total,
  TotalAddonsPrice,
  TotalBox,
  TotalPrice,
  TotalPricePlan,
} from "./styled";

const Step4 = ({
  isMonthly,
  selectedPlan,
  selectedArrayAddons,
  calculateTotal,
}: Step4Props) => {
  const { handleGoToStep } = useStepsContext();

  if (calculateTotal === undefined || handleGoToStep === undefined) {
    return null;
  }

  return (
    <StepsLayout
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <SummaryWrapper>
        <PlanBox>
          <div>
            <PlanName>
              {isMonthly
                ? `${selectedPlan.planName} (Monthly)`
                : `${selectedPlan.planName} (Yearly)`}
            </PlanName>
            <ChangeLink onClick={() => handleGoToStep(2)}>Change</ChangeLink>
          </div>
          <TotalPricePlan>
            {isMonthly
              ? `${selectedPlan.planPriceMonthly}`
              : `${selectedPlan.planPriceYearly}`}
          </TotalPricePlan>
        </PlanBox>
        <AddonsList>
          {selectedArrayAddons.map(item => (
            <AddonsItem key={item.id}>
              <AddonsName>{item.name}</AddonsName>
              <TotalAddonsPrice>
                {isMonthly ? item.priceMonthly : item.priceYearly}
              </TotalAddonsPrice>
            </AddonsItem>
          ))}
        </AddonsList>
      </SummaryWrapper>
      <TotalBox>
        <Total>Total {isMonthly ? "(per month)" : "(per year)"}</Total>
        <TotalPrice>{calculateTotal()}</TotalPrice>
      </TotalBox>
    </StepsLayout>
  );
};

export default Step4;
