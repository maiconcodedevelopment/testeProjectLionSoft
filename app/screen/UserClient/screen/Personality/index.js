import React from "react"
import { View , ScrollView , Text , Image , StyleSheet } from "react-native";
import { connect } from "react-redux"

import InputTextDran from "../../../../components/input/inputTextDran";
import PickerDran from "../../../../components/picker/pickerDran";

import { height , colors } from "../../../../style";
import { TutooContainerPerfilEdition } from "../../../../components/container/TutooContainerPerfilEdition";
import { requestDataProfessionUpdate, requestDataPersonalityUpdate } from "../../../../redux/actions/User/request";
import { navigationUserClientScrenn } from "../../../../router/actions/UserClient";

class Personality extends React.Component{

    constructor(props){
        super(props)

        const { data_user_personality } = this.props.user.user_client
        this.state = {
            ...data_user_personality,
            has_petss : [
                {
                    label : "SIM",
                    value : true
                },
                {
                    label : "NÃO",
                    value : false
                }
            ],
            use_transport_apps : [
                {
                    label : "SIM",
                    value : true
                },
                {
                    label : "NÃO",
                    value : false
                }
            ],
            use_food_apps : [
                {
                    label : "SIM",
                    value : true
                },
                {
                    label : "NÃO",
                    value : false
                }
            ],
            has_vehicles : [
                {
                    label : "SIM",
                    value : true
                },
                {
                    label : "NÃO",
                    value : false
                }
            ],
            vehicle_brands : [
                {
                    value: 'am gen',
                    label: 'AM GEN'
                  },
                  {
                    value: 'americar',
                    label: 'AMERICAR'
                  },
                  {
                    value: 'aston martin',
                    label: 'ASTON MARTIN'
                  },
                  {
                    value: 'audi',
                    label: 'AUDI'
                  },
                  {
                    value: 'beach',
                    label: 'BEACH'
                  },
                  {
                    value: 'bentley',
                    label: 'BENTLEY'
                  },
                  {
                    value: 'bianco',
                    label: 'BIANCO'
                  },
                  {
                    value: 'bmw',
                    label: 'BMW'
                  },
                  {
                    value: 'borgward',
                    label: 'BORGWARD'
                  },
                  {
                    value: 'brilliance',
                    label: 'BRILLIANCE'
                  },
                  {
                    value: 'bugatti',
                    label: 'BUGATTI'
                  },
                  {
                    value: 'buggy',
                    label: 'BUGGY'
                  },
                  {
                    value: 'buick',
                    label: 'BUICK'
                  },
                  {
                    value: 'cadillac',
                    label: 'CADILLAC'
                  },
                  {
                    value: 'cbt',
                    label: 'CBT'
                  },
                  {
                    value: 'chamonix',
                    label: 'CHAMONIX'
                  },
                  {
                    value: 'chana',
                    label: 'CHANA'
                  },
                  {
                    value: 'cheda',
                    label: 'CHEDA'
                  },
                  {
                    value: 'chery',
                    label: 'CHERY'
                  },
                  {
                    value: 'chevrolet',
                    label: 'CHEVROLET'
                  },
                  {
                    value: 'chrysler',
                    label: 'CHRYSLER'
                  },
                  {
                    value: 'citroen',
                    label: 'CITROEN'
                  },
                  {
                    value: 'cord',
                    label: 'CORD'
                  },
                  {
                    value: 'coyote',
                    label: 'COYOTE'
                  },
                  {
                    value: 'cross lander',
                    label: 'CROSS LANDER'
                  },
                  {
                    value: 'daewoo',
                    label: 'DAEWOO'
                  },
                  {
                    value: 'daihatsu',
                    label: 'DAIHATSU'
                  },
                  {
                    value: 'de soto',
                    label: 'DE SOTO'
                  },
                  {
                    value: 'delorean',
                    label: 'DELOREAN'
                  },
                  {
                    value: 'detomazo',
                    label: 'DETOMAZO'
                  },
                  {
                    value: 'ditally',
                    label: 'DITALLY'
                  },
                  {
                    value: 'dkw-vemag',
                    label: 'DKW-VEMAG'
                  },
                  {
                    value: 'dodge',
                    label: 'DODGE'
                  },
                  {
                    value: 'eagle',
                    label: 'EAGLE'
                  },
                  {
                    value: 'effa',
                    label: 'EFFA'
                  },
                  {
                    value: 'engesa',
                    label: 'ENGESA'
                  },
                  {
                    value: 'envemo',
                    label: 'ENVEMO'
                  },
                  {
                    value: 'farus',
                    label: 'FARUS'
                  },
                  {
                    value: 'fercar',
                    label: 'FERCAR'
                  },
                  {
                    value: 'ferrari',
                    label: 'FERRARI'
                  },
                  {
                    value: 'fiat',
                    label: 'FIAT'
                  },
                  {
                    value: 'fnm',
                    label: 'FNM'
                  },
                  {
                    value: 'ford',
                    label: 'FORD'
                  },
                  {
                    value: 'gaiola',
                    label: 'GAIOLA'
                  },
                  {
                    value: 'geely',
                    label: 'GEELY'
                  },
                  {
                    value: 'geo',
                    label: 'GEO'
                  },
                  {
                    value: 'grancar',
                    label: 'GRANCAR'
                  },
                  {
                    value: 'great wall',
                    label: 'GREAT WALL'
                  },
                  {
                    value: 'gurgel',
                    label: 'GURGEL'
                  },
                  {
                    value: 'hafei',
                    label: 'HAFEI'
                  },
                  {
                    value: 'hanomag',
                    label: 'HANOMAG'
                  },
                  {
                    value: 'hillman',
                    label: 'HILLMAN'
                  },
                  {
                    value: 'hofstetter',
                    label: 'HOFSTETTER'
                  },
                  {
                    value: 'honda',
                    label: 'HONDA'
                  },
                  {
                    value: 'hrg',
                    label: 'HRG'
                  },
                  {
                    value: 'hudson',
                    label: 'HUDSON'
                  },
                  {
                    value: 'hummer',
                    label: 'HUMMER'
                  },
                  {
                    value: 'hyundai',
                    label: 'HYUNDAI'
                  },
                  {
                    value: 'infiniti',
                    label: 'INFINITI'
                  },
                  {
                    value: 'international',
                    label: 'INTERNATIONAL'
                  },
                  {
                    value: 'jac',
                    label: 'JAC'
                  },
                  {
                    value: 'jaguar',
                    label: 'JAGUAR'
                  },
                  {
                    value: 'jeep',
                    label: 'JEEP'
                  },
                  {
                    value: 'jinbei',
                    label: 'JINBEI'
                  },
                  {
                    value: 'jpx',
                    label: 'JPX'
                  },
                  {
                    value: 'kaiser',
                    label: 'KAISER'
                  },
                  {
                    value: 'karmann ghia',
                    label: 'KARMANN GHIA'
                  },
                  {
                    value: 'kart',
                    label: 'KART'
                  },
                  {
                    value: 'kasea',
                    label: 'KASEA'
                  },
                  {
                    value: 'kia',
                    label: 'KIA'
                  },
                  {
                    value: 'koenigsegg',
                    label: 'KOENIGSEGG'
                  },
                  {
                    value: 'lada',
                    label: 'LADA'
                  },
                  {
                    value: 'lamborghini',
                    label: 'LAMBORGHINI'
                  },
                  {
                    value: 'lancia',
                    label: 'LANCIA'
                  },
                  {
                    value: 'land rover',
                    label: 'LAND ROVER'
                  },
                  {
                    value: 'lautocraft',
                    label: 'LAUTOCRAFT'
                  },
                  {
                    value: 'lautomobile',
                    label: 'LAUTOMOBILE'
                  },
                  {
                    value: 'lexus',
                    label: 'LEXUS'
                  },
                  {
                    value: 'lifan',
                    label: 'LIFAN'
                  },
                  {
                    value: 'lincoln',
                    label: 'LINCOLN'
                  },
                  {
                    value: 'lobini',
                    label: 'LOBINI'
                  },
                  {
                    value: 'lotus',
                    label: 'LOTUS'
                  },
                  {
                    value: 'mahindra',
                    label: 'MAHINDRA'
                  },
                  {
                    value: 'maserati',
                    label: 'MASERATI'
                  },
                  {
                    value: 'matra',
                    label: 'MATRA'
                  },
                  {
                    value: 'maybach',
                    label: 'MAYBACH'
                  },
                  {
                    value: 'mazda',
                    label: 'MAZDA'
                  },
                  {
                    value: 'mclaren',
                    label: 'MCLAREN'
                  },
                  {
                    value: 'menon',
                    label: 'MENON'
                  },
                  {
                    value: 'mercedes-benz',
                    label: 'MERCEDES-BENZ'
                  },
                  {
                    value: 'mercury',
                    label: 'MERCURY'
                  },
                  {
                    value: 'mg',
                    label: 'MG'
                  },
                  {
                    value: 'mini',
                    label: 'MINI'
                  },
                  {
                    value: 'mitsubishi',
                    label: 'MITSUBISHI'
                  },
                  {
                    value: 'miura',
                    label: 'MIURA'
                  },
                  {
                    value: 'morris',
                    label: 'MORRIS'
                  },
                  {
                    value: 'mp lafer',
                    label: 'MP LAFER'
                  },
                  {
                    value: 'mplm',
                    label: 'MPLM'
                  },
                  {
                    value: 'newtrack',
                    label: 'NEWTRACK'
                  },
                  {
                    value: 'nissan',
                    label: 'NISSAN'
                  },
                  {
                    value: 'nissin',
                    label: 'NISSIN'
                  },
                  {
                    value: 'oldsmobile',
                    label: 'OLDSMOBILE'
                  },
                  {
                    value: 'outros',
                    label: 'OUTROS'
                  },
                  {
                    value: 'pag',
                    label: 'PAG'
                  },
                  {
                    value: 'pagani',
                    label: 'PAGANI'
                  },
                  {
                    value: 'peugeot',
                    label: 'PEUGEOT'
                  },
                  {
                    value: 'plymouth',
                    label: 'PLYMOUTH'
                  },
                  {
                    value: 'pontiac',
                    label: 'PONTIAC'
                  },
                  {
                    value: 'porsche',
                    label: 'PORSCHE'
                  },
                  {
                    value: 'puma',
                    label: 'PUMA'
                  },
                  {
                    value: 'rely',
                    label: 'RELY'
                  },
                  {
                    value: 'renault',
                    label: 'RENAULT'
                  },
                  {
                    value: 'reno',
                    label: 'RENO'
                  },
                  {
                    value: 'reva-i',
                    label: 'REVA-I'
                  },
                  {
                    value: 'rolls-royce',
                    label: 'ROLLS-ROYCE'
                  },
                  {
                    value: 'romi',
                    label: 'ROMI'
                  },
                  {
                    value: 'saab',
                    label: 'SAAB'
                  },
                  {
                    value: 'saturn',
                    label: 'SATURN'
                  },
                  {
                    value: 'seat',
                    label: 'SEAT'
                  },
                  {
                    value: 'shineray',
                    label: 'SHINERAY'
                  },
                  {
                    value: 'short',
                    label: 'SHORT'
                  },
                  {
                    value: 'simca',
                    label: 'SIMCA'
                  },
                  {
                    value: 'skoda',
                    label: 'SKODA'
                  },
                  {
                    value: 'smart',
                    label: 'SMART'
                  },
                  {
                    value: 'spyker',
                    label: 'SPYKER'
                  },
                  {
                    value: 'ssangyong',
                    label: 'SSANGYONG'
                  },
                  {
                    value: 'standard',
                    label: 'STANDARD'
                  },
                  {
                    value: 'studebaker',
                    label: 'STUDEBAKER'
                  },
                  {
                    value: 'subaru',
                    label: 'SUBARU'
                  },
                  {
                    value: 'suzuki',
                    label: 'SUZUKI'
                  },
                  {
                    value: 'swell mini',
                    label: 'SWELL MINI'
                  },
                  {
                    value: 'tac',
                    label: 'TAC'
                  },
                  {
                    value: 'tanger',
                    label: 'TANGER'
                  },
                  {
                    value: 'tata',
                    label: 'TATA'
                  },
                  {
                    value: 'toyota',
                    label: 'TOYOTA'
                  },
                  {
                    value: 'triumph',
                    label: 'TRIUMPH'
                  },
                  {
                    value: 'troller',
                    label: 'TROLLER'
                  },
                  {
                    value: 'unimog',
                    label: 'UNIMOG'
                  },
                  {
                    value: 'utilitarios agricolas',
                    label: 'UTILITARIOS AGRICOLAS'
                  },
                  {
                    value: 'volkswagen',
                    label: 'VOLKSWAGEN'
                  },
                  {
                    value: 'volvo',
                    label: 'VOLVO'
                  },
                  {
                    value: 'wiesmann',
                    label: 'WIESMANN'
                  },
                  {
                    value: 'willys overland',
                    label: 'WILLYS OVERLAND'
                  }
            ],
            color_or_races : [
                {
                    value: 'branca',
                    label: 'Branca'
                   },
                   {
                    value: 'preta',
                    label: 'Preta'
                   },
                   {
                    value: 'parda',
                    label: 'Parda'
                   },
                   {
                    value: 'indígena',
                    label: 'Indígena'
                   },
                   {
                    value: 'amarela',
                    label: 'Amarela'
                   },
            ],
            religious_orientations : [
                {
                    value: 'católico',
                    label: 'Católico'
                   },
                   {
                    value: 'protestantes',
                    label: 'Protestantes'
                   },
                   {
                    value: 'espiritismo',
                    label: 'Espiritismo'
                   },
                   {
                    value: 'umbanda',
                    label: 'Umbanda'
                   },
                   {
                    value: 'candomblé',
                    label: 'Candomblé'
                   }
            ],
            sexual_orientations : [
                {
                    label : "Heterossexual",
                    value : "heterosexual"
                },
                {
                    label : "Homossexual",
                    value : "homossexual"
                },
                {
                    label : "Bissexual",
                    value : "bissexual"
                },
                {
                    label : "Transsexual",
                    value : "transsexual"
                },
                {
                    label : "Panssexual",
                    value : "panssexual"
                },
                {
                    label : "Assexual",
                    value : "assexual"
                },
                {
                    label : "Intergénero",
                    value : "intergénero"
                }
            ]
        }
    }

    onChangeValues = () => {
        console.log(this.state)

        const { dispatch , user} = this.props

        requestDataPersonalityUpdate({ ...this.state , token : user.token  }).then(({typeDispatch , data , response}) => {
            console.log(response)
            dispatch(typeDispatch(response))
        })

    }

    onUpdatePhoto = () => {
        console.log("personali photo")
    }

    render(){
        const { photo } = this.props.data_user
        const { number_account } = this.props.tutoo_digital_account
        const {
            has_petss , 
            has_pets , 
            use_transport_apps , 
            use_transport_app , 
            use_food_app,
            use_food_apps,
            has_vehicle,
            has_vehicles,
            vehicle_brand,
            vehicle_brands,
            color_or_race,
            color_or_races,
            religious_orientation,
            religious_orientations,
            sexual_orientation,
            sexual_orientations
        } = this.state
        return(
            <TutooContainerPerfilEdition numberAccount={number_account} goBack={ () => {  
                
                this.props.navigation.dispatch(navigationUserClientScrenn) 
                
            } }  photo={photo} onPickerPhoto={() => this.onUpdatePhoto()} >

                    <PickerDran style={{ width : "100%" }} 
                                title="Possui bichos de estimação:"
                                values={has_petss} 
                                value={has_pets} 
                                onValueChange={(value) => {
                                    console.log(value)
                                    this.setState({ has_pets : value }, () => {
                                        this.onChangeValues()
                                    })
                                }} />  

                    <PickerDran style={{ width : "100%" }} 
                                title="Utiliza Apps de transporte (User,99Pop)"
                                values={use_transport_apps} 
                                value={use_transport_app} 
                                onValueChange={(value) => {
                                    console.log(value)
                                    this.setState({ use_transport_app : value }, () => {
                                        this.onChangeValues()
                                    })
                                }} />   

                    <PickerDran style={{ width : "100%" }} 
                                title="Utiliza Apps de alimentação (iFoods, Rappi...)"
                                values={use_food_apps} 
                                value={use_food_app} 
                                onValueChange={(value) => {
                                    console.log(value)
                                    this.setState({ use_food_app : value }, () => {
                                        this.onChangeValues()
                                    })
                                }} /> 
                    <PickerDran style={{ width : "40%" }} 
                                title="Possui veículo"
                                values={has_vehicles} 
                                value={has_vehicle} 
                                onValueChange={(value) => {
                                    console.log(value)
                                    this.setState({ has_vehicle : value }, () => {
                                        this.onChangeValues()
                                    })
                                }} />

                     <PickerDran style={{ width : "60%" }} 
                                title="Marca"
                                values={vehicle_brands}
                                value={vehicle_brand} 
                                onValueChange={(value) => {
                                    console.log(value)
                                    this.setState({ vehicle_brand : value }, () => {
                                        this.onChangeValues()
                                    })
                                }} />

                     <PickerDran style={{ width : "100%" }} 
                                title="Cor ou raça"
                                values={color_or_races}
                                value={color_or_race} 
                                onValueChange={(value) => {
                                    console.log(value)
                                    this.setState({ color_or_race : value }, () => {
                                        this.onChangeValues()
                                    })
                                }} />

                      <PickerDran style={{ width : "100%" }} 
                                title="Orientação religiosa"
                                values={religious_orientations}
                                value={religious_orientation} 
                                onValueChange={(value) => {
                                    console.log(value)
                                    this.setState({ religious_orientation : value }, () => {
                                        this.onChangeValues()
                                    })
                                }} /> 

                       <PickerDran style={{ width : "100%" }} 
                                title="Orientação sexual"
                                values={sexual_orientations}
                                value={sexual_orientation} 
                                onValueChange={(value) => {
                                    console.log(value)
                                    this.setState({ sexual_orientation : value }, () => {
                                        this.onChangeValues()
                                    })
                                }} />       

             </TutooContainerPerfilEdition>
        )
    }
}

let mapStateProps = state => ({
    user : state.user.user,
    data_user : state.user.user.user_client.data_user,
    tutoo_digital_account : state.user.user.user_client.tutoo_digital_account
})

export default connect(mapStateProps)(Personality)

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header : {
        height : height * 0.12,
        padding : 10,
        backgroundColor : colors.orangeDark,
        justifyContent : 'flex-start',
        alignItems : "flex-end",
        marginBottom : 15
    },
    content : {
        flexDirection : "row",
        alignItems : "flex-start",
        paddingHorizontal : 10,
        flexWrap : "wrap",
    }
})