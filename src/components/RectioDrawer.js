import React from "react";

import { Drawer, Button, Form, Input, Space, Slider, Collapse, Select, Radio, InputNumber } from "antd";
import _ from "lodash";

import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

import axios from "axios";

const { Option } = Select;
const { Panel } = Collapse;

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

class AddWorkloadForm {
  children = [];

  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  };

  tailFormItemLayout = {
    labelCol: {
      xs: { offset: 0 },
      sm: { offset: 5 },
    },
    wrapperCol: {
      xs: { offset: 0 },
      sm: { offset: 5 },
    },
  };

  initialValues = {
    apiVersion: "k8s.meanify.org/v1",
    kind: "Workload",
    metadata: {
      name: "",
      labels: {
        name: "rectiowkl",
        engine: "hop",
      },
      annotations: {
        "meanify.org/rectio": "hop",
      },
    },
    context: {
      dimensions: [],
      tags: ["Demo", "Workloads", "k8s", "Apache Hop"],
    },
    spec: {
      name: "rectiowkl",
      workload: "/opt/hop/slimhop/artifacts/workload.hwf",
      loglevel: "BASIC",
      parameters: [],
      systemproperties: [],
      resources: {
        requests: {
          cpu: "500m",
          memory: "500Mi",
        },
        limits: {
          cpu: "500m",
          memory: "500Mi",
        },
      },
      activeDeadlineSeconds: 3600,
      restartPolicy: "OnFailure",
      backoffLimit: 3,
    },
  };

  constructor(options) {
    this.options = options;
  }

  initOptions(options = ["Meanify", "Demo", "Rectio", "Apache Hop", "Finance"]) {
    for (let i = 0; i < options.length; i++) {
      this.children.push(<Option key={options[i]}>{options[i]}</Option>);
    }
  }

  onFinish(values, initialValues) {
    const compiled = _.merge({}, initialValues, values);
    console.log("Default values:", initialValues);
    console.log("Received values of form:", values);
    console.log("Final request for server:", compiled);
    api
      .post("workload", compiled)
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  cpuFormatter(number) {
    return number;
  }

  addWorkloadDom() {
    return (
      <>
        <Form layout="horizontal" onFinish={(values) => this.onFinish(values, this.initialValues)} initialValues={this.initialValues} {...this.formItemLayout}>
          {/* Workload name   */}
          <Form.Item name={["metadata", "name"]} label={"Workload"} rules={[{ required: true, message: "Missing the workload name!" }]}>
            <Input placeholder="The name of the workload" />
          </Form.Item>
          {/* Tags  */}
          <Form.Item name={["context", "tags"]} label={"Tag(s)"} rules={[{ type: "array", required: true, message: "Missign at least one tag!" }]}>
            <Select mode="tags" style={{ width: "100%" }} onChange={this.handleChange}>
              {this.children}
            </Select>
          </Form.Item>
          {/* Workload file */}
          <Form.Item
            {...this.formItemLayout}
            label={"Workload"}
            name={["spec", "workload"]}
            rules={[{ required: true, message: "Please select the workload to be executed!" }]}>
            <Select
              showSearch
              style={{ width: "100%" }}
              placeholder="Select the workoad to be executed"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
              <Option value="/opt/hop/slimhop/artifacts/workload.hwf">Mainframe OffLoad</Option>
              <Option value="/opt/hop/slimhop/artifacts/workload.hwf">Migration Job</Option>
              <Option value="/opt/hop/slimhop/artifacts/workload.hwf">Margin Recalculation</Option>
              <Option value="/opt/hop/slimhop/artifacts/workload.hwf">Cost Reconciliation</Option>
              <Option value="/opt/hop/slimhop/artifacts/workload.hwf">Personal Data Validator</Option>
              <Option value="/opt/hop/slimhop/artifacts/workload.hwf">Demo</Option>
            </Select>
          </Form.Item>

          {/* Paremeters  */}
          <Form.List name={["spec", "parameters"]} label={"Parameter(s)"}>
            {(fields, { add, remove }) => (
              <Form.Item label={"Parameter(s)"} {...this.formItemLayout} required={false}>
                {fields.map((field) => (
                  <Space key={field.key} style={{ display: "flex", marginBottom: 8, height: 30 }} align="baseline">
                    <Form.Item
                      {...field}
                      name={[field.name, "key"]}
                      fieldKey={[field.fieldKey, "key"]}
                      rules={[{ required: true, message: "Missing parameter name" }]}>
                      <Input placeholder="Parameter Name" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, "value"]}
                      fieldKey={[field.fieldKey, "value"]}
                      rules={[{ required: true, message: "Missing parameter value" }]}>
                      <Input placeholder="Paremeter Value" />
                    </Form.Item>
                    <Form.Item {...field}>
                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Form.Item>
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add parameter
                  </Button>
                </Form.Item>
              </Form.Item>
            )}
          </Form.List>
          {/* System Properties  */}
          <Form.List name={["spec", "systemproperties"]} label={"Properties(s)"}>
            {(fields, { add, remove }) => (
              <Form.Item label={"Properties(s)"} {...this.formItemLayout} required={false}>
                {fields.map((field) => (
                  <Space key={field.key} style={{ display: "flex", marginBottom: 8, height: 30 }} align="baseline">
                    <Form.Item
                      {...field}
                      name={[field.name, "key"]}
                      fieldKey={[field.fieldKey, "key"]}
                      rules={[{ required: true, message: "Missing parameter name" }]}>
                      <Input placeholder="Parameter Name" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, "value"]}
                      fieldKey={[field.fieldKey, "value"]}
                      rules={[{ required: true, message: "Missing parameter value" }]}>
                      <Input placeholder="Paremeter Value" />
                    </Form.Item>
                    <Form.Item {...field}>
                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Form.Item>
                  </Space>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add system properties
                  </Button>
                </Form.Item>
              </Form.Item>
            )}
          </Form.List>

          {/* Advanced */}
          <Form.Item {...this.tailFormItemLayout}>
            <Collapse bordered={true}>
              <Panel header="Advanced Option" key="1">
                {/* logs */}
                <Form.Item
                  {...this.formItemLayout}
                  label={"Log Level"}
                  name={["spec", "loglevel"]}
                  rules={[{ required: true, message: "Please select the log level!" }]}>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Select the log level for detail"
                    optionFilterProp="children"
                    filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    <Option value="ERROR">Error</Option>
                    <Option value="MINIMAL">Minimal</Option>
                    <Option value="BASIC">Basic</Option>F<Option value="DETAILED">Detailed</Option>
                    <Option value="ROWLEVEL">Row Level</Option>
                  </Select>
                </Form.Item>
                <Form.Item name={["spec", "resources", "limits", "cpu"]} label="CPU Limits" {...this.formItemLayout}>
                  <Radio.Group defaultValue="a" size="small">
                    <Radio.Button value="250m">250m</Radio.Button>
                    <Radio.Button value="500m">500m</Radio.Button>
                    <Radio.Button value="1">1CPU</Radio.Button>
                    <Radio.Button value="2">2CPUs</Radio.Button>
                    <Radio.Button value="4">4CPUs</Radio.Button>
                    <Radio.Button value="8">8CPUs</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                {/* Memory Limits */}
                <Form.Item name={["spec", "resources", "limits", "memory"]} label="Memory Limits" {...this.formItemLayout}>
                  <Radio.Group defaultValue="a" size="small">
                    <Radio.Button value="250Mi">250Mi</Radio.Button>
                    <Radio.Button value="500Mi">500Mi</Radio.Button>
                    <Radio.Button value="1Gi">1Gi</Radio.Button>
                    <Radio.Button value="2Gi">2Gi</Radio.Button>
                    <Radio.Button value="4Gi">4Gi</Radio.Button>
                    <Radio.Button value="8Gi">8Gi</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Panel>
            </Collapse>
          </Form.Item>
          {/* Submit */}
          <Form.Item {...this.tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Send for execution
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

class RectioDrawer extends React.Component {
  render() {
    return (
      <Drawer title={this.props.title} visible={this.props.visible} width={this.props.width} onClose={this.props.onClose}>
        {this.props.content}
      </Drawer>
    );
  }
}

export default RectioDrawer;
export { AddWorkloadForm };
