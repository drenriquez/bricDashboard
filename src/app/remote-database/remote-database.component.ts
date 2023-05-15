import { Component } from '@angular/core';

@Component({
  selector: 'app-remote-database',
  templateUrl: './remote-database.component.html',
  styleUrls: ['./remote-database.component.scss']
})
export class RemoteDatabaseComponent {



  onFileSelected(event: any) {
   const selectedFile = event.target.files[0];

    // Create a FileReader object
    const fileReader = new FileReader();

    // Set up an event listener for when the FileReader has loaded the file
    fileReader.onload = (e) => {
      const fileContent = fileReader.result as string;
      const jsonData = JSON.parse(fileContent);
      console.log(jsonData);
    };

    // Read the selected file as text
    fileReader.readAsText(selectedFile);
  }


}
