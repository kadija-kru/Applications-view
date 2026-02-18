import * as React from 'react';
import { IAppTile } from '../models/IAppTile';
import { Icon } from '@fluentui/react/lib/Icon';
import { Text } from '@fluentui/react/lib/Text';
import styles from './AppTileCard.module.scss';

export interface IAppTileCardProps {
  tile: IAppTile;
}

export const AppTileCard: React.FC<IAppTileCardProps> = ({ tile }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (tile.linkUrl) {
      if (tile.openInNewTab) {
        window.open(tile.linkUrl, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = tile.linkUrl;
      }
    }
    e.preventDefault();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(e as any);
    }
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const renderIcon = (): JSX.Element => {
    // Check if iconName is a URL (http/https or data URI)
    if (
      tile.iconName &&
      (tile.iconName.startsWith('http://') ||
        tile.iconName.startsWith('https://') ||
        tile.iconName.startsWith('data:'))
    ) {
      return (
        <div className={styles.iconContainer}>
          <img src={tile.iconName} alt={tile.title} className={styles.customIcon} />
        </div>
      );
    }

    // Otherwise treat as Fluent UI icon name
    return (
      <div className={styles.iconContainer}>
        <Icon iconName={tile.iconName || 'AppIconDefault'} className={styles.icon} />
      </div>
    );
  };

  return (
    <div
      className={styles.tileCard}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`${tile.title}: ${tile.description}. ${
        tile.openInNewTab ? 'Opens in new tab' : 'Opens in current tab'
      }`}
    >
      {renderIcon()}
      <div className={styles.content}>
        <Text variant="large" className={styles.title}>
          {tile.title}
        </Text>
        <Text variant="small" className={styles.description}>
          {tile.description}
        </Text>
      </div>
    </div>
  );
};
