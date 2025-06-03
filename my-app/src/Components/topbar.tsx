import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Avatar,
  Text,
  useColorMode,
  useColorModeValue,
  Badge,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider
} from '@chakra-ui/react';
import { Search, Sun, Moon, Bell, LogOut, User, Settings as SettingsIcon } from 'lucide-react';
import { FC } from 'react';
import zuhar from '../zuhar.jpeg'; // Adjust the path as necessary

interface TopBarProps {
  notifications: any;
  setNotifications: (notifications: any) => void;
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
      zIndex={10}
    >
      {/* Left: Page title */}
      <Box>
        <Text fontSize="lg" fontWeight={600} color={textColor}>
          Dashboard
        </Text>
      </Box>

      {/* Spacer */}
      <Spacer />

      {/* Right Section */}
      <Flex align="center" gap={5} minW={0}>
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

        {/* Notification Icon */}
        <Box position="relative">
          <IconButton
            aria-label="Notifications"
            icon={<Bell size={16} />}
            variant="ghost"
            size="sm"
            borderRadius="full"
            color={useColorModeValue('gray.600', 'gray.400')}
            _hover={{
              bg: useColorModeValue('gray.100', 'gray.700'),
              color: useColorModeValue('gray.800', 'gray.200'),
            }}
          />
          <Badge
            position="absolute"
            top="-2px"
            right="-2px"
            colorScheme="red"
            borderRadius="full"
            fontSize="2xs"
            minW="16px"
            h="16px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            border="1px solid"
            borderColor={bgColor}
          >
            {notifications?.length || 2}
          </Badge>
        </Box>

        {/* Theme Toggle */}
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          onClick={toggleColorMode}
          variant="ghost"
          size="sm"
        />

        {/* Profile Dropdown */}
        <Box minW={0}>
          <Menu placement="bottom-end">
            <MenuButton
              as={Flex}
              align="center"
              gap={2}
              cursor="pointer"
              px={2}
              py={1}
              borderRadius="md"
              _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
            >
              <Avatar
                size="sm"
                name="Zuhar Ahamed"
                src={zuhar}
              />
           
            </MenuButton>
            <MenuList minW="150px" zIndex={20}>
              <MenuItem icon={<User size={16} />}>Profile</MenuItem>
              <MenuItem icon={<SettingsIcon size={16} />}>Settings</MenuItem>
              <MenuDivider />
              <MenuItem icon={<LogOut size={16} />} color="red.500">
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TopBar;
