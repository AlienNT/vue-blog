import { requestServerApi } from '@/api/apiRequests'
import { apiRoutes } from '@/api/config'
import { _currentDate, _hash, _id } from '@/globalFunctions'

export async function signUp ({ commit }, data) {
    const responseData = userFields.create(data)

    return await requestServerApi('POST', apiRoutes.users, responseData)
        .then(response => {
            response?.data
                ? commit('SET_AUTH_USER', response.data)
                : console.log('signUp error')
        })
}

export function setAuthUserInStorage ({ commit }, data) {
    commit('SET_AUTH_USER', data)
}

export async function login ({ commit }, data) {
    const url = userFields.loginUrl(data)

    return await requestServerApi('GET', url)
        .then(response => {
            response?.data
                ? commit('SET_AUTH_USER', response.data)
                : console.log('login error')
        })
}

const userFields = {
    create: (data) => ({
        id: _id(),
        email: data?.email,
        password: _hash(data?.password),
        name: null,
        surname: null,
        avatar: null,
        created_at: _currentDate(),
        updated_at: null,
        deleted_at: null,
        age: null,
        phone: null,
        role_id: 3
    }),
    loginUrl: (data) => apiRoutes.users + `?email=${data?.email}&password=${_hash(data?.password)}`
}
