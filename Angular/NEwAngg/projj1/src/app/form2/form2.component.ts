import { Component,OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  addForm:FormGroup

constructor(private fb:FormBuilder){}


ngOnInit(): void {
  
// this.addForm=new FormGroup({
//   'fn':new FormControl(),
//   'description':new FormControl(),
//   'type':new FormControl()
// })

// let users = new FormArray([
//   new FormControl('first one'),
//   new FormControl('Second one')
// ])

// console.log(users)
// console.log(users.value)

this.addForm=this.fb.group({
  'fn':new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),

  'description':new FormControl('',Validators.minLength(10)),

  'type':new FormControl(''),

  // 'users':new FormArray([
  //   new FormControl('first one'),
  //   new FormControl('Second one'),   
  // ])

  'users':new FormArray([
    this.fb.group({
      'name':new FormControl(''),
      'Marks': new FormControl(''),
      'branch':new FormControl('')
    })
  ])


})

let obj={
  'fn':'Name123',
  'type':'Reactive'
 
}
this.addForm.patchValue(obj)
}

addUser(){
  let userArr= this.addForm.get('users') as FormArray;
  let newUser = this.fb.group({
    'name':'',
    'Marks':'',
    'branch':''
  });
  userArr.push(newUser)
}


remove_element(i){
 let arr = this.addForm.get('users') as FormArray
 arr.removeAt(i)
}

get users():FormArray{
  return this.addForm.get('users') as FormArray
}

assign(i){
  let arr = this.addForm.get('users') as FormArray
  let values=arr.value
 if(arr.value[i].Marks<60){
  arr.value[i].branch="OTHER BRANCH"
 }else{
  arr.value[i].branch='CSE'
 }
  this.users.setValue(arr.value)
  
}





addval(){
  console.log(this.addForm.value)
//  this.addForm.valueChanges.subscribe(data=>{
//   console.log(data)
//  })

// if(this.addForm.pristine){

// }

// if(this.addForm.touched){

// }

// console.log(this.addForm.valid)
// console.log(this.addForm.invalid)
// console.log(this.addForm.pristine)
// console.log(this.addForm.dirty)
// console.log(this.addForm.touched)
// console.log(this.addForm.untouched)

}

resetForm(){
  this.addForm.reset()
}

}
