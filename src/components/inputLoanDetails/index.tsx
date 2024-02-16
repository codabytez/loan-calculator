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
  interest: number;
  setInterest: (value: number) => void;
}

const InputLoanDetails: FC<InputLoanDetailsProps> = ({
  loanAmount,
  setLoanAmount,
  loanDuration,
  setLoanDuration,
  interest,
  setInterest,
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

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 10000 && value <= 10000000) {
      setLoanAmount(value);
      handleSliderChange(value);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onBlur(e as unknown as React.ChangeEvent<HTMLInputElement>);
      (e.currentTarget as HTMLElement).blur();
    }
  };

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
        onBlur={onBlur}
        handleKeyPress={handleKeyPress}
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
        interest={interest}
        setInterest={setInterest}
      />
    </VStack>
  );
};

export default InputLoanDetails;
