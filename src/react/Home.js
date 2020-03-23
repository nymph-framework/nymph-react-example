import React from 'react';
import PropTypes from 'prop-types';


class Home extends React.Component {
  render() {
    const { message } = this.props;

    return (
      <div className="container">
        <p className="title">Nymph-React Example</p>
        <p className="message">{message}</p>
      </div>
    );
  }
}

Home.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Home;
