import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank';

  destino:number | undefined;
  valor:number | undefined;

  transferencia: any;

  transferir($event: any){
    console.log($event);
    this.transferencia = $event;
  }


}
