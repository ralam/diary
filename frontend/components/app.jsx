import React from 'react';

import EntryWrapperContainer from './entry/entry_wrapper_container';
import { formatDate } from '../util/date_util';

const App = () => (
    <div>
        <p>Diary</p>
        <EntryWrapperContainer today={formatDate(new Date())}/>
    </div>
)

export default App;