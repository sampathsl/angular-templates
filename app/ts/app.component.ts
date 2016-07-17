import {Component} from 'angular2/core';
import {Config} from './config.service'
import {Videos} from './videos'
import {PlayListComponent} from './playlist.component'

@Component({
    selector : 'my-app',
    templateUrl : 'app/html/main-heading.html',
    directives : [PlayListComponent]
})

export class AppComponent {

    test_component = Config.MAIN_HEADING;
    video_list : Array<Videos>;

    constructor(){
        this.video_list = [
            new Videos(1,'Test1','12341','Test1 Video'),
            new Videos(2,'Test2','12342','Test2 Video'),
            new Videos(3,'Test3','12343','Test3 Video'),
            new Videos(4,'Test4','12344','Test4 Video'),
            new Videos(5,'Test5','12345','Test5 Video')
        ]
    }

}
