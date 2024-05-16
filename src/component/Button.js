import { StyleSheet, TextInput, TouchableOpacity, Text } from "react-native"
import { colors, sizes } from "../theme";
// import { useState } from "react";


const Button = ({title, onPress, type}) => {
    // const [email, setEmail] = useState('hana7@gmail.com');
    // const [password, setPassword] = useState('123456');
    
    return (
       <TouchableOpacity style={[
            styles.btn,
            type === 'danger' && styles.danger
        ]} onPress={onPress}>
            <Text style={styles.btnTitle}>{title}</Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 50,
      width: '100%',
      marginBottom: sizes.xl8,
      paddingHorizontal: sizes.large,
      paddingVertical: sizes.xl,
      backgroundColor: colors.textColors.whiteGrey,
      borderRadius: sizes.medium,
      fontWeight: '600'
    },
    danger: {
        backgroundColor: colors.secondary.red,
    },
    btn: {
        backgroundColor: colors.primary.blue,
        height: 56,
        borderRadius: sizes.medium,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTitle: {
        color: colors.textColors.white,
        fontWeight: '600'
    }
    
});

export default Button;