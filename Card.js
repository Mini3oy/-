import React from 'react';
import { StyleSheet, Text, View,Image,TextInput} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default class Card extends React.Component {
    
                                   
    state = { Class:'' , BTUname:'', pirename:'',Num:'',Name:'',Loc:'',Phon:'',Day:''};

    onReadUserDataButtonPressLG=()=>{
        const{Class} = this.state;
       firebase.database().ref('ข้อมูล/'+Class).once('value',function(snapshot) {
          alert('รุ่น : '+snapshot.val().Class+'ค่า BTU : '+snapshot.val().BTUname + 'ราคา : '+ snapshot.val().pirename+'จำนวน : '+snapshot.val().Num +' ชื่อ - นามสกุล : ' +snapshot.val().Name +'วันที่ซื้อ : '+snapshot.val().Day+'เบอร์โทรศัพท์ : '+snapshot.val().Phon+'ที่อยู่ : ' +snapshot.val().Loc )
    
      });
        }
    Inserdatedataroot=() => {
        const{Class,BTUname , pirename ,Num,Name,Loc,Phon,Day} = this.state;
        firebase.database().ref('ข้อมูล/'+Class).set({
            Class,
          BTUname,
          pirename,
          Day,
          Num,
          Name,
          Loc,
          Phon
    
    
        }).then((data)=>{
          console.log('data', data)
        }).catch((error)=>{
          console.log('error', error)
        })
        alert('Update Succeed!!!')
        }

        deleteData=()=>{
            const{Class} = this.state;
            firebase.database().ref('สินค้า/'+Class).remove()
            alert('OK!!!')
        ;
        }
    
    render() {
      
        return (
            <View style={styles.containerLG}>  
              
                 <Image
              style={{width: 200, height: 80}}
               source={require('./assets/Project/lg01-500x500.png')}
            />     

           <View style={styles.inputContainer}>
           <Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/3d-scale.png'}}/>
           <TextInput 
                       autoCorrect={false}
                       placeholder='ชื่อรุ่น'
                       value={this.state.Class}
                       onChangeText={str => this.setState({Class : str})}></TextInput>
           </View>
           <View style={styles.inputContainer}>
           <Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/data-backup.png'}}/>
           <TextInput 
                       autoCorrect={false}
                       placeholder='ค่า BTU '
                       value={this.state.BTUname}
                       onChangeText={str => this.setState({BTUname : str})}></TextInput>
           
</View>
<View style={styles.inputContainer}>
<Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/cheap-2.png'}}/>
       
<TextInput 
                       autoCorrect={false}
                       placeholder='ราคา'
                       value={this.state.pirename}
                       onChangeText={str => this.setState({pirename : str})}></TextInput>
</View>

<View style={styles.inputContainer}>
<Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/123.png'}}/>
<TextInput
                       autoCorrect={false}
                       placeholder='จำนวน'
                       value={this.state.Num}
                       onChangeText={str => this.setState({Num : str})}></TextInput>
</View>
<View style={styles.inputContainer}>
<Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/today.png'}}/>
<TextInput
                       autoCorrect={false}
                       placeholder='วัน/เดือน/ปี'
                       value={this.state.Day}
                       onChangeText={str => this.setState({Day : str})}></TextInput>
           
</View>

<View style={styles.inputContainer}>
<Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/contact-card.png'}}/>
   
<TextInput 
                       autoCorrect={false}
                       placeholder='ชื่อ - นามสกุล'
                       value={this.state.Name}
                       onChangeText={str => this.setState({Name : str})}></TextInput>
</View>

<View style={styles.inputContainer}>
<Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/address.png'}}/>

<TextInput
                       autoCorrect={false}
                       placeholder='ที่อยู่'
                       value={this.state.Loc}
                       onChangeText={str => this.setState({Loc : str})}></TextInput>
</View>

<View style={styles.inputContainer}>
<Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/phonelink-ring.png'}}/>

<TextInput
                       autoCorrect={false}
                       placeholder='เบอร์โทรศัพท์'
                       value={this.state.Phon}
                       onChangeText={str => this.setState({Phon : str})}></TextInput>
           
</View>


       
<View style={styles.containerLGa}>    
           <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress= {this.deleteData.bind(this)}>
                            <View style={styles.inputContainer2}>
                
                            
                                <Text style={styles.White}> Shop </Text>
                                </View>

</TouchableHighlight>
<TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress= {this.Inserdatedataroot.bind(this)}>
                            <View style={styles.inputContainer2}>
                
                            
                                <Text style={styles.White}> Save </Text>
                                </View>

</TouchableHighlight>

       <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress= {this.onReadUserDataButtonPressLG.bind(this)}>
                            <View style={styles.inputContainer2}>
                        
                            
                                <Text style={styles.White}> Read </Text>
                                </View>

</TouchableHighlight>  
    
</View>

            </View>
            
        );
    }
}

const styles =StyleSheet.create({
    containerLG:
    {     
        backgroundColor: '#f0ffff',
    
        justifyContent:'center',
        alignItems:'center',

},
containerLGLine:{   
    flex: 1,
    backgroundColor: '#f0ffff',
    justifyContent:'center',
    alignItems:'center',
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
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        borderColor: '#696969',
        borderWidth: 1,
        borderRadius: 10,
        borderBottomWidth: 1,
        width:250,
        height:35,
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
    buttonContainer:{
 
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        
        alignItems:'center',
        marginBottom:10,
        width:100,
        borderRadius:40,},
        containerLGa:
    {      
        backgroundColor: '#f0ffff',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',

}, White: {
    color: 'white',
},
       
});
