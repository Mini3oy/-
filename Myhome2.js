import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default class Myhome2 extends React.Component {
            
    render(){   
        const text = this.props.navigation.getParam('velue','nothing sent')
        parseInt(text)
        return(
            <View style = {styles.container}>
                 <Image
                    style={{width: 300, height: 200}}
                    source={require('./assets/BTU2.3.png')}/>

                <View style={styles.Container1}>
                <Text>BTU: {text} </Text>
                {text == 0?  <Text>ควรคำนวณตัวแปรต่าง ๆ โดยละเอียด  เพื่อ BTU ที่เหมาะสม</Text>: null}
                {text  <= 5000 && text != 0? <Text> เพราะฉะนั้น คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 5,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 5001 && text <= 9000 ?  <Text> เพราะฉะนั้น คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 9,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 9001 && text <= 12000 ?  <Text> เพราะฉะนั้น คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 12,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 12001 && text <= 15000 ?  <Text> เพราะฉะนั้น คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 15,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 15001 && text <= 18000 ?  <Text> เพราะฉะนั้น คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 18,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 18001 && text <= 20000 ?  <Text> เพราะฉะนั้น คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 20,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 20001 && text <= 22000 ?  <Text> เพราะฉะนั้น คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 22,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 22001 && text <= 24000 ?  <Text> เพราะฉะนั้น คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 24,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 24001 && text <= 30000 ?  <Text> เพราะฉะนั้น คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 30,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 30001 && text <= 36000 ?  <Text> เพราะฉะนั้น คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 36,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 36001 && text <= 40000 ?  <Text> เพราะฉะนั้น คุณลูกค้าเท็ดดี้แอร์ควรใช้แอร์ขนาด 40,000 บีทียู (สามารถสูง-ต่ำได้นิดหน่อย แต่ไม่ควรเกิน 1,000 บีทียู)</Text>: null}
                {text >= 40001?  <Text>ควรคำนวณตัวแปรต่าง ๆ โดยละเอียด  เพื่อ BTU ที่เหมาะสม</Text>: null}

                </View>         
                <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress={() =>
                        this.props.navigation.navigate('Myhome')
                    }
                ><Text style={styles.White}>To Back</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress={() =>
                        this.props.navigation.navigate('Shop', {text} )
                    }
                ><Text style={styles.White}>Shop</Text>

                </TouchableHighlight>
            
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:
        {flex: 1,
        backgroundColor: "#f0ffff",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer:{
        height:35,
        flexDirection:'row',
        justifyContent:'center',
        
        alignItems:'center',
        marginBottom:10,
        width:150,
        borderRadius:40,

    },
    Btn:{
        borderColor: '#696969',
        backgroundColor:"#191970",
    },
    Container1:{
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    White: {
        color: 'white',
    }

    

});
