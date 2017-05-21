import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PlacaModel } from './placa.model';



@Component({
moduleId: module.id,
  selector: 'input-demo',
  templateUrl: './sandbox.template.html',
  styleUrls: ['./sandbox.style.css'],
})
export class SandboxComponent {
textToSend : string;

send = function(){
    console.log(this.textToSend);
}

}





