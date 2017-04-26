import React from 'react';

class Notification extends React.Component{
    render() {
        return(
            this.props.visible ?
            <div className='notification'>{this.props.children}</div> :
            <span />
        )
    }
}

export default Notification;