import { axiosInstance } from "../instance"
import { IResponseGetAllFootballTeams } from "./types"

interface GetTeamsParams {
    limit?: number;
    offset?: number;
}

export const getAllFootballTeams = async (params: GetTeamsParams = {}) => {
    try {
        const { limit = 100, offset = 0 } = params;
        
        const response = await axiosInstance.get<IResponseGetAllFootballTeams>('/v4/teams/', {
            params: {
                limit,
                offset
            }
        });
   
        return response.data;
    } catch (e) {
        throw e;
    }
}