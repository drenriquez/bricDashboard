import { Component } from '@angular/core';

@Component({
  selector: 'app-xlsx-to-json',
  templateUrl: './xlsx-to-json.component.html',
  styleUrls: ['./xlsx-to-json.component.scss']
})
export class XlsxToJsonComponent {
  panelOpenState = false;
  handleFileDrop(event: any) {

    const file = event.target.files[0];
    if (file) {
      console.log(file.name);
      console.log(file.type);
      console.log(file.size);
      // esegui l'operazione di caricamento del file qui
    }
  }
}
