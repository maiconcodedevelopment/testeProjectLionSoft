import { initialUser } from "./state";

import { TYPE_USER_CREATE, TYPE_VERIFICATION_PHONE, TYPE_SEND_PASSWORD, TYPE_UPDATE_USER_PERSONAL, TYPE_UPDATE_USER_LOCATION, TYPE_UPDATE_USER_PROFESSION, TYPE_UPDATE_USER_PERSONALITY, TYPE_USER_SET, TYPE_AUTH_VERIFICATION_PHONE, TYPE_UPDATE_USER_CLIENT, TYPE_USER_PHOTO_UPDATE } from "./dispatch"

export default function actionUserReducer(state=initialUser,action){
    console.warn(state,action)
    switch(action.type){
        case TYPE_USER_CREATE:
           return {
               ...state,
               user : {
                   ...state.user,
                   ...action.payload,
                   user_client : {
                       ...state.user.user_client,
                       ...action.payload.user_client,
                       data_user : {
                           ...state.user.user_client.data_user,
                           ...action.payload.user_client.data_user
                       },
                       data_user_location : {
                           ...state.user.user_client.data_user_location,
                           ...action.payload.user_client.data_user_location
                       },
                       data_user_personality : {
                        ...state.user.user_client.data_user_personality,
                        ...action.payload.user_client.data_user_personality
                       },
                       data_user_personal : {
                           ...state.user.user_client.data_user_personal,
                           ...action.payload.user_client.data_user_personal
                       },
                       data_user_profession : {
                           ...state.user.user_client.data_user_profession,
                           ...action.payload.user_client.data_user_profession
                       },
                       tutoo_digital_account : {
                           ...state.user.user_client.tutoo_digital_account,
                           ...action.payload.user_client.tutoo_digital_account
                       },
                       tutoo_user_client : {
                           ...state.user.user_client.tutoo_user_client,
                           ...action.payload.user_client.tutoo_user_client,
                           tutoo_rate_client : {
                               ...state.user.user_client.tutoo_user_client.tutoo_rate_client,
                               ...action.payload.user_client.tutoo_user_client.tutoo_rate_client
                           }
                       }
                   },
               }
           }
           break;
        case TYPE_USER_SET:
           return {
               ...state,
               user : {
                   ...state.user,
                   ...action.payload,
                   user_client : {
                       ...state.user.user_client,
                       ...action.payload.user_client,
                       data_user : {
                           ...state.user.user_client.data_user,
                           ...action.payload.user_client.data_user
                       },
                       data_user_location : {
                           ...state.user.user_client.data_user_location,
                           ...action.payload.user_client.data_user_location
                       },
                       data_user_personality : {
                        ...state.user.user_client.data_user_personality,
                        ...action.payload.user_client.data_user_personality
                      },
                      data_user_personal : {
                           ...state.user.user_client.data_user_personal,
                           ...action.payload.user_client.data_user_personal
                       },
                       data_user_profession : {
                           ...state.user.user_client.data_user_profession,
                           ...action.payload.user_client.data_user_profession
                       },
                       tutoo_digital_account : {
                        ...state.user.user_client.tutoo_digital_account,
                        ...action.payload.user_client.tutoo_digital_account
                       },
                       tutoo_user_client : {
                            ...state.user.user_client.tutoo_user_client,
                            ...action.payload.user_client.tutoo_user_client,
                            tutoo_rate_client : {
                                ...state.user.user_client.tutoo_user_client.tutoo_rate_client,
                                ...action.payload.user_client.tutoo_user_client.tutoo_rate_client
                            }
                        }
                   },
               }
           }      
           break;
        case TYPE_VERIFICATION_PHONE:
           return {
               ...state,
               user : {
                   ...state.user,
                   ...action.payload
                }
           }
           break;
        case TYPE_AUTH_VERIFICATION_PHONE:
           return{
               ...state,
               auth_verification : action.payload
           }
           break;
        case TYPE_SEND_PASSWORD:
           return {
               ...state,
               user : {
                   ...state.user,
                   password : action.payload
               }
           }
           break;
        case TYPE_UPDATE_USER_CLIENT:
           return{
               ...state,
               user : {
                   ...state.user,
                   user_client : {
                       ...state.user.user_client,
                       data_user : {
                         ...state.user,
                         ...action.payload
                       }
                   }
               }
           }
           break;
        case TYPE_USER_PHOTO_UPDATE:
           return{
               ...state,
               user : {
                   ...state.user,
                   user_client : {
                       ...state.user.user_client,
                       data_user : {
                           ...state.user.user_client.data_user,
                           ...action.payload.user_client.data_user
                       }
                   }
               }
           }
           break;
        case TYPE_UPDATE_USER_PERSONAL:
           console.log(action.payload)
           return {
               ...state,
               user : {
                   ...state.user,
                   ...action.payload,
                   user_client : {
                       ...state.user.user_client,
                       data_user_personal : {
                           ...state.user.user_client.data_user_personal,
                           ...action.payload.user_client.data_user_personal
                       }
                   }
               }
           }
           break;
        case TYPE_UPDATE_USER_LOCATION:
           return {
               ...state,
               user : {
                   ...state.user,
                   user_client : {
                       ...state.user.user_client,
                       data_user_location : {
                           ...state.user.user_client.data_user_location,
                           ...action.payload
                       }
                   }
               }
           }
           break;
        case TYPE_UPDATE_USER_PROFESSION:
           return{
               ...state,
               user : {
                   ...state.user,
                   user_client : {
                       ...state.user.user_client,
                       data_user_profession : {
                           ...state.user.user_client.data_user_profession,
                           ...action.payload
                       }
                   }
               }
           }
           break;
        case TYPE_UPDATE_USER_PERSONALITY:
            return {
                ...state,
                user : {
                    ...state.user,
                    user_client : {
                        ...state.user.user_client,
                        data_user_personality:{
                            ...state.user.user_client.data_user_personality,
                            ...action.payload
                        }
                    }
                }
            }           
            break;
        
        default : 
          return {
            ...state
          }

    }
}