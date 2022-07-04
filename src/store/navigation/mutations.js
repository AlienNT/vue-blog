export const SET_NAVIGATION = (state, data) => {
    state.navigation = data
}

export const ADD_CREATE_NAVIGATION_TO_STATE = (state, data) => {
    state.navigation.push(data)
}
