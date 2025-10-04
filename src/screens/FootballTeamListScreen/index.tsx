import { EScreens, TRootScreenProps } from "@navigations"
import { useCallback, useEffect } from "react"
import { FlatList, StyleSheet, ActivityIndicator, Text, View } from "react-native"
import { fetchFootballTeams, loadMoreFootballTeams } from "../../store/footballTeams"
import { selectFootballTeams, selectFootballTeamsLoading, selectFootballTeamsError, selectHasMoreTeams, selectIsLoadingMore } from "../../store/footballTeams/selectors"
import { FootballTeamListItem } from "./FootballTeamListItem"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { RefreshButton } from "../../components/RefreshButton"

export const FootballTeamListScreen = ({ navigation }: TRootScreenProps<EScreens.FootballTeamListScreen>) => {
    const dispatch = useAppDispatch();
    const teams = useAppSelector(selectFootballTeams);
    const loading = useAppSelector(selectFootballTeamsLoading);
    const loadingMore = useAppSelector(selectIsLoadingMore);
    const hasMore = useAppSelector(selectHasMoreTeams);
    const error = useAppSelector(selectFootballTeamsError);

    useEffect(() => {
        dispatch(fetchFootballTeams() as any);
    }, [dispatch]);

    const onPressTeamItem = useCallback(() => {
        navigation.navigate(EScreens.FootballDetailScreen)
    }, [navigation])

    const handleLoadMore = useCallback(() => {
        if (!loadingMore && hasMore) {
            dispatch(loadMoreFootballTeams());
        }
    }, [dispatch, loadingMore, hasMore])

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.loadingText}>Загрузка команд...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>Ошибка: {error}</Text>
            </View>
        );
    }
    
    return (
        <View style={styles.container}>
            <RefreshButton />
            <FlatList
                style={styles.list}
                data={teams}
                renderItem={({ item, index }) => {
                    return (
                        <FootballTeamListItem
                            index={index}
                            logoUrl={item.crest}
                            name={item.name}
                            onPress={onPressTeamItem}
                        />
                    )
                }}
                keyExtractor={(item) => item.id.toString()}
                onEndReachedThreshold={0.5}
                onEndReached={handleLoadMore}
                ListFooterComponent={() => {
                    if (loadingMore) {
                        return (
                            <View style={styles.footerLoader}>
                                <ActivityIndicator size="small" color="#007AFF" />
                                <Text style={styles.loadingMoreText}>Загрузка...</Text>
                            </View>
                        );
                    }
                    return null;
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        paddingHorizontal: 20,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    errorText: {
        fontSize: 16,
        color: '#FF3B30',
        textAlign: 'center',
    },
    footerLoader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    loadingMoreText: {
        marginLeft: 10,
        fontSize: 14,
        color: '#666',
    },
})