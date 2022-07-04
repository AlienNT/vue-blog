import { requestServerApi } from '@/api/apiRequests'
import { apiRoutes } from '@/api/config'

export async function fetchPosts ({ commit }) {
    return await requestServerApi('GET', apiRoutes.posts)
        .then(response => {
            response?.data
                ? commit('SET_POSTS', response.data)
                : console.log('fetchPosts error')

            return response?.data
        })
}

export async function createPost ({ commit }, data) {
    const requestData = postFields.create(data)

    return await requestServerApi('POST', apiRoutes.posts, requestData)
        .then(response => {
            response?.data
                ? commit('ADD_CREATE_POST_TO_STATE', response.data)
                : console.log('createPost error')

            return response?.data
        })
}

export async function updatePost ({ commit }, data) {
    const requestData = postFields.update(data)

    return await requestServerApi('PATH', apiRoutes.posts + `/${data?.id}`, requestData)
        .then(response => {
            response?.data
                ? commit('UPDATE_POST', response.data)
                : console.log('updatePost error')

            return response?.data
        })
}

export async function deletePost ({ commit }, data) {
    return await requestServerApi('DELETE', apiRoutes.posts + `/${data?.id}`, data)
        .then(response => {
            response?.data
                ? commit('DELETE_POST', response.data)
                : console.log('deletePost error')

            return response?.data
        })
}

const postFields = {
    create: (data) => ({
        id: Date.now(),
        title: data?.title || 'Новая запись',
        created_at: new Date(),
        updated_at: null,
        deleted_at: null,
        isPublished: data?.isPublished || true,
        author_id: localStorage?.authUser?.id
    }),
    update: (data) => ({
        id: data?.id,
        title: data?.title,
        created_at: new Date(),
        updated_at: Date.now(),
        deleted_at: null,
        isPublished: data?.isPublished,
        author_id: data?.author_id
    }),
    softDelete: (data) => {
        data.deleted_at = Date.now()
        return data
    }
}
