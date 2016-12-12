import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public changeItem(e) {
    switch (e.index) {
      case 0:
        this.router.navigate(['/home/angular']);
        break;
      case 1:
        this.router.navigate(['/home/react']);
        break;
      case 2:
        this.router.navigate(['/home/rxjs']);
        break;
      case 3:
        this.router.navigate(['/home/vuejs']);
        break;
      case 4:
        this.router.navigate(['/home/laravel']);
        break;
      case 5:
        this.router.navigate(['/home/symfony']);
        break;
      default:
        console.log('e is: ', e, 'e.index is: ', e.index);
        break;
    }
  }

}
