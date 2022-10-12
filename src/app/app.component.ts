import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient){}

  file: any;
  getFile(event: any){
    this.file = event.target.files[0];
    console.log("file", this.file);
  }

  uploadFile(){
    let formData = new FormData;
    formData.set("file", this.file);

    //ligando a api

    this.http.post('http://localhost:3001/upload/uploadFiles', formData).subscribe((response: any)=> {});
  }
}
