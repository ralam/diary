import React from 'react';

class EntryItem extends React.Component{
    render() {
        return(
            <div>
                {this.props.entry.content}
            </div>
        )
    }
}

export default EntryItem;