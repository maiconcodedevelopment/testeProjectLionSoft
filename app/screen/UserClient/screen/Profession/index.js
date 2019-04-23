import React from "react"
import { View , Text , AccessibilityAnnoucementFinishedEvent , AccessibilityEvent , Image , ScrollView , StyleSheet } from "react-native";

import { connect } from "react-redux";

import InputTextDran from "../../../../components/input/inputTextDran";
import PickerDran from "../../../../components/picker/pickerDran";
import { height , colors } from "../../../../style";
import { requestDataProfessionUpdate } from "../../../../redux/actions/User/request";
import { TutooContainerPerfilEdition } from "../../../../components/container/TutooContainerPerfilEdition";
import { navigationUserClientScrenn } from "../../../../router/actions/UserClient";

class Profession extends React.Component{

    constructor(props){
        super(props)

        let { data_user_profession } = this.props.user.user_client
        this.state = {
            ...data_user_profession,
            schoolings : [
                {
                    value: 'ensino fundamental',
                    label: 'ENSINO FUNDAMENTAL'
                   },
                   {
                    value: 'ensino médio',
                    label: 'ENSINO MÉDIO'
                   },
                   {
                    value: 'ensino superior',
                    label: 'ENSINO SUPERIOR'
                   },
                   {
                    value: 'pós-graduado',
                    label: 'PÓS-GRADUADO'
                   }
            ],
            monthly_incomes : [
                {
                    value: '1 salário mínimo',
                    label: '1 salário mínimo'
                   },
                   {
                    value: 'entre 2 e 3 salários',
                    label: 'Entre 2 e 3 salários'
                   },
                   {
                    value: 'entre 4 e 5 salários',
                    label: 'Entre 4 e 5 salários'
                   },
                   {
                    value: 'entre 10 salários',
                    label: 'Entre 10 salários'
                   },
                   {
                    value: 'acima de 10 salários',
                    label: 'Acima de 10 salários'
                   }
            ]
        }
    }

    onChangeValues = () => {
        const { dispatch ,user } = this.props
        
        requestDataProfessionUpdate({ ...this.state , token : user.token }).then(({typeDispatch , data , response}) => {
            console.log(response)
            dispatch(typeDispatch(response))
        })
    }

    onUpdatePhoto = () => {
        console.log("profession photo")
    }


    render(){
        const { photo } = this.props.data_user
        const { number_account } = this.props.tutoo_digital_account
        const {schoolings , schooling , college , course , company_works , monthly_income , monthly_incomes } = this.state

        return(
            <TutooContainerPerfilEdition numberAccount={number_account} goBack={ () => {  
                
                this.props.navigation.dispatch(navigationUserClientScrenn) 
                
            } } photo={photo} onPickerPhoto={() => this.onUpdatePhoto()} >

                   <PickerDran style={{ width : "100%" }} 
                                title="Escolaridade:"
                                values={schoolings} 
                                value={schooling} 
                                onValueChange={(value) => {
                                    console.log(value)
                                    this.setState({ schooling : value }, () => {
                                        this.onChangeValues()
                                    })
                                }} />
                    <InputTextDran style={{  width : "100%" }} 
                                   title={"Faculdade:"}
                                   value={college}
                                   onChangeText={(value) => this.setState({ college : value })}
                                   onBlur={(value) => this.onChangeValues() } />

                    <InputTextDran style={{  width : "100%" }} 
                                   title={"Curso:"}
                                   value={course}
                                   onChangeText={(value) => this.setState({ course : value })}
                                   onBlur={(value) => this.onChangeValues() } />

                    <InputTextDran style={{  width : "100%" }} 
                                   title={"Empresa que trabalha:"}
                                   value={company_works}
                                   onChangeText={(value) => this.setState({ company_works : value })}
                                   onBlur={(value) => this.onChangeValues() } />

                    <PickerDran style={{ width : "100%" }}
                                title="Renda Mensal:"
                                values={monthly_incomes} 
                                value={monthly_income} 
                                onValueChange={(value) => {
                                    console.log(value)
                                    this.setState({ monthly_income : value }, () => {
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

export default connect(mapStateProps)(Profession)


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