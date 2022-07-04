export const SET_AUTH_USER = (state, data) => {
    state.authUser = data
    localStorage.authUser = JSON.stringify(data)
}
