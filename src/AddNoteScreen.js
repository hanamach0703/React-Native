import { View, Text, StyleSheet } from "react-native"


const AddNoteScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Add Note Screen</Text>
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

export default AddNoteScreen;