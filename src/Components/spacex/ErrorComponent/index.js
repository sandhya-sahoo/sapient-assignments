import React from 'react';

class ErrorComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                {
                    this.props.message
                    ? <h1>{this.props.message}</h1>
                    : <h1>loading........</h1>
                }
            </div>
        )
    }
}
export default ErrorComponent;