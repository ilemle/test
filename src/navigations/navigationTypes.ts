import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type TNavigationTypes=THomeStackParamList

export type THomeStackParamList = {
  FootballTeamListScreen: undefined;
  FootballDetailScreen: undefined;
};


export type TRootScreenProps<T extends keyof TNavigationTypes> = NativeStackScreenProps<TNavigationTypes, T>
