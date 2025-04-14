import { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';

const dummyProducts = [
  {
    id: 1,
    title: 'Mengecat Pagar yang Kusam',
    description: 'Lihat Details',
    image: '/catpagar.jpeg',
    category: 'tools',
  },
  {
    id: 2,
    title: 'Menambal Genteng yang Bocor',
    description: 'Lihat Details',
    image: '/gentengbocor.jpeg',
    category: 'tools',
  },
  {
    id: 3,
    title: 'Memperbaiki Pipa Bocor',
    description: 'Lihat Details',
    image: '/pipabocor.jpeg',
    category: 'tools',
  },
  {
    id: 4,
    title: 'Ngecat Rumah',
    description: 'Lihat Details',
    image: '/catrumah.jpeg',
    category: 'tools',
  },
  {
    id: 5,
    title: 'Memperbaiki Dinding Bocor',
    description: 'Lihat Details',
    image: '/dindingbocor.jpeg',
    category: 'home',
  },
  {
    id: 6,
    title: 'Kursi Kayu',
    description: 'Lihat Details',
    image: '/images/kursi.jpg',
    category: 'home',
  },
  {
    id: 7,
    title: 'Meja Tulis',
    description: 'Lihat Details',
    image: '/images/meja.jpg',
    category: 'home',
  },
  {
    id: 8,
    title: 'Rak Buku',
    description: 'Lihat Details',
    image: '/images/rak.jpg',
    category: 'home',
  },
];

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  return (
    <Row gutter={[16, 16]} style={{ margin: '20px' }}>
      <Card style={{ width: '100%', textAlign: 'center', fontSize: '1rem', fontWeight: 'bold' }}>
        <h1>List Layanan</h1>
      </Card>
      {products.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={6}>
          <Card
            hoverable
            cover={<img alt={product.title} src={product.image} style={{ height: '200px', objectFit: 'cover' }} />}
          >
            <Card.Meta title={product.title} description={product.description} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
