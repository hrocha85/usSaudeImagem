import React, { useState } from "react";

import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Newsletter = (props) => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);

  const descriptionColor = useColorModeValue(
    "whiteAlpha.700",
    "whiteAlpha.600",
  );

  return (
    <Flex align={"center"} justify={"center"} {...props}>
      <Container direction={"column"}>
        <Heading as={"h2"} size="md" textAlign={"center"} mb={5}>
          Subscribe to my weekly newsletter
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e) => {
            e.preventDefault();
            setError(false);
            setState("submitting");

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === "fail@example.com") {
                setError(true);
                setState("initial");
                return;
              }

              setState("success");
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color="whiteAlpha.800"
              bg="transparent"
              _placeholder={{
                color: "whiteAlpha.800",
              }}
              id={"email"}
              type={"email"}
              required
              placeholder={"Your Email"}
              aria-label={"Your Email"}
              value={email}
              disabled={state !== "initial"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              colorScheme={state === "success" ? "green" : "brand"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? <CheckIcon /> : "Submit"}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={"center"}
          color={error ? "red.500" : descriptionColor}
        >
          {error
            ? "Oh no an error occured! 😢 Please try again later."
            : "You won't receive any spam! ✌️"}
        </Text>
      </Container>
    </Flex>
  );
};

export default Newsletter;
