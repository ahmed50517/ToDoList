import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
title:string="To Do List";
imageLink:string="https://cdn-icons-png.flaticon.com/512/4697/4697260.png";
tasks:string[]=[];
newtask:string="";
isAvailable:boolean=false;

addTask(){
  if(this.newtask.trim()  !=="")
  {
    this.tasks.push(this.newtask);
    this.newtask="";
    this.isAvailable=true;
  }
  console.log(this.tasks);
}
removeTask(index:number){
this.tasks.splice(index,1);
this.isAvailable=this.tasks.length>0;
}
editTask(index:number,newTaskEdit:string) :string | void{
const trimmedTask=newTaskEdit.trim();
if (newTaskEdit.trim()!==""){
  this.tasks[index]=newTaskEdit;
}
else{
  newTaskEdit=this.tasks[index];
  return this.newtask=newTaskEdit;
}
this.newtask="";
}
}
