import React, { Component } from 'react';
import HelloWorldInput from './hello-world-input.component';

import { reduxConnect } from '../../redux/redux-connector';
import helloWorldMapper, * as helloWorldActions from '../../redux/actions/hello-world.actions';

class HelloWorld extends Component {

  state = {
    value: '',
    label: 'nom',
    buttonLabel: 'Say Good Bye',
  }

  handleInputChange = event => {
    this.setState({ value: event.target.value });
  }

  handleClick = () => {
    const { value, sayHello, sayGoodBye } = this.props;
    if (this.state.value) {
      const method = value.toLowerCase().includes('hello') ? ({
        buttonLabel: 'Say Hello',
        callback: sayGoodBye,
      }) : ({
        buttonLabel: 'Say goodbye',
        callback: sayHello,
      });

      method.callback(this.state.value);
      this.setState({ buttonLabel: method.buttonLabel });
    } else {
      alert('Enter a name')
    }
  }

  render() {
    const { value, label, buttonLabel } = this.state;

    return (
      <div>
        {this.props.value}
        <HelloWorldInput value={value} label={label} onChange={this.handleInputChange} />
        <button onClick={this.handleClick}>{buttonLabel}</button>
      </div>
    )
  }
}



export default reduxConnect(helloWorldMapper, helloWorldActions, HelloWorld);