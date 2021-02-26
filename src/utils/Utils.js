import React from "react";
import { Empty, Card } from "antd";
import { useParams, useRouteMatch } from "react-router-dom";

const Resources = () => {
  const { param } = useParams();
  const { url, path } = useRouteMatch();
  console.log(url, path, param);
  return (
    <Card title="Resources" bordered={false}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
    </Card>
  );
};

const Metrics = () => {
  const { param } = useParams();
  const { url, path } = useRouteMatch();
  console.log(url, path, param);
  return (
    <Card title="Products" bordered={false}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
    </Card>
  );
};

const Settings = () => {
  const { param } = useParams();
  const { url, path } = useRouteMatch();
  console.log(url, path, param);
  return (
    <Card title="Settings" bordered={false}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
    </Card>
  );
};

const Team = () => {
  const { team } = useParams();
  const { url, path } = useRouteMatch();
  console.log(url, path, team);
  return (
    <Card title={"Team " + team } bordered={false}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>
    </Card>
  );
};

class Utils {
  readableBytes(bytes) {
    var i = Math.floor(Math.log(bytes) / Math.log(1024)),
      sizes = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + " " + sizes[i];
  }
}

export default Resources;
export { Metrics, Settings, Team, Utils };
