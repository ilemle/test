import axios from "axios";
import Config from "react-native-config";

export const axiosInstance = axios.create({
    baseURL:'https://api.football-data.org',
    headers:{
        'X-Auth-Token':  Config.FOOTBALL_API_KEY
    }
})
