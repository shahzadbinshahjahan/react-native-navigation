import {Text, SafeAreaView, Image, StyleSheet} from "react-native";
export default function PageContent({header,imageSource}){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            <Image source={imageSource} style={styles.heroImage} resizeMode="contain"/>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:"10%"
    },
    header:{
        textAlign:"center",
        fontSize:24,
        fontWeight:"500"
    },
    heroImage:{
        height:"100%",
        width:"100%"
    }
})