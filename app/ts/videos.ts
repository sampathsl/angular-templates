/**
 * Created by Test on 7/3/2016.
 */
export class Videos{

    id : number;
    title : string;
    videoCode : string;
    desc : string;

    constructor(id:number, title: string, videoCode : string, desc:string){
        this.id = id;
        this.title = title;
        this.videoCode = videoCode;
        this.desc = desc;
    }

}