import { Component,OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// date1= new FormControl('')
// date2= new FormControl('')
// date1 = new Date();
// date2= new Date();
// result1=''

table = {
date1:'',
date2:''
}
reponse=''

compare() {
if (this.table.date1 > this.table.date2)
  this.reponse='la première date est au futur par rapport à la deuxième date';
// if (this.date1.getTime()===this.date2.getTime())
//   console.log('prsent')
else if ( this.table.date1 < this.table.date2)
  this.reponse='la première date est au passé par rapport à la deuxième date';
else
  this.reponse='la première date est au présent par rapport à la deuxième date';
// if(this.date1.setValue('') == this.date2.setValue('')){
//   //this.result1='la premiere date est au présent par rapport à la deuxieme';
//   console.log('la premiere date est au présent par rapport à la deuxieme');
// }
// else if (this.date1.setValue('') > this.date2.setValue('')){
//   //this.result1='la premiere date est au futur par rapport à la deuxieme'
//   console.log('la premiere date est au futur par rapport à la deuxieme');
// }
// else{
//   console.log('la premiere date est au passé par rapport à la deuxieme')
// } 


}


 }
  



