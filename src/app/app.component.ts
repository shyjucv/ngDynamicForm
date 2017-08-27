import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  closeResult: string;
   data: WebContent;
   selectedContent: content;

  constructor(private modalService: NgbModal, private http: Http)
  {
     
  }

  ngOnInit(){

    this.http.get('assets/websiteData.json')
    .subscribe(res => this.data = <WebContent> res.json());

  }

  open(content,key) {
    this.selectedContent=this.data.contents[key];    
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

interface WebContent{
id:string;
contents:content[];
}
interface content{
key:string;
value:string;
}

