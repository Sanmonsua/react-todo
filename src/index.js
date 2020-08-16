import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count:0,
    }
  }

  increase = () =>{
    this.setState({count:this.state.count + 1})
  }

  render() {
    return(
      <div style={styles}>
        <div>
          <button onClick={this.increase}> Increase</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}


render(<App />, document.getElementById('root'))
