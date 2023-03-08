import { Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={toggleColorMode}
      colorScheme="gray"
      bgColor="transparent"
      p="2px 4px"
    >
      {colorMode === "dark" ? (
        <SunIcon color="yellow.500" fontSize="2xl" />
      ) : (
        <MoonIcon color="blue.700" fontSize="2xl" />
      )}
    </Button>
  );
}

export default ThemeSwitcher;
