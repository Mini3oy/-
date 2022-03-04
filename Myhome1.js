import React from 'react';
import {StyleSheet, Text, View,Image, TextInput} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Myhome1 extends React.Component{
  
    constructor (props) {
        super(props)
        this.state = {num4: 0,velue: 0}
    }
    _onChangeText4 = numInput4 => { this.setState({ num4: numInput4 })}
    render(){
        const total = this.props.navigation.getParam('total','nothing sent')
        return(
            <View style={styles.container}>
                <Text>พื้นที่ห้อง : {total} ตารางเมตร </Text>
                <View style={styles.inputContainer}>
            <Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/material-outlined/24/000000/comments.png'}}/>
                   <TextInput style={styles.container}
                       placeholder=" Variable."
                       keyboardType="number-pad"
                       underlineColorAndroid='transparent'
                       onChangeText={this._onChangeText4}/>
               </View>
               <View style={styles.containertext}>
                <Text>  ตัวเเปร </Text>
                <Text>  750 สำหรับห้องนอนปกติ *ไม่โดดแดด</Text>
                <Text>  800 สำหรับห้องนอนปกติ *โดดแดด</Text>
                <Text>  850 สำหรับห้องทำงาน *ไม่โดดแดด</Text>
                <Text>  900 สำหรับห้องทำงาน *โดดแดด</Text>
                <Text>  950 - 1,100 สำหรับร้านอาหาร ร้านทำผม มินิมาร์ท ร้านค้า สำนักงาน *ไม่โดดแดด </Text>
                <Text>  1,000 - 1,200 สำหรับร้านอาหาร ร้านทำผม มินิมาร์ท ร้านค้า สำนักงาน *โดดแดด</Text>
                <Text>  1,100 - 1,500 ห้องประชุม ห้องสัมมนา ร้านอาหารสุกี้/ชาบู/ปิ้งย่างที่มีหม้อต้มหรือเตาความร้อนเยอะ หรือห้องที่มีจำนวนคนต่อพื้นที่เยอะกว่าปกติหลายเท่า</Text>
                </View>
                <View style={styles.container2}>
              
                <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress={() =>
                        this.props.navigation.navigate('Myhome2', {velue: parseInt(total) * (parseInt(this.state.num4)/3)})}>
                            <View style={styles.inputContainer2}>
                            <Image style={styles.inputIcon2}
                            source={{uri:'https://img.icons8.com/ios/24/000000/share-3.png'}}/>
                                <Text style={styles.White}> Guidance</Text>
                                </View>

                </TouchableHighlight>

                            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0ffff',
        alignItems:'center',
        justifyContent:'center',
    },
    container2:{
       
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    buttonContainer:{
        height:35,
        flexDirection:'row',
        justifyContent:'center',
        
        alignItems:'center',
        marginBottom:10,
        width:120,
        borderRadius:40,

    },
    containertext:{
     
        backgroundColor:'#f0ffff',
        alignItems:'flex-start',
        justifyContent:'center',
        flexDirection: 'column',
    },
    White: {
        color: 'white',
    },
    

    Btn:{
     
        backgroundColor:"#191970",
    },
    Btn2:{
     
        backgroundColor:"#6495ed",
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent:'center'

    },
    inputContainer: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 30,
        borderBottomWidth: 1,
        width:200,
        height:45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    inputIcon2:{
        width:20,
        height:20,
        marginLeft:0.1,
        justifyContent:'flex-start',
        
    },
    inputContainer2: {
        borderColor: '#000000',
      
        
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    }
});

