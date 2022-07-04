export const GET_POSTS = (state) => {
    return state.posts
}

export const GET_POST = (state, id) => {
    return state.posts.find(item => item.id === id)
}
