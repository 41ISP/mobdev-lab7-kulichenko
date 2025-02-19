import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Topbar = () => {
    const router = useRouter();
    const lastchatscreen = () => {
        router.push('/LastChatScreen');
    }
    const contactscreen = () => {
        router.push('/ContactScreen');
    }
    const chatscreen = () => {
        router.push('/ChatsScreen');
    }
    return(
        <View style={styles.View}>
            <TouchableOpacity style={styles.Dropdown} onPress={lastchatscreen}>последний чат</TouchableOpacity>
            <TouchableOpacity style={styles.Dropdown} onPress={chatscreen}>чаты</TouchableOpacity>
            <TouchableOpacity style={styles.Dropdown} onPress={contactscreen}>контакты</TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    View: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    Dropdown: {
        width: 100,
        height: 30,
        fontSize: 20,
        margin: 5,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: "#000000",
        alignItems: 'center',
    }
})
export default Topbar