import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Checkbox, Divider, Input } from "native-base";
import {
  Feather,
  MaterialIcons,
  Entypo,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={{ paddingTop: 50 }}>
        <Text style={{ fontSize: 30, fontWeight: "600", color: "#16C65C" }}>
          Sign Up
        </Text>
      </View>

      <View>
        <Text style={{ padding: 10, fontSize: 20 }}>firstname</Text>
        <Input
          style={{ padding: 10 }}
          placeholder="write your firstname"
          InputLeftElement={
            <Ionicons
              style={{ padding: 10 }}
              name="person"
              size={15}
              color="#16C65C"
            />
          }
        />

        <Text style={{ padding: 10, fontSize: 20 }}>lastname</Text>
        <Input
          style={{ padding: 10 }}
          placeholder="write your lastname"
          InputLeftElement={
            <Ionicons
              style={{ padding: 10 }}
              name="person"
              size={15}
              color="#16C65C"
            />
          }
        />

        <Text style={{ padding: 10, fontSize: 20 }}>email</Text>
        <Input
        type="text"
          style={{ padding: 10 }}
          placeholder="write your email"
          InputLeftElement={
            <Feather
              style={{ padding: 10 }}
              name="mail"
              size={15}
              color="#16C65C"
            />
          }
        />

        <Text style={{ padding: 10, fontSize: 20 }}>phone</Text>
        <Input
        type="text"
          style={{ padding: 10 }}
          placeholder="write your call"
          InputLeftElement={
            <Ionicons
              style={{ padding: 10 }}
              name="call"
              size={15}
              color="#16C65C"
            />
          }
        />

        <Text style={{ padding: 10, fontSize: 20 }}>password</Text>
        <Input
          style={{ padding: 10 }}
          placeholder="write your password"
          type={show ? "text" : "password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          InputLeftElement={
            <MaterialIcons
              style={{ padding: 10 }}
              name="password"
              size={15}
              color="#16C65C"
            />
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

      
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#16C65c",
          padding: 10,
          marginTop: 20,
          borderRadius: 10,
          
        }}
      >
        <Text
          style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
        >
          Signup
        </Text>
      </TouchableOpacity>

     

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 60,
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 18 }}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text
            style={{
              textDecorationLine: "underline",
              color: "#16C65C",
              fontSize: 22,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
