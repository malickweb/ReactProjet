// import React, { Component } from 'react';
import React, { useState } from 'react';

// Menu
import Menu from '../../Header/Menu';

// Styles
import './Show.css';

const Show = () => {
    const [isHandleClick, setIsHandleon] = useState(false);
    const [isToggleOn, setIsToggleOn] = useState(false);
    const handleClick = () => {
        setIsHandleon(!isHandleClick);
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            <Menu />
            <section className="containerShow">
                <button onClick={handleClick}>{isToggleOn ? 'ON' : 'OFF'}</button>
                <p className={isToggleOn ? 'show' : 'hide'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut libero vitae turpis mollis sodales. Praesent vitae ultrices nunc, nec aliquam lectus. Aenean ipsum metus, iaculis non feugiat fringilla, fermentum ac nibh. Integer scelerisque, libero vitae ultrices placerat, lectus metus euismod ex, vel pharetra nulla tellus non erat. Duis scelerisque risus diam, nec aliquam nisl sodales vel. Duis vitae faucibus risus, in viverra purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer tempor lobortis nisl, at fermentum nisl maximus vitae. Pellentesque dictum vel quam vitae auctor. Integer dignissim cursus ex, non accumsan
                    augue vulputate at. Proin risus mi, pharetra pellentesque ullamcorper id, elementum eu tellus. Vestibulum blandit commodo nisi vel imperdiet. Pellentesque arcu arcu, commodo non ullamcorper eu, finibus quis magna.
                </p>
            </section>
        </div>
    );
};

export default Show;

// class Show extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn: false
//         };
//         // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//         console.log(this.state.isToggleOn);
//     }

//     render() {
//         return (
//             <section>
//                 <Menu />
//                 <div>
//                     <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
//                     <p className={this.state.isToggleOn ? 'show' : 'hide'}>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut libero vitae turpis mollis sodales. Praesent vitae ultrices nunc, nec aliquam lectus. Aenean ipsum metus, iaculis non feugiat fringilla, fermentum ac nibh. Integer scelerisque, libero vitae ultrices placerat, lectus metus euismod ex, vel pharetra nulla tellus non erat. Duis scelerisque risus diam, nec aliquam nisl sodales vel. Duis vitae faucibus risus, in viverra purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer tempor lobortis nisl, at fermentum nisl maximus vitae. Pellentesque dictum vel quam vitae auctor. Integer dignissim cursus ex, non
//                         accumsan augue vulputate at. Proin risus mi, pharetra pellentesque ullamcorper id, elementum eu tellus. Vestibulum blandit commodo nisi vel imperdiet. Pellentesque arcu arcu, commodo non ullamcorper eu, finibus quis magna.
//                     </p>
//                 </div>
//             </section>
//         );
//     }
// }
