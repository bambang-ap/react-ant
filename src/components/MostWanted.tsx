import React from "react";

import { Button, Col, Row } from "antd";

export const MostWanted = () => (
    <div>
      <Row>
        <Col span={12}>Most Wanted</Col>
        <Col span={12}>
          <Button type="link">See all</Button>
        </Col>
      </Row>
    </div>
  );
