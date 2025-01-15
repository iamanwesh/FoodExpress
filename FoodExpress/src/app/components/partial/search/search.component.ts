import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchterm='';
  constructor(activeted:ActivatedRoute,private rout:Router){
    activeted.params.subscribe((params)=>{
      if(params['searchterm'])
        this.searchterm=params['searchterm']
    })
  }
  search(term:string):void{
    if(term)
      this.rout.navigateByUrl('/search/'+term)
  }
}
