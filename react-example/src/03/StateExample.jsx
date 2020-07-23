import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StateExample extends Component {
  constructor(props) {
    super(props);
    //state 정의
    this.state = {
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }
  handleData() {
    const data = 'new data';
    const { formData } = this.state;
    //state 변경
    this.setState({
      loading: false,
      formData: data + formData,
    });
    //this.state.loading은 현재 true
    console.log('loading값', this.state.loading);
    // 이후 render()함수의 this.state.loading은 false
  }
  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능 */}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
