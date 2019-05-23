import React, {Component} from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'transflateY(0)' : 'transflateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;
