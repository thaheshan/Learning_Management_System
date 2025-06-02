// src/App.tsx
import { ChakraProvider, Box } from '@chakra-ui/react';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import { chartData, defaultNotifications, pieData, recentUsers } from './utils/data';
import theme from './theme';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(defaultNotifications);

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <TopBar notifications={notifications} setNotifications={setNotifications} />
        
        {activeTab === 'dashboard' && (
          <Dashboard 
            chartData={chartData}
            pieData={pieData}
         
          />
        )}
        
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
