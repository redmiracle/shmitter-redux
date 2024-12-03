export const CHANGE_AVATAR = 'CHANGE_AVATAR'
export const CHANGE_NAME = 'CHANGE_NAME'
export const CHANGE_FOLLOWER = 'CHANGE_FOLLOWER'
export const CHANGE_FOLLOWING = 'CHANGE_FOLLOWING '

export const changeAvatar = url => ({
    type: CHANGE_AVATAR,
    payload: url
})

export const changeName = name => ({
    type: CHANGE_NAME,
    payload: name
})

export const changeFollower = num => ({
    type: CHANGE_FOLLOWER,
    payload: num
})

export const changeFollowing = num => ({
    type: CHANGE_FOLLOWING,
    payload: num
})



