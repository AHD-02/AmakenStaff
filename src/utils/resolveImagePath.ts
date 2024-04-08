
const resolveImagePath = (path: string | undefined | null): string => {
    if (!path)
        return ''

    return path?.includes("https://") ? path : `${'/'}${path}`
}

export default resolveImagePath