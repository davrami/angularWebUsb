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
model2 = new PlacaModel(false,"");

//onConnected() {this.connected = true;} 

}





