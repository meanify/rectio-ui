import React, { useState } from "react";
import { observer, inject } from "mobx-react";
import {
  Space,
  Modal,
  Card,
  Row,
  Col,
  Button,
  Collapse,
  Statistic,
  Drawer,
  Form,
  Input,
  Badge,
  Radio,
  Select,
  Descriptions,
  DatePicker,
  InputNumber,
  Switch,
  Timeline,
  Divider,
} from "antd";

import { FiCpu } from "react-icons/fi";
import { BiMemoryCard } from "react-icons/bi";

import {
  CheckCircleOutlined,
  SlidersOutlined,
  ExportOutlined,
  HistoryOutlined,
  PauseCircleOutlined,
  UnorderedListOutlined,
  CodeOutlined,
  PlusOutlined,
  SyncOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

import * as moment from "moment";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

class ListWorkloads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: {
        visible: false,
        title: "",
        content: "",
        language: "",
        width: "50%",
      },
    };
  }

  componentDidMount() {}

  refreshOnChange() {}

  showLogs(event, name, logs, extra) {
    event.stopPropagation();
    Modal.info({
      title: "Showing " + name + " " + extra,
      content: <span class="wkllogs">{logs}</span>,
      width: "75%",
      onOk() {},
    });
  }

  showConfirm(event, name, message, extra) {
    event.stopPropagation();
    Modal.confirm({
      title: "Showing " + name + " " + extra,
      content: <span class="wkllogs">{message}</span>,
      width: "30%",
      onOk() {},
    });
  }

  showSyntaxHighlighter(event, title, content, language, width) {
    event.stopPropagation();
    this.setState({
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
        language: language,
        width: width,
      },
    });
  }

  showHistory(event, title, content, language, width) {
    event.stopPropagation();
    this.setState({
      drawerVisible: {
        visible: true,
        title: title,
        content: (
          <>
            <Divider orientation="left">Workload Timeline</Divider>
            <Descriptions size="small" column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Status">{content.history.status.conditions.succeeded ? "Successed" : "Not Available"}</Descriptions.Item>
              <Descriptions.Item label="Start time">{moment(content.history.status.startTime).format()}</Descriptions.Item>
              <Descriptions.Item label="Last transition time">{moment(content.history.status.completionTime).format()}</Descriptions.Item>
              <Descriptions.Item label="Duration">
                {content.history.status.completionTime
                  ? this.formatDuration(content.history.status.startTime, content.history.status.completionTime, true) +
                    " (" +
                    this.formatDurationDetails(content.history.status.startTime, content.history.status.completionTime, true) +
                    ")"
                  : " ... "}
              </Descriptions.Item>
            </Descriptions>
            <Divider orientation="left">Containers History</Divider>
            <Descriptions size="small" column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Host IP">{content.history.statusHistory.hostIP}</Descriptions.Item>
              <Descriptions.Item label="Pods IPs">{content.history.statusHistory.podIPs[0].ip}</Descriptions.Item>
            </Descriptions>

            <Divider orientation="left">Timeline</Divider>
            <Timeline mode="alternate">
              {content.history.statusHistory.conditions.map((value, index) => (
                <Timeline.Item label={moment(value.lastTransitionTime).format()}>{value.type}</Timeline.Item>
              ))}
            </Timeline>
          </>
        ),
        language: language,
        width: width,
      },
    });
  }

  showAddWorkload(event, title, language, width) {
    event.stopPropagation();
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

  showDrawerCancel(event) {
    event.stopPropagation();
    this.setState({
      drawerVisible: {
        visible: false,
        title: "",
        content: "",
        language: "",
        width: "50%",
      },
    });
  }

  formatDuration(start, end, format) {
    var duration = moment.duration(moment(end).diff(start));
    return duration.humanize(format);
  }

  formatDurationDetails(start, end) {
    var duration = moment.duration(moment(end).diff(start));
    if (duration.asHours() >= 1) return moment.utc(duration.asMilliseconds()).format("HH [hours,] mm [minutes and] ss [seconds] SSS [Milliseconds]");
    if (duration.asMinutes() >= 1) return moment.utc(duration.asMilliseconds()).format("mm [minutes and] ss [seconds] SSS [Milliseconds]");
    return moment.utc(duration.asMilliseconds()).format("ss [seconds] SSS [Milliseconds]");
  }

  statusIcon(status) {
    let statusButton;
    if (status == "Succeeded") {
      return <CheckCircleOutlined style={{ fontSize: "16px", color: "green" }} />;
    } else {
      if (status == "Active") {
        return <SyncOutlined spin style={{ fontSize: "16px", color: "gray" }} />;
      } else {
        return <ExclamationCircleOutlined style={{ fontSize: "16px", color: "red" }} />;
      }
    }
  }

  render() {
    const wkls = this.props.DataWorkloads;
    return (
      <Space direction="vertical" style={{ width: "100%" }}>
        <Card key="header" bordered={false}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={3}>
              <Statistic title="Total" value={wkls.total} suffix={"Workloads"} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
              <Statistic title="Active" valueStyle={{ color: "gray" }} value={wkls.active} suffix={"/" + wkls.total} prefix={<SyncOutlined spin />} />{" "}
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
              <Statistic title="Successed" valueStyle={{ color: "green" }} value={wkls.successed} suffix={"/" + wkls.total} prefix={<CheckCircleOutlined />} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
              <Statistic title="Failed" valueStyle={{ color: "red" }} value={wkls.failed} suffix={"/" + wkls.total} prefix={<ExclamationCircleOutlined />} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
              <Statistic title="CPU utilization" value={wkls.failed} suffix="m" prefix={<FiCpu />} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
              <Statistic title="Memory utilization" value={wkls.failed} suffix="Mi" prefix={<BiMemoryCard />} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
              <Statistic title="Active Workloads" value={wkls.active} prefix={<Badge status="processing" size="large" />} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} align="right">
              <Space>
                <Button
                  size="large"
                  type="primary"
                  shape="circle"
                  icon={<PlusOutlined style={{ fontSize: "16px" }} />}
                  onClick={(event) => this.showAddWorkload(event, "Creating a new data workload", "none", "40%")}></Button>
              </Space>
            </Col>
          </Row>
        </Card>
        <Collapse collapsible="header" defaultActiveKey={["1"]}>
          {[...wkls.getWorkloads().entries()].map((value, index) => (
            <Collapse.Panel
              header={
                <Row>
                  <Col span={6}>
                    <div>
                      <b>{value[0]}</b> (click for details)
                    </div>
                    <div></div>
                  </Col>
                  <Col span={3}>
                    <Space>
                      <span> {this.statusIcon(value[1].status)}</span>
                      <span> {value[1].status}</span>
                    </Space>
                  </Col>
                  <Col span={3}>
                    <Space>
                      <FieldTimeOutlined style={{ fontSize: "20px", color: "gray" }} />
                      <div>
                        {value[1].details.history.status.completionTime
                          ? "Completed in " +
                            this.formatDuration(value[1].worload.metadata.creationTimestamp, value[1].details.history.status.completionTime, false)
                          : "Started " + this.formatDuration(moment.now(), value[1].worload.metadata.creationTimestamp, false) + " ago"}
                      </div>
                    </Space>
                  </Col>
                  <Col span={6}></Col>
                  <Col span={6} align="right">
                    <Space>
                      <Button
                        align="end"
                        type="default"
                        icon={<CodeOutlined size="small" />}
                        size="small"
                        disabled={!value[1].details}
                        onClick={(event) => this.showSyntaxHighlighter(event, value[0], JSON.stringify(value[1].details, null, 2), "json", "50%")}>
                        Debug
                      </Button>
                      <Button
                        align="end"
                        type="default"
                        icon={<ExportOutlined size="small" />}
                        size="small"
                        disabled={!value[1].details.logs}
                        onClick={(event) => this.showSyntaxHighlighter(event, value[0], value[1].details.logs, "clean", "50%")}>
                        Logs
                      </Button>
                      <Button
                        align="end"
                        type="default"
                        icon={<UnorderedListOutlined size="small" />}
                        size="small"
                        disabled={Object.keys(value[1].details.history.status).length === 0 || Object.keys(value[1].details.history.statusHistory).length === 0}
                        onClick={(event) => this.showSyntaxHighlighter(event, value[0], JSON.stringify(value[1].details, null, 2), "json", "50%")}>
                        Details
                      </Button>
                      <Button
                        align="end"
                        type="default"
                        icon={<HistoryOutlined size="small" />}
                        size="small"
                        disabled={Object.keys(value[1].details.history.status).length === 0 || Object.keys(value[1].details.history.statusHistory).length === 0}
                        onClick={(event) => this.showHistory(event, value[0], value[1].details, "json", "50%")}>
                        History
                      </Button>
                      <Button
                        danger
                        align="end"
                        type="default"
                        icon={<PauseCircleOutlined size="small" />}
                        size="small"
                        disabled={value[1].details.history.status.completionTime}
                        onClick={(event) => this.showConfirm(event, value[0], "Are you sure you want to remove and kill this workload ?", "")}>
                        Kill
                      </Button>
                    </Space>
                  </Col>
                </Row>
              }
              key={value[0]}>
              <Descriptions size="small" column={{ xxl: 5, xl: 4, lg: 4, md: 3, sm: 2, xs: 1 }}>
                <Descriptions.Item label="Name">{value[0]}</Descriptions.Item>
                <Descriptions.Item label="Status">{value[1].status}</Descriptions.Item>
                <Descriptions.Item label="Active Deadline (sec.)"> {value[1].worload.spec.activeDeadlineSeconds}</Descriptions.Item>
                <Descriptions.Item label="Retries">{value[1].worload.spec.backoffLimit}</Descriptions.Item>
                <Descriptions.Item label="Active Deadline (sec.)">{value[1].worload.spec.activeDeadlineSeconds}</Descriptions.Item>
                <Descriptions.Item label="Restart Policy">{value[1].worload.spec.restartPolicy}</Descriptions.Item>
                <Descriptions.Item label="Data Pipeline" span={2}>
                  {value[1].worload.spec.workload}
                </Descriptions.Item>
                <Descriptions.Item label="Parameters">{value[1].worload.spec.parameters}</Descriptions.Item>
                <Descriptions.Item label="Properties">{value[1].worload.spec.systemproperties}</Descriptions.Item>
                <Descriptions.Item label="Request (cpu)">{value[1].worload.spec.resources.requests.cpu}</Descriptions.Item>
                <Descriptions.Item label="Request (memory)">{value[1].worload.spec.resources.requests.memory}</Descriptions.Item>
                <Descriptions.Item label="Limits (cpu)">{value[1].worload.spec.resources.limits.cpu}</Descriptions.Item>
                <Descriptions.Item label="Limits (memory)">{value[1].worload.spec.resources.limits.memory}</Descriptions.Item>
                <Descriptions.Item label="Creation Date/Time">{moment(value[1].worload.metadata.creationTimestamp).format()}</Descriptions.Item>
                <Descriptions.Item label="Completion Date/Time">
                  {value[1].details.history.status.completionTime ? moment(value[1].details.history.status.completionTime).format() : " Not available "}
                </Descriptions.Item>
                <Descriptions.Item label="Duration" span={2}>
                  {value[1].details.history.status.completionTime
                    ? this.formatDuration(value[1].worload.metadata.creationTimestamp, value[1].details.history.status.completionTime, true) +
                      " (" +
                      this.formatDurationDetails(value[1].worload.metadata.creationTimestamp, value[1].details.history.status.completionTime, true) +
                      ")"
                    : " Not available "}
                </Descriptions.Item>
                <Descriptions.Item label="Replace">replace</Descriptions.Item>
              </Descriptions>
            </Collapse.Panel>
          ))}
        </Collapse>
        <Drawer
          title={this.state.drawerVisible.title}
          visible={this.state.drawerVisible.visible}
          width={this.state.drawerVisible.width}
          onClose={(event) => this.showDrawerCancel(event)}
          >
          {this.state.drawerVisible.content}
        </Drawer>
      </Space>
    );
  }
}

export default inject("DataWorkloads")(observer(ListWorkloads));
