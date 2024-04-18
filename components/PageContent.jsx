/**
 * @param {string} header
 * @param {import("react-native").ImageSourcePropType} imageSource
 * @returns {JSX.Element}
 * Component to display header and image for all pages
 */
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
        padding:"5%",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    header:{
        textAlign:"center",
        fontSize:24,
        fontWeight:"500"
    },
    heroImage:{
        flex:1,
        width:"100%"
    }
})