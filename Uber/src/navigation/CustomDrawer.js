import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
const CustomDrawer = props =>
{
    return (

        <DrawerContentScrollView {...props} >

            <View style={{ backgroundColor: '#212121', padding: 15 }}>
                {/*User rows */}


                {/*Messages rows */}

                <View style={{ borderWidth: 1, borderColor: 'red', borderBottomWidth: 1, bottomBorderWidth: 1, borderBottomColor: '#eee' }}>
                    <Pressable onPress={() => { console.warn('make money') }}>
                        <Text style={{ color: '#dddddd', paddingVertical: 5 }}>Do more with your account</Text>
                    </Pressable>
                </View>
                {/*Do more */}
                <Pressable onPress={() => { console.warn('make money') }}>
                    <Text style={{ color: '#dddddd', paddingVertical: 5 }}>Do more with your account</Text>
                </Pressable>

                {/*Make money */}
                <Pressable onPress={() => { console.warn('make money driving') }}>
                    <Text style={{ color: 'white', paddingVertical: 5 }}>Make money driving</Text>
                </Pressable>
            </View>



            <DrawerItemList {...props} />
        </DrawerContentScrollView>

    );
};
export default CustomDrawer;
