import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
  IconButton,
  Avatar,
  Text
} from '@chakra-ui/react';
import { Search, Sun, Moon } from 'lucide-react';
import { FC } from 'react';

interface TopBarProps {
  notifications: any; // Replace 'any' with the actual type if known
  setNotifications: (notifications: any) => void; // Adjust type as needed
}

const TopBar: FC<TopBarProps> = ({ notifications, setNotifications }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      right={0}
      left="64"
      h="16"
      px={8}
      borderBottomWidth="1px"
      borderColor={borderColor}
      bg={bgColor}
      align="center"
      justify="space-between"
      zIndex={10}
    >
      {/* Breadcrumb or Page Title */}
      <Box>
        <Text fontSize="sm" color={textColor}>
         
        </Text>
      </Box>

      {/* Search + Mode Toggle + Profile */}
      <Flex align="center" gap={4} flexWrap="nowrap">
        {/* Search Input */}
        <InputGroup maxW="xs">
          <InputLeftElement pointerEvents="none">
            <Search size={16} aria-hidden="true" />
          </InputLeftElement>
          <Input
            placeholder="Search here"
            size="sm"
            rounded="md"
            aria-label="Search input"
          />
        </InputGroup>

        {/* Theme Toggle Button */}
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          onClick={toggleColorMode}
          variant="ghost"
          size="sm"
        />

        {/* User Profile */}
        <Flex align="center" gap={2}>
          <Avatar
            size="sm"
            name="Zuhair Ahamed"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
          />
          <Box>
            <Text fontSize="sm" fontWeight="medium">
              Zuhar Ahamed
            </Text>
            <Text fontSize="xs" color="gray.500">
              Student
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );

  
};

export default TopBar;
