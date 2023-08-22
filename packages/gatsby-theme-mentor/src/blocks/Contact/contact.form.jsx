import { yupResolver } from "@hookform/resolvers/yup";

import React, { memo, useState } from "react";

import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import * as yup from "yup";

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const phoneRegExp =
  /^$|((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "First name must be at least 3 characters long")
      .required("First name is a required field")
      .matches(/^[a-zA-Z]+$/, "First name must contain only letters"),
    lastName: yup
      .string()
      .min(3, "Last name must be at least 3 characters long")
      .required("Last name is a required field")
      .matches(/^[a-zA-Z]+$/, "Last name must contain only letters"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is a required field"),
    phone: yup
      .string()
      .nullable(true)
      .matches(phoneRegExp, "Phone number is not valid")
      .transform((_, val) => (val === val ? val : null)),
    message: yup.string().required("Message is a required field"),
    accept: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  })
  .required();

const ContactForm = memo(({ colorScheme = "brand", ...rest }) => {
  const [
    // eslint-disable-next-line no-unused-vars
    formData,
    setFormData,
  ] = useState();

  const inactiveColor = useColorModeValue("gray.600", "gray.400");
  const color = useColorModeValue("gray.600", "whiteAlpha.700");

  const {
    handleSubmit, // handels the form submit event
    register, // ties the inputs to react-form
    formState: { errors, isSubmitting }, // gets errors and "loading" state
  } = useForm({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
        setFormData(data);
        alert(JSON.stringify(data, null, 2));
      }, 4000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <VStack alignItems="center" spacing={6} {...rest}>
        <Stack
          align={["strech", "strech", "start"]}
          direction={["column", "row", "row"]}
          w="full"
          spacing={4}
        >
          <FormControl isRequired isInvalid={!!errors?.firstName}>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              id="firstName"
              placeholder="John"
              variant="flushed"
              focusBorderColor={`${colorScheme}.400`}
              _placeholder={{
                color: color,
              }}
              {...register("firstName")}
            />
            <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors?.lastName}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              id="lastName"
              placeholder="Doe"
              variant="flushed"
              focusBorderColor={`${colorScheme}.400`}
              {...register("lastName")}
            />
            <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
          </FormControl>
        </Stack>
        <Stack
          align={["strech", "strech", "start"]}
          direction={["column", "row", "row"]}
          w="full"
          spacing={4}
        >
          <FormControl isRequired isInvalid={!!errors?.email}>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="john.doe@example.com"
              variant="flushed"
              focusBorderColor={`${colorScheme}.400`}
              {...register("email")}
            />
            <FormHelperText color={color}>
              I’ll never share your email.
            </FormHelperText>
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors?.phone}>
            <FormLabel>
              Phone Number{" "}
              <Text fontSize="sm" color={color} as="span">
                (Optional)
              </Text>
            </FormLabel>
            <Input
              as={InputMask}
              variant="flushed"
              {...register("phone")}
              mask="+9 (999) 99-999-9999"
              color={color}
              focusBorderColor={`${colorScheme}.400`}
              _placeholder={{
                color: "gray.600",
              }}
            />
            <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
          </FormControl>
        </Stack>
        <FormControl isRequired isInvalid={!!errors?.message}>
          <FormLabel>How can i help you ?</FormLabel>
          <Textarea
            {...register("message")}
            placeholder="Briefly describe how i can help you ..."
            variant="flushed"
            resize="vertical"
            focusBorderColor={`${colorScheme}.400`}
          />
          <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors?.accept}>
          <Checkbox
            size="sm"
            color={errors?.accept ? "red.400" : inactiveColor}
            colorScheme={errors?.accept ? "red" : colorScheme}
            {...register("accept")}
          >
            I accept the terms & conditions and I understand that my data will
            be hold securely in accordance with the{" "}
            <Link href="#" fontWeight="600">
              privacy policy.
            </Link>
          </Checkbox>
          <FormErrorMessage>{errors?.accept?.message}</FormErrorMessage>
        </FormControl>
        <Box w="full">
          <Button
            type="submit"
            size="lg"
            width="full"
            variant="outline"
            colorScheme={colorScheme}
            isLoading={isSubmitting}
          >
            Send Your Message
          </Button>
          <Text color={inactiveColor} textAlign="center" mt={2} fontSize="sm">
            I’ll get back to you in 1-3 business days.
          </Text>
        </Box>
      </VStack>
    </form>
  );
});
ContactForm.displayName = "ContactForm";

export default ContactForm;
