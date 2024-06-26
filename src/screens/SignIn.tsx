import { Center, Heading, Image, Text, VStack } from "native-base";

import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700" px={10}>
      <Image
        source={BackgroundImg}
        alt="People exercising on stationary bikes"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm">
          Treine e ascenda
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
          Acesse sua conta
        </Heading>

        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />
      </Center>
    </VStack>
  );
}
