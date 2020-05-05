import { Layout } from 'antd';
import React, { useState } from 'react';
import { User } from 'src/models/users';
import NewRequestModal from 'src/modules/request/containers/NewRequestModal/NewRequestModal';

import BottomNavbar from '../BottomNavbar/BottomNavbar';
import MenuDrawer from '../MenuDrawer/MenuDrawer';
import NotificationsDrawer from '../NotificationsDrawer/NotificationsDrawer';
import { MenuItem } from '../SideDrawerMenu/SideDrawerMenu';
import TopNavbar from '../TopNavbar/TopNavbar';

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  menuItems,
  profileData,
  children,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [newRequestModalVisible, setNewRequestModalVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  return (
    <Layout>
      <TopNavbar />
      <MenuDrawer
        visible={menuVisible}
        closeDrawer={() => setMenuVisible(false)}
        menuItems={menuItems}
        profileData={profileData}
      />
      <NotificationsDrawer
        visible={notificationVisible}
        closeDrawer={() => setNotificationVisible(false)}
      />
      <Layout.Content style={{ marginTop: '64px', marginBottom: '64px' }}>
        {children}
      </Layout.Content>
      <BottomNavbar
        openMenu={() => setMenuVisible(true)}
        openNewRequestModal={() => setNewRequestModalVisible(true)}
        openNotifications={() => setNotificationVisible(true)}
      />
      {newRequestModalVisible && (
        <NewRequestModal
          showModal={newRequestModalVisible}
          closeModal={() => setNewRequestModalVisible(false)}
        />
      )}
    </Layout>
  );
};

interface DashboardLayoutProps {
  menuItems?: Array<MenuItem>;
  profileData: User;
  children?: React.ReactNode;
}

export default DashboardLayout;
