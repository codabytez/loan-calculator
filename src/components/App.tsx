import { Heading, Stack, VStack } from "@chakra-ui/react";
import InputLoanDetails from "./inputLoanDetails";
import {
  useCalculateMonthlyPayment,
  // useCalculatePaymentTwo,
} from "../hooks/useCalculateLoanRepayment";

import "../index.css";
import LoanRepayment from "./loanRepayment/LoanRepayment";
import { useState } from "react";

function App() {
  const calculateMonthlyPayment = useCalculateMonthlyPayment();
  // const calculatePaymentTwo = useCalculatePaymentTwo();
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanDuration, setLoanDuration] = useState(1);
  const interestRate = 12.4;

  const { monthlyPayment, totalRepayment, monthlyInterestRate } =
    calculateMonthlyPayment(loanAmount, loanDuration, interestRate);

  // const { monthlyPayment, totalRepayment, monthlyInterestRate } =
  // calculatePaymentTwo(loanAmount, loanDuration, interestRate);

  console.log({
    monthlyPayment,
    totalRepayment,
    loanDuration,
    monthlyInterestRate,
  });

  return (
    <VStack
      minW={"340px"}
      maxW={"1440px"}
      mx={"auto"}
      minH={"100vh"}
      bg={"white"}
      p={6}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={10}
    >
      <Heading
        as={"h1"}
        textAlign={"center"}
        fontSize={{ base: 34, xl: 63 }}
        fontWeight={"black"}
        textTransform={"capitalize"}
      >
        how much would you like
        <span style={{ color: "#54D4A0" }}> to borrow?</span>
      </Heading>
      <Stack
        gap={16}
        flexDir={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={{ base: "center", lg: "space-between" }}
        w={"full"}
      >
        <InputLoanDetails
          loanAmount={loanAmount}
          setLoanAmount={setLoanAmount}
          loanDuration={loanDuration}
          setLoanDuration={setLoanDuration}
        />
        <LoanRepayment
          loanAmount={loanAmount}
          loanDuration={loanDuration}
          monthlyPayment={monthlyPayment}
          totalRepayment={totalRepayment}
        />
      </Stack>
    </VStack>
  );
}

export default App;
