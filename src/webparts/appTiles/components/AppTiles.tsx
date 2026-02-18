import * as React from 'react';
import styles from './AppTiles.module.scss';
import { IAppTilesProps } from './IAppTilesProps';
import { AppTileCard } from './AppTileCard';
import { Text } from '@fluentui/react/lib/Text';

export default class AppTiles extends React.Component<IAppTilesProps, {}> {
  public render(): React.ReactElement<IAppTilesProps> {
    const { tiles } = this.props;

    return (
      <div className={styles.appTiles}>
        <div className={styles.container}>
          {tiles && tiles.length > 0 ? (
            <div className={styles.tilesGrid}>
              {tiles.map((tile) => (
                <AppTileCard key={tile.id} tile={tile} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <Text variant="large">No applications configured</Text>
              <Text variant="medium">
                Please configure application tiles in the web part properties.
              </Text>
            </div>
          )}
        </div>
      </div>
    );
  }
}
