import * as React from 'react';
import { View,Text,Button,TextInput,Pressable } from 'react-native';
import styles from './Inscription.style';

const Inscription = ({navigation}) => {
    return (
        <View style={styles.sectionContainer}>
        <Text style={styles.sectionWelcome}>Welcome !</Text>
        <Text style={styles.sectionTitle}>Nom d'utilisateur</Text>
        <TextInput style={styles.sectionInput} />
        <Text style={styles.sectionTitle}>Mot de passe</Text>
        <TextInput style={styles.sectionInput} />
        <Text style={styles.sectionTitle}>Confirmer mot de passe</Text>
        <TextInput style={styles.sectionInput} />
        <View style={styles.sectionButton}><Button onPress={() => navigation.navigate('Accueil')} title="S'inscrire"/></View>
        </View>
    );
};

export default Inscription;