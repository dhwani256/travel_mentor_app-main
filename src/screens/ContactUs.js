import {Image, SafeAreaView, TouchableOpacity, Text, View,ImageBackground,Dimensions} from 'react-native';
import React, {Component} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
let dimensions = Dimensions.get("window");
let imageWidth = dimensions.width;
export class ContactUs extends Component {
    render() {
      return (
        <ScrollView>
          <SafeAreaView>
            <View style={{flex:1}}>
            <View
              style={{
                
                width: '90%',
                marginLeft: 10,
                marginTop: 15,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack();
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../assest/back.png')}
                    style={{width: 30, height: 30,marginLeft:3,alignSelf:'center',justifyContent:'center'}}></Image>
                  <Text
                    style={{
                      marginTop: 5,
                      fontWeight: '600',
                      fontSize:15,
                      textAlign:'center'
                    }}>
  
                    Back
                  </Text>
                </View>
              </TouchableOpacity>
  
              
            </View>
            
          <ImageBackground source={require('../assest/contract_bg.png')}
          style={{backgroundColor:'#3A925C',width: imageWidth,height:350, overflow: 'hidden',borderTopLeftRadius:25}}
          resizeMode='cover'
          //</SafeAreaView>imageStyle={{ borderRadius: 15}}
          >
          
              <View style={{marginHorizontal:'7%',marginTop:'15%'}}>
                  <Text style={{color:'#fff',fontSize:18,fontWeight:'500'}}>Contract  Us</Text>
                  <Text style={{marginTop:18,color:'#fff',fontWeight:'300',fontSize:14,lineHeight:20}}>Need any help?
                  Our team's will help you acoding to any quire</Text>
              </View>
            
          </ImageBackground>
         {/* <View style={{flex:1,backgroundColor:'pink',height:400}}>  */}
         <View style={{backgroundColor:'#247F59',  
            width: '60%',
            alignSelf: 'flex-end',
            borderRadius: 9,
          right:20,
          //position:'absolute',
     

         // top:'60%',
        // marginTop:'30%',
        //top:160,
        //height:400,
        bottom:'20%'
        
          }}>
              <View style={{ marginTop: 25, marginLeft:15,marginBottom:25}}>
<Text style={{color:'#fff',fontSize:18,fontWeight:'500'}}>Ravi</Text>
<View style={{marginTop:25,flexDirection:'row'}}>
<Text style={{color:'#fff',fontSize:15,fontWeight:'500',width:'50%'}}>Address</Text>
<Text style={{color:'#fff',fontSize:13,width:'45%'}}>xyz,Rajkot </Text>
</View>
<View style={{marginTop:10,flexDirection:'row'}}>
  <Text style={{color:'#fff',fontSize:15,fontWeight:'500',width:'50%'}}>Mobile</Text>
  <Text style={{color:'#fff',fontSize:13,width:'40%'}}>123654987</Text>
</View>
<View style={{marginTop:10,flexDirection:'row'}}>
  <Text style={{color:'#fff',fontSize:15,fontWeight:'500',width:'50%'}}>Email</Text>
  <Text style={{color:'#fff',fontSize:13,width:'45%'}}>xyz@gmail.com</Text>
</View>
</View>
             </View>
            </View>
         {/* </View> */}
        
          </SafeAreaView>
        </ScrollView>
      );
    }
  }
  
  export default ContactUs;
  