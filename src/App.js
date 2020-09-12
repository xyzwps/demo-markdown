import React, { useState } from "react";
import logo from "./logo.svg";
import { FormControl, Row, Col, Tab, Tabs, Navbar } from "react-bootstrap";

import marked from "./md.marked";
import markdownIt from "./md.markdown-it";
import remark from "./md.remark";
import remarkable from "./md.remarkable";
import showdown from "./md.showdown";

import MarkdownPreviewer from "./md.previewer";

function App() {
  const defaultMd = `安卓\n苹果\n\n*柯南* **步美** ***光彦*** <span style="color:red">元太</span> 园子\n\n- 昌平\n- 朝阳\n* 海淀`;
  const [md, setMd] = useState(defaultMd);
  const [markedHtml, setMarkedHtml] = useState(marked(defaultMd));
  const [markdownItHtml, setMarkdownItHtml] = useState(markdownIt(defaultMd));
  const [remarkHtml, setRemarkHtml] = useState(remark(defaultMd));
  const [remarkableHtml, setRemarkableHtml] = useState(remarkable(defaultMd));
  const [showdownHtml, setShowdownHtml] = useState(showdown(defaultMd));

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" /> 几个 Markdown Parser
          的比较。这里使用的均是默认配置。请随便编辑一下看看各家的渲染结果差异
        </Navbar.Brand>
      </Navbar>
      <Row className="mx-0 py-3">
        <Col md={6}>
          <FormControl
            as="textarea"
            style={{ height: "calc(100vh - 88px)" }}
            placeholder="请在此输入 markdown"
            value={md}
            onChange={async (e) => {
              const { value } = e.target;
              setMarkedHtml(marked(value));
              setMarkdownItHtml(markdownIt(value));
              setRemarkHtml(remark(value));
              setRemarkableHtml(remarkable(value));
              setShowdownHtml(showdown(value));
              setMd(value);
            }}
          />
        </Col>
        <Col md={6}>
          <Tabs defaultActiveKey="marked" transition={false} id="noanim-tab-example">
            <Tab eventKey="remark" title="Remark">
              <MarkdownPreviewer name="remark" html={remarkHtml} />
            </Tab>
            <Tab eventKey="remarkable" title="Remarkable">
              <MarkdownPreviewer name="remarkable" html={remarkableHtml} />
            </Tab>
            <Tab eventKey="markdown-it" title="Markdown It">
              <MarkdownPreviewer name="markdown-it" html={markdownItHtml} />
            </Tab>
            <Tab eventKey="marked" title="Marked">
              <MarkdownPreviewer name="marked" html={markedHtml} />
            </Tab>
            <Tab eventKey="showdown" title="Showdown">
              <MarkdownPreviewer name="showdown" html={showdownHtml} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}

export default App;
