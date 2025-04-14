import { useEffect, useState } from 'react';
import { Row, Col, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const TukangList = () => {
  const [tukangs, setTukangs] = useState([]);

  useEffect(() => {
    // Menggunakan data dummy karena tidak ada API publik
    const dummyTukangs = [
      {
        id: 1,
        name: 'Budi Santoso',
        description: 'Spesialis kayu dan furniture custom.',
        location: 'Jakarta',
        image: '/tukang/tukang1.jpg',
      },
      {
        id: 2,
        name: 'Joko Prasetyo',
        description: 'Ahli dalam perbaikan rumah dan atap bocor.',
        location: 'Bandung',
        image: '/tukang/tukang2.jpeg',
      },
      {
        id: 3,
        name: 'Samsul Hadi',
        description: 'Pekerja konstruksi dengan pengalaman 10 tahun.',
        location: 'Surabaya',
        image: '/tukang/tukang3.jpeg',
      },
      {
        id: 4,
        name: 'Rudi Hartono',
        description: 'Tukang listrik dan instalasi rumah tangga.',
        location: 'Yogyakarta',
        image: '/tukang/tukang4.jpeg',
      },
    ];
    
    setTukangs(dummyTukangs);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Daftar Tukang Profesional</Title>
      <Row gutter={[16, 16]}>
        {tukangs.map((tukang) => (
          <Col key={tukang.id} xs={24} sm={12} md={6}>
            <Card
              hoverable
              cover={<img alt={tukang.name} src={tukang.image} style={{ height: '200px', objectFit: 'cover' }} />}
            >
              <Title level={4}>{tukang.name}</Title>
              <Paragraph>{tukang.description}</Paragraph>
              <Paragraph><strong>Lokasi:</strong> {tukang.location}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TukangList;
