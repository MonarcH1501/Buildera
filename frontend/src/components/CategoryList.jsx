import { Row, Col, Card } from 'antd';

const categories = [
  { id: 1, name: 'Electronics', icon: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Fashion', icon: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Home & Kitchen', icon: 'https://via.placeholder.com/100' },
  { id: 4, name: 'Books', icon: 'https://via.placeholder.com/100' },
];

const CategoryList = () => {
  return (
    <Row gutter={[16, 16]} style={{ margin: '20px' }}>
      {categories.map((category) => (
        <Col key={category.id} xs={24} sm={12} md={6}>
          <Card hoverable cover={<img alt={category.name} src={category.icon} />}>
            <Card.Meta title={category.name} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CategoryList;