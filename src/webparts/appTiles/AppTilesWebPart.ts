import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'AppTilesWebPartStrings';
import AppTiles from './components/AppTiles';
import { IAppTilesProps } from './components/IAppTilesProps';
import { IAppTile } from './models/IAppTile';
import {
  PropertyFieldCollectionData,
  CustomCollectionFieldType
} from '@pnp/spfx-property-controls/lib/PropertyFieldCollectionData';

export interface IAppTilesWebPartProps {
  description: string;
  tiles: IAppTile[];
}

export default class AppTilesWebPart extends BaseClientSideWebPart<IAppTilesWebPartProps> {
  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IAppTilesProps> = React.createElement(
      AppTiles,
      {
        tiles: this.properties.tiles || this._getDefaultTiles(),
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
      
      // Initialize with default tiles if none exist
      if (!this.properties.tiles || this.properties.tiles.length === 0) {
        this.properties.tiles = this._getDefaultTiles();
      }
    });
  }

  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) {
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }
          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private _getDefaultTiles(): IAppTile[] {
    return [
      {
        id: '1',
        title: 'HR Portal',
        description: 'Leave, contracts and documents',
        iconName: 'ContactCard',
        linkUrl: '#',
        openInNewTab: false
      },
      {
        id: '2',
        title: 'Project Manager',
        description: 'Track and manage projects',
        iconName: 'ProjectCollection',
        linkUrl: '#',
        openInNewTab: false
      },
      {
        id: '3',
        title: 'Sales Tracker',
        description: 'Monitor sales and opportunities',
        iconName: 'Money',
        linkUrl: '#',
        openInNewTab: false
      },
      {
        id: '4',
        title: 'IT Support',
        description: 'Submit and track tickets',
        iconName: 'Repair',
        linkUrl: '#',
        openInNewTab: false
      },
      {
        id: '5',
        title: 'Inventory System',
        description: 'Manage inventory and assets',
        iconName: 'ProductList',
        linkUrl: '#',
        openInNewTab: false
      },
      {
        id: '6',
        title: 'Finance Hub',
        description: 'Financial reports and analytics',
        iconName: 'BarChartVertical',
        linkUrl: '#',
        openInNewTab: false
      },
      {
        id: '7',
        title: 'Learning Center',
        description: 'Training and development',
        iconName: 'Education',
        linkUrl: '#',
        openInNewTab: false
      },
      {
        id: '8',
        title: 'Customer Portal',
        description: 'Client management and support',
        iconName: 'People',
        linkUrl: '#',
        openInNewTab: false
      }
    ];
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyFieldCollectionData('tiles', {
                  key: 'tiles',
                  label: 'Application Tiles',
                  panelHeader: 'Manage Application Tiles',
                  manageBtnLabel: 'Manage tiles',
                  value: this.properties.tiles || this._getDefaultTiles(),
                  fields: [
                    {
                      id: 'title',
                      title: 'Title',
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: 'description',
                      title: 'Description',
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: 'iconName',
                      title: 'Icon Name (Fluent UI icon or URL)',
                      type: CustomCollectionFieldType.string,
                      required: false
                    },
                    {
                      id: 'linkUrl',
                      title: 'Link URL',
                      type: CustomCollectionFieldType.string,
                      required: true
                    },
                    {
                      id: 'openInNewTab',
                      title: 'Open in New Tab',
                      type: CustomCollectionFieldType.boolean,
                      required: false
                    }
                  ],
                  disabled: false
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
