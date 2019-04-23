import React from "react"
import { View , ViewBase , Image , Picker , ScrollView , NativeModules , StyleSheet  } from "react-native"
import { connect } from "react-redux";
import { colors, height } from "../../../../style";
import InputTextDran from "../../../../components/input/inputTextDran";
import PickerDran from "../../../../components/picker/pickerDran";
import { requestDataPersonalUpdate, requestPhotoUpdate } from "../../../../redux/actions/User/request";
import { TutooContainerPerfilEdition } from "../../../../components/container/TutooContainerPerfilEdition";
import { navigationUserClientScrenn } from "../../../../router/actions/UserClient";
import { userClientUpdate } from "../../../../redux/actions/User/dispatch";
import ImagePicker from "react-native-image-picker";




const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };


class Personal extends React.Component{

    constructor(props){
        super(props)
        console.log(this.props)
        let { name , email , phone , cpf , user_client} = this.props.user
        this.state = {
                name,
                email,
                phone,
                cpf : user_client.data_user.cpf,
                date_of_birth : this.dateInverte(user_client.data_user_personal.date_of_birth),
                sex : user_client.data_user_personal.sex,
                sexs : [
                    {
                        label : "Masculino",
                        value : "m"
                    },
                    {
                        label : "Feminino",
                        value : "f"
                    }
                ]
                
        }
    }

    dateInverte(value){
        if(value || value != null){
            return value.split("-").reverse().join("-")
        }
        return value
    }

    onChangeValues = () => {
        const { user , dispatch } = this.props
        const { date_of_birth } = this.state
        
        console.log("-----")
        console.log(this.state)
        console.log(this.dateInverte(this.state.date_of_birth))
        console.log("-----")

        requestDataPersonalUpdate({ ...this.state , date_of_birth : this.dateInverte(date_of_birth) ,cpf : this.state.cpfValue , token : user.token }).then(({ typeDispatch , data , response }) => {
            dispatch(typeDispatch(response))
        })
    }

    onUpdatePhoto = () => {
        const { dispatch } = this.props
        const { token } = this.props.user

        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
           
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
           
              // You can also display the image using data:
              const image = { uri: 'data:image/jpeg;base64,' + response.data };
              console.log(image)
              console.log(response)
              console.log(token)
              requestPhotoUpdate({ photo : response , token }).then(({ typeDispatch , data , response }) => {
                  console.log("felipe ----")
                  console.log(response)  
                  console.log("felipe ----")
                  dispatch(typeDispatch(response))
              })
            }
          });
    }

    render(){
        const { photo  } = this.props.data_user
        const { number_account } = this.props.tutoo_digital_account
        const { name , email , phone , cpf , date_of_birth , sex } = this.state
        const { sexs } = this.state

        console.log(photo)
        
        return(
            <TutooContainerPerfilEdition numberAccount={number_account} goBack={ () => {  
                
                this.props.navigation.dispatch(navigationUserClientScrenn) 
                
            } } photo={photo} onPickerPhoto={() =>  this.onUpdatePhoto() } >

                    <InputTextDran style={{  width : "100%" }} 
                                   title={"Nome :"}
                                   value={name}
                                   onChangeText={(value) => this.setState({ name : value })}
                                   onBlur={(value) => this.onChangeValues() } />
                                   
                    <InputTextDran style={{  width : "100%" }} 
                                   title={"E-mail :"} 
                                   value={email}  
                                   onChangeText={(value) => this.setState({ email : value })}
                                   onBlur={(email) => this.onChangeValues() } />

                    <InputTextDran style={{  width : "50%" }}
                                   title={"Celular :"}
                                   value={phone}
                                   keyboardType="numeric"
                                   mask={"+55 [00] [00000]-[0000]"}
                                   onChangeText={(value) => this.setState({ phone : value })}
                                   onBlur={(value) => this.onChangeValues() } />

                    <InputTextDran style={{  width : "50%" }} 
                                   title={"CPF :"} 
                                   value={cpf}  
                                   editable={false}
                                   mask={"[000].[000].[000]-[00]"}
                                   onChangeText={(value) => this.setState({ cpf : value })}
                                   onBlur={(value) => this.onChangeValues() } />

                    <InputTextDran style={{  width : "50%" }} 
                                   title={"Nascimento :"} 
                                   value={date_of_birth}
                                   mask={"[00]-[00]-[0000]"}  
                                   keyboardType="numeric"
                                   onChangeText={(value) => this.setState({ date_of_birth : value })}
                                   onChangeTextFormatted={(value) => this.setState({ date_of_birth : value })}
                                   onBlur={(value) => this.onChangeValues() } />

                    <PickerDran style={{ width : "50%" }} 
                                title="Sexo:"
                                values={sexs} 
                                value={sex} 
                                onValueChange={(value) => {
                                    console.log(value)
                                    this.setState({ sex : value }, () => {
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

export default connect(mapStateProps)(Personal)

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