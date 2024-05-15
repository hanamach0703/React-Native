import StackNavigation from "./StackNavigation";
import {NavigationContainer} from '@react-navigation/native';
import {colors, sizes} from "../theme"
import { SafeAreaView } from "react-native-safe-area-context";


const Router = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer theme={{
                colors: {
                    background: colors.textColors.white
                }
            }}>
                <StackNavigation/>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Router;