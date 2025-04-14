import { Layout, Menu, theme, Button } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { BellOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const navItems = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About', path: '/about' },
  { key: 'services', label: 'Services', path: '/services' },
  { key: 'contact', label: 'Contact', path: '/contact' },
];

const LayoutWrapper = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          background: isScrolled ? '#180e45' : 'transparent',
          position: 'fixed',
          width: '100%',
          zIndex: 100,
          transition: 'background 0.3s ease',
        }}
      >
        <div
          className="demo-logo"
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: isScrolled ? '#fff' : '#000',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/')} 
        >
          BuildEra
        </div>
        
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={navItems.map(item => ({
            key: item.key,
            label: item.label,
            onClick: () => navigate(item.path)
          }))}
          theme= {isScrolled}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent: 'center',
            color: isScrolled ? '#fff' : '#000',
            background: isScrolled ? '#180e45' : 'transparent',
          }}
        />

        <div style={{ fontSize: '16px', fontWeight: 'bold', display: 'flex', gap: 20 }}>
          <Button type="text" icon={<LogoutOutlined />} style={{color: isScrolled ? '#fff' : '#000'}} />
          <Button type="text" icon={<BellOutlined />} style={{color: isScrolled ? '#fff' : '#000'}} />
          <Button type="text" icon={<SettingOutlined />} style={{color: isScrolled ? '#fff' : '#000'}} />
        </div>
      </Header>

      {/* Content */}
      <Content
        style={{
          padding: 0,
          minHeight: 'auto',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWrapper;
