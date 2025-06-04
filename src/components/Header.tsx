
import React from 'react';
import { Menu, Bell, Settings, User } from 'lucide-react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { toggleSidebar } from '../store/slices/uiSlice';
import { APP_CONFIG } from '../config/app.config';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useTypedSelector(state => state.auth);
  const { sidebarOpen } = useTypedSelector(state => state.ui);

  const handleToggleSidebar = () => {
    console.log('🔀 Toggling sidebar from header');
    dispatch(toggleSidebar());
  };

  const handleNotifications = () => {
    console.log('🔔 Opening notifications');
    // Handle notifications
  };

  const handleSettings = () => {
    console.log('⚙️ Opening settings');
    // Handle settings
  };

  const handleProfile = () => {
    console.log('👤 Opening profile');
    // Handle profile
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4">
        {/* Logo and Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleToggleSidebar}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">{APP_CONFIG.app.name}</h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          {/* <SearchBar 
            placeholder="Search tasks, projects, users..."
            className="w-full"
          /> */}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleNotifications}
            className="relative"
          >
            <Bell className="h-5 w-5" />
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs"></span>
          </button>

          <button
            onClick={handleSettings}
          >
            <Settings className="h-5 w-5" />
          </button>

          <button
            onClick={handleProfile}
            className="flex items-center gap-2 px-3"
          >
            <User className="h-5 w-5" />
            <span className="hidden md:inline-block">
              {user?.name || 'User'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
