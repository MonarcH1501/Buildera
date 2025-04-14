import { Card, Row, Col } from "antd";

const founders = [
  {
    id: 1,
    name: "Vita",
    role: "Co-Founder & Hipster",
    image: "/founder/vita.jpg",
    quote: "Building a great company starts with a great team.",
  },
  {
    id: 2,
    name: "Cello Fibryan Girl",
    role: "Co-Founder & Hipster",
    image: "/founder/cello.jpg",
    quote: "Technology should empower people, not replace them.",
  },
  {
    id: 3,
    name: "Ryan Febrianto",
    role: "Co-Founder & Hushtler",
    image: "/founder/ryan.jpg",
    quote: "Success is built on strong financial strategies.",
  },
  {
    id: 3,
    name: "Steven Edmund Pratama",
    role: "Founder & Hacker",
    image: "/founder/steven.jpg",
    quote: "Success is built on strong financial strategies.",
  },
];

const Founder = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>
        Meet The <span style={{ color: "#6C63FF" }}>Founders</span>
      </h1>
      <p style={{ maxWidth: "600px", margin: "auto", color: "#555" }}>
        Our leadership team is dedicated to innovation and excellence, driving
        our company towards a brighter future.
      </p>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "40px" }}>
        {founders.map((founder) => (
          <Col key={founder.id} xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{
                textAlign: "center",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <div style={{ position: "relative", marginBottom: "15px" }}>
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #6C63FF",
                  }}
                />
              </div>
              <p style={{ fontStyle: "italic", color: "#666" }}>
                &ldquo;{founder.quote}&rdquo;
              </p>
              <h3 style={{ margin: "10px 0 5px" }}>{founder.name}</h3>
              <p style={{ color: "#999", fontSize: "14px" }}>{founder.role}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Founder;
