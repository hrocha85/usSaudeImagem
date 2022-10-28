import { Checkbox, HStack, Input, Select } from "@chakra-ui/react";

export default function IndividualizarNodulos({ numNodulo }) {
  return (
    <HStack>
      <Checkbox whiteSpace="nowrap">Nódulo {numNodulo} </Checkbox>

      <Input
        w="50px"
        h="77x"
        padding="5px"
        maxLength={2}
        textAlign="center"
        placeholder={"mm"}
      />
      <Select w="auto">
        <option value="" disabled selected>
          Posição
        </option>
        <option value="Intramural">Intramural</option>
        <option value="Subseroso">Subseroso </option>
        <option value="Submucoso">Submucoso</option>
      </Select>

      <Select w="auto">
        <option value="" disabled selected>
          Localizado
        </option>
        <option value="corporal anterior">Corporal anterior</option>
        <option value="corporal posterior">Corporal posterior</option>
        <option value="fúndica">Fúndica</option>
        <option value="lateral direita">Lateral direita</option>
        <option value="lateral esquerda">Lateral esquerda</option>
        <option value="cervical">Cervical</option>
      </Select>
    </HStack>
  );
}
