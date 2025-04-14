import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ padding: '40px', Width: '10vh', height:'80vh',marginTop: '5vh', textAlign: 'center' }}>
      <Title level={1}>Tentang Kami</Title>
      <Paragraph style={{ fontSize: '16px', color: '#555' }}>
        Kami adalah tim yang berdedikasi untuk memberikan layanan terbaik dalam bidang perbaikan dan renovasi rumah.
        Dengan pengalaman bertahun-tahun, kami selalu mengutamakan kualitas dan kepuasan pelanggan.
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginTop: '10vh' }}>
        <Col xs={24} sm={12} md={8}>
          <Card hoverable>
            <img src="/images/vision.jpg" alt="Visi" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <Title level={3}>Visi</Title>
            <Paragraph>Membantu masyarakat mendapatkan layanan renovasi terbaik dengan harga terjangkau.</Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card hoverable>
            <img src="/images/mission.jpg" alt="Misi" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <Title level={3}>Misi</Title>
            <Paragraph>Memberikan layanan berkualitas tinggi dengan tenaga ahli profesional.</Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card hoverable>
            <img src="/images/team.jpg" alt="Tim Kami" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <Title level={3}>Tim Kami</Title>
            <Paragraph>Kami memiliki tim yang berpengalaman dan berdedikasi dalam setiap proyek yang kami kerjakan.</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
