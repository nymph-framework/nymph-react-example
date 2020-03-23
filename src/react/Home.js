import React from 'react';
import PropTypes from 'prop-types';


class Home extends React.Component {
  render() {
    const { message } = this.props;
    const yaat = "https://github.com/yaat-project";

    return (
      <div className="container">
        <p className="title">Yaat-React Example</p>
        <img className="logo" src="/static/image/react.gif" alt="react-gif"/>
        <p className="message">{message}</p>
        <a className="link" href={yaat}>Check out Yaat Github</a>
      </div>
    );
  }
}

Home.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Home;
