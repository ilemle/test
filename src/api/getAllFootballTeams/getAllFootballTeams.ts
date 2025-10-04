import { axiosInstance } from "../instance"
import { IResponseGetAllFootballTeams } from "./types"


export const getAllFootballTeams = async () => {
    try {

        const response = await axiosInstance.get<IResponseGetAllFootballTeams>('/v4/teams/')
   
        return response.data
    } catch (e){
        
    }
}