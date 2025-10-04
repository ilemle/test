import { EScreens, TRootScreenProps } from "@navigations"
import { Text, TouchableOpacity } from "react-native"



export const FootballTeamListScreen = ({navigation}:TRootScreenProps<EScreens.FootballTeamListScreen>)=>{

    return (
        <>
             <TouchableOpacity 
             onPress={()=>{
                navigation.navigate(EScreens.FootballDetailScreen)
             }}>
                <Text>
                    Перейти
                </Text>
            </TouchableOpacity>
        </>
    )
}

