import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cop1',
  templateUrl: './cop1.component.html',
  styleUrls: ['./cop1.component.css']
})
export class Cop1Component {


audi=''
benz=''
ducatti=''
constructor(private active:ActivatedRoute){
  this.active.queryParams.subscribe(params=>{
    this.audi=params['audi']
    this.benz=params['benz']
    this.ducatti=params['ducatti']
  })
}



superpower="Flash"
 
r="1234"
g="green"

val=2
sentance="this is the sentences for the classes"
class='c2 c4'
hello(){
  console.log("hello everyone")
}
a(x:any,y:any,z:any){
  console.log(x,y,z)
}
h="head"

lower_Case="THIS USED TO BE IN UPPERCASE"

upper_Case="this used to be in the lowercase char"

date_exm=Date.now()

obj={
  "valone":"ships",
  "valtwo":"trains",
  "valthree":"plans"
}


num_val=100

num_val2=0.99
}
