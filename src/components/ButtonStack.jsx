import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

function ButtonStack({ handleAdd, handleRemove, count }) {
  return (
    <HStack mt={-6} display="flex" justifyContent="center">
      <Button colorScheme="purple" size="md" onClick={handleAdd}>
        <AddIcon />
      </Button>
      {count > 1 && (
        <Button
          colorScheme="purple"
          size="md"
          variant="outline"
          onClick={handleRemove}
        >
          <DeleteIcon />
        </Button>
      )}
    </HStack>
  );
}

export default ButtonStack;
