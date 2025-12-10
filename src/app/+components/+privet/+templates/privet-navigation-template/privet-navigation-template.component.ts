import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-privet-navigation-template',
  templateUrl: './privet-navigation-template.component.html',
  styleUrl: './privet-navigation-template.component.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLinkWithHref
]
})
export class PrivetNavigationTemplateComponent {
  router=inject(Router);
  private breakpointObserver = inject(BreakpointObserver);
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  exit() {
    this.router.navigateByUrl('/login');
  }
}
