import { View, Text, StyleSheet, Button} from "react-native"


const SignUpScreen = ({navigation}) => {
    return (
        <View style={StyleSheet.create}>
            <Text>Sign Up Screen</Text>
            <Button title="SignIn" onPress={() => navigation.goBack()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default SignUpScreen;