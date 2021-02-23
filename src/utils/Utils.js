import React from "react";
import { Empty, Card } from "antd";
import { useParams, useRouteMatch, useLocation } from "react-router-dom";

import { Button, Form, Input, Radio, Select, InputNumber, DatePicker, Switch } from "antd";

const Resources = () => {
  const { param } = useParams();
  const { url, path } = useRouteMatch();
  console.log(url, path, param);
  return (
    <Card title="Resources" bordered={false}>
      <Empty></Empty>
    </Card>
  );
};

const Metrics = () => {
  const { param } = useParams();
  const { url, path } = useRouteMatch();
  console.log(url, path, param);
  return (
    <Card title="Products" bordered={false}>
      <Empty></Empty>
    </Card>
  );
};

const Team = () => {
  const { team } = useParams();
  const { url, path } = useRouteMatch();
  console.log(url, path, team);
  return (
    <Card title="Team" bordered={false}>
      {team}
    </Card>
  );
};

const AddWorkloadForm = () => {
  return (
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
  );
};

export default Resources;
export { Metrics, Team, AddWorkloadForm };
