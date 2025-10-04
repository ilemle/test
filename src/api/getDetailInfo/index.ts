import { axiosInstance } from "../instance"

export interface IPlayer {
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    nationality: string;
}

export interface ITeamDetail {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    squad: IPlayer[];
    lastUpdated: string;
}

export interface IMatch {
    id: number;
    utcDate: string;
    status: string;
    matchday: number;
    stage: string;
    group: string | null;
    lastUpdated: string;
    homeTeam: {
        id: number;
        name: string;
        shortName: string;
        tla: string;
        crest: string;
    };
    awayTeam: {
        id: number;
        name: string;
        shortName: string;
        tla: string;
        crest: string;
    };
    competition: {
        id: number;
        name: string;
        code: string;
        type: string;
        emblem: string;
    };
    odds: {
        msg: string;
    };
    score: {
        winner: string | null;
        duration: string;
        fullTime: {
            home: number | null;
            away: number | null;
        };
        halfTime: {
            home: number | null;
            away: number | null;
        };
    };
}

export interface IResponseTeamMatches {
    count: number;
    filters: {
        dateFrom: string;
        dateTo: string;
        competitions: string;
        permission: string;
    };
    matches: IMatch[];
}

export const getFootballTeamDetailInfo = async (teamId: number) => {
    try {
        // Получаем информацию о команде с игроками
        const teamResponse = await axiosInstance.get<ITeamDetail>(`/v4/teams/${teamId}`);
        
        // Получаем будущие матчи команды
        const matchesResponse = await axiosInstance.get<IResponseTeamMatches>(`/v4/teams/${teamId}/matches`, {
            params: {
                status: 'SCHEDULED',
                limit: 10
            }
        });

        return {
            team: teamResponse.data,
            matches: matchesResponse.data.matches
        };
    } catch (e) {
        throw e;
    }
}
