export interface IAppTile {
  id: string;
  title: string;
  description: string;
  iconName: string; // Fluent UI icon name or URL
  linkUrl: string;
  openInNewTab: boolean;
}
