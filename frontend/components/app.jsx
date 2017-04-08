import React from 'react';

import EntryWrapperContainer from './entry/entry_wrapper_container';

const App = () => (
    <div>
        <p>Diary</p>
        <EntryWrapperContainer today={new Date()}/>
    </div>
)

export default App;