import React from "react";

import { Col, Descriptions, Image, Row } from "antd";

export const Features = () => {
  const list = Array.from({ length: 5 });

  return (
    <Row gutter={[8, 8]}>
      {list.map(() => (
        <Col span={Math.round(22 / list.length)}>
          <Image src="https://via.placeholder.com/150x150" />
          <Descriptions>
            <Descriptions.Item>Zhou Maomao</Descriptions.Item>
          </Descriptions>
        </Col>
      ))}
    </Row>
  );
};
