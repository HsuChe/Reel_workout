import { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Text,
  Progress,
  Button,
  useToast,
  Heading,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

interface WorkoutSet {
  id: string;
  videoUrl: string;
  title: string;
  description: string;
  sets: number;
  reps: number;
  restTime: number; // in seconds
}

interface WorkoutPlayerProps {
  workout: WorkoutSet;
  onComplete: () => void;
}

export default function WorkoutPlayer({ workout, onComplete }: WorkoutPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [isResting, setIsResting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(workout.restTime);
  const toast = useToast();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isResting && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isResting && timeLeft === 0) {
      setIsResting(false);
      if (currentSet < workout.sets) {
        setCurrentSet((prev) => prev + 1);
      } else {
        onComplete();
      }
    }
    return () => clearInterval(timer);
  }, [isResting, timeLeft, currentSet, workout.sets, onComplete]);

  const handleSetComplete = () => {
    if (currentSet < workout.sets) {
      setIsResting(true);
      setTimeLeft(workout.restTime);
      toast({
        title: 'Rest Time',
        description: `Take a ${workout.restTime} second break before your next set`,
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
    } else {
      onComplete();
    }
  };

  return (
    <VStack spacing={6} w="full" maxW="container.md" mx="auto">
      {/* Video Player */}
      <Box
        w="full"
        h="400px"
        bg="gray.800"
        borderRadius="lg"
        position="relative"
        overflow="hidden"
      >
        {/* Placeholder for video player */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
        >
          Video Player
        </Box>
      </Box>

      {/* Workout Info */}
      <VStack spacing={2} align="start" w="full">
        <Heading size="md">{workout.title}</Heading>
        <Text color="gray.600">{workout.description}</Text>
        <Text>
          Set {currentSet} of {workout.sets} • {workout.reps} reps
        </Text>
      </VStack>

      {/* Progress */}
      <Box w="full">
        <Progress
          value={(currentSet / workout.sets) * 100}
          colorScheme="blue"
          borderRadius="full"
        />
      </Box>

      {/* Controls */}
      <HStack spacing={4}>
        <IconButton
          aria-label="Previous set"
          icon={<FaBackward />}
          isDisabled={currentSet === 1}
        />
        <Button
          leftIcon={isPlaying ? <FaPause /> : <FaPlay />}
          onClick={() => setIsPlaying(!isPlaying)}
          colorScheme="blue"
          size="lg"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        <IconButton
          aria-label="Next set"
          icon={<FaForward />}
          onClick={handleSetComplete}
          isDisabled={isResting}
        />
      </HStack>

      {/* Rest Timer */}
      {isResting && (
        <Box
          w="full"
          p={4}
          bg="blue.50"
          borderRadius="lg"
          textAlign="center"
        >
          <Text fontSize="2xl" fontWeight="bold" color="blue.500">
            Rest Time: {timeLeft}s
          </Text>
        </Box>
      )}
    </VStack>
  );
} 