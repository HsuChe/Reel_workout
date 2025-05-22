import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaPlay, FaClock, FaDumbbell, FaBrain } from 'react-icons/fa';

export default function Home() {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  const features = [
    {
      icon: FaPlay,
      title: 'Video-Based Workouts',
      description: 'Follow along with engaging workout reels from popular creators',
    },
    {
      icon: FaClock,
      title: 'Smart Rest Timer',
      description: 'Automated rest periods between sets for optimal recovery',
    },
    {
      icon: FaDumbbell,
      title: 'Custom Workouts',
      description: 'Create and save your favorite workout routines',
    },
    {
      icon: FaBrain,
      title: 'AI-Powered Guidance',
      description: 'Get intelligent workout recommendations and form tips',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20}>
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8}>
            <Box flex={1}>
              <Heading as="h1" size="2xl" mb={4}>
                Transform Your Workout with Reels
              </Heading>
              <Text fontSize="xl" mb={8}>
                Follow along with engaging workout videos, get smart rest periods, and achieve your fitness goals with our AI-powered platform.
              </Text>
              <Button
                as={RouterLink}
                to="/discover"
                size="lg"
                colorScheme="whiteAlpha"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                Start Working Out
              </Button>
            </Box>
            <Box flex={1} position="relative" h="400px">
              {/* Placeholder for video preview */}
              <Box
                w="full"
                h="full"
                bg="gray.700"
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text>Video Preview</Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature, index) => (
            <VStack
              key={index}
              bg={bgColor}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              align="start"
              spacing={4}
            >
              <Icon as={feature.icon} w={8} h={8} color="blue.500" />
              <Heading size="md">{feature.title}</Heading>
              <Text color={textColor}>{feature.description}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 