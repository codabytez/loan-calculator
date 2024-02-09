import { VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import InputLoanAmount from "./InputLoanAmount";
import InputLoanDuration from "./InputLoanDuration";
import InputLoanDepositMode from "./InputLoanDepositMode";

interface InputLoanDetailsProps {
  loanAmount: number;
  setLoanAmount: (value: number) => void;
  loanDuration: number;
  setLoanDuration: (value: number) => void;
}

const InputLoanDetails: FC<InputLoanDetailsProps> = ({
  loanAmount,
  setLoanAmount,
  loanDuration,
  setLoanDuration,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showDurationTooltip, setShowDurationTooltip] = useState(false);
  const [selectPayment, setSelectPayment] = useState("");

  const handleSliderChange = (value: number) => {
    setLoanAmount(value);
  };

  const handleDurationSliderChange = (value: number) => {
    setLoanDuration(value);
  };

  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const value = Number(event.target.value);
  //     setLoanAmount(value < 10000 ? 10000 : value > 10000000 ? 10000000 : value);
  //   };

  return (
    <VStack
      gap={"76px"}
      alignItems={{ base: "flex-start", sm: "center", lg: "flex-start" }}
      flexShrink={0}
      flex={"1 1 auto"}
    >
      <InputLoanAmount
        loanAmount={loanAmount}
        handleSliderChange={handleSliderChange}
        showTooltip={showTooltip}
        setShowTooltip={setShowTooltip}
      />

      <InputLoanDuration
        loanDuration={loanDuration}
        handleDurationSliderChange={handleDurationSliderChange}
        showDurationTooltip={showDurationTooltip}
        setShowDurationTooltip={setShowDurationTooltip}
      />

      <InputLoanDepositMode
        selectPayment={selectPayment}
        setSelectPayment={setSelectPayment}
      />
    </VStack>
  );
};

export default InputLoanDetails;
