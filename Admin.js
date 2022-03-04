import React from 'react';
import { StyleSheet, Text, View ,TextInput,Image,Button} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';


class Admin extends React.Component {

  state = { Class:'' , BTUname:'', pirename:'',Num:'',Name:'',Loc:'',Phon:'',Day:''};

  
    onReadUserDataButtonPress=()=>{  
      const{Class} = this.state;

   firebase.database().ref('ข้อมูล/'+Class).once('value',function(snapshot) {
      alert('รุ่น : '+snapshot.val().Class+'ค่า BTU : '+snapshot.val().BTUname + 'ราคา : '+ snapshot.val().pirename+'จำนวน : '+snapshot.val().Num +' ชื่อ - นามสกุล : ' +snapshot.val().Name +'วันที่ซื้อ : '+snapshot.val().Day+'เบอร์โทรศัพท์ : '+snapshot.val().Phon+'ที่อยู่ : ' +snapshot.val().Loc )

  });
    }
    onReadUserDataButtonPress1=()=>{  
      const{Class} = this.state;

   firebase.database().ref('สินค้า/'+Class ).once('value',function(snapshot) {
      alert('รุ่น : '+snapshot.val().Class+'ค่า BTU : '+snapshot.val().BTUname + 'ราคา : '+ snapshot.val().pirename)

  });
    }

  

 
  Updatedata=() => {
    const{Class,BTUname , pirename } = this.state;
    firebase.database().ref('สินค้า/'+Class).update({
      Class,
      BTUname,
      pirename,
  

    }).then((data)=>{
      console.log('data', data)
    }).catch((error)=>{
      console.log('error', error)
    })
    alert('Update Succeed!!!')
    }
    Inserdata=() => {
      const{Class,BTUname , pirename } = this.state;
      firebase.database().ref('สินค้า/'+Class).set({
        Class,
        BTUname,
        pirename,
    
  
      }).then((data)=>{
        console.log('data', data)
      }).catch((error)=>{
        console.log('error', error)
      })
      alert('Update Succeed!!!')
      }

    deleteData=()=>{
      const{Class,BTUname , pirename } = this.state;
        firebase.database().ref('สินค้า/'+Class+BTUname+pirename).remove()
        alert('Delete Succeed!!!')
    ;
    }
  
 
  
    

  render(){
    
  return (
    <View style={styles.container}>
            <Image
              style={{width: 200, height: 200}}
               source={require('./assets/iCE.png')}
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
                       placeholder='ค่า BTU'
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

          <View style={styles.containerLGa}>    
           <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress= {this.Inserdata.bind(this)}>
                           <Text style={styles.White}> Inserdata </Text>

</TouchableHighlight>
<TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress= {this.Updatedata.bind(this)}>
                            
                
                            <Text style={styles.White}> Updatedata </Text>
                         

</TouchableHighlight>

       <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress= {this.deleteData.bind(this)}>
                           
                            
                            <Text style={styles.White}> Deletedata</Text>
                      

</TouchableHighlight>  
<TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                 onPress= {this.onReadUserDataButtonPress1.bind(this)}>
                           
                            
                            <Text style={styles.White}> Readdata </Text>
                      

</TouchableHighlight>  
</View>
            </View>
            
 
  );
}
}
class DataBase extends React.Component {
  
  state = { Class:'' , BTUname:'', pirename:'',Num:'',Name:'',Loc:'',Phon:'',Day:''};

  
    onReadUserDataButtonPress=()=>{  
      const{Class} = this.state;

   firebase.database().ref('ข้อมูล/'+Class ).once('value',function(snapshot) {
      alert('รุ่น : '+snapshot.val().Class+'ค่า BTU : '+snapshot.val().BTUname + 'ราคา : '+ snapshot.val().pirename+'จำนวน : '+snapshot.val().Num +' ชื่อ - นามสกุล : ' +snapshot.val().Name +'วันที่ซื้อ : '+snapshot.val().Day+'เบอร์โทรศัพท์ : '+snapshot.val().Phon+'ที่อยู่ : ' +snapshot.val().Loc )

  });
    }
  render(){
    
    return (
      <View style={styles.container}>
              <Image
                style={{width: 200, height: 200}}
                 source={require('./assets/iCE.png')}
              />
                  
                  <View style={styles.inputContainer}>
                  <Image style={styles.inputIcon}
                    source={{uri:'https://img.icons8.com/nolan/64/000000/3d-scale.png'}}/>
               <TextInput
                         autoCorrect={false}
                         placeholder='รุ่น'
                         value={this.state.Class}
                         onChangeText={str => this.setState({Class : str})}></TextInput>
                
  </View>
                        
  

            <View style={styles.containerLGa}>    
         
  <TouchableHighlight style={[styles.buttonContainer,styles.Btn]}
                   onPress= {this.onReadUserDataButtonPress.bind(this)}>
                             
                              
                              <Text style={styles.White}> Readdata </Text>
                        
  
  </TouchableHighlight>  
  </View>
              </View>
              
   
    );
  }
  }
const styles =StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f0ffff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputContainer: {
      borderBottomColor: '#f0ffff',
      borderColor: '#696969',
      borderWidth: 1,
      borderRadius: 40,
      borderBottomWidth: 1,
      width:200,
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
      width:80,
      borderRadius:10,

  },
  Btn:{
      backgroundColor:"#191970",
  },
  buttonContaineradmin:{
      borderBottomColor: '#f0ffff',
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


  },   containerLGa:
  {      
      backgroundColor: '#f0ffff',
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'flex-start',

},
     

});
const TabNavigator = createBottomTabNavigator({
  Admin : { screen: Admin,
      navigationOptions: {
      tabBarLable: 'Admin',
      tabBarIcon: (
          <Image style={{width: 20, height:20}}
          source={{uri:'https://img.icons8.com/nolan/64/000000/administrative-tools.png'}}/>
      )
  }},
  DataBase: {screen : DataBase ,navigationOptions: {
  tabBarLable: 'DataBase ',
  tabBarIcon: (
      <Image style={{width: 20, height:20}}
      source={{uri:'https://img.icons8.com/nolan/64/000000/database.png'}}/>
      
  )
}},

},);
export default createAppContainer(TabNavigator);

