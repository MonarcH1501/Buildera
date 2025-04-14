import { Carousel } from 'antd';

const Banner = () => {
  const bannerStyle = {
    position: 'relative',
    width: '100%',
    height: '80vh',
  };

  const imgStyle = {
    width: '100%',
    height: '80vh',
    objectFit: 'cover',
  };

  const textOverlay = {
    position: 'relative',
    top: '0',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '10px 20px',
    borderRadius: '10px',
  };

  return (
    <Carousel autoplay>
      <div style={bannerStyle}>
        <img src="/images/banner3.jpg" alt="Banner 1" style={imgStyle} />
        <div style={textOverlay}>Selamat Datang di Toko Kami!</div>
      </div>
      <div style={bannerStyle}>
        <img src="/images/banner2.jpg" alt="Banner 2" style={imgStyle} />
      </div>
      <div style={bannerStyle}>
        <img src="/images/banner1.jpg" alt="Banner 3" style={imgStyle} />
      </div>
    </Carousel>
  );
};

export default Banner;
