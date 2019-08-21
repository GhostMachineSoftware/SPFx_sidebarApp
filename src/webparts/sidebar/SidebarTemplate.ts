export default class SidebarTemplate {
    public static templateHtml: string =  `
            <div class="row sidebar">   
                <div class="appContent scrollbar">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade active" id="links" role="tabpanel" aria-labelledby="v-pills-links-tab">
                            <div class="panel-group" id="accordion">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                        Collapsible Group 1</a>
                                    </h4>
                                    </div>
                                    <div id="collapse1" class="panel-collapse collapse in">
                                    <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                        Collapsible Group 2</a>
                                    </h4>
                                    </div>
                                    <div id="collapse2" class="panel-collapse collapse">
                                    <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                        Collapsible Group 3</a>
                                    </h4>
                                    </div>
                                    <div id="collapse3" class="panel-collapse collapse">
                                    <div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade metrotiles" id="metrotiles" role="tabpanel" aria-labelledby="v-pills-metrotiles-tab">
                            <div id="spListContainer">
                            </div>
                        </div>
                        <div class="tab-pane fade" id="help" role="tabpanel" aria-labelledby="v-pills-help-tab">this will show the help desk bot</div>
                        <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">something else...</div>
                    </div>
                </div>
                <div class="col-3 appTabs">
                    <ul class="nav nav-stacked nav-pills" aria-orientation="vertical">
                        <li class="active"><a class="nav-link" data-toggle="pill" href="#links" aria-controls="v-pills-links" aria-selected="true">Links</a></li>
                        <li><a class="nav-link" data-toggle="pill" href="#metrotiles" role="tab" aria-controls="v-pills-metrotiles" aria-selected="false">Metrotiles</a></li>
                        <li><a class="nav-link" id="help-tab" data-toggle="pill" href="#help" role="tab" aria-controls="v-pills-help" aria-selected="false">IT Help</a></li>
                        <li><a class="nav-link" id="settings-tab" data-toggle="pill" href="#settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Tab 4</a></li>
                    </ul>
                </div>
            </div>            
`;
}