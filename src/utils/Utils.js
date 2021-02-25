import React from "react";
import { Empty, Card } from "antd";
import { useParams, useRouteMatch } from "react-router-dom";

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

class Utils {
  readableBytes(bytes) {
    var i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i];
  }
}


export default Resources;
export { Metrics, Team, Utils };
