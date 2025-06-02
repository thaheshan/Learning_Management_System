import React from 'react';
import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Image,
  Input,
  Text,
  VStack,
  HStack,
  Avatar,
  Heading,
  Icon,
  Card,
  CardBody,
  SimpleGrid,
  CircularProgress,
  CircularProgressLabel,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconProps,
} from '@chakra-ui/react';

import {
  Search,
  GraduationCap,
  LayoutDashboard,
  Database,
  ClipboardList,
  Library,
  Store,
  Settings,
  LogOut,
  Trophy,
  Users,
  School,
  ChevronRight,
  ChevronDown,
  Mail,
} from 'lucide-react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '1', value: 1000 },
  { name: '2', value: 800 },
  { name: '3', value: 800 },
  { name: '4', value: 1100 },
  { name: '5', value: 1000 },
  { name: '6', value: 800 },
];

const Sidebar = () => (
  <Box w="250px" bg="white" p={4} borderRight="1px" borderColor="gray.200" height="100vh">
    <VStack spacing={8} align="stretch" height="100%">
      <Box>
        <Image
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Logo"
          h="50px"
          objectFit="cover"
          borderRadius="md"
          cursor="pointer"
        />
      </Box>

      <VStack spacing={4} align="stretch" flex="1">
        <HStack spacing={3} color="blue.500" p={2} bg="blue.50" borderRadius="md" cursor="pointer">
          <Icon as={LayoutDashboard} />
          <Text fontWeight="medium">Dashboard</Text>
        </HStack>

        <HStack
          spacing={3}
          color="gray.600"
          p={2}
          _hover={{ bg: 'gray.50', color: 'blue.500' }}
          transition="all 0.2s"
          cursor="pointer"
        >
          <Icon as={Database} />
          <Text>Data Lab</Text>
        </HStack>

        <HStack
          spacing={3}
          color="gray.600"
          p={2}
          _hover={{ bg: 'gray.50', color: 'blue.500' }}
          transition="all 0.2s"
          cursor="pointer"
        >
          <Icon as={ClipboardList} />
          <Text>Surveys</Text>
        </HStack>

        <HStack
          spacing={3}
          color="gray.600"
          p={2}
          _hover={{ bg: 'gray.50', color: 'blue.500' }}
          transition="all 0.2s"
          cursor="pointer"
        >
          <Icon as={Library} />
          <Text>Library</Text>
        </HStack>

        <HStack
          spacing={3}
          color="gray.600"
          p={2}
          _hover={{ bg: 'gray.50', color: 'blue.500' }}
          transition="all 0.2s"
          cursor="pointer"
        >
          <Icon as={Store} />
          <Text>Market Place</Text>
        </HStack>

        <HStack
          spacing={3}
          color="gray.600"
          p={2}
          _hover={{ bg: 'gray.50', color: 'blue.500' }}
          transition="all 0.2s"
          cursor="pointer"
        >
          <Icon as={Settings} />
          <Text>Settings</Text>
        </HStack>
      </VStack>

      <Box mt="auto">
        <HStack
          spacing={3}
          color="red.500"
          p={2}
          _hover={{ bg: 'red.50' }}
          cursor="pointer"
          transition="all 0.2s"
        >
          <Icon as={LogOut} />
          <Text>Sign Out</Text>
        </HStack>
      </Box>
    </VStack>
  </Box>
);

// Add these interfaces above your component definitions
interface ActivityLogItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  time: string;
}

interface AuthenticationMethodProps {
  icon: React.ElementType;
  label: string;
  value: string | number;  // Adjust this type based on what values you expect
}

const DailyActiveUser = () => (
  <Card variant="outline" bg="white" _hover={{ shadow: 'md' }} transition="all 0.2s" cursor="default">
    <CardBody>
      <VStack align="start" spacing={2}>
        <Text color="gray.500" fontSize="sm">
          Daily Active User
        </Text>
        <HStack spacing={4} w="full">
          <Text fontSize="2xl" fontWeight="bold">
            50345
          </Text>
          <Icon as={GraduationCap} color="blue.500" />
        </HStack>
        <Text color="gray.500" fontSize="sm">
          18 March 2020
        </Text>
      </VStack>
    </CardBody>
  </Card>
);

const ActivityLogItem: React.FC<ActivityLogItemProps> = ({ icon, title, description, time }) => (
  <HStack spacing={4} p={3} _hover={{ bg: 'gray.50' }} borderRadius="md" transition="all 0.2s">
    <Box p={2} bg="blue.50" borderRadius="md">
      <Icon as={icon} color="blue.500" />
    </Box>
    <Box flex={1}>
      <Text fontWeight="medium">{title}</Text>
      <Text fontSize="sm" color="gray.500">
        {description}
      </Text>
    </Box>
    <Text fontSize="sm" color="gray.500">
      {time}
    </Text>
  </HStack>
);

const AuthenticationMethod:  React.FC<AuthenticationMethodProps> = ({ icon, label, value }) => (
  <HStack spacing={3} bg="white" p={3} borderRadius="md" shadow="sm">
    <Box p={2} bg="blue.50" borderRadius="md">
      <Icon as={icon} color="blue.500" />
    </Box>
    <VStack spacing={0} align="start">
      <Text fontSize="sm" color="gray.500">
        {label}
      </Text>
      <Text fontWeight="bold">{value}</Text>
    </VStack>
  </HStack>
);

