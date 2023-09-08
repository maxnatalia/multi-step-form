import { Step3Props } from "../interfaces";
import { ReactComponent as Checkmark } from "./icon-checkmark.svg";
import { Box, CheckmarkWrapper, Description, Name, Price } from "./styled";

const CheckBoxItem = ({
  item,
  selectedArrayAddons,
  handleClickCheckmark,
  isMonthly,
}: Step3Props) => {
  if (handleClickCheckmark === undefined || item === undefined) {
    return null;
  }

  const isChecked = selectedArrayAddons.some(
    selectedItem => selectedItem.id === item.id
  );

  return (
    <Box key={item.id} checkedborder={isChecked ? "true" : "false"}>
      <CheckmarkWrapper
        marked={isChecked ? "true" : "false"}
        onClick={() => handleClickCheckmark(item)}
      >
        {isChecked && <Checkmark />}
      </CheckmarkWrapper>
      <div>
        <Name>{item.name}</Name>
        <Description>{item.description}</Description>
      </div>
      <Price>{isMonthly ? item.priceMonthly : item.priceYearly}</Price>
    </Box>
  );
};

export default CheckBoxItem;
