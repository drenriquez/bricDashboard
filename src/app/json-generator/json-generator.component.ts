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
    this.electronService.ipcRenderer.on('rispostaIpc',()=>{
     console.log('+++++++++ricevuto da ipcMain++++++++++')
   })
  }


  data=this.dataService.getData()?this.dataService.getData():[];
  getData():any{
    console.log(this.data);
  }
  public provaIpc(){
    if(this.electronService.isElectronApp){//verifica se è una app e non una webapp
      this.electronService.ipcRenderer.send('provaIpc');
      console.log('button test 0k');
    }
  }
}
