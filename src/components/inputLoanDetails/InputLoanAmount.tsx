import {
  VStack,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  HStack,
  SliderThumb,
  Heading,
} from "@chakra-ui/react";
import { FC } from "react";

interface InputLoanAmountProps {
  loanAmount: number;
  handleSliderChange: (value: number) => void;
  showTooltip: boolean;
  setShowTooltip: (value: boolean) => void;
}

const InputLoanAmount: FC<InputLoanAmountProps> = ({
  loanAmount,
  handleSliderChange,
  showTooltip,
  setShowTooltip,
}) => {
  return (
    <VStack
      w={{ base: "322px", sm: "80%", lg: "90%", xl: "535px" }}
      minW={{ lg: "400px" }}
      h={"151px"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      gap={4}
    >
      <Text
        color={"label-color"}
        fontSize={14}
        fontWeight={"bold"}
        textTransform={"capitalize"}
      >
        loan amount
      </Text>
      {/* <Input
    border={"1px solid #E0E0E0"}
    value={loanAmount}
    onChange={handleInputChange}
    type="number"
    min={10000}
    max={10000000}
    step={10000}
  /> */}
      <Slider
        id="slider"
        aria-label="slider-ex-1"
        colorScheme="green"
        defaultValue={10000}
        min={10000}
        max={10000000}
        step={10000}
        onChange={handleSliderChange}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack bg={"light-gray-slider"}>
          <SliderFilledTrack bg={"green"} />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={loanAmount.toLocaleString()}
        >
          <SliderThumb bg={"green"} boxSize={6} />
        </Tooltip>
      </Slider>

      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        alignSelf={"stretch"}
      >
        <Text color={"gray"} fontSize={14} textTransform={"capitalize"}>
          ₦ 10,000
        </Text>
        <Text color={"gray"} fontSize={14} textTransform={"capitalize"}>
          ₦ 10,000,000
        </Text>
      </HStack>
      <Heading
        as={"h3"}
        fontSize={43}
        fontWeight={"bold"}
        textAlign={"center"}
        textTransform={"capitalize"}
        w={"full"}
      >
        ₦{" "}
        {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(
          loanAmount
        )}
      </Heading>
    </VStack>
  );
};

export default InputLoanAmount;
