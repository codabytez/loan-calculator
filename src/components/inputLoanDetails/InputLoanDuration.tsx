import { FC } from "react";
import {
  VStack,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb,
  Heading,
} from "@chakra-ui/react";

interface InputLoanDurationProps {
  loanDuration: number;
  handleDurationSliderChange: (value: number) => void;
  showDurationTooltip: boolean;
  setShowDurationTooltip: (value: boolean) => void;
}

const InputLoanDuration: FC<InputLoanDurationProps> = ({
  loanDuration,
  handleDurationSliderChange,
  showDurationTooltip,
  setShowDurationTooltip,
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
        loan duration
      </Text>
      <Slider
        id="slider"
        aria-label="slider-ex-2"
        colorScheme="green"
        defaultValue={1}
        min={1}
        max={12}
        //   step={1}
        onChange={handleDurationSliderChange}
        onMouseEnter={() => setShowDurationTooltip(true)}
        onMouseLeave={() => setShowDurationTooltip(false)}
      >
        <SliderTrack bg={"light-gray-slider"}>
          <SliderFilledTrack bg={"green"} />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showDurationTooltip}
          label={loanDuration.toLocaleString()}
        >
          <SliderThumb bg={"green"} boxSize={6} />
        </Tooltip>
      </Slider>
      <Heading
        as={"h3"}
        fontSize={43}
        fontWeight={"bold"}
        textAlign={"center"}
        textTransform={"capitalize"}
        w={"full"}
      >
        {loanDuration} month{loanDuration > 1 ? "s" : ""}
      </Heading>
    </VStack>
  );
};

export default InputLoanDuration;
