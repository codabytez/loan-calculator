import { Heading, Stack, VStack } from "@chakra-ui/react";
import InputLoanDetails from "./inputLoanDetails";

import "../index.css";
import LoanRepayment from "./loanRepayment/LoanRepayment";
import { useState } from "react";

function App() {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanDuration, setLoanDuration] = useState(1);

  const calculateMonthlyPayment = (
    loanAmount: number,
    loanDuration: number,
    interestRate: number
  ) => {
    const monthlyInterestRate = interestRate / 12 / 100;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanDuration));
    const totalRepayment = monthlyPayment * loanDuration;
    return { monthlyPayment, totalRepayment, monthlyInterestRate };
  };

  const { monthlyPayment, totalRepayment, monthlyInterestRate } =
    calculateMonthlyPayment(loanAmount, loanDuration, 12.4);

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
        // border={"1px solid #36d"}
      >
        <InputLoanDetails
          loanAmount={loanAmount}
          setLoanAmount={setLoanAmount}
          loanDuration={loanDuration}
          setLoanDuration={setLoanDuration}
        />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="2"
          viewBox="0 0 329 1"
          fill="none"
        >
          <path d="M0 1L329 1" stroke="#808080" stroke-dasharray="4 2" />
        </svg> */}
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

// Path: src/index.css
// 90em = 1440px
// 80em = 1280px
// 62em = 992px
// 48em = 768px
// 30em = 480px
// 20em = 320px
// 16em = 256px
// 10em = 160px
// 8em = 128px
// 6em = 96px
// 4em = 64px
// 2em = 32px
// 1em = 16px
// 0.5em = 8px
// 0.25em = 4px
// 0.125em = 2px
// 0.0625em = 1px
