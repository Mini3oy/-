import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image,TextInput} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from 'firebase';


class Mitsubishi extends React.Component {
 
    render() {
        
        return (
            <View style={styles.containerLG}>  
              
              <Image
              style={{width: 250, height: 100}}
               source={require('./assets/Project/logo-mitsubishi-electric.jpg')}
            />
                     <TouchableOpacity  style={styles.inputContainer}>
      
                
                      <Text> รุ่น  Mitsubishi SR </Text>
                          <Text>BTU:8000 ราคา:10,4900 บาท</Text>
                   
               </TouchableOpacity >

               <TouchableOpacity  style={styles.inputContainer}>

        
                
                      <Text> รุ่น  Mitsubishi SMG </Text>
                          <Text>BTU:13000 ราคา:15,590 บาท</Text>
                   
               </TouchableOpacity >
               <TouchableOpacity  style={styles.inputContainer}>

         
                      <Text> รุ่น  Mitsubishi AR </Text>
                          <Text>BTU:16000 ราคา: 19,790 บาท</Text>
                   
               </TouchableOpacity >
               <TouchableOpacity  style={styles.inputContainer}>

          
                
                      <Text> รุ่น  Mitsubishi Iconso </Text>
                          <Text>BTU:2400 ราคา:35,400 บาท</Text>
                   
               </TouchableOpacity>
         

               <TouchableOpacity  style={styles.inputContainer}>

                      <Text> รุ่น  Mitsubishi Microsonic </Text>
                          <Text>BTU:28000 ราคา:42,900บาท</Text>
                   
               </TouchableOpacity>
<TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress={() =>
                    this.props.navigation.navigate('Misu')}>
                            <View style={styles.inputContainer2}>
                         

                                <Text style={styles.White}> 
Order</Text>
                                </View>

</TouchableHighlight>
            </View>
            
        );
    }
}export default Mitsubishi

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0ffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerLG:
    {     
        backgroundColor: '#f0ffff',
    
        justifyContent:'center',
        alignItems:'center',

},
White: {
    color: 'white',
},
containerLGLine:{   
    
    backgroundColor: '#f0ffff',

    justifyContent:'center',
    alignItems:'center',
},
Btn:{
    backgroundColor:"#191970",
},
buttonContainer:{
    borderBottomColor: '#F5FCFF',
    borderColor: '#696969',
    borderWidth: 1,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomWidth: 1,
    height:40,
    flexDirection:'column-reverse',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    width:100,
},
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        borderColor: '#696969',
        borderWidth: 1,
        borderRadius: 10,
        borderBottomWidth: 1,
        width:350,
        height:60,
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


});

