import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image,Button} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default class LoginAdmin extends React.Component {

  state = { email:'thanadon.wong@gmail.com' , password:'123456789'};

  onLoginButtonPress=() => {
  
    const {email , password} = this.state;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{alert("User or Password ture ");
    if (email,password == true ); this.props.navigation.navigate('Admin')})
    .catch((msgError)=>{alert(msgError.message);});
    }
    
  componentDidMount(){
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA9n-o66GDYz3B7wdcAqr7cCVmk6kIY6BU",
    authDomain: "fir-pro-7c7cc.firebaseapp.com",
    databaseURL: "https://fir-pro-7c7cc.firebaseio.com",
    projectId: "fir-pro-7c7cc",
    storageBucket: "",
    messagingSenderId: "676209556971",
    appId: "1:676209556971:web:86a87b57abbf425b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    }
  render(){
    
  return (
    <View style={styles.container}>
           <Image
              style={{width: 250, height: 250}}
               source={require('./assets/iCE.png')}
            />
      <View style={styles.inputContainer}>
           <Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/user.png'}}/>
                   <TextInput style={styles.container}
                       autoCorrect={false}
                       placeholder='Email'
                       value={this.state.email}
                       onChangeText={str => this.setState({email : str})}/>
               </View>
  
               <View style={styles.inputContainer}>
           <Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/password.png'}}/>
                   <TextInput style={styles.container}
                      autoCorrect={false}
                      placeholder='Password'
                      secureTextEntry={true}
                      value={this.state.password}
                      onChangeText={str => this.setState({password : str})}/>
               </View>
           
            <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress={this.onLoginButtonPress.bind(this)
                    }
                ><Text style={styles.White}>เข้าสู่ระบบ</Text>
                </TouchableHighlight>
         
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    borderColor: '#696969',
    borderWidth: 1,
    borderRadius: 40,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems:'center'
},
inputIcon:{
  width:30,
  height:30,
  marginLeft:15,
  justifyContent:'center'

},
White: {
    color: 'white',
},
buttonContainer:{
    height:45,
    flexDirection:'row',
    justifyContent:'center',
    
    alignItems:'center',
    marginBottom:10,
    width:250,
    borderRadius:40,

},
Btn:{
  backgroundColor:"#191970",
},
});
