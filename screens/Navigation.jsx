import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './Home';
import {VideoScreen} from "./Video";

const Stack = createNativeStackNavigator();


export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'IP address' }} />*/}
                <Stack.Screen name="Video" component={VideoScreen} options={{ title: 'Video' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};