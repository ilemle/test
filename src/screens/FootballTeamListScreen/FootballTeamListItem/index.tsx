import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"

interface IFootballTeamListItem {
    logoUrl: string,
    name: string,
    onPress: () => void
    index:number
}

export const FootballTeamListItem = ({ logoUrl, name, onPress,index }: IFootballTeamListItem) => {


    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text>{index+1}</Text>
            <Image style={styles.image} source={{ uri: logoUrl }} />
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

const styles =  StyleSheet.create({
    container:{
       flexDirection:'row',
       alignItems:'center',
       marginTop:10,
    },
    image:{
        height:30,
        width:30,
        marginHorizontal:10,
    }
})