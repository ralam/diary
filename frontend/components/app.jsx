import React from 'react';

import EntryWrapperContainer from './entry/entry_wrapper_container';
import SessionFormContainer from './session_form/session_form_container';
import { formatDate } from '../util/date_util';

class App extends React.Component{
    render() {
        let main;
        if (this.props.session.currentUser) {
            main = <EntryWrapperContainer today={formatDate(new Date())}/>
        } else {
            main = <SessionFormContainer />
        }
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'>&nbsp;</div>
                    <div className='col-md-8'>
                        <p>Diary</p>
                        { main }
                    </div>
                    <div className='col-md-2'>&nbsp;</div>
                </div>
            </div>
        )
    }
}

export default App;