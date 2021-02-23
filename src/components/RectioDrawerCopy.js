import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Button, Drawer, Form, Input, Radio, Select, DatePicker, InputNumber, Switch } from "antd";
import { PlusOutlined } from "@ant-design/icons";

class RectioDrawer extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: {
        visible: false,
        title: "",
        content: "",
        width: "50%",
      },
    };
    this.showAddWorkload = this.showAddWorkload.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  showSimple(event, title, content, width) {
    event.stopPropagation();
    this.state = {
      drawerVisible: {
        visible: true,
        title: title,
        content: { content },
        width: width,
      },
    };
  }

  showSyntaxHighlighter(event, title, content, language, width) {
    event.stopPropagation();
    this.state = {
      drawerVisible: {
        visible: true,
        title: title,
        content: (
          <SyntaxHighlighter
            language={language}
            style={a11yLight}
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
            wrapLines={true}
            showLineNumbers={false}>
            {content}
          </SyntaxHighlighter>
        ),
        width: width,
      },
    };
  }

  showAddWorkload(event, title, language, width) {
    event.stopPropagation();
    if (this._isMounted) {
      this.setState({
        drawerVisible: {
          visible: true,
          title: title,
          content: (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 24 }} layout="horizontal">
              <Form.Item label="Form Size" name="size">
                <Radio.Group>
                  <Radio.Button value="small">Small</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Input">
                <Input />
              </Form.Item>
              <Form.Item label="Select">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Date Picker">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Input Number">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Switch">
                <Switch />
              </Form.Item>
              <Form.Item label="Button">
                <Button>Button</Button>
              </Form.Item>
            </Form>
          ),
          width: width,
        },
      });
    }
  }

  showDrawerCancel(event) {
    event.stopPropagation();
    this.setState({
      drawerVisible: {
        visible: false,
        title: "",
        content: "",
        width: "50%",
      },
    });
  }

  render() {
    return (
      <Drawer
        title={this.state.drawerVisible.title}
        visible={this.state.drawerVisible.visible}
        width={this.state.drawerVisible.width}
        onClose={(event) => this.showDrawerCancel(event)}
        bodyStyle={{ paddingBottom: 80 }}>
        {this.state.drawerVisible.content}
      </Drawer>
    );
  }
}

export default RectioDrawer;
