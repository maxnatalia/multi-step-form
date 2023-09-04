import { Free, Name, Plan, Price } from "./styled";
import { Step2Props } from "../interfaces";

const PlanItem = ({
  plan,
  handleChooseOffer,
  isMonthly,
  selectedPlan,
}: Step2Props) => {
  if (handleChooseOffer === undefined || plan === undefined) {
    return null;
  }
  return (
    <Plan
      clicked={selectedPlan.planName === plan.name ? plan.name : undefined}
      key={plan.id}
      onClick={() =>
        handleChooseOffer(plan.name, plan.priceMonthly, plan.priceYearly)
      }
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
  );
};

export default PlanItem;
