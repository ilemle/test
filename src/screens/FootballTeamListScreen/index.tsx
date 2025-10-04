import { EScreens, TRootScreenProps } from "@navigations"
import { useCallback, useEffect, useState } from "react"
import { FlatList, StyleSheet } from "react-native"
import { getAllFootballTeams } from "../../api/getAllFootballTeams"
import { FootballTeamListItem } from "./FootballTeamListItem"
import { ITeam } from "../../api/getAllFootballTeams/types"

export const FootballTeamListScreen = ({ navigation }: TRootScreenProps<EScreens.FootballTeamListScreen>) => {

    const [data, setData] = useState<Array<ITeam>>()

    useEffect(() => {
        getAllFootballTeams().then((teams) => setData(teams?.teams))
    }, [])

    const onPressTeamItem = useCallback(() => {
        navigation.navigate(EScreens.FootballDetailScreen)
    },[data])

    return (
        <>

            <FlatList
            style={styles.list}
                data={data}
                renderItem={({ item }) => {
                    return (

                        <FootballTeamListItem logoUrl={item.crest} name={item.name} onPress={onPressTeamItem} />

                    )
                }}
            />

        </>
    )
}

const styles=StyleSheet.create({
    list:{
        paddingHorizontal:20,
    }
})