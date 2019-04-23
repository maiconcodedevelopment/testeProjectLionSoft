
import { initialUser } from "../state";
import { verificationPhone, userCreate, userPersonalUpdate, userLocationUpdate, userProfessionUpdate, userPersonalityUpdate, userSet, authVerificationPhone, userPhotoUpdate } from "../dispatch";


export function requestValidationPhone({ name , email , phone , cpf , device_id },responseFunction){
    return fetch("http://api.tutoo.lionsoft.com.br/api/v1/users/activation_code",{ 
        method : "POST" , 
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            phone,
            device_id
        })
    }).then((response) => {
        console.log(response)
        if(response.ok && response.status == 200 || response.status == 400){
            responseFunction(verificationPhone,{ name , email , phone, cpf , device_id },response.json())
            return response
        }
        throw new "Error"
    })
}

export function requestAuthVerificationPhone({ code_sms , device_id }){
    return fetch(`http://api.tutoo.lionsoft.com.br/api/v1/users/login/activation_code/${device_id}/${code_sms}`,{ method : "GET" , headers : { "Accept" : "application/json" , "Content-Type" : "application/json" } }).then((response)=>{
        console.log(response)
        if(resposne.ok && response.status == 200){
            return response.json()
        }
    }).then((response) => {
        console.log(response)
    })
}

export function requestValidationPhoneExist({ device_id , code },responseFunction){
    console.log(device_id,code)
    return fetch(`http://api.tutoo.lionsoft.com.br/api/v1/users/activation_code/${device_id}/${code}`,{ method : "GET" , headers : { "Accept" : "application/json" , 'Content-Type': 'application/json' } }).then((response) => 
    {
        console.log(response.json())
        if(response.ok && response.status == 200){
            responseFunction({ type : "default" , payload : "default" },{ device_id , code },response.json())
            return response
        }
        throw new "Error"
    })
}


export function requestCreateUser({ name , phone , email , cpf , password , device_id , finger_print = false },responseFunction){
    console.log(finger_print)
    let b = {
        name,
        phone,
        email,
        cpf,
        device_id,
        password
    }

    let form = new FormData()
    form.append("name",name)
    form.append("phone",phone)
    form.append("email",email)
    form.append("cpf",cpf)
    form.append("device_id",device_id)
    form.append("password",password)
    form.append("finger_print",finger_print)

    console.log(b)
    return fetch("http://api.tutoo.lionsoft.com.br/api/v1/users/client",{ 
        method : "POST" , 
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(b)
    }).then((response) => {
        console.log(response)
        if(response.ok && response.status == 200){
            return response.json()
        }
        throw new "Error"
    }). then((response) => {
        responseFunction(userCreate,{ name, phone ,email ,cpf ,password ,device_id ,finger_print },response)
        return { typeDispatch : userCreate , data : { name , phone , email , cpf , password , device_id , finger_print }  , response : response  }
    })
}

export function requestUserSet({ token }){
    return fetch("http://api.tutoo.lionsoft.com.br/api/v1/users/client",{ 
        method : "GET",
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" :  "Bearer " + token,
        }
    }).then((response) => {
        if(response.ok && response.status === 200){
            return response.json()
        }
        throw new "Error"
    }).then((response) => {
        return { typeDispatch : userSet , data : { token } , response : response }
    })
}

export function requestSignIn({ email , password , device_id }){
    return fetch("http://api.tutoo.lionsoft.com.br/api/v1/users/client/login",{
        method : "POST",
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            
        },
        body : JSON.stringify({
            email,
            password,
            device_id
        })
    }).then((response) => {
        console.log(response)
        if(response.ok && response.status === 200){
            return response.json()
        }
        throw new "Error"
    }).then(response => {
        if(response.user_client != null){
            return { typeDispatch : userSet , data : { email , password , device_id } , response : response , login : true }
        }
        return { typeDispatch : authVerificationPhone , data : { email , password , device_id } , response : response , login : false }
    })
}


