import React from 'react';
import axios from 'axios';

function withUserData(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userData: {},
      };
    }

    getUserData = async () => {
      const userEmail = window.email;
      const res = await axios.get(`http://localhost:3000/user/${userEmail}`);
      const userData = (res || {}).data;
      console.log('> withUserData', userData);
      this.setState({ userData: userData });
    }

    componentDidMount() {
      this.getUserData();
    }

    render() {
      const { userData } = this.state;
      return <WrappedComponent userData={userData} {...this.props} />;
    }
  };
}

export default withUserData;
