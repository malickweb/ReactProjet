import React, { Component } from 'react';

//Menu
import Menu from '../../Header/Menu'

class Clock extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval( this.timerID );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {

  function FormatDate (props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;

  }

    return (
      <div>
        <Menu></Menu>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <FormatDate date={this.state.date} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Clock;
