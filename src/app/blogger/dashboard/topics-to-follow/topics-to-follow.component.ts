import { Component, OnInit,HostListener,ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Topics } from 'src/app/shared/model/topics.model';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';
interface topic
{
following:boolean;
id:string;
topicName:string;
}

@Component({
  selector: 'app-topics-to-follow',
  templateUrl: './topics-to-follow.component.html',
  styleUrls: ['./topics-to-follow.component.css']
})
export class TopicsToFollowComponent implements OnInit {
  seemore:boolean=false;
  
topicsData:topic[];
  constructor(private eRef: ElementRef,private data:DataStorageService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.data.getTopicsList().subscribe(
      res=>{
      
        this.topicsData=res;
        
      }
    )
  }
  
  onClick()
  {
    this.seemore=true;
  }
  onClose()
  {
    this.seemore=false;
  }
  onFollow(id:string,i:number)
  {
    this.topicsData[i].following=true
    this.toastr.success("Followed Successfully")
    
     this.data.onFollowTopic(id).subscribe(res=>{
      this.ngOnInit();
     })
     
     
  }
  onUnFollow(id:string,i:number)
  {
    this.topicsData[i].following=false;
    this.toastr.success("UnFollowed Successfully")

     this.data.onUnFollowTopic(id).subscribe(res=>{
      this.ngOnInit();
     })
     
  }

  @HostListener('document:click', ['$event'])
clickout(event) {
  if(this.eRef.nativeElement.contains(event.target)) {
    
  } else {
    this.seemore = false;
  }
}
}
