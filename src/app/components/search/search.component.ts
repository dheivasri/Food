import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // ActivatedRoute > usefull for reading; Router > usefull for writing;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: String = "";
  constructor(private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.searchTerm = params['searchTerm'];
    })
  }


  search(){
    if (this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm);
    } else {
      // If searchTerm is empty or null, navigate to home
      this.router.navigateByUrl('');
    }
  }
}
