import { StatusBar } from "expo-status-bar";
import { StalySheet, Text, View, Button, TextInput } from 'react-native';


export default function Login() {
    return (
       <View> 
        <View>
        <Text>Login</Text>
        <Button title="Cadastre-se"/>
        </View>
        <View>
<View>
    <TextInput />
    <TextInput />
    <Button title="Log In"/>
    </View>
    <Button title="Esqueceu uma senha"/>
    </View>
    </View>

    );
}