import React, { Component } from "react";
import Iframe from "react-iframe";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorLoadingIframe: false
    };
    this.timeoutId = undefined;
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ errorLoadingIframe: true });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timeoutId);
  }

  render() {
    const pgwUrl = !this.state.errorLoadingIframe
      ? "https://www.youtube.com/watch?v=otCpCn0l4Wo"
      : "notFoundUrl";

    console.log(pgwUrl);

    return (
      <div>
        <Iframe
          url={`${pgwUrl}`}
          frameBorder="0"
          onLoad={this._handleIframeLoad}
        />
      </div>
    );
  }

  _handleIframeLoad = () => {
    clearInterval(this.timeoutId);
  };
}

export default App;