function App() {
  return (
    <ChakraProvider>
      <Flex minH="100vh" bg="gray.50">
        <Sidebar />

        <Box flex={1} p={8}>
          <Flex justify="space-between" align="center" mb={8}>
            <Box>
              <Heading size="md" mb={2}>
                Welcome Admin!
              </Heading>
              <Breadcrumb spacing="8px" separator={<ChevronRight size={18} />}>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" color="gray.500">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#" color="blue.500">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>

            <HStack spacing={6}>
              <Box position="relative">
                <Input
                  placeholder="Search here"
                  pl={10}
                  pr={4}
                  bg="white"
                  borderRadius="md"
                  w="300px"
                  _focus={{ shadow: 'md', borderColor: 'blue.500' }}
                />
                <Icon
                  as={Search}
                  position="absolute"
                  left={3}
                  top="50%"
                  transform="translateY(-50%)"
                  color="gray.400"
                />
              </Box>

              <Menu>
                <MenuButton>
                  <HStack spacing={3} bg="white" p={2} borderRadius="md" _hover={{ shadow: 'md' }} cursor="pointer">
                    <Avatar size="sm" name="Zulkar Ahamed" bg="blue.500" />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="medium">Zulkar Ahamed</Text>
                      <Text fontSize="sm" color="gray.500">
                        Student
                      </Text>
                    </VStack>
                    <Icon as={ChevronDown} color="gray.500" />
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem cursor="pointer">Profile</MenuItem>
                  <MenuItem cursor="pointer">Settings</MenuItem>
                  <MenuItem color="red.500" cursor="pointer">
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>

          <SimpleGrid columns={3} spacing={6} mb={8}>
            <DailyActiveUser />
            <DailyActiveUser />
            <DailyActiveUser />
          </SimpleGrid>

          <SimpleGrid columns={2} spacing={6} mb={8}>
            <Card variant="outline" bg="white" _hover={{ shadow: 'md' }} transition="all 0.2s" cursor="default">
              <CardBody>
                <Flex justify="space-between" mb={4}>
                  <Text fontWeight="medium">User Activity</Text>
                  <Menu>
                    <MenuButton cursor="pointer">
                      <HStack>
                        <Text color="gray.500">Overall</Text>
                        <Icon as={ChevronDown} color="gray.500" />
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      <MenuItem cursor="pointer">Daily</MenuItem>
                      <MenuItem cursor="pointer">Weekly</MenuItem>
                      <MenuItem cursor="pointer">Monthly</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
                <Box h="300px">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3182CE" stopOpacity={0.1} />
                          <stop offset="95%" stopColor="#3182CE" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                      <XAxis dataKey="name" stroke="#718096" />
                      <YAxis stroke="#718096" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #E2E8F0',
                          borderRadius: '8px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#3182CE"
                        strokeWidth={2}
                        dot={{ r: 4, fill: '#3182CE' }}
                        activeDot={{ r: 6, fill: '#3182CE' }}
                        fill="url(#colorValue)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </CardBody>
            </Card>

            <Card variant="outline" bg="white" _hover={{ shadow: 'md' }} transition="all 0.2s" cursor="default">
              <CardBody>
                <VStack align="stretch" spacing={6}>
                  <HStack justify="space-between">
                    <Text fontWeight="medium">Active Users</Text>
                    <Text color="green.500" fontWeight="medium">
                      +4021
                    </Text>
                  </HStack>

                  <Box position="relative" display="flex" justifyContent="center">
                    <CircularProgress
                      value={75}
                      size="200px"
                      thickness="8px"
                      color="blue.400"
                      trackColor="blue.50"
                    >
                      <CircularProgressLabel>
                        <VStack spacing={0}>
                          <Text fontSize="3xl" fontWeight="bold">
                            75%
                          </Text>
                          <Text fontSize="sm" color="gray.500">
                            Progress
                          </Text>
                        </VStack>
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>

                  <Box>
                    <Text mb={4} fontWeight="medium">
                      By Authentication Method
                    </Text>
                    <SimpleGrid columns={2} spacing={4}>
                      <AuthenticationMethod icon={Database} label="Microsoft" value="100" />
                      <AuthenticationMethod icon={Users} label="Internal" value="100" />
                      <AuthenticationMethod icon={Mail} label="Email" value="100" />
                    </SimpleGrid>
                  </Box>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>

          <Card variant="outline" bg="white" _hover={{ shadow: 'md' }} transition="all 0.2s" cursor="default">
            <CardBody>
              <Flex justify="space-between" mb={6}>
                <Text fontWeight="medium">Activity Log</Text>
                <Icon as={Settings} cursor="pointer" color="gray.500" />
              </Flex>
              <VStack spacing={4} align="stretch">
                <ActivityLogItem
                  icon={Trophy}
                  title="1st place in 'Chess'"
                  description="John Doe won 1st place in 'Chess'"
                  time="1 Day ago"
                />
                <ActivityLogItem
                  icon={Users}
                  title="Participated in 'Carrom'"
                  description="Justin Lee participated in 'Carrom'"
                  time="2 hours ago"
                />
                <ActivityLogItem
                  icon={School}
                  title="International conference in 'St.John School'"
                  description="Justin Lee participated in International conference in 'St.John School'"
                  time="3 minutes ago"
                />
              </VStack>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
