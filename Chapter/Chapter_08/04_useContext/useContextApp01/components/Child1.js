import {View,Text} from "react-native"
import { useUserContext } from "../useContext"



export const Child1=()=>{
  const {user} = useUserContext()
  return(
    <View style={{
      margin:20
    }}>
      <View>
        <Text>From Children 01</Text>
      </View>
      <View>
        <Text>Name : {user.name}</Text>
      </View>
    </View>
  )
}