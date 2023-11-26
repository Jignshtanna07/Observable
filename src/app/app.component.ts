import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observable';

  // Observable like promises that are use to asychronously program.
  // But Promises is Take full response form server. Promise provide us single response 
  // But Observable stream a data request and then data moves in to chanks 

  myObservable  =  new Observable ((observer)=>{
    console.log("Observable is Starting")
    observer.next("1")
    observer.next("2")
    observer.next("3")
    observer.next("4")
    console.log("Observable is Finished")
  })
  ngOnInit(){
    this.myObservable.subscribe((res)=>{
      console.log(res)
    })
  }
}
