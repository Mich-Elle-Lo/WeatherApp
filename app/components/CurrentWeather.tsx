import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {
  temp: number;
  condition: string;
};

export default function CurrentWeather({ temp, condition }: Props) {
  return (
    <div>
      <Text>Current Weather</Text>
      <Box>
        <Text>Temp: {temp}</Text>
        <Text>Condition: {condition}</Text>
      </Box>
    </div>
  );
}
