import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const Header = (logo, navItems) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: '#001529', // Warna latar belakang header (dark theme)
        color: '#fff',
      }}
    >
      {/* Logo */}
      <div
        className="demo-logo"
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#fff',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        {logo}
      </div>

      {/* Navigasi */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={navItems}
        onClick={({ key }) => navigate(`/${key}`)}
        style={{
          flex: 1,
          minWidth: 0,
          justifyContent: 'flex-end',
        }}
      />
    </div>
  );
};

export default Header;