import { IAppTile } from '../models/IAppTile';

export interface IAppTilesProps {
  tiles: IAppTile[];
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}
