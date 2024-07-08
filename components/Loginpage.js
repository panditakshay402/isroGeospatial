import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Input } from 'react-native-elements';


const Loginpage = () => {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (

        <View style={styles.mainView}>
            <Text style={styles.welcome}>Welcome !</Text>
            <View style={styles.loginBox}>
                <Text style={styles.login}>Login</Text>
            <TextInput style={styles.input} onChangeText={text} value={'username'} editable />
            <TextInput style={styles.input} onChangeText={number} value={'Password'} editable />

            <Button
                title="Login"
                onPress={() => navigation.navigate('Homepage')}
            />

        </View>
        </View>
    );
};

const styles = StyleSheet.create({

    mainView:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#dd',
    },

    loginBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        width:'40%',
        height:'60%',
        marginLeft:'30%',
        borderRadius: 12,

        
    },
    welcome:{
        marginLeft:'45%',
        fontSize:30,
        fontWeight:'bold',
        // marginTop:'-5%',
    },
    login:{
        fontSize:18,
        fontWeight:'bold',
    },
    input: {
        height: 30,
        width: '50%',
        margin: 12,
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
    // borderColor:'blue',
        // backgroundColor:'#dd',
        color:'#dd',
    },

});

export default Loginpage

