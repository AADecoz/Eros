import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  extensionCheck=true;
  errortekst="";
  source:any="";
  selectedFile:any;
  hidePreview=true;
  gender="";
  sourceMatch:any;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
  }

  onFileChanged(event:any){ 
    this.hidePreview=false;
    this.selectedFile =event?.target.files[0];
    var name =this.selectedFile.name;
    const extensions=["jpg","png"];
    if(extensions.includes(name.slice(name.length-3).toLowerCase()) ){
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload=(_event)=> {
      this.source=reader.result;
     
     
    }
  }else{
    this.selectedFile="wrong type";
    this.hidePreview=true;
     this.extensionCheck=false;
      this.errortekst="non supported file extension";
  }
   }

  upload(){
    if(this.selectedFile!=undefined&&this.selectedFile!="wrong type"){
     if(this.selectedFile.size<2800000){const uploadData= new FormData();
     var id:any=sessionStorage.getItem("userid");
     uploadData.append('myFile',this.selectedFile, id+".jpg");
     this.UserService.savef(uploadData).subscribe(event => {
       
     });
   this.errortekst="Image uploaded";
       this.extensionCheck=false;
       this.hidePreview=true;
   }else{
     this.extensionCheck=false;
     this.errortekst="Uploaded file is too big";
     this.hidePreview=true;
   }
 }else if(this.selectedFile==undefined){
   
   this.extensionCheck=false;
   this.errortekst="No file selected";
 }
   }
  

}
