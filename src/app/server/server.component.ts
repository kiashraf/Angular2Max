import{Component} from'@angular/core';

@Component({
     selector:'app-server',
     templateUrl:'./server.component.html',
     styles:[`h3{color:blue}
     p{
         color: green
     }`]

})
export class ServerComponent{
    port:8080;
    status: string ="Online";

    getStatus(){
        return this.status;
    } 

}