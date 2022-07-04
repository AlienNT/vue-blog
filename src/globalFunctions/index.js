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
