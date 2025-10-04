import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native';
import { TRootScreenProps, EScreens } from "@navigations";
import { useAppDispatch, useAppSelector } from "@store";
import { fetchFootballTeamDetail, selectTeamDetail, selectTeamMatches, selectTeamDetailLoading, selectTeamDetailError } from "@store";

export const FootballDetailScreen = ({ route }: TRootScreenProps<EScreens.FootballDetailScreen>) => {
    const { id } = route.params;
    const dispatch = useAppDispatch();
    
    const team = useAppSelector(selectTeamDetail);
    const matches = useAppSelector(selectTeamMatches);
    const loading = useAppSelector(selectTeamDetailLoading);
    const error = useAppSelector(selectTeamDetailError);

    useEffect(() => {
        dispatch(fetchFootballTeamDetail(id) as any);
    }, [dispatch, id]);

    if (loading) {
        return (
            <View style={styles.centerContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={styles.loadingText}>Загрузка информации о команде...</Text>
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

    if (!team) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>Команда не найдена</Text>
            </View>
        );
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getOpponentTeam = (match: any) => {
        return match.homeTeam.id === team.id ? match.awayTeam : match.homeTeam;
    };

    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.teamHeader}>
                <Image source={{ uri: team.crest }} style={styles.teamLogo} />
                <Text style={styles.teamName}>{team.name}</Text>
                <Text style={styles.teamShortName}>{team.shortName}</Text>
                <Text style={styles.teamInfo}>Основана: {team.founded}</Text>
                <Text style={styles.teamInfo}>Стадион: {team.venue}</Text>
                <Text style={styles.teamInfo}>Цвета: {team.clubColors}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Игроки команды</Text>
                {team.squad && team.squad.length > 0 ? (
                    team.squad.map((player) => (
                        <View key={player.id} style={styles.playerItem}>
                            <Text style={styles.playerName}>{player.name}</Text>
                            <Text style={styles.playerPosition}>{player.position}</Text>
                            <Text style={styles.playerInfo}>
                                {player.nationality} • {new Date(player.dateOfBirth).getFullYear()}
                            </Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noDataText}>Информация об игроках недоступна</Text>
                )}
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Будущие матчи</Text>
                {matches && matches.length > 0 ? (
                    matches.map((match) => {
                        const opponent = getOpponentTeam(match);
                        return (
                            <View key={match.id} style={styles.matchItem}>
                                <View style={styles.matchHeader}>
                                    <Text style={styles.matchDate}>{formatDate(match.utcDate)}</Text>
                                    <Text style={styles.competitionName}>{match.competition.name}</Text>
                                </View>
                                <View style={styles.matchTeams}>
                                    <View style={styles.teamContainer}>
                                        <Image source={{ uri: match.homeTeam.crest }} style={styles.teamCrest} />
                                        <Text style={styles.teamName}>{match.homeTeam.name}</Text>
                                    </View>
                                    <Text style={styles.vsText}>VS</Text>
                                    <View style={styles.teamContainer}>
                                        <Image source={{ uri: match.awayTeam.crest }} style={styles.teamCrest} />
                                        <Text style={styles.teamName}>{match.awayTeam.name}</Text>
                                    </View>
                                </View>
                                <Text style={styles.matchStage}>
                                    {match.stage} • Тур {match.matchday}
                                </Text>
                            </View>
                        );
                    })
                ) : (
                    <Text style={styles.noDataText}>Будущие матчи не найдены</Text>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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
    teamHeader: {
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    teamLogo: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    teamName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 5,
    },
    teamShortName: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    teamInfo: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    section: {
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    playerItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    playerName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    playerPosition: {
        fontSize: 14,
        color: '#007AFF',
        marginBottom: 2,
    },
    playerInfo: {
        fontSize: 12,
        color: '#666',
    },
    matchItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    matchHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    matchDate: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    competitionName: {
        fontSize: 12,
        color: '#007AFF',
        backgroundColor: '#f0f8ff',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    matchTeams: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    teamContainer: {
        flex: 1,
        alignItems: 'center',
    },
    teamCrest: {
        width: 30,
        height: 30,
        marginBottom: 5,
    },
    vsText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#666',
        marginHorizontal: 10,
    },
    matchStage: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    noDataText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        fontStyle: 'italic',
    },
});

