import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sectionContainer:{
        flex:1,
        alignItems:'center',
        marginTop: 36,
        paddingHorizontal: 12,
    },
    sectionWelcome: {
      fontSize: 40,
      fontWeight: '100',
      marginBottom:50,
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: '400',
    },
    sectionInput: {
        width:300,
        height:60,
        fontSize: 25,
        marginBottom:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        
        elevation: 1,
        },
    sectionButton:{
        width:150,
        borderRadius:15,
        marginBottom:30,
    },
    sectionPressable:{
        color:"#000",
        fontWeight: '400',
        marginBottom:10,
        alignItems:'center',
    },

    sectionPressableText:{
        color:"#000",
        fontWeight: '400',
        fontSize: 20,
    },
    
  });

  export default styles;