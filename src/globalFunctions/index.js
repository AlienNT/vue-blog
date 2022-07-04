export const _first = (value) => {
    return value?.length ? value[0] : null
}

export const _last = (value) => {
    return value?.length ? value[_lastIndex(value)] : null
}

export const _lastIndex = (value) => {
    return value?.length ? value[value.length - 1] : null
}

export const _firstToUpper = (string) => {
    return string?.length ? string[0].toUpperCase() + string.slice(1, -1) : string
}

export const _isEmpty = (value) => {
    return value ? !value.length : null
}

export const _isNumber = (value) => {
    return value ? isFinite(value) : null
}

export const _findIndex = (data, item) => {
    return data && item ? data.findIndex(i => i.id === item.id) : undefined
}

export const _sortBy = (data, orderBy) => {
    return data && orderBy ? data.sort(i => i[orderBy]) : data
}

export const _sortIntBy = (data, orderBy) => {
    return data && orderBy ? data.sort((a, b) => a[orderBy] - b[orderBy]) : data
}

export const _hash = (string, seed) => {
    return cyrb53(string, seed)
}

export const _currentDate = () => {
    return new Date()
}

export const _id = () => {
    return Date.now()
}

const cyrb53 = function (str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed; let h2 = 0x41c6ce57 ^ seed
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i)
        h1 = Math.imul(h1 ^ ch, 2654435761)
        h2 = Math.imul(h2 ^ ch, 1597334677)
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
    return 4294967296 * (2097151 & h2) + (h1 >>> 0)
}
