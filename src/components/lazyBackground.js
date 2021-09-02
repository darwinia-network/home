import React from "react";

class LazyBackground extends React.Component {
  state = { src: null };

  componentDidMount() {
    const { src } = this.props;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src });
    };
  }

  render() {
    let divStyle;
    if (this.state.src) {
      divStyle = {
        background: `url(${this.state.src}) top center/cover no-repeat`,
      };
    } else {
      divStyle = {
        background: "#f7f7f7",
      };
    }
    return <div {...this.props} style={divStyle} />;
  }
}

export default LazyBackground;
