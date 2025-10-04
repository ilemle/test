
interface ITeam {
    address: string,
    clubColors :string
    crest : string
    founded : number
    id : number
    lastUpdated:string
    name : string
    shortName :string
    tla : string
    venue :  string
    website : string
}

interface IResponseGetAllFootballTeams {
    count: number,
    filters: {
        limit: number,
        offset: number,
        permission: string,
    },
    teams: Array<ITeam>
}

export type {IResponseGetAllFootballTeams,ITeam}