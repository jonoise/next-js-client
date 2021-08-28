import { Box, Heading, Stack, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Stack justify="center" align="center" w="full" minH="100vh">
      <Box>
        <Heading>Los Junior React Boilerplate</Heading>
        <Heading>Incluye:</Heading>
        <Box pl="50" mt="5">
          <ul>
            <li>NextJS</li>
            <li>Chakra Ui</li>
            <li>Next Auth</li>
            <li>Redux</li>
            <li>Icons</li>
          </ul>
        </Box>
      </Box>
    </Stack>
  );
}
