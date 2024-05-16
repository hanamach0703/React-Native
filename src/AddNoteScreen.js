import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from "react-native"
import {Input} from "./component"
import {Button} from "./component"
import { useState } from "react"
import { colors, sizes } from "./theme"
import { useDispatch } from "react-redux"
import { addNote } from "./store/action/notesAction"
import {useNavigation} from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons"
import * as ImagePicker from 'expo-image-picker'

const AddNoteScreen = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [images, setImages] = useState([]);
    console.log(images)

    const saveHandler = () => {
        dispatch(addNote({
            id: Date.now(),
            title,
            description
        }));
        // navigation.navigate('DashboardScreen');
        navigation.goBack();
    }

    const addImageFromCamera = async () => {
        try {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                quality: 1
            });
            if (!result.canceled) {
                setImages([...images, result.assets[0]]);
            }else {
                console.log('You did not capture any image')
            }
        }catch (error) {
            console.log(error);
        }
    }

    const addImageFromGallery = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1
            });
            if (!result.canceled) {
                setImages([...images, result.assets[0]]);
            }else {
                console.log('You did not capture any image')
            }
        }catch (error) {
            console.log(error);
        }
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
            <View style={styles.imageContainer}>
                {images.map((image, index) => (
                    <Image
                    key={index}
                    source={{uri: image.uri}}
                    resizeMode="cover"
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: sizes.large}}/>
                ))}
                <TouchableOpacity
                    style={styles.addImageContainer}
                    onPress={() => Alert.alert(
                        'Add Images',
                        'inserting image to your notes',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => {},
                                style: 'cancel'
                            },
                            {
                                text: 'Camera',
                                onPress: () => addImageFromCamera()
                            },
                            {
                                text: 'Galery',
                                onPress: () => addImageFromGallery()
                            }
                        ]
                    )}>
                    <Ionicons
                        name='add-circle-sharp'
                        size={36}
                        color={colors.primary.blue}
                    />
                </TouchableOpacity>
            </View>
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
    addImageContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.textColors.whiteGrey,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export default AddNoteScreen;