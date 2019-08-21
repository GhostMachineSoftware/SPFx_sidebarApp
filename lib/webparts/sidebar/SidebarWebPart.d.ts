import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
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
    protected onInit(): Promise<void>;
    private _getListData;
    private _getMockListData;
    private _renderList;
    private _renderListAsync;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=SidebarWebPart.d.ts.map