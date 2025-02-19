import { useRouter } from "expo-router";
import React, { useState } from "react"
import { Alert, TextInput, View } from "react-native";
const router = useRouter();
const LoginScreen = () =>{
    const [input, setInput] = useState("");
    const handleChange = (e: string) => {
        if(input.length <= 41)
            setInput(e);
        else{
            setInput(state => state.slice(0,40));
            Alert.alert("неверное значение");
        }
    }
    return(
        <View>
            <Input value = {input} OnChangeText></Input>
        </View>
    )

    
}




