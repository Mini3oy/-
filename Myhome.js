import React from 'react';
import {StyleSheet, Text, TextInput,View,Image, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


class Myhome extends React.Component{

    constructor (props) {
        super(props)
        this.state = {num1: 0, num2: 0, num3: 0,total: 0}
    }
    _onChangeText1 = numInput1 => { this.setState({ num1: numInput1 })}
    _onChangeText2 = numInput2 => { this.setState({ num2: numInput2 })}
    _onChangeText3 = numInput3 => { this.setState({ num3: numInput3 })}
    render(){
        
        return(

            <View style={styles.container}>
            <Image
              style={{width: 250, height: 250}}
               source={require('./assets/iCE.png')}
            />
           <View style={styles.inputContainer}>
           <Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/fit-to-width.png'}}/>
                   <TextInput style={styles.container}
                       placeholder="Width/m."
                       keyboardType="number-pad"
                       underlineColorAndroid='transparent'
                       onChangeText={this._onChangeText1}/>
               </View>
               <View style={styles.inputContainer}>
               <Image style={styles.inputIcon}
                   source={{uri:'https://img.icons8.com/nolan/64/000000/ruler.png'}}/>
                   <TextInput style={styles.container}
                       placeholder="Long/m."
                       keyboardType="number-pad"
                       underlineColorAndroid='transparent'
                       onChangeText={this._onChangeText2}/>
               </View>

               <View style={styles.inputContainer}>
                <Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/resize-vertical.png'}}/>
                   <TextInput style={styles.container}
                       placeholder="Height/m."
                       keyboardType="number-pad"
                       underlineColorAndroid='transparent'
                       onChangeText={this._onChangeText3}/>
               </View>

        

                
               <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
               onPress={() =>
                this.props.navigation.navigate('Myhome1', {total: (parseFloat(this.state.num1) * parseFloat(this.state.num2) * parseFloat(this.state.num3)).toFixed(2)}
                )}>
               <Text style={styles.White}> Calculator</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
class Shop extends React.Component{
 
    render(){
        const text = this.props.navigation.getParam('text','nothing sent')
        parseInt(text)
        return(
            
            <View style={styles.containeradmin}>  

            <TouchableHighlight style={[styles.buttonContaineradmin,styles.Btnadmin]}
            onPress={ () =>  this.props.navigation.navigate('LoginAdmin')}>
                  <Image style={{width: 20, height:20}}
            source={{uri:'https://img.icons8.com/wired/50/000000/admin-settings-male.png'}}/>

             </TouchableHighlight>
           
            <View style={styles.container}>
                
            <Text>BTU: {text} </Text>
            {text == 0?  <Text>ควรคำนวณตัวแปรต่าง ๆ โดยละเอียด  เพื่อ BTU ที่เหมาะสม</Text>: null}
                {text <= 5000 && text != 0?  <Text>  คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 5,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 5001 && text <= 9000 ?  <Text>  คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 9,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 9001 && text <= 12000 ?  <Text> คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 12,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 12001 && text <= 15000 ?  <Text>  คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 15,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 15001 && text <= 18000 ?  <Text>  คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 18,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 18001 && text <= 20000 ?  <Text>  คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 20,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 20001 && text <= 22000 ?  <Text> คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 22,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 22001 && text <= 24000 ?  <Text> คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 24,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 24001 && text <= 30000 ?  <Text> คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 30,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 30001 && text <= 36000 ?  <Text>  คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 36,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 36001 && text <= 40000 ?  <Text> คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 40,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 40001?  <Text>ควรคำนวณตัวแปรต่าง ๆ โดยละเอียด  เพื่อ BTU ที่เหมาะสม</Text>: null}
            
         
            <Image
              style={{width: 250, height: 100}}
               source={require('./assets/Project/lg01-500x500.png')}
            />
                <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                            onPress={ () =>  this.props.navigation.navigate('LG')}>
                             <Text style={styles.White}> LG </Text>
                             </TouchableHighlight>
                             <Image
              style={{width: 250, height: 100}}
               source={require('./assets/Project/logo-mitsubishi-electric.jpg')}
            />
                             <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                            onPress={ () =>  this.props.navigation.navigate('Mitsubishi')}>
                             <Text style={styles.White}> Mitsubishi </Text>
                             </TouchableHighlight>
                             <Image
                             style={{width: 250, height: 100}}
               source={require('./assets/Project/4f7b65dfe8dd636364a6c735334aa22a_full.png')}
            />
                             <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                            onPress={ () =>  this.props.navigation.navigate('Panasonic')}>
                             <Text style={styles.White}> Panasonic </Text>
                             </TouchableHighlight>


            </View>
    </View>
        );
    }
}




const styles =StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#f0ffff',
        alignItems: 'center',
        justifyContent: 'center'
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
 
        height:40,
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
    buttonContaineradmin:{
        borderBottomColor: '#F5FCFF',
        borderColor: '#696969',
        borderWidth: 1,
        borderBottomWidth: 1,
        height:20,
        flexDirection:'column-reverse',
        justifyContent:'flex-end',
        alignItems:'flex-start',
        marginBottom:10,
        width:20,
   

    },
    Btnadmin:{
        borderBottomColor: '#F5FCFF',
        backgroundColor:"#00ffff",
        borderBottomWidth: 1,
    },
    containeradmin: {
        flex: 2,
        backgroundColor: '#f0ffff',
        flexDirection:'row-reverse',
        justifyContent:'flex-start',
        alignItems:'flex-start',

 
    }, 
       

});
const TabNavigator = createBottomTabNavigator({
    Home : { screen: Myhome,
        navigationOptions: {
        tabBarLable: 'Home',
        tabBarIcon: (
            <Image style={{width: 20, height:20}}
            source={{uri:'https://img.icons8.com/nolan/80/000000/home.png'}}/>
        )
    }},
    Shop: {screen : Shop ,navigationOptions: {
    tabBarLable: 'Shop ',
    tabBarIcon: (
        <Image style={{width: 20, height:20}}
        source={{uri:'https://img.icons8.com/nolan/64/000000/clear-shopping-cart.png'}}/>
        
    )
}},

},
);
export default createAppContainer(TabNavigator);


