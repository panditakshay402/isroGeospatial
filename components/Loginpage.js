import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Loginpage = () => {
    const navigation = useNavigation();
    return (

        <View style={styles.loginBox}>
            <Text>Loginpage</Text>
            <Button
                title="Homepage"
                onPress={() => navigation.navigate('Homepage')}
            />

        </View>
    );
};

const styles=StyleSheet.create({
    loginBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // width:'50%',
        // height:'50%',
    },
    
});

export default Loginpage

