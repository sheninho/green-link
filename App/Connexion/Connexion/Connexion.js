import * as React from 'react';
import { View,Text,Button,TextInput,Pressable } from 'react-native';
import styles from './Connexion.style';

const Connexion = ({navigation}) => {
    return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionWelcome}>Welcome !</Text>
          <Text style={styles.sectionTitle}>Nom d'utilisateur</Text>
          <TextInput style={styles.sectionInput} />
          <Text style={styles.sectionTitle}>Mot de passe</Text>
          <TextInput style={styles.sectionInput} />
          <View style={styles.sectionButton}><Button onPress={() => navigation.navigate('Accueil')} title='Se connecter'/></View>
          
        <Pressable style={styles.sectionPressable} title="Inscription" onPress={() => navigation.navigate('Inscription')}>
            <Text style={styles.sectionPressableText}>S'inscrire</Text>
        </Pressable>
        <Pressable style={styles.sectionPressable} title="Login_clinique" onPress={() => navigation.navigate('Login_clinique')}>
            <Text style={styles.sectionPressableText}>Mot de passe oublié</Text>
        </Pressable>
      </View>
    );
};

export default Connexion;