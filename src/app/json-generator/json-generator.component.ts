import { Component } from '@angular/core';
import { DataService } from '../service/data-service.service';
import { ElectronService } from 'ngx-electron-fresh';
@Component({
  selector: 'app-json-generator',
  templateUrl: './json-generator.component.html',
  styleUrls: ['./json-generator.component.scss']
})
export class JsonGeneratorComponent {
  constructor(private dataService: DataService, private electronService: ElectronService) {

    this.electronService.ipcRenderer.on('rispostaIpcMainReadXlsx',()=>{
      console.log('-------------ricevuto da ipcMain in rispostaIpcMainReadXlsx -----------')
    })
  }


  data=this.dataService.getData()?this.dataService.getData():[];

  getData():any{
    console.log(this.data);
  }

  public sendXlsx(){
    if(this.electronService.isElectronApp){//verifica se è una app e non una webapp
      this.electronService.ipcRenderer.send('readXlsx',this.data);
      console.log('button sendXlsx');
    }
  }
}
