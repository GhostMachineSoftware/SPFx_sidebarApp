var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import * as strings from 'SidebarWebPartStrings';
//*** Custom Imports ***/
import UsefulLinksTemplate from './SidebarTemplate';
import * as $ from 'jquery';
require('bootstrap');
require('./styles/custom.css');
import { SPComponentLoader } from '@microsoft/sp-loader';
import MockHttpClient from './MockHttpClient';
import { SPHttpClient } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
var SidebarWebPart = /** @class */ (function (_super) {
    __extends(SidebarWebPart, _super);
    function SidebarWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SidebarWebPart.prototype.onInit = function () {
        //SPComponentLoader.loadCss('https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css');
        SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
        return _super.prototype.onInit.call(this);
    };
    SidebarWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('Metrotiles')/Items", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    SidebarWebPart.prototype._getMockListData = function () {
        return MockHttpClient.get()
            .then(function (data) {
            var listData = { value: data };
            return listData;
        });
    };
    //private _getListData(): Promise<ISPLists> {
    //  return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists?$filter=Hidden eq false`, SPHttpClient.configurations.v1)
    //    .then((response: SPHttpClientResponse) => {
    //      return response.json();
    //    });
    //}
    SidebarWebPart.prototype._renderList = function (items) {
        var html = '';
        items.forEach(function (item) {
            html += "\n      <ul class=\"list\">\n      <li class=\"listItem\">\n        <span class=\"ms-font-l\">" + item.Title + "</span>\n      </li>\n    </ul>";
        });
        var listContainer = this.domElement.querySelector('#spListContainer');
        listContainer.innerHTML = html;
    };
    SidebarWebPart.prototype._renderListAsync = function () {
        var _this = this;
        // Local environment
        if (Environment.type === EnvironmentType.Local) {
            this._getMockListData().then(function (response) {
                _this._renderList(response.value);
            });
        }
        else if (Environment.type == EnvironmentType.SharePoint ||
            Environment.type == EnvironmentType.ClassicSharePoint) {
            this._getListData()
                .then(function (response) {
                _this._renderList(response.value);
            });
        }
    };
    SidebarWebPart.prototype.render = function () {
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
        $('.accordion', this.domElement).accordion();
        this._renderListAsync();
    };
    Object.defineProperty(SidebarWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SidebarWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return SidebarWebPart;
}(BaseClientSideWebPart));
export default SidebarWebPart;
//# sourceMappingURL=SidebarWebPart.js.map