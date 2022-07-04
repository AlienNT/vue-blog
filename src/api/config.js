export const host = 'https://my-json-server.typicode.com'
export const project = {
    author: {
        name: 'Nick',
        surname: 'Tristen',
        nickName: 'AlienNT',
        links: {
            git: 'https://github.com/AlienNT'
        }

    },
    repo: 'json-server'
}
export const apiUrl = `${host}/${project.author.nickName}/${project.repo}`

export const DB = {
    posts: 'posts',
    categories: 'categories',
    users: 'users',
    navigation: 'navigation',
    permissions: 'permissions',
    roles: 'roles'
}
export const apiRoutes = {
    posts: getUrl(DB.posts),
    categories: getUrl(DB.categories),
    navigation: getUrl(DB.navigation)
}

function getUrl (table) {
    return `${apiUrl}/${table}`
}
