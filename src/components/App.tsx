import { Heading, Stack, VStack } from "@chakra-ui/react";
import InputLoanDetails from "./inputLoanDetails";
import { useCalculateLoanPayments } from "../hooks/useCalculateLoanRepayment";
import "../index.css";
import LoanRepayment from "./loanRepayment/LoanRepayment";
import { useState } from "react";

function App() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanDuration, setLoanDuration] = useState(1);
  const [interest, setInterest] = useState(0);
  const interestRate = interest / 100;

  const [payments, totalPayment] = useCalculateLoanPayments(
    loanAmount,
    loanDuration,
    interestRate
  );
  // console.log(payments, totalPayment);

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
          interest={interest}
          setInterest={setInterest}
        />
        <LoanRepayment
          loanAmount={loanAmount}
          loanDuration={loanDuration}
          monthlyPayment={payments}
          totalRepayment={totalPayment}
        />
      </Stack>
    </VStack>
  );
}

export default App;
