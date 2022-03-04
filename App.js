import React from 'react';
import AppNavigator from './AppNavigator';
import {StyleSheet,Text, View,Image} from 'react-native';

class SplahScreen extends React.Component{
  render(){
    const viewStyles = [styles.container , { backgroundColor: '#f0ffff'}];
   
    return(
      <View style={viewStyles}>
             <Image
              style={{width: 270, height: 270}}
               source={require('./assets/aG.png')}
            />
    
      
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { isLoading : true}
  }
  performTimeConsumingTask = async()=>{
    return new Promise((resolve)=>
    setTimeout(
      ()=>{ resolve('result')},5000));
  }
  async componentDidMount(){
    const data = await this.performTimeConsumingTask();
    if(data !== null){
      this.setState({isLoading: false});
    }
  }
  render () {
    if (this.state.isLoading){
      return <SplahScreen/>
    }
    return (

     <AppNavigator/>
      
      );
  }
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  });