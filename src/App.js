import "./App.css";
import ListWorkloads from "./components/ListWorkloads";
import RectioDrawer, { AddWorkloadForm } from "./components/RectioDrawer";
import React from "react";
import Resources, { Metrics, Team, Settings } from "./utils/Utils";
import {
  RadarChartOutlined,
  UnorderedListOutlined,
  BoxPlotOutlined,
  UserOutlined,
  TeamOutlined,
  BellOutlined,
  QuestionCircleOutlined,
  CloudSyncOutlined,
  PlusOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Link, Route } from "react-router-dom";

import { Space, Layout, Menu, notification, Badge, Popover, Button, Divider, Descriptions } from "antd";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  addWorkload;

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      drawerVisible: {
        visible: false,
        title: "",
        content: "",
        width: "50%",
      },
    };

    this.closeRectioDrawer = this.closeRectioDrawer.bind(this);
    this.openRectioDrawerAddWorkload = this.openRectioDrawerAddWorkload.bind(this);

    this.addWorkload = new AddWorkloadForm();
    this.addWorkload.initOptions(["Meanify", "Demo", "Rectio", "Apache Hop", "Finance"]);
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  onSearch = (value) => {
    notification.info({
      message: (
        <div>
          <b>Value</b> on Search
        </div>
      ),
      description: value ? value : "The search filed is empty",
      className: "custom-class",
      duration: 1,
      style: {
        alignSelf: "flex-end",
      },
    });
    console.log(value);
  };

  closeRectioDrawer(event) {
    event.stopPropagation();
    var state = { ...this.state };
    state.drawerVisible.visible = false;
    this.setState({ state });
  }

  openRectioDrawerAddWorkload(event) {
    event.stopPropagation();
    var state = { ...this.state };
    state.drawerVisible.title = "Add a new data workload";
    state.drawerVisible.content = this.addWorkload.addWorkloadDom();
    state.drawerVisible.width = "700px";
    state.drawerVisible.visible = true;
    this.setState({ state });
  }

  showHelp(event) {
    event.stopPropagation();
    var state = { ...this.state };
    state.drawerVisible.title = "Help";
    state.drawerVisible.content = (
      <>
        <Divider orientation="left">RECTIO </Divider>
        <b>RECTIO</b> project is a solution to manage and ingest your data workloads into Kubernetes. It aims to facilitate running workloads through messages
        queues and data processing engines. <br />
        <br />
        It runs inside Kubernetes, cloud agnostic running on any cloud provider, whatever you run it on private or hybrid cloud. <br />
        <br />
        You can now have your applications, teams, departments running data workloads as they are required to at lower costs and completly managed.
        <Divider orientation="left">Support & Plugins</Divider>
        Reach out to the team to get <b>support</b> and for <b>customizations</b>.<br />
        <Divider orientation="left">Contacts</Divider>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button icon={<HomeOutlined />} type="link" target="_blank" href="https://www.meanify.org">
            www.meanify.org
          </Button>
          <Button icon={<MailOutlined />} type="link" target="_blank" href="mailto:info@meanify.org">
            info@meanify.org
          </Button>
          <Button icon={<PhoneOutlined />} type="link" target="_blank" href="tel:+351962390920">
            +351 966 380 776
          </Button>
          <Button icon={<WhatsAppOutlined />} type="link" target="_blank" href="https://wa.me/00351962390920">
            +351 966 380 776
          </Button>
        </Space>
        <Divider orientation="left">Documentation</Divider>
        <b>RECTIO</b> project is a solution to manage and ingest your data workloads into Kubernetes. It aims to facilitate running workloads through messages
        queues and data processing engines. <br />
        <br />
        It runs inside Kubernetes, cloud agnostic running on any cloud provider, whatever you run it on private or hybrid cloud. <br />
        <br />
        You can now have your applications, teams, departments running data workloads as they are required to at lower costs and completly managed. <br />
        The project is composed of 3 components: <br />
        <br />
        <ul>
          <li>
            Rectio Workloads - A custom data workloads that allows you to plug diferent engines such as Pentaho Data Integration or Appache Hop <br />
            (dependencies: Kubernetes and Rectio Workloads)
          </li>
          <li>
            Rectio Manager - For managing the data workloads into kubernetes from your own applications <br />
            (dependencies: Kubernetes and Rectio Workloads)
          </li>
          <li>
            Rectio Dashboard - For visualizazing or to trigger execution of data workloads <br />
            (dependencies: Kubernetes, Rectio Workloads and Rectio Manager)
          </li>
        </ul>
        <br />
        You can have different teams assigned with diferent resources and configurations, being also able to apply autoscalling (both vertical & horizontal) all
        based on Kubernetes stard offering.
        <br />
        <Divider orientation="left">License</Divider>
        <Button icon={<HomeOutlined />} type="link" target="_blank" href="https://www.apache.org/licenses/LICENSE-2.0">
          APACHE LICENSE, VERSION 2.0
        </Button>
      </>
    );
    state.drawerVisible.width = "30%";
    state.drawerVisible.visible = true;
    this.setState({ state });
  }

  render() {
    const { collapsed } = this.state;
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Content
              style={{
                margin: "10px 10px",
                textAlign: "center",
                lineHeight: "28px",
              }}>
              <CloudSyncOutlined style={{ fontSize: "40px", color: "white" }} />
            </Content>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                <Link to="/">Workloads</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<BoxPlotOutlined />}>
                <Link to="/resources">Resources</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<RadarChartOutlined />}>
                <Link to="/metrics">Metrics</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<TeamOutlined />} title="User">
                <Menu.Item key="4.1">
                  <Link to="/user/Finance">Finance</Link>
                </Menu.Item>
                <Menu.Item key="4.2">
                  <Link to="/user/Logistics">Logistics</Link>
                </Menu.Item>
                <Menu.Item key="4.3">
                  <Link to="/user/Human Resources">Human Resources</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="5" icon={<SettingOutlined />}>
                <Link to="/settings">Settings</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header align="right" className="site-layout-background">
              <Space>
                <Button
                  size="large"
                  type="primary"
                  shape="circle"
                  onClick={this.openRectioDrawerAddWorkload}
                  icon={<PlusOutlined style={{ fontSize: "16px" }} />}></Button>
                <Button size="large" shape="circle" onClick={(event) => this.showHelp(event)}>
                  <Badge size="small" count={0}>
                    <QuestionCircleOutlined style={{ fontSize: "16px", color: "gray" }} />
                  </Badge>
                </Button>
                <RectioDrawer
                  onClose={this.closeRectioDrawer}
                  title={this.state.drawerVisible.title}
                  content={this.state.drawerVisible.content}
                  visible={this.state.drawerVisible.visible}
                  width={this.state.drawerVisible.width}
                />
                <Popover
                  placement="bottomLeft"
                  content={
                    <>
                      <BellOutlined />
                      <span> Cost Reconciliation data workload as failed processing</span>
                    </>
                  }
                  trigger="click">
                  <Button size="large" shape="circle">
                    <Badge size="small" count={1}>
                      <BellOutlined style={{ fontSize: "16px", color: "gray" }} />
                    </Badge>
                  </Button>
                </Popover>
                <Popover placement="bottomLeft" title="Rectio User" content="Logout" trigger="click">
                  <Button size="large" shape="circle">
                    <Badge size="small" count={0}>
                      <UserOutlined style={{ fontSize: "16px", color: "gray" }} />
                    </Badge>
                  </Button>
                </Popover>
              </Space>
            </Header>
            <Content style={{ margin: "10px 10px" }}>
              <Route exact path="/">
                <ListWorkloads />
              </Route>
              <Route path="/resources">
                <Resources />
              </Route>
              <Route path="/metrics">
                <Metrics />
              </Route>
              <Route path="/user/:team">
                <Team />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default App;
