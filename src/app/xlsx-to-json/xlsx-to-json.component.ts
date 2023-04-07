import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-xlsx-to-json',
  templateUrl: './xlsx-to-json.component.html',
  styleUrls: ['./xlsx-to-json.component.scss']
})
export class XlsxToJsonComponent {
  dataFromFile:any;
  panelOpenState = false;
  handleFileDrop(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      //const data = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });
      console.log(data);
      this.dataFromFile=data;
      console.log(file.name);
      console.log(file.type);
      console.log(file.size);
      console.log(file);
    };
    reader.readAsBinaryString(file);
  }

}
