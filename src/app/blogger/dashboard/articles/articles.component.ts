import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesData } from 'src/app/shared/model/articles.model';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';
import {DateAgoPipe} from '../../pipes/date-ago.pipe'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  url:string="https://1.bp.blogspot.com/-Sl-SXtgttF0/Xm3CcJit8TI/AAAAAAAAACE/6Qgzudb0wYs5quvLc2wXJQJ0BbWgslgrwCLcBGAsYHQ/s1600/1%2B%25281%2529.png"
  isLoading=false;
  articlesData:[]
  postId:string;
  flag:boolean=false;
  constructor(private data:DataStorageService,private router:Router) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.data.getFeed().subscribe(
      res=>{
        
        this.articlesData=res;
        this.isLoading=false;
        if(this.articlesData==undefined)
        {
          
         this.flag=true;
        }
      }
    )
  
  }
  onClick(id:string)
  {
    this.postId=id;
    this.data.assisnPostId(id);
    this.router.navigate(['/read-post'])
    
  }
  }


