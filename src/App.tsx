import { ExternalLinkIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const Icon = colorMode === 'light' ? MoonIcon : SunIcon

  return (
    <IconButton
      aria-label="Toggle color mode"
      variant="ghost"
      onClick={toggleColorMode}
      icon={<Icon />}
    />
  )
}

function App() {
  const accentColor = useColorModeValue('purple.500', 'purple.200')

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')} py={{ base: 10, md: 20 }}>
      <Container maxW="4xl">
        <Stack spacing={12}>
          <HStack justify="space-between" align="center">
            <Heading size="lg">Vite + React + Chakra UI</Heading>
            <ColorModeToggle />
          </HStack>

          <Stack spacing={6} align="center">
            <HStack spacing={8}>
              <Link href="https://vitejs.dev" isExternal>
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </Link>
              <Link href="https://react.dev" isExternal>
                <img src={reactLogo} className="logo react" alt="React logo" />
              </Link>
            </HStack>

            <Heading as="h1" size="2xl" textAlign="center">
              Welcome to your Chakra powered Vite app
            </Heading>
            <Text fontSize="lg" textAlign="center" color={useColorModeValue('gray.600', 'gray.300')}>
              Explore Chakra UI components and rapid development with React and Vite. Modify{' '}
              <Text as="span" color={accentColor} fontFamily="mono" fontWeight="semibold">
                src/App.tsx
              </Text>{' '}
              to get started.
            </Text>

            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button as={Link} href="https://chakra-ui.com/getting-started" target="_blank" rel="noreferrer" colorScheme="purple">
                Chakra UI Docs <ExternalLinkIcon mx="2px" />
              </Button>
              <Button as={Link} href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer" variant="outline">
                Vite Guide <ExternalLinkIcon mx="2px" />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default App
