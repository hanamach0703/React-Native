import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import {colors, sizes} from "../src/theme"
import {useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Firebase from '../firebaseConfig'
import {Input} from "./component"
import {Button} from "./component"

const SignInScreen = () => {
    // const auth = getAuth(firebaseApp);
    const navigation = useNavigation()
    // const [email, setEmail] = useState('hana7@gmail.com');
    // const [password, setPassword] = useState('123456');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(Firebase.auth, email, password);
            // console.log(user)
            navigation.reset({
                index: 0,
                routes: [{name: 'DashboardScreen'}],
            })
        }
        catch (error){
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In to your account</Text>
            <View style={styles.line} />
            <Input 
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder='Email'/>
            <Input 
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder='Password'/>
            <Button
                title="SignIn"
                onPress={SignIn}
            />
            {/* <TouchableOpacity style={styles.btn} onPress={SignIn}>
                <Text style={styles.btnTitle}>Sign In</Text>
            </TouchableOpacity> */}
       </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: sizes.xl4,
    },
    title: {
        color: colors.textColors.black,
        fontWeight: '800',
        fontSize: sizes.xl
    },
    line: {
        width: 87,
        height: 4,
        borderRadius: 4,
        backgroundColor: colors.primary.blue,
        marginTop: sizes.xl2,
        marginBottom: 48,
    },
    // input: {
    //     height: 56,
    //             width: '100%',
    //             marginBottom: sizes.xl8,
    //             paddingHorizontal: sizes.large,
    //             paddingVertical: sizes.xl,
    //             backgroundColor: colors.textColors.whiteGrey,
    //             borderRadius: sizes.medium,
    //             fontWeight: '600'
    // },
    // btn: {
    //     backgroundColor: colors.primary.blue,
    //     height: 56,
    //     borderRadius: sizes.medium,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // btnTitle: {
    //     color: colors.textColors.white,
    //     fontWeight: '600'
    // }

});

export default SignInScreen;