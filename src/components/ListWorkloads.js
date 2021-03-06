import React from "react";
import { observer, inject } from "mobx-react";
import { Space, Modal, Card, Row, Col, Button, Collapse, Statistic, Drawer, Badge, Descriptions, Timeline, Divider, Tag, BackTop, Empty } from "antd";

import Numbro from "numbro";

import { FiCpu } from "react-icons/fi";
import { BiMemoryCard } from "react-icons/bi";
import { TinyColumn, TinyArea } from "@ant-design/charts";

import {
  CheckCircleOutlined,
  ExportOutlined,
  HistoryOutlined,
  PauseCircleOutlined,
  CodeOutlined,
  SyncOutlined,
  ExclamationCircleOutlined,
  FieldTimeOutlined,
  TagOutlined,
  UnorderedListOutlined,
  DollarOutlined,
} from "@ant-design/icons";

import * as moment from "moment";

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

class ListWorkloads extends React.Component {
  numbroFormat = {
    trimMantissa: true,
    mantissa: 2,
  };

  numbroFormatByte = {
    trimMantissa: true,
    output: "byte",
    base: "binary",
    mantissa: 1,
    spaceSeparated: true,
  };

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

  formatDuration(start, end, format) {
    // nanocores
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
    if (status === "Succeeded") {
      return <CheckCircleOutlined style={{ fontSize: "16px", color: "green" }} />;
    } else {
      if (status === "Active") {
        return <SyncOutlined spin style={{ fontSize: "16px", color: "gray" }} />;
      } else {
        return <ExclamationCircleOutlined style={{ fontSize: "16px", color: "red" }} />;
      }
    }
  }

  processMetricsStats(workload, metric) {
    let metrics = workload.metrics.map((value) => {
      return parseInt(value.containers[0].usage[metric]) / (metric === "memory" ? 1 : 1000000000);
    });
    let min = Math.min(...metrics);
    let max = Math.max(...metrics);
    let avg = metrics.reduce((sum, elem) => sum + elem) / metrics.length;
    return { avg: avg, min: min, max: max };
  }

  processtinyColumnChartMetrics(workload, metric) {
    let metrics = workload.metrics.map((value) => {
      return parseInt(value.containers[0].usage[metric]) / (metric === "memory" ? 1 : 1000000000);
    });
    return metrics;
  }

  tinyColumnChart(workload, metric) {
    var data = this.processtinyColumnChartMetrics(workload, metric);
    var config = {
      title: metric,
      height: 64,
      width: 300,
      animate: false,
      columnWidthRatio: 0.9,
      autoFit: true,
      data: data,
      tooltip: {
        customContent: function customContent(x, data) {
          var _data$, _data$$data;
          return "NO."
            .concat(x, ": ")
            .concat(
              (_data$ = data[0]) === null || _data$ === void 0
                ? void 0
                : (_data$$data = _data$.data) === null || _data$$data === void 0
                ? void 0
                : _data$$data.y.toFixed(2)
            );
        },
      },
    };
    return <TinyColumn {...config} />;
  }

  tinyLineChart(workload, metric) {
    var data = this.processtinyColumnChartMetrics(workload, metric);
    data.push(0);
    data.unshift(0);
    var config = {
      height: 65,
      width: 300,
      autoFit: true,
      animate: false,
      data: data,
      smooth: true,
      annotations: [
        {
          type: "line",
          start: ["min", "min"],
          end: ["max", "min"],
          text: {
            content: "min",
            offsetY: 0,
            style: {
              textAlign: "left",
              fontSize: 10,
              fill: "rgba(44, 53, 66, 0.45)",
              textBaseline: "bottom",
            },
          },
          style: { stroke: "rgba(0, 0, 0, 0.25)" },
        },
        {
          type: "line",
          start: ["min", "mean"],
          end: ["max", "mean"],
          text: {
            content: "",
            offsetY: 0,
            style: {
              textAlign: "left",
              fontSize: 10,
              fill: "rgba(44, 53, 66, 0.45)",
              textBaseline: "top",
            },
          },
          style: { stroke: "rgba(0, 0, 0, 0.25)" },
        },
        {
          type: "line",
          start: ["min", "max"],
          end: ["max", "max"],
          text: {
            content: "max",
            offsetY: 0,
            style: {
              textAlign: "left",
              fontSize: 10,
              fill: "rgba(44, 53, 66, 0.45)",
              textBaseline: "top",
            },
          },
          style: { stroke: "rgba(0, 0, 0, 0.25)" },
        },
      ],
      tooltip: {
        customContent: function customContent(x, data) {
          var _data$, _data$$data;
          return "".concat(
            (_data$ = data[0]) === null || _data$ === void 0
              ? void 0
              : (_data$$data = _data$.data) === null || _data$$data === void 0
              ? void 0
              : _data$$data.y.toFixed(2)
          );
        },
      },
    };
    return <TinyArea {...config} />;
  }

