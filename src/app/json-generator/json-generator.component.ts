import { Component } from '@angular/core';
import { DataService } from '../service/data-service.service';
import { ElectronService } from 'ngx-electron-fresh';

@Component({
  selector: 'app-json-generator',
  templateUrl: './json-generator.component.html',
  styleUrls: ['./json-generator.component.scss']
})
export class JsonGeneratorComponent {

  tablesGenerated = this.dataService.getTablesGenerated();
  jsonData = this.dataService.getData();
  data = this.dataService.getData() ? this.dataService.getData() : [];
  jsonData2 = JSON.stringify(this.jsonData, null, 2);
  isLoading: boolean = false;

  constructor(private dataService: DataService, private electronService: ElectronService) {
    this.electronService.ipcRenderer.on('resultTablesGenerator', (event, arg) => {
      console.log('-------------ricevuto da ipcMain in resultTablesGenerator -----------');
      console.log(arg);
      dataService.setTablesGenerated(arg);
      this.tablesGenerated = arg;
      this.isLoading=false

    })
  }

  ngOnChanges(): void {
    this.tablesGenerated = this.dataService.getTablesGenerated();
  }

  getData(): any {
    console.log(this.tablesGenerated);
  }

  tablesGenerator() {
    if (this.electronService.isElectronApp) { //verifica se è una app e non una webapp
      this.electronService.ipcRenderer.send('tablesGenerator', this.dataService.getSchema(), this.dataService.getData());
      console.log('tablesGenerator');
      this.tablesGenerated = this.dataService.getTablesGenerated();
    }
    this.isLoading=true
    setTimeout(()=>{this.getData();this.getJsonSchema();},2000)
  }

  public getJsonSchema() {
    console.log(this.dataService.getSchema());
  }
}
