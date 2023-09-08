import StepsLayout from "../StepsLayout";
import { Step3Props } from "./interfaces";
import { dataAddons } from "./dataAddons";
import CheckBoxItem from "./CheckBoxItem";
import { Wrapper } from "./styled";

const Step3 = ({
  isMonthly,
  handleClickCheckmark,
  selectedArrayAddons,
}: Step3Props) => {
  return (
    <StepsLayout
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <Wrapper>
        {dataAddons.map(item => (
          <CheckBoxItem
            key={item.id}
            item={item}
            selectedArrayAddons={selectedArrayAddons}
            handleClickCheckmark={handleClickCheckmark}
            isMonthly={isMonthly}
          />
        ))}
      </Wrapper>
    </StepsLayout>
  );
};

export default Step3;
