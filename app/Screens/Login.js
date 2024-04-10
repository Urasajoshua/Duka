import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Checkbox, Divider, Input } from "native-base";
import { Feather, MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const navigation = useNavigation()
  return (
    <View style={{ padding: 20 }}>
      <View style={{ paddingTop: 50 }}>
        <Text style={{ fontSize: 30, fontWeight: "600",color:'#16C65C' }}>Sign In</Text>
        <Text
          style={{
            paddingTop: 5,
            fontSize: 20,
            fontWeight: "500",
            paddingBottom: 5,
          }}
        >
          Welcome back you`ve missed
        </Text>
      </View>

      <View>
        <Text style={{ padding: 10,fontSize:20 }}>email</Text>
        <Input
          style={{ padding: 10 }}
          placeholder="write your email"
          InputLeftElement={<Feather style={{padding:10}} name="mail" size={15}  color="#16C65C" />}
        />

        <Text style={{padding:10,fontSize:20}}>password</Text>
        <Input
        style={{padding:10}}
          placeholder="write your password"
          type={show ? "text" : "password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          InputLeftElement={
            <MaterialIcons style={{padding:10}} name="password" size={15}  color="#16C65C" />
          }
          InputRightElement={
            <TouchableOpacity onPress={() => setShow(!show)}>
              <MaterialIcons
                name={show ? "visibility" : "visibility-off"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          }
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding:15
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Checkbox value="2" color={'#16C65C'}>remember me</Checkbox>
          </View>
          <TouchableOpacity style={{backgroundColor:'#16C65C',borderRadius:10,padding:8}}>
            <Text style={{color:'white',fontWeight:'900'}}>forgot password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('home')}
        style={{
          backgroundColor: "#16C65c",
          padding: 10,
          marginTop: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          paddingTop: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Divider color={"black"} width={20} />
        <Text style={{ paddingHorizontal: 5,fontSize:18 }}>or with</Text>
        <Divider color={"black"} width={20} />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          paddingTop: 50,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 10,
            width: 100,
            alignItems: "center",
            padding: 10,
            borderColor:'#16C65C'
          }}
        >
          <Entypo name="facebook-with-circle" size={24} color="black" />
          <Text>facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 10,
            width: 100,
            alignItems: "center",
            padding: 10,
            borderColor:'#16C65C'
          }}
        >
          <AntDesign name="google" size={24} color="black" />
          <Text>google</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 60,
          gap: 10,
        }}
      >
        <Text style={{fontSize:18}}>Don`t have an account ?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
          <Text style={{ textDecorationLine: "underline",color:'#16C65C',fontSize:22 }}>signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
