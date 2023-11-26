import { Component } from '@angular/core';
import { Observable, filter, from, map, of } from 'rxjs';

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


  // Create a new Observable with constructor
  // myObservable  =  new Observable ((observer)=>{
  //   console.log("Observable is Starting")
    // observer.next("1")
    // observer.next("2")
    // observer.next("3")
    // observer.next("4")
    // observer.next("5")
    // console.log("Observable is Finished")

    //  Error  and complete Of Observable
    // setTimeout(()=>observer.next("1"),1000)
    // setTimeout(()=>observer.next("2"),2000)
    // setTimeout(()=>observer.error( new Error ('Something went worng in observable ...3')),3000)
    // setTimeout(()=>observer.next("4"),4000)
    // setTimeout(()=>observer.next("5"),5000)
    // setTimeout(()=>observer.complete(),6000)
  // })
  

  // Create a new Observable with Create Method...
  // myObservable = Observable.create((observer:any)=>{
  //   setTimeout(()=>observer.next("A"),1000)
  //   setTimeout(()=>observer.next("B"),2000)
  //   // setTimeout(()=>observer.error( new Error ('Something went worng in observable ...3')),3000)
  //   setTimeout(()=>observer.next("C"),4000)
  //   setTimeout(()=>observer.next("D"),5000)
  //   // setTimeout(()=>observer.complete(),6000)
  // })

  // Of Oprator 
   arr1 = [1,2,3,4,5,6,7,]
   arr2 = ['A', 'B', 'C', 'D', 'E', 'F']

  //  myObservable = of( this.arr1, this.arr2, 1, 2 ,"Jignesh ")

   myObservable = from(this.arr1)
   
   tromformObs = this.myObservable.pipe(map((val)=>{
    return val*5
   }))
   filterObsrvable = this.tromformObs.pipe(map((val:any)=>{
    console.log(val>=30)
   }))

  ngOnInit(){
    this.filterObsrvable.subscribe((res:any)=>{
      console.log(res)
    }, (error:any)=>{ 
      alert(error.message)
    }, ()=>{
      // alert("Done with observable method call")
    })
  }
}
