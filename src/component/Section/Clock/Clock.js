// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';

//Menu
import Menu from '../../Header/Menu';

// Styles
import './Clock.css';

const Clock = () => {
    const [isTime, setIsTime] = useState(new Date().toLocaleTimeString());
    const [isDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        setTimeout(() => {
            time();
        }, 1000);
    });
    const time = () => {
        setIsTime(new Date().toLocaleTimeString());
        console.log('isDate', isDate);
    };

    return (
        <div>
            <Menu />
            <section>
                <p>Nous sommes le {isDate}</p>
                <p>il est {isTime}</p>
            </section>
        </div>
    );
};

export default Clock;

// class Clock extends Component {

//   constructor( props ) {
//     super( props );
//     this.state = {
//       date: new Date()
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     )
//   }

//   componentWillUnmount() {
//     clearInterval( this.timerID );
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {

//   function FormatDate (props) {
//     return <h2>It is {props.date.toLocaleTimeString()}.</h2>;

//   }

//     return (
//       <div>
//         <Menu></Menu>
//         <section>
//           <div className="container">
//             <div className="row">
//               <div className="col-xs-12">
//                 <FormatDate date={this.state.date} />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }
