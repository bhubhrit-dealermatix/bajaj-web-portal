import { useList } from "@refinedev/core";
import { Typography, Spin, Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const CategoriesList: React.FC = () => { 
    const navigate = useNavigate(); 
    const { data, isLoading, error } = useList({
        resource: "categories",
        
    });

    if (isLoading) {
        return <Spin size="large" style={{ display: 'block', margin: '20px auto' }} />;
    }

    if (error) {
        return <Typography.Text type="danger">Error: {error.message}</Typography.Text>;
    }

    const handleCategoryClick = (id: string) => {
        navigate(`/product-details/${id}`);
    };

    return (
        <Card style={{ margin: "20px", border:"none"}}>
          <Row gutter={16}>
              {data?.data?.map((item) => (
                  <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                      <Card
                          title={item.title}
                          style={{ textAlign: "center", marginBottom: "16px", cursor: "pointer" }}
                          onClick={() => handleCategoryClick(item.id ? item.id.toString() : '')} 
                      >
                          <Typography.Text>{`ID: ${item.id || 'N/A'}`}</Typography.Text>
                      </Card>
                  </Col>
              ))}
          </Row>
      </Card>
    );
};

export default CategoriesList;
