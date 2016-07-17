import {Component} from 'angular2/core';
import {Videos} from './videos';

@Component({

    selector : "playlist_s",
    templateUrl : "app/html/playlist.component.html",
    inputs : ['p_list']

})

export class PlayListComponent {
    onSelect(vid:Videos){
        console.log(JSON.stringify(vid));
    }
}