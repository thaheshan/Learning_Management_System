import { 
  Box, 
  Button, 
  Flex, 
  HStack, 
  Heading, 
  Stack, 
  Text, 
  useColorMode,
  useColorModeValue,
  IconButton,
  Badge,
  Image
} from '@chakra-ui/react';
import { 
  ClipboardList, 
  Database, 
  LayoutDashboard, 
  Library, 
  LogOut, 
  Settings, 
  Store, 
  Users,
  Bell
} from 'lucide-react';
import { SidebarItemProps } from '../types';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (key: string) => void;
}

// Logo Component
const Logo = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" w="full" py={4}>
      <Image 
        src="../SCHOOL LOGO.png" 
        alt="School Logo" 
        w={{ base: "60px", md: "120px" }}
        h={{ base: "60px", md: "120px" }}
        objectFit="contain"
        fallback={
          <Box 
            w={{ base: "60px", md: "120px" }}
            h={{ base: "60px", md: "120px" }}
            bg="gray.200"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
              Logo
            </Text>
          </Box>
        }
      />
    </Box>
  );
};

const SidebarItem = ({ icon: Icon, text, key, active, onClick }: SidebarItemProps) => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const activeBg = useColorModeValue('blue.50', 'blue.900');
  const activeColor = useColorModeValue('blue.600', 'blue.200');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  
  return (
    <Button
      variant="ghost"
      justifyContent="flex-start"
      alignItems="center"
      width="full"
      py={3}
      px={3}
      borderRadius="xl"
      fontSize="md"
      fontWeight={active ? 'semibold' : 'medium'}
      leftIcon={<Icon size={20} />}
      bg={active ? activeBg : 'transparent'}
      color={active ? activeColor : textColor}
      _hover={{ bg: bgColor }}
      onClick={onClick}
    >
      <Text display={{ base: "none", md: "block" }}>{text}</Text>
      {active && (
        <Box ml="auto" w="6px" h="6px" borderRadius="full" bg={activeColor} />
      )}
    </Button>
  );
};

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const statsBgColor = useColorModeValue('gray.50', 'gray.700');
  
  const sidebarItems = [
    { icon: LayoutDashboard, text: 'Dashboard', key: 'dashboard' },
    { icon: Users, text: 'User Management', key: 'users' },
    { icon: Database, text: 'Data Analytics', key: 'data' },
    { icon: ClipboardList, text: 'Surveys & Forms', key: 'surveys' },
    { icon: Library, text: 'Resource Library', key: 'library' },
    { icon: Store, text: 'Marketplace', key: 'market' },
    { icon: Settings, text: 'System Settings', key: 'settings' }
  ];

  return (
    <Box
      as="aside"
      position="fixed"
      left={0}
      top={0}
      w={{ base: "16", sm: "20", md: "64" }}
      h="100vh"
      borderRightWidth="1px"
      borderColor={borderColor}
      bg={bgColor}
      zIndex={10}
      overflow="hidden"
    >
      <Flex direction="column" h="full" position="relative">
        {/* Notification Bell - Top Left Corner */}
        <Box 
          position="absolute" 
          top={3} 
          left={3} 
          zIndex={20}
          display={{ base: "block", md: "block" }}
        >
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
                color: useColorModeValue('gray.800', 'gray.200')
              }}
            />
            {/* Notification Badge */}
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
              3
            </Badge>
          </Box>
        </Box>

        {/* Logo Section - Centered and Larger */}
        <Box pt={6} pb={4}>
          <Logo />
        </Box>
        
        {/* Navigation Items */}
        <Box px={{ base: 2, md: 4 }} flex={1}>
          <Stack spacing={1} overflow="auto">
            {sidebarItems.map(item => (
              <SidebarItem 
                key={item.key}
                icon={item.icon}
                text={item.text}
                active={activeTab === item.key}
                onClick={() => setActiveTab(item.key)}
              />
            ))}
          </Stack>
        </Box>
        
        {/* Footer Section */}
        <Box px={{ base: 2, md: 4 }} pb={4}>
          <Stack spacing={4}>
            <Box 
              p={3} 
              borderRadius="xl" 
              bg={statsBgColor} 
              borderWidth="1px" 
              borderColor={borderColor}
              display={{ base: "none", md: "block" }}
            >
              <Text fontWeight="medium" mb={2} color={textColor} fontSize="sm">
                Quick Stats
              </Text>
              <Stack spacing={2}>
                <Flex justify="space-between">
                  <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>
                    Online Users
                  </Text>
                  <Text fontSize="xs" fontWeight="bold" color="green.500">127</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>
                    System Health
                  </Text>
                  <Text fontSize="xs" fontWeight="bold" color="green.500">98%</Text>
                </Flex>
              </Stack>
            </Box>
            
            <Button
              leftIcon={<LogOut size={18} />}
              colorScheme="red"
              variant="ghost"
              justifyContent="flex-start"
              borderRadius="xl"
              size="sm"
              fontSize="sm"
            >
              <Text display={{ base: "none", md: "block" }}>Sign Out</Text>
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;