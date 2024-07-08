import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Homepage = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="LoginPage"
      onPress={() => navigation.navigate('Loginpage')}
    />
  );
};

export default Homepage;

const styles = StyleSheet.create({})