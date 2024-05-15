import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../SignInScreen";
import SignUpScreen from "../SignUpScreen";
import DashboardScreen from "../Home/DashboardScreen";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Firebase from "../../firebaseConfig";
import { colors } from "../theme"
import { Ionicons } from "@expo/vector-icons";
import AddNoteScreen from "../AddNoteScreen";
import {useNavigation} from '@react-navigation/native'
import { ActivityIndicator, View } from "react-native";


const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation()

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(Firebase.auth, (user) => {
            if (user){
                setUser(user)
            }else{
                setUser(null)
            }
            setLoading(false)
        })
        return () => unsubcribe();
    }, []);

    if (loading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator size='small' color={colors.primary.blue}/>
            </View>
        );
    }

    const signOutHandle = async () => {
        try {
            await signOut(Firebase.auth);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colors.textColors.white
            }
        }}>
            {user ? (
                <Stack.Screen name='DashboardScreen' component={DashboardScreen} options={{
                    headerTitle: 'ODP Batch 4',
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <Ionicons
                            name='person-circle'
                            size={24}
                            color={colors.primary.dark}
                            onPress={signOutHandle}
                        />
                    ),
                    headerRight: () => 
                        <Ionicons
                            name='add-circle-sharp'
                            size={24}
                            color={colors.primary.green}
                            onPress={() => navigation.navigate('AddNoteScreen')}
                        />
                    
                }}/> 
            ):(
                <Stack.Screen name='SignInScreen' component={SignInScreen} options={{
                    headerShown: false,
                }}/>
            )}
            <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
            <Stack.Screen name='AddNoteScreen' component={AddNoteScreen} 
            // options={{
            //         headerLeft: () => (
            //             <Ionicons
            //                 name='person-circle'
            //                 size={24}
            //                 color={colors.primary.blue}
            //                 onPress={signOutHandle}
            //             />
            //         )
            //     }}
            /> 
        </Stack.Navigator>
    )
}

export default StackNavigation;