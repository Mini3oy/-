import React from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Image,TextInput} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from 'firebase';

class LG extends React.Component {
 
    render() {
        
        return (
            <View style={styles.containerLG}>  
              
                 <Image
              style={{width: 200, height: 80}}
               source={require('./assets/Project/lg01-500x500.png')}
            />     
            
        <TouchableOpacity  style={styles.inputContainer}>
           <Image style={styles.inputIcon}
                    source={require('./assets/LGBTU/BTU5000.jpg')}/>
                
                      <Text> รุ่น LW5012J </Text>
                          <Text>BTU:5000 ราคา:9,000บาท</Text>
                   
               </TouchableOpacity >

               <TouchableOpacity  style={styles.inputContainer}>

           <Image style={styles.inputIcon}
                    source={require('./assets/LGBTU/BTU12000.jpg')}/>
                
                      <Text> รุ่น IV13RN.SE2  </Text>
                          <Text>BTU:12000 ราคา:21,000บาท</Text>
                   
               </TouchableOpacity >
               <TouchableOpacity  style={styles.inputContainer}>

           <Image style={styles.inputIcon}
                    source={require('./assets/LGBTU/15000.jpg')}/>
                
                      <Text> รุ่น PM15SP.NSJ </Text>
                          <Text>BTU:15000 ราคา:22,467บาท</Text>
                   
               </TouchableOpacity >
               <TouchableOpacity  style={styles.inputContainer}>

           <Image style={styles.inputIcon}
                    source={require('./assets/LGBTU/LG_Electronics-35882152-N01_ICC_01_940x620_1-mobile.jpg')}/>
                
                      <Text>รุ่น IV18R1N.SE2</Text>
                          <Text>BTU:18000 ราคา:30,490บาท</Text>
                   
               </TouchableOpacity>
         

               <TouchableOpacity  style={styles.inputContainer}>

           <Image style={styles.inputIcon}
                    source={require('./assets/LGBTU/23000.jpg')}/>
                
                      <Text> รุ่น IQ24R </Text>
                          <Text>BTU:21300 ราคา:32,590บาท</Text>
                   
               </TouchableOpacity>
         
           
                  

<TouchableOpacity  style={[styles.buttonContainer,styles.Btn]}
                 onPress={() =>
                    this.props.navigation.navigate('Card')}>
                            <View style={styles.inputContainer2}>
                         

                                <Text style={styles.White}> 
Order</Text>
                                </View>

</TouchableOpacity >
            </View>
            
        );
    }
}export default LG

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
},  White: {
    color: 'white',
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
