import React from "react";

import { Drawer } from "antd";

class RectioDrawer extends React.Component {
  /*
  constructor(props) {
    super(props);
  }
  */

  render() {
    return (
      <Drawer title={this.props.title} visible={this.props.visible} width={this.props.width} onClose={this.props.onClose}>
        {this.props.content}
      </Drawer>
    );
  }
}

export default RectioDrawer;
