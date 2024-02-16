import { FC, useState } from "react";
import {
  VStack,
  Text,
  Input,
  Radio,
  RadioGroup,
  HStack,
  Stack,
} from "@chakra-ui/react";

interface InputLoanDepositModeProps {
  selectPayment: string;
  setSelectPayment: (value: string) => void;
  interest: number;
  setInterest: (value: number) => void;
}

const InputLoanDepositMode: FC<InputLoanDepositModeProps> = ({
  selectPayment,
  setSelectPayment,
  interest,
  setInterest,
}) => {
  const [tempInterest, setTempInterest] = useState(interest);

  const handleBlur = () => {
    setInterest(Number(tempInterest));
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setInterest(Number(tempInterest));
      (event.currentTarget as HTMLElement).blur();
    }
  };

  return (
    <VStack
      h={"238px"}
      w={"full"}
      justifyContent={"center"}
      alignItems={{ base: "flex-start", sm: "center", lg: "flex-start" }}
      gap={12}
    >
      <VStack
        gap={6}
        alignItems={"flex-start"}
        w={{ base: "322px", sm: "80%", lg: "90%", xl: "535px" }}
        minW={{ lg: "400px" }}
        h={"124"}
        justifyContent={"center"}
      >
        <VStack
          h={"49px"}
          w={"full"}
          p={"8px 0 8px 8px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          alignSelf={"stretch"}
          gap={2}
        >
          <HStack
            justifyContent={"space-between"}
            w={"full"}
            h={5}
            alignSelf={"stretch"}
          >
            <Text
              color={"green"}
              fontSize={17}
              fontWeight={"semibold"}
              textTransform={"capitalize"}
            >
              Monthly Rate %
            </Text>
            <Text
              color={"green"}
              fontSize={17}
              fontWeight={"semibold"}
              textTransform={"capitalize"}
            >
              Input interest Rate
            </Text>
          </HStack>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="2"
            viewBox="0 0 323 1"
            fill="none"
          >
            <path d="M0 1H323" stroke="black" />
          </svg>
        </VStack>
        <HStack
          justifyContent={"space-between"}
          w={"full"}
          h={"52px"}
          alignSelf={"stretch"}
        >
          <Text
            textAlign={"left"}
            fontSize={29}
            fontWeight={"semibold"}
            textTransform={"capitalize"}
          >
            {interest && interest + " " + "%"}
          </Text>
          <Input
            border={"1px solid #E0E0E0"}
            w={"100px"}
            h={"53px"}
            type={"text"}
            value={tempInterest}
            onChange={(e) => setTempInterest(Number(e.target.value))}
            onBlur={handleBlur}
            onKeyDown={handleKeyPress}
          />
        </HStack>
      </VStack>
      <RadioGroup
        onChange={setSelectPayment}
        value={selectPayment}
        w={{ base: "322px", sm: "80%", lg: "90%", xl: "535px" }}
        minW={{ lg: "400px" }}
      >
        <Stack
          gap={5}
          flexDir={{ base: "column", sm: "row" }}
          alignItems={"flex-start"}
          justifyContent={{
            base: "center",
            sm: "space-between",
            xl: "space-between",
          }}
          w={"full"}
        >
          <Radio value="bank" border={"1px solid green"}>
            <Text
              fontSize={17}
              fontWeight={"semibold"}
              textTransform={"capitalize"}
            >
              deposit Bank transfer
            </Text>
          </Radio>
          <Radio value="cash" border={"1px solid green"}>
            <Text
              fontSize={17}
              fontWeight={"semibold"}
              textTransform={"capitalize"}
            >
              cash
            </Text>
          </Radio>
        </Stack>
      </RadioGroup>
      In
    </VStack>
  );
};

export default InputLoanDepositMode;
