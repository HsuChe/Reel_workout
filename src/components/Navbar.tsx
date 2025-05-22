import { Box, Flex, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bgColor} px={4} borderBottom="1px" borderColor={borderColor}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold" as={RouterLink} to="/">
          Reel Workout
        </Text>

        <Flex alignItems="center" gap={4}>
          {currentUser ? (
            <>
              <Button as={RouterLink} to="/workouts" variant="ghost">
                My Workouts
              </Button>
              <Button as={RouterLink} to="/discover" variant="ghost">
                Discover
              </Button>
              <Button onClick={() => logout()} variant="ghost">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button as={RouterLink} to="/login" variant="ghost">
                Login
              </Button>
              <Button as={RouterLink} to="/signup" colorScheme="blue">
                Sign Up
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
} 