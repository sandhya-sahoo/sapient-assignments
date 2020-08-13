import React from 'react';
import styles from './button.module.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <button 
                className={styles.btn} 
                key={this.props.key} 
                value={this.props.value}
                >
                    {this.props.value}
            </button>
        )
    }
}
export default Button;