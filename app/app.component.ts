
class AppController implements ng.IController {
    static $inject = ['$state'];
    public selectedIndex = 0;
    constructor(public $state: ng.ui.IStateService) {
        $state.go('app.searchpage');
    }
    toggleClass(index): any {
        this.selectedIndex = index;
    }
}

export class AppComponent implements ng.IComponentOptions {
    static NAME: string = 'appView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = AppController;
        this.templateUrl = require('./app.component.html');
    }
}
