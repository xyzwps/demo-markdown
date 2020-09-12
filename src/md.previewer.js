import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import prettier from "./fmt.html";

export default ({ html, name }) => {
  return (
    <>
      <Row>
        <Col>
          <Card className="rounded-0">
            <Card.Header>【{name}】Markdown 原文字符串</Card.Header>
            <Card.Body>
              <p>
                <code>{JSON.stringify(html)}</code>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="rounded-0">
            <Card.Header>【{name}】格式化后的 Markdown</Card.Header>
            <Card.Body>
              <pre>{prettier(html)}</pre>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="rounded-0">
            <Card.Header>【{name}】渲染结果</Card.Header>
            <Card.Body>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
