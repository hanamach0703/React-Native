import { View, Text, StyleSheet, ScrollView } from "react-native"
import {Input} from "./component"
import {Button} from "./component"
import { useState } from "react"
import { sizes } from "./theme"

const AddNoteScreen = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Input
                placeholder='Title'
                value={title}
                onChangeText={setTitle}
            />
             <Input
                placeholder='Description'
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <Button
                title='Save'
                onPress={() => {}}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: sizes.xl4,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
});

export default AddNoteScreen;