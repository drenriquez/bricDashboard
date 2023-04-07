import { Component } from '@angular/core';
//import { ElectronService } from 'ngx-electron-fresh';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electronstart';

  constructor(/*private electronService: ElectronService*/){
   // this.electronService.ipcRenderer.on('rispostaIpc',()=>{
    //  console.log('+++++++++ricevuto da ipcMain++++++++++')
   // })
  }

  public provaIpc(){
    // if(this.electronService.isElectronApp){//verifica se è una app e non una webapp
    //   this.electronService.ipcRenderer.send('provaIpc');
    //   console.log('button test 0k');
    // }
  }
}