//data
export function requestPhotoUpdate({ photo ,token }){

    console.log(photo)
    let formPhoto = new FormData()
    formPhoto.append("photo",{
        uri : photo.uri,
        type : photo.type,
        name : photo.fileName.split(".")[0]
    })

    return fetch("http://api.tutoo.lionsoft.com.br/api/v1/users/client/data/photo/update",{
        method : "POST",
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            "Authorization" :  "Bearer " + token,
        },
        body : formPhoto
    }).then((response) => {
        console.log(response)
        if(response.ok && response.status === 200){
            return response.json()
        }
        throw new "Update Photo Error"
    }).then((response) => {
        return { typeDispatch : userPhotoUpdate , data : { photo , token } , response : response }
    })
}

export function requestDataPersonalUpdate({ name , email , phone , cpf , date_of_birth , sex , token },responseFunction){
    console.log(token)
    return fetch("http://api.tutoo.lionsoft.com.br/api/v1/users/client/data/personal",{ 
        method : "PUT",
        headers : {
           "Authorization" :  "Bearer " + token,
           "Accept": "application/json",
           "Content-Type": "application/json"
        },
        body : JSON.stringify({
            name,
            email,
            phone,
            cpf,
            date_of_birth,
            sex
        })
    }).then((response) => {
        console.log(response)
        if(response.ok && response.status === 200){
            return response.json()
        }
        throw new "Error"
    }).then((response) => {
        return { typeDispatch : userPersonalUpdate , data : { name , email , phone , cpf , date_of_birth , sex , token } , response : response }
    })
}

export function requestDataLocationUpdate({ zip_code , state , city , address , number , neighborhood , complement , token }){
    return fetch("http://api.tutoo.lionsoft.com.br/api/v1/users/client/data/location", {
        method : "PUT",
        headers : {
           "Authorization" :  "Bearer " + token,
           "Accept": "application/json",
           "Content-Type": "application/json"
        },
        body : JSON.stringify({
            zip_code,
            state,
            city,
            address,
            number,
            neighborhood,
            complement
        })
    } ).then(response => {
        console.log(response)
        if(response.ok && response.status === 200){
            return response.json()
        }
        throw new "Error"
    }).then(response => {
        return { typeDispatch : userLocationUpdate , data : { zip_code, state, city , address , number , neighborhood , complement , token } , response : response }
    })
}

export function requestDataProfessionUpdate({ schooling ,college ,course , profession , company_works , monthly_income , token }){
    return fetch("http://api.tutoo.lionsoft.com.br/api/v1/users/client/data/profession",{
        method : "PUT",
        headers : {
            "Authorization" :  "Bearer " + token,
            "Accept": "application/json",
            "Content-Type": "application/json"
         },
         body : JSON.stringify({
             schooling,
             college,
             course,
             profession,
             company_works
         })
    }).then(response => {
        console.log(response)
        if(response.ok && response.status == 200){
            return response.json()
        }
        throw new "Error"
    }) .then(response => {
        return { typeDispatch : userProfessionUpdate , data : { schooling ,college ,course , profession , company_works , monthly_income , token }, response : response }
    })
}

export function requestDataPersonalityUpdate({ has_pets , use_transport_app , use_food_app , has_vehicle , vehicle_brand , color_or_race , religious_orientation , sexual_orientation , token }){
    console.log({ has_pets , use_transport_app , use_food_app , has_vehicle , vehicle_brand , color_or_race , religious_orientation , sexual_orientation })
    return fetch("http://api.tutoo.lionsoft.com.br/api/v1/users/client/data/personality",{
        method : "PUT",
        headers : {
            "Authorization" :  "Bearer " + token,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            has_pets,
            use_transport_app,
            use_food_app,
            has_vehicle,
            vehicle_brand,
            color_or_race,
            religious_orientation,
            sexual_orientation
        })
    }).then(response => {
        console.log(response)
        console.log(response.json())
        if(response.ok && response.status === 200){
            return response.json()
        }
        throw new "Error"
    }).then(response=>{
        return { typeDispatch : userPersonalityUpdate , data : {has_pets , use_transport_app , use_food_app , has_vehicle , vehicle_brand , color_or_race , religious_orientation , sexual_orientation , token }, response : response }
    })
}