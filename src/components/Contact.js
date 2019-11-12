import React from 'react';
import { Prompt } from 'react-router-dom';
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }
  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked
    });
  }
  render() {
    let { isChecked } = this.state;
    return (
      <div className="App">
        <p>Đây là contact</p><br />

        <button type="button" class="btn btn-info" onClick={() => this.onClick(false)}>Cho Phép</button>
        <br />
        <button type="button" class="btn btn-danger" onClick={() => this.onClick(true)}>Không đc phép</button>
        <Prompt
          when={isChecked}
          message={location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
        />
      </div>
    );
  }

}

export default About;
