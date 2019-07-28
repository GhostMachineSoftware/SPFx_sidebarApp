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
import { SPComponentLoader } from '@microsoft/sp-loader';
import 'jquery';
require('bootstrap');
var SidebarWebPart = /** @class */ (function (_super) {
    __extends(SidebarWebPart, _super);
    function SidebarWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SidebarWebPart.prototype.render = function () {
        var cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
        SPComponentLoader.loadCss(cssURL);
        this.domElement.innerHTML = "\n    <div>\n      <div class=\"panel-group\" id=\"accordion\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">Collapsible Group 1</a>\n            </h4>\n          </div>\n          <div id=\"collapse1\" class=\"panel-collapse collapse in\">\n            <div class=\"panel-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">Collapsible Group 2</a>\n            </h4>\n          </div>\n          <div id=\"collapse2\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">\n              <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">Collapsible Group 3</a>\n            </h4>\n          </div>\n          <div id=\"collapse3\" class=\"panel-collapse collapse\">\n            <div class=\"panel-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\n          </div>\n        </div>\n      </div>\n    </div>";
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