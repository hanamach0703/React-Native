import { StyleSheet, TextInput } from "react-native"
import { colors, sizes } from "../theme";
// import { useState } from "react";


const Input = ({value, onChangeText, placeholder, multiline}) => {
    // const [email, setEmail] = useState('hana7@gmail.com');
    // const [password, setPassword] = useState('123456');
    
    return (
       <TextInput
       value={value}
       onChangeText={onChangeText}
       placeholder={placeholder} style={[
        styles.input,
        multiline && styles.multiline
      ]}
       multiline={multiline}
       numberOfLines={multiline ? 4 : 1}
       /> 
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
      fontWeight: '600',
      color: colors.textColors.black,
    },
    multiline: {
      height: 170,
      fontWeight: '400',
      textAlignVertical: 'top',
      textAlign: 'left',
      color: colors.textColors.whiteGrey,
    }
    
});

export default Input;