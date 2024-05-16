import { View, Text, StyleSheet, ScrollView } from "react-native"
import {Input} from "./component"
import {Button} from "./component"
import { useEffect, useState } from "react"
import { sizes } from "./theme"
import { useDispatch } from "react-redux"
import { addNote } from "./store/action/notesAction"
import { editNote } from "./store/action/notesAction"
import {useNavigation, useRoute} from '@react-navigation/native'

const EditNoteScreen = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const route = useRoute();
    const item = route.params.item;
    console.log(item);

    useEffect(() => {
        setTitle(item.title);
        setDescription(item.description);
    }, [])

    const saveHandler = () => {
        dispatch(editNote({
            id: item.id,
            title,
            description
        }));
        navigation.goBack();
        // navigation.navigate('DashboardScreen');
    }

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
                onPress={saveHandler}
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

export default EditNoteScreen;