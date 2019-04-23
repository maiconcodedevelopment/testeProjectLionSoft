
export const TYPE_USER_CREATE = "TYPE_USER_CREATE"
export const TYPE_USER_SET = "TYPE_USER_SET"
export const TYPE_AUTH_VERIFICATION_PHONE = "TYPE_AUTH_VERIFICATION_PHONE"
export const TYPE_VERIFICATION_PHONE = "TYPE_VERIFIACTION_PHONE"
export const TYPE_SEND_PASSWORD = "TYPE_SEND_PASSWORD"
export const TYPE_USER_PHOTO_UPDATE = "TYPE_USER_PHOTO_UPDATE"

export const TYPE_UPDATE_USER_CLIENT = "TYPE_UPDATE_USER_CLIENT"
export const TYPE_UPDATE_USER_PERSONAL = "TYPE_UPDATE_USER_PERSONAL"
export const TYPE_UPDATE_USER_LOCATION = "TYPE_UPDATE_USER_LOCATION"
export const TYPE_UPDATE_USER_PROFESSION = "TYPE_UPDATE_USER_PROFESSION"
export const TYPE_UPDATE_USER_PERSONALITY = "TYPE_UPDATE_USER_PERSONALITY"

export const userCreate = (user) => ({
    type : TYPE_USER_CREATE,
    payload : user
})

export const userSet = (user) => ({
    type : TYPE_USER_SET,
    payload : user
})


export const verificationPhone = (data) => ({
    type : TYPE_VERIFICATION_PHONE,
    payload : data
})

export const authVerificationPhone = (data) => ({
    type : TYPE_AUTH_VERIFICATION_PHONE,
    payload : data
})


export const userPhotoUpdate = (data) => ({
    type : TYPE_USER_PHOTO_UPDATE,
    payload : data
})

export const userClientUpdate = (data) => ({
    type : TYPE_UPDATE_USER_CLIENT,
    payload : data
})

export const userSendPassword = (password) => ({
    type : TYPE_SEND_PASSWORD,
    payload : password
})

export const userPersonalUpdate = (data) => ({
    type : TYPE_UPDATE_USER_PERSONAL,
    payload : data
})

export const userLocationUpdate  = (data) => ({
    type : TYPE_UPDATE_USER_LOCATION,
    payload :data
})

export const userProfessionUpdate = (data) => ({
    type : TYPE_UPDATE_USER_PROFESSION,
    payload : data
})

export const userPersonalityUpdate = (data) => ({
    type :TYPE_UPDATE_USER_PERSONALITY,
    password : data
})