import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {
  temp: number;
  condition: string;
};

export default function CurrentWeather({ temp, condition }: Props) {
  const MotionBox = motion(Box);

  return (
    <MotionBox
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="rounded-lg shadow-lg p-6"
    >
      <Text fontSize="6xl" fontWeight="bold">
        Current Weather
      </Text>
      <Box>
        <Text fontSize="6xl" fontWeight="bold">
          Temp: {temp}
        </Text>
        <Text fontSize="2xl" fontStyle="italic">
          Condition: {condition}
        </Text>
      </Box>
    </MotionBox>
  );
}