  showLogs(event, name, logs, extra) {
    event.stopPropagation();
    const count = logs.length;
    Modal.info({
      title: "Showing " + name + " " + extra,
      content: <span class="wkllogs">{count}</span>,
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

  downloadLogs(event, title, content) {
    event.stopPropagation();
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = title + "_logs.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element); // Required for this to work in FireFox
  }

  showSyntaxHighlighter(event, title, content, language, width) {
    event.stopPropagation();
    if (language === "clean") { 
      this.setState({
        drawerVisible: {
          visible: true,
          title: title,
          content: (
            <Space>
              <div style={{ whiteSpace: "pre-wrap" }}>{content}</div>
            </Space>
          ),
          language: language,
          width: width,
        },
      });
    } else {
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
  }

  showSpecs(event, title, content, language, width) {
    event.stopPropagation();
    this.setState({
      drawerVisible: {
        visible: true,
        title: title,
        content: (
          <>
            <Divider orientation="left">Definition</Divider>
            <Descriptions size="small" column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Name" span={2}>
                {title}
              </Descriptions.Item>
              <Descriptions.Item label="Data Pipeline" span={2}>
                {content.workload.spec.workload}{" "}
              </Descriptions.Item>
            </Descriptions>
            <Divider orientation="left">Status & Restartability</Divider>
            <Descriptions size="small" column={{ xxl: 2, xl: 2, lg: 1, md: 1, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Status">{content.status}</Descriptions.Item>
              <Descriptions.Item label="Restart Policy">{content.workload.spec.restartPolicy}</Descriptions.Item>
              <Descriptions.Item label="Retries">{content.workload.spec.backoffLimit}</Descriptions.Item>
              <Descriptions.Item label="Active Deadline (sec.)">{content.workload.spec.activeDeadlineSeconds}</Descriptions.Item>
            </Descriptions>
            <Divider orientation="left">Start Time & Duration</Divider>
            <Descriptions size="small" column={{ xxl: 2, xl: 2, lg: 1, md: 1, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Creation Date/Time">{moment(content.workload.metadata.creationTimestamp).format()}</Descriptions.Item>
              <Descriptions.Item label="Completion Date/Time">
                {content.details.history.status.completionTime ? moment(content.details.history.status.completionTime).format() : " Not available "}
              </Descriptions.Item>
              <Descriptions.Item label="Duration" span={2}>
                {content.details.history.status.completionTime
                  ? this.formatDuration(content.workload.metadata.creationTimestamp, content.details.history.status.completionTime, true) +
                    " (" +
                    this.formatDurationDetails(content.workload.metadata.creationTimestamp, content.details.history.status.completionTime, true) +
                    ")"
                  : " Not available "}
              </Descriptions.Item>
              <Descriptions.Item label="Request (cpu)">{content.workload.spec.resources.requests.cpu}</Descriptions.Item>
              <Descriptions.Item label="Request (memory)">{content.workload.spec.resources.requests.memory}</Descriptions.Item>
              <Descriptions.Item label="Limits (cpu)">{content.workload.spec.resources.limits.cpu}</Descriptions.Item>
              <Descriptions.Item label="Limits (memory)">{content.workload.spec.resources.limits.memory}</Descriptions.Item>
            </Descriptions>
          </>
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
            <Descriptions size="small" column={{ xxl: 2, xl: 2, lg: 1, md: 1, sm: 1, xs: 1 }}>
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
            <Divider orientation="left">CPU consumption</Divider>
            <Row>
              {[this.processMetricsStats(content, "cpu")].map((cpu) => {
                return (
                  <>
                    <Col span="8">
                      <Statistic
                        title="Minimum"
                        valueStyle={{ color: "gray" }}
                        value={Numbro(cpu.max).format(this.numbroFormat)}
                        suffix={"core(s)"}
                        prefix={<FiCpu />}
                      />
                    </Col>
                    <Col span="8">
                      <Statistic
                        title="Maximum"
                        valueStyle={{ color: "gray" }}
                        value={Numbro(cpu.max).format(this.numbroFormat)}
                        suffix={"core(s)"}
                        prefix={<FiCpu />}
                      />
                    </Col>
                    <Col span="8">
                      <Statistic
                        title="Average"
                        valueStyle={{ color: "gray" }}
                        value={Numbro(cpu.avg).format(this.numbroFormat)}
                        suffix={"core(s)"}
                        prefix={<FiCpu />}
                      />
                    </Col>
                  </>
                );
              })}
            </Row>
            <Divider orientation="left">Memory consumption</Divider>
            <Row>
              {[this.processMetricsStats(content, "memory")].map((memory) => {
                return (
                  <>
                    <Col span="8">
                      <Statistic
                        title="Minimum"
                        valueStyle={{ color: "gray" }}
                        value={Numbro(memory.min).format(this.numbroFormatByte).split(" ")[0]}
                        suffix={Numbro(memory.min).format(this.numbroFormatByte).split(" ")[1]}
                        prefix={<BiMemoryCard />}
                      />
                    </Col>
                    <Col span="8">
                      <Statistic
                        title="Maximum"
                        valueStyle={{ color: "gray" }}
                        value={Numbro(memory.max).format(this.numbroFormatByte).split(" ")[0]}
                        suffix={Numbro(memory.max).format(this.numbroFormatByte).split(" ")[1]}
                        prefix={<BiMemoryCard />}
                      />
                    </Col>
                    <Col span="8">
                      <Statistic
                        title="Average"
                        valueStyle={{ color: "gray" }}
                        value={Numbro(memory.avg).format(this.numbroFormatByte).split(" ")[0]}
                        suffix={Numbro(memory.avg).format(this.numbroFormatByte).split(" ")[1]}
                        prefix={<BiMemoryCard />}
                      />
                    </Col>
                  </>
                );
              })}
            </Row>
          </>
        ),
        language: language,
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

  showTags(tags) {
    var elems = tags.map((text, index) => {
      return (
        <Tag key={text} color={"default"} icon={<TagOutlined />} checked={true}>
          {text}
        </Tag>
      );
    });
    return elems;
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
              <Statistic
                title="Active"
                valueStyle={{ color: "gray" }}
                value={wkls.active}
                suffix={"/" + wkls.total}
                prefix={wkls.active > 0 ? <SyncOutlined spin /> : <SyncOutlined />}
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
              <Statistic title="Successed" valueStyle={{ color: "green" }} value={wkls.successed} suffix={"/" + wkls.total} prefix={<CheckCircleOutlined />} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
              <Statistic title="Failed" valueStyle={{ color: "red" }} value={wkls.failed} suffix={"/" + wkls.total} prefix={<ExclamationCircleOutlined />} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <Statistic title="CPU utilization" value={wkls.activeResources.cpu} suffix="core(s)" prefix={<FiCpu />} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <Statistic
                title="Memory utilization"
                value={wkls.activeResources.memory.split(" ")[0]}
                suffix={wkls.activeResources.memory.split(" ")[1]}
                prefix={<BiMemoryCard />}
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <Statistic title="Active Workloads" value={wkls.active} prefix={<Badge status="processing" size="large" />} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}></Col>
          </Row>
        </Card>
        <Collapse collapsible="header" defaultActiveKey={["1"]}>
          {[...wkls.getWorkloads().entries()].map((value, index) => (
            <Collapse.Panel
              header={
                <>
                  <Row>
                    <Col xs={24} sm={24} md={10} lg={7}>
                      <div>
                        <b>{value[0]}</b> (click for details)
                      </div>
                      <div></div>
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={8}>
                      {value[1].workload.context.tags ? this.showTags(value[1].workload.context.tags) : ""}
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={3}>
                      <Space>
                        <span> {this.statusIcon(value[1].status)}</span>
                        <span> {value[1].status}</span>
                      </Space>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={4}>
                      <Space>
                        <FieldTimeOutlined style={{ fontSize: "20px", color: "gray" }} />
                        <div>
                          {value[1].details.history.status.completionTime && value[1].workload.metadata.creationTimestamp
                            ? "Completed in " +
                              this.formatDuration(value[1].workload.metadata.creationTimestamp, value[1].details.history.status.completionTime, false)
                            : "Started " + this.formatDuration(moment.now(), value[1].workload.metadata.creationTimestamp, false) + " ago"}
                        </div>
                      </Space>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "10px" }}>
                    <Col xs={24} sm={24} md={24} lg={24} align="right">
                      <Space>
                        <Button
                          key="debug"
                          align="end"
                          type="round"
                          icon={<CodeOutlined size="small" />}
                          size="small"
                          disabled={!value[1].details}
                          onClick={(event) => this.showSyntaxHighlighter(event, value[0], JSON.stringify(value[1].details, null, 2), "json", "800px")}>
                          Debug
                        </Button>
                        <Button
                          key="specs"
                          align="end"
                          type="round"
                          icon={<UnorderedListOutlined size="small" />}
                          size="small"
                          disabled={!value[1].details}
                          onClick={(event) => this.showSpecs(event, value[0], value[1], "json", "800px")}>
                          Specs
                        </Button>
                        <Button
                          key="logs"
                          align="end"
                          type="round"
                          icon={<ExportOutlined size="small" />}
                          size="small"
                          disabled={!value[1].details.logs}
                          onClick={(event) => this.showSyntaxHighlighter(event, value[0], value[1].details.logs, "clean", "800px")}>
                          Logs
                        </Button>
                        <Button
                          key="history"
                          align="end"
                          type="round"
                          icon={<HistoryOutlined size="small" />}
                          size="small"
                          disabled={
                            Object.keys(value[1].details.history.status).length === 0 || Object.keys(value[1].details.history.statusHistory).length === 0
                          }
                          onClick={(event) => this.showHistory(event, value[0], value[1].details, "json", "800px")}>
                          History
                        </Button>
                        <Button
                          danger
                          align="end"
                          type="round"
                          icon={<PauseCircleOutlined size="small" />}
                          size="small"
                          disabled={value[1].details.history.status.completionTime}
                          onClick={(event) => this.showConfirm(event, value[0], "Are you sure you want to remove and kill this workload ?", "")}>
                          Kill
                        </Button>
                      </Space>
                    </Col>
                  </Row>
                </>
              }
              key={value[0]}>
              <Row>
                <Col xs={24} sm={24} md={24} lg={10}>
                  {value[1].details.metrics ? (
                    <Row>
                      <Col span="24">
                        <Divider orientation="left">CPU consumption</Divider>
                      </Col>
                      {[this.processMetricsStats(value[1].details, "cpu")].map((cpu) => {
                        return (
                          <>
                            <Col span="8">
                              <Statistic
                                title="Minimum"
                                valueStyle={{ color: "gray" }}
                                value={Numbro(cpu.min).format(this.numbroFormat)}
                                suffix={"core(s)"}
                                prefix={<FiCpu />}
                              />
                            </Col>
                            <Col span="8">
                              <Statistic
                                title="Maximum"
                                valueStyle={{ color: "gray" }}
                                value={Numbro(cpu.max).format(this.numbroFormat)}
                                suffix={"core(s)"}
                                prefix={<FiCpu />}
                              />
                            </Col>
                            <Col span="8">
                              <Statistic
                                title="Average"
                                valueStyle={{ color: "gray" }}
                                value={Numbro(cpu.avg).format(this.numbroFormat)}
                                suffix={"core(s)"}
                                prefix={<FiCpu />}
                              />
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  ) : (
                    <Col span="24">
                      <Divider orientation="left">CPU consumption</Divider>
                      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    </Col>
                  )}
                </Col>
                <Col xs={24} sm={24} md={24} lg={10}>
                  {value[1].details.metrics ? (
                    <Row>
                      <Col span="24">
                        <Divider orientation="left">Memory consumption</Divider>
                      </Col>
                      {[this.processMetricsStats(value[1].details, "memory")].map((memory) => {
                        return (
                          <>
                            <Col span="8">
                              <Statistic
                                key=""
                                title="Minimum"
                                valueStyle={{ color: "gray" }}
                                value={Numbro(memory.min).format(this.numbroFormatByte).split(" ")[0]}
                                suffix={Numbro(memory.min).format(this.numbroFormatByte).split(" ")[1]}
                                prefix={<BiMemoryCard />}
                              />
                            </Col>
                            <Col span="8">
                              <Statistic
                                title="Maximum"
                                valueStyle={{ color: "gray" }}
                                value={Numbro(memory.max).format(this.numbroFormatByte).split(" ")[0]}
                                suffix={Numbro(memory.max).format(this.numbroFormatByte).split(" ")[1]}
                                prefix={<BiMemoryCard />}
                              />
                            </Col>
                            <Col span="8">
                              <Statistic
                                title="Average"
                                valueStyle={{ color: "gray" }}
                                value={Numbro(memory.avg).format(this.numbroFormatByte).split(" ")[0]}
                                suffix={Numbro(memory.avg).format(this.numbroFormatByte).split(" ")[1]}
                                prefix={<BiMemoryCard />}
                              />
                            </Col>
                          </>
                        );
                      })}
                    </Row>
                  ) : (
                    <Col span="24">
                      <Divider orientation="left">Memory consumption</Divider>
                      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                    </Col>
                  )}
                </Col>
                <Col xs={24} sm={24} md={24} lg={4}>
                  <Divider orientation="left">Cost(s)</Divider>
                  <Statistic title="Cost(s)" valueStyle={{ color: "gray" }} value={"-"} suffix={"$"} prefix={<DollarOutlined />} />
                </Col>
              </Row>
            </Collapse.Panel>
          ))}
        </Collapse>
        <Drawer
          title={this.state.drawerVisible.title}
          visible={this.state.drawerVisible.visible}
          width={this.state.drawerVisible.width}
          onClose={(event) => this.showDrawerCancel(event)}>
          {this.state.drawerVisible.content}
        </Drawer>
        <BackTop />
        <strong className="site-back-top-basic"> </strong>
      </Space>
    );
  }
}

export default inject("DataWorkloads")(observer(ListWorkloads));
