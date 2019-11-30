import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './SidebarWebPart.module.scss';
import * as strings from 'SidebarWebPartStrings';

//*** Custom Imports ***/
import UsefulLinksTemplate from './SidebarTemplate';

import * as $ from 'jQuery';
require('bootstrap');
require('./styles/custom.css');
import { SPComponentLoader } from '@microsoft/sp-loader';

import MockHttpClient from './MockHttpClient';
import {
  SPHttpClient,
  SPHttpClientResponse,   
  HttpClient
} from '@microsoft/sp-http';

import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';

export interface ISidebarWebPartProps {
  description: string;
}
export interface ISPLists {
  value: ISPList[];
}

export interface ISPList {
  Title: string;
  Id: string;
}

export default class SidebarWebPart extends BaseClientSideWebPart<ISidebarWebPartProps> {
  protected onInit(): Promise<void> {
    //SPComponentLoader.loadCss('https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css');
    SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
    return super.onInit();
  }

  private _getListData():Promise<ISPLists>
  { 
    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl+`/_api/web/lists/GetByTitle('Metrotiles')/Items`,SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse)=>{
        return response.json();
      }); 
  }

  private _getMockListData(): Promise<ISPLists> {
    return MockHttpClient.get()
      .then((data: ISPList[]) => {
        var listData: ISPLists = { value: data };
        return listData;
      }) as Promise<ISPLists>;
  }
  
  //private _getListData(): Promise<ISPLists> {
  //  return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists?$filter=Hidden eq false`, SPHttpClient.configurations.v1)
  //    .then((response: SPHttpClientResponse) => {
  //      return response.json();
  //    });
  //}

  private _renderList(items: ISPList[]): void {
    let html: string = '';
    items.forEach((item: ISPList) => {
      html += `
      <ul class="list">
      <li class="listItem">
        <span class="ms-font-l">${item.Title}</span>
      </li>
    </ul>`;
    });

    const listContainer: Element = this.domElement.querySelector('#spListContainer');
    listContainer.innerHTML = html;
  }

  private _renderListAsync(): void {
    // Local environment
    if (Environment.type === EnvironmentType.Local) {
      this._getMockListData().then((response) => {
        this._renderList(response.value);
      });
    }
    else if (Environment.type == EnvironmentType.SharePoint || 
              Environment.type == EnvironmentType.ClassicSharePoint) {
      this._getListData()
        .then((response) => {
          this._renderList(response.value);
        });
    }
  }

  public render(): void {
    //let cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    //SPComponentLoader.loadCss(cssURL);
  
    this.domElement.innerHTML = UsefulLinksTemplate.templateHtml;

    //const accordionOptions: jQueryUI.AccordionOptions = {
    //  animate: true,
    //  collapsible: false,
    //  icons: {
    //    header: 'ui-icon-circle-arrow-e',
    //    activeHeader: 'ui-icon-circle-arrow-s'
    //  }
    //};

    //$('.accordion', this.domElement).accordion(accordionOptions);
    ($('.accordion', this.domElement) as any).accordion();
    this._renderListAsync();    

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
