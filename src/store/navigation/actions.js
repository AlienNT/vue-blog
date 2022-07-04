import { requestServerApi } from '@/api/apiRequests'
import { apiRoutes } from '@/api/config'
import { _sortIntBy } from '@/globalFunctions'

export async function fetchNavigation ({ commit }) {
    return await requestServerApi('GET', apiRoutes.navigation)
        .then(response => {
            response?.data
                ? commit('SET_NAVIGATION', _sortIntBy(response.data, 'order'))
                : console.log('fetchNavigation error')

            return response?.data
        })
}

export async function createNavigation ({ commit }, data) {
    const requestData = navigationFields.create(data)

    return await requestServerApi('POST', apiRoutes.navigation, requestData)
        .then(response => {
            response?.data
                ? commit('ADD_CREATE_NAVIGATION_TO_STATE', response.data)
                : console.log('createNavigation error')

            return response?.data
        })
}

const navigationFields = {
    create: (data) => ({
        id: Date.now(),
        title: data?.title || 'Новая страница',
        path: data?.path || '/',
        order: data?.order,
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
    }),
    update: (data) => ({
        id: data?.id,
        title: data?.title,
        path: data?.path,
        order: data?.order,
        created_at: data?.created_at,
        updated_at: new Date(),
        deleted_at: null
    })
}
