import React, { useState } from 'react';
import { Search, GraduationCap, LayoutDashboard, Database, ClipboardList, Library, Store, Settings, LogOut, Trophy, Users, School, ChevronRight, ChevronDown, Mail, Bell, Sun, Moon } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: '1', value: 1000 },
  { name: '2', value: 800 },
  { name: '3', value: 800 },
  { name: '4', value: 1100 },
  { name: '5', value: 1000 },
  { name: '6', value: 800 },
];

const pieData = [
  { name: 'Staffs', value: 151, color: '#EF4444' },
  { name: 'Students1', value: 100, color: '#22C55E' },
  { name: 'Students2', value: 100, color: '#3B82F6' },
  { name: 'Students3', value: 200, color: '#06B6D4' }
];

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Theme colors based on your images
  const theme = {
    bg: isDarkMode ? '#1F2937' : '#F9FAFB',
    cardBg: isDarkMode ? '#374151' : '#FFFFFF',
    sidebarBg: isDarkMode ? '#111827' : '#FFFFFF',
    topbarBg: isDarkMode ? '#374151' : '#FFFFFF',
    footerBg: isDarkMode ? '#374151' : '#FFFFFF',
    text: isDarkMode ? '#F9FAFB' : '#111827',
    textSecondary: isDarkMode ? '#9CA3AF' : '#6B7280',
    border: isDarkMode ? '#4B5563' : '#E5E7EB',
    hoverBg: isDarkMode ? '#4B5563' : '#F3F4F6',
    activeBg: isDarkMode ? '#1E40AF' : '#DBEAFE',
    activeColor: '#3B82F6',
    inputBg: isDarkMode ? '#4B5563' : '#F9FAFB',
    chartGrid: isDarkMode ? '#4B5563' : '#E5E7EB',
    shadow: isDarkMode ? '0 1px 3px 0 rgba(0, 0, 0, 0.3)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
  };

  const TopBar = () => (
    <div className="fixed top-0 left-64 right-0 h-16 flex items-center justify-between px-8 z-10 border-b" 
         style={{ backgroundColor: theme.topbarBg, borderColor: theme.border }}>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Bell size={20} style={{ color: theme.textSecondary }} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="pl-10 pr-4 py-2 w-80 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: theme.inputBg, color: theme.text }}
          />
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: theme.textSecondary }} />
        </div>
        <button onClick={toggleDarkMode} className="p-2 rounded-md hover:bg-gray-100">
          {isDarkMode ? <Sun size={20} style={{ color: theme.textSecondary }} /> : <Moon size={20} style={{ color: theme.textSecondary }} />}
        </button>
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-md"
          >
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
              alt="Profile" 
              className="w-8 h-8 rounded-full"
            />
            <div className="text-left">
              <div className="font-medium" style={{ color: theme.text }}>Zulkar Ahamed</div>
              <div className="text-xs" style={{ color: theme.textSecondary }}>Student</div>
            </div>
            <ChevronDown size={16} style={{ color: theme.textSecondary }} />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50" style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.border}` }}>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100" style={{ color: theme.text }}>Profile</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100" style={{ color: theme.text }}>Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-red-500 hover:bg-red-50">Sign Out</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className="fixed left-0 top-0 w-64 h-full p-4 border-r" 
         style={{ backgroundColor: theme.sidebarBg, borderColor: theme.border }}>
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <img 
            src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Logo" 
            className="h-12 w-full object-cover rounded-md cursor-pointer"
          />
        </div>
        
        <div className="flex-1 space-y-2">
          <div className="flex items-center space-x-3 p-3 rounded-md cursor-pointer" 
               style={{ backgroundColor: theme.activeBg, color: theme.activeColor }}>
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </div>
          
          {[
            { icon: Database, text: 'Data Lab' },
            { icon: ClipboardList, text: 'Surveys' },
            { icon: Library, text: 'Library' },
            { icon: Store, text: 'Market Place' },
            { icon: Settings, text: 'Settings' }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-md cursor-pointer transition-all duration-200 hover:bg-opacity-50"
              style={{ color: theme.textSecondary }}
              onMouseEnter={(e) => e.target.style.backgroundColor = theme.hoverBg}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <item.icon size={20} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center space-x-3 p-3 rounded-md cursor-pointer text-red-500 hover:bg-red-50 transition-all duration-200">
            <LogOut size={20} />
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    </div>
  );

  const StatCard = ({ title, value, date }) => (
    <div className="rounded-lg p-6 border transition-all duration-200 hover:shadow-md" 
         style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}>
      <div className="flex flex-col space-y-2">
        <p className="text-sm" style={{ color: theme.textSecondary }}>{title}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold" style={{ color: theme.text }}>{value}</span>
          <GraduationCap size={24} style={{ color: theme.activeColor }} />
        </div>
        <p className="text-sm" style={{ color: theme.textSecondary }}>{date}</p>
      </div>
    </div>
  );

  const ActivityLogItem = ({ icon: Icon, title, description, time }) => (
    <div className="flex items-center space-x-4 p-3 rounded-md transition-all duration-200"
         style={{ ':hover': { backgroundColor: theme.hoverBg } }}>
      <div className="p-2 rounded-md" style={{ backgroundColor: isDarkMode ? '#1E40AF' : '#DBEAFE' }}>
        <Icon size={20} style={{ color: theme.activeColor }} />
      </div>
      <div className="flex-1">
        <p className="font-medium" style={{ color: theme.text }}>{title}</p>
        <p className="text-sm" style={{ color: theme.textSecondary }}>{description}</p>
      </div>
      <span className="text-sm" style={{ color: theme.textSecondary }}>{time}</span>
    </div>
  );

  const AuthMethod = ({ icon: Icon, label, value }) => (
    <div className="flex items-center space-x-3 p-3 rounded-md" style={{ backgroundColor: theme.cardBg, boxShadow: theme.shadow }}>
      <div className="p-2 rounded-md" style={{ backgroundColor: isDarkMode ? '#1E40AF' : '#DBEAFE' }}>
        <Icon size={20} style={{ color: theme.activeColor }} />
      </div>
      <div>
        <p className="text-sm" style={{ color: theme.textSecondary }}>{label}</p>
        <p className="font-bold" style={{ color: theme.text }}>{value}</p>
      </div>
    </div>
  );

  const Footer = () => (
    <div className="fixed bottom-0 left-64 right-0 border-t py-4 px-8" 
         style={{ backgroundColor: theme.footerBg, borderColor: theme.border }}>
      <div className="flex justify-between items-center">
        <p className="text-sm" style={{ color: theme.textSecondary }}>
          © 2025. Made with ❤️ by TheSahan Suresh • Simple for a better web
        </p>
        <div className="flex space-x-6">
          {['Creative Tim', 'Simmmple', 'Blog', 'License'].map((item, index) => (
            <span key={index} className="text-sm cursor-pointer" style={{ color: theme.textSecondary }}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg }}>
      <Sidebar />
      <TopBar />
      
      <div className="flex-1 p-8 ml-64 mt-16 mb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-xl font-semibold mb-2" style={{ color: theme.text }}>Welcome Admin!</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm" style={{ color: theme.textSecondary }}>Home</span>
              <ChevronRight size={16} style={{ color: theme.textSecondary }} />
              <span className="text-sm" style={{ color: theme.activeColor }}>Dashboard</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatCard title="Daily Active User" value="50345" date="18 March 2020" />
          <StatCard title="Monthly Active User" value="50345" date="18 March 2020" />
          <StatCard title="Daily Time Per Active User" value="50345" date="18 March 2020" />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="rounded-lg border p-6 transition-all duration-200 hover:shadow-md" 
               style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}>
            <div className="flex justify-between mb-4">
              <span className="font-medium" style={{ color: theme.text }}>User Activity</span>
              <span className="text-sm" style={{ color: theme.textSecondary }}>01 - 25 March, 2020</span>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme.chartGrid} />
                  <XAxis dataKey="name" stroke={theme.textSecondary} />
                  <YAxis stroke={theme.textSecondary} />
                  <RechartsTooltip 
                    contentStyle={{ 
                      backgroundColor: theme.cardBg,
                      border: `1px solid ${theme.border}`,
                      borderRadius: '8px',
                      boxShadow: theme.shadow,
                      color: theme.text
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={{ r: 5, fill: '#3B82F6' }}
                    activeDot={{ r: 7, fill: '#3B82F6' }}
                    fill="url(#colorValue)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-lg border p-6 transition-all duration-200 hover:shadow-md" 
               style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}>
            <div className="flex justify-between items-center mb-6">
              <span className="font-medium" style={{ color: theme.text }}>Active Users</span>
              <span className="font-medium" style={{ color: theme.activeColor }}>(+1051) than last week</span>
            </div>

            <div className="relative mb-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-4xl font-bold" style={{ color: theme.text }}>551</div>
                <div className="text-sm" style={{ color: theme.textSecondary }}>TOTAL USERS</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { color: '#EF4444', label: 'Staffs', value: '151' },
                { color: '#22C55E', label: 'Students', value: '100' },
                { color: '#3B82F6', label: 'Students', value: '100' },
                { color: '#06B6D4', label: 'Students', value: '100' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm" style={{ color: theme.text }}>{item.label}</span>
                  <span className="text-sm font-bold" style={{ color: theme.text }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="font-medium" style={{ color: theme.text }}>By Authentication Method</h3>
              <div className="space-y-3">
                <AuthMethod icon={Mail} label="Microsoft" value="100" />
                <AuthMethod icon={Database} label="Internal" value="100" />
                <AuthMethod icon={Mail} label="Gmail" value="100" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border p-6 transition-all duration-200 hover:shadow-md" 
             style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}>
          <div className="flex justify-between items-center mb-6">
            <span className="font-medium" style={{ color: theme.text }}>Activity Log</span>
            <Settings size={20} className="cursor-pointer" style={{ color: theme.textSecondary }} />
          </div>
          <div className="space-y-4">
            <ActivityLogItem
              icon={Trophy}
              title="VIT5678 User id here permissions changed to admin by admin VIT345667"
              description="last changed"
              time="2 hrs ago"
            />
            <ActivityLogItem
              icon={Users}
              title="VIT2567 Successfully logged-in!"
              description="last changed"
              time="2 hrs ago"
            />
            <ActivityLogItem
              icon={School}
              title="VIT5678 User id here permissions changed to admin by admin VIT345667"
              description="last changed"
              time="2 hrs ago"
            />
            <ActivityLogItem
              icon={Trophy}
              title="VIT7865 Successfully logged-in!"
              description="last changed"
              time="2 hrs ago"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}