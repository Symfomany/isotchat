import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {


  constructor(private router: Router) { }

  public changeTab(e) {
    switch (e.index) {
      case 0:
        this.router.navigate(['/home']);
        break;
      case 1:
        this.router.navigate(['/notifications']);
        break;
      case 2:
        this.router.navigate(['/account']);
        break;
      default:
        console.log('e is: ', e, 'e.index is: ', e.index);
        break;
    }
  }

  ngOnInit() {
  }

}
