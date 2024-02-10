import { Button, Heading, Text, VStack, Stack } from "@chakra-ui/react";
import { FC } from "react";

interface LoanRepaymentProps {
  loanAmount: number;
  monthlyPayment: number;
  loanDuration?: number;
  totalRepayment: number;
}

const LoanRepayment: FC<LoanRepaymentProps> = ({
  loanAmount,
  monthlyPayment,
  totalRepayment,
}) => {
  return (
    <VStack
      gap={{ base: 6, lg: 20 }}
      alignItems={"center"}
      justifyContent={"flex-start"}
      flex={1}
      w={{ xl: "636px" }}
    >
      <VStack w={"332px"} pb={4} gap={4} alignItems={"center"}>
        <Heading
          fontSize={34}
          fontWeight={"bold"}
          textAlign={"center"}
          textTransform={"capitalize"}
        >
          monthly Payment
        </Heading>
        <VStack
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
          w={"max-content"}
          minW={"295px"}
          h={"95px"}
        >
          <Heading
            as={"h3"}
            fontSize={43}
            fontWeight={"bold"}
            textAlign={"center"}
            textTransform={"capitalize"}
            color={"green"}
          >
            ₦{" "}
            {new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(monthlyPayment)}
          </Heading>
          <Text
            fontSize={17}
            fontWeight={"semibold"}
            textAlign={"center"}
            textTransform={"capitalize"}
          >
            fees included
          </Text>
        </VStack>
      </VStack>

      <Stack
        // w={"289px"}
        pb={2}
        gap={6}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <VStack
          gap={5}
          alignItems={"center"}
          justifyContent={"center"}
          w={{ base: "288px", lg: "max-content", xl: "max-content" }}
          // maxW={"288px"}
          p={"25px 42px 11px"}
          borderRadius={4}
          bg={"light-gray-box"}
        >
          <Text
            fontSize={17}
            fontWeight={"semibold"}
            textAlign={"center"}
            textTransform={"uppercase"}
            letterSpacing={"5.7px"}
          >
            borrowing
          </Text>
          <Heading
            fontSize={25}
            fontWeight={"extrabold"}
            textAlign={"center"}
            textTransform={"capitalize"}
          >
            ₦{" "}
            {new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(loanAmount)}
          </Heading>
        </VStack>

        <VStack
          gap={5}
          alignItems={"center"}
          justifyContent={"center"}
          w={{ base: "288px", lg: "max-content", xl: "max-content" }}
          // maxW={"288px"}
          p={"25px 42px 11px"}
          borderRadius={4}
          bg={"light-green-box"}
        >
          <Text
            fontSize={17}
            fontWeight={"semibold"}
            textAlign={"center"}
            textTransform={"uppercase"}
            letterSpacing={"5.7px"}
          >
            to repay
          </Text>
          <Heading
            fontSize={25}
            fontWeight={"extrabold"}
            textAlign={"center"}
            textTransform={"capitalize"}
          >
            ₦{" "}
            {new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(totalRepayment)}
          </Heading>
        </VStack>
      </Stack>
      <Button
        w={"332px"}
        p={"29px"}
        border={"1px solid green"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={19}
        textTransform={"uppercase"}
        textAlign={"center"}
        letterSpacing={"4.65px"}
        fontWeight={"semibold"}
        borderRadius={4}
        color={"black"}
        _hover={{ bg: "green", color: "white" }}
        transition={"all 0.3s ease"}
      >
        send Form
      </Button>
    </VStack>
  );
};

export default LoanRepayment;
