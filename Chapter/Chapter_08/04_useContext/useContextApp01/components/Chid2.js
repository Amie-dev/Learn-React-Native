import {View,Text} from "react-native"
import { useUserContext } from "../useContext"



export const Child2=()=>{
  const {user}=useUserContext()
  return(
    <View style={{
      margin:50,
      backgroundColor:"#01ff01"
    }}>
      <View style={{
        padding:20
      }}>
        <Text>From Children 02</Text>
      </View>
      <View style={{
        padding:20
      }}>
        <Text>Age : {user.age}</Text>
        <Text>G : {user.G}</Text>
      </View>
    </View>
  )
}