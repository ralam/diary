export const unsetSession = () => {
    window.localStorage.removeItem('currentSession');
}

export const storeSession = session => {
    window.localStorage.setItem('currentSession', JSON.stringify(session));
}