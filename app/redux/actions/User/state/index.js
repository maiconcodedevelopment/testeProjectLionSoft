export const initialUser = {
    user : {
        id : null,
        name : null,
        email : null,
        phone : null,
        type : "client",
        cpf : null,
        password : null,
        device_id : null,
        finger_print : false,
        token : null,      
        auth_verification : {

        },                                                                                                                                                                                                                                                                                                                
        user_client : {
            data_user : {
                cpf : null,
                finger_print : false,
                photo : "https://asset.zeqr.com/img/utils/default-profile-img.jpg"
            },
            data_user_location : {
                zip_code : null,
                state : null,
                city : null,
                address : null,
                number : null,
                neighborhood : null,
                complement : null
            },
            data_user_personality : {
                has_pets : null,
                use_transport_app : null,
                use_food_app : null,
                has_vehicle : null,
                vehicle_brand : null,
                color_or_race : null,
                religious_orientation : null,
                sexual_orientation : null
            },
            data_user_personal : {
                date_of_birth : null,
                sex : "m",
            },
            data_user_profession : {
                schooling : null,
                college : null,
                course : null,
                profession : null,
                company_works : null,
                monthly_income : null
            },
            tutoo_digital_account : {
                number_account : null,
                amount : 0
            },
            tutoo_user_client : {
                tutoo_rate_client : {
                    audit_cashout_bank_rate : null,
                    audit_recharge_gateway_rate : null
                }
            }
        }
    }
}