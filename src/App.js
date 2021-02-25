import "./App.css";
import ListWorkloads from "./components/ListWorkloads";
import RectioDrawer, {AddWorkloadForm} from "./components/RectioDrawer";
import React from "react";
import Resources, { Metrics, Team} from "./utils/Utils";
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
} from "@ant-design/icons";

import { Link, Route } from "react-router-dom";

import { Space, Layout, Menu, notification, Badge, Popover, Button} from "antd";

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

    this.addWorkload = new AddWorkloadForm()
    this.addWorkload.initOptions(["Meanify", "Demo", "Rectio", "Apache Hop", "Finance"])
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
    state.drawerVisible.content = ( this.addWorkload.addWorkloadDom() );
    state.drawerVisible.width = "700px";
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
                <Menu.Item key="4">
                  <Link to="/user/Finance">Finance</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/user/Logistics">Logistics</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/user/Human Resources">Human Resources</Link>
                </Menu.Item>
              </SubMenu>
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
                <Button size="large" shape="circle">
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
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default App;
