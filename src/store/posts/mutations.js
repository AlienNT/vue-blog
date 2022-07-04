export const SET_POSTS = (state, data) => {
    state.posts = data
}

export const ADD_CREATE_POST_TO_STATE = (state, data) => {
    state.posts.push(data)
}

export const UPDATE_POST = (state, data) => {
    state.posts[state.posts.findIndex(item => item.id === data.id)] = data
}

export const DELETE_POST = (state, data) => {
    state.posts.splice(state.posts.findIndex(item => item.id === data.id), 1)
}
