import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { ThemeService } from '../@fury/services/theme.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private sidenavService: SidenavService,
              private iconRegistry: MatIconRegistry,
              private renderer: Renderer2,
              private themeService: ThemeService,
              @Inject(DOCUMENT) private document: Document,
              private platform: Platform,
              private route: ActivatedRoute) {
    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.themeService.setStyle(queryParamMap.get('style')));

    this.iconRegistry.setDefaultFontSetClass('material-icons');
    this.themeService.theme$.subscribe(theme => {
      if (theme[0]) {
        this.renderer.removeClass(this.document.body, theme[0]);
      }

      this.renderer.addClass(this.document.body, theme[1]);
    });

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.sidenavService.addItems([

      {
        name: 'Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 10,
        pathMatchExact: true
      },
      {
        name: 'Taxis',
        routeOrFunction: '/taxis',
        icon: 'local_taxi',
        badge: '22',
        badgeColor: '#2196F3',
        position: 15,
      },
      {
        name: 'Users',
        routeOrFunction: '/users',
        icon: 'supervisor_account',
        badge: '22',
        badgeColor: '#2196F3',
        position: 15,
      },
      {
        name: 'USER COMPONENTS',
        icon: 'lock',
        position: 66,
        subItems: [
          {
            name: 'User Map',
            routeOrFunction: '/user-forms/user-map1',
            position: 5
          },
          // {
          //   name: 'Register Page',
          //   routeOrFunction: '/register',
          //   position: 10
          // },
          {
            name: 'User History',
            routeOrFunction: 'user-forms/user-history1',
            position: 15
          },
          {
            name: 'User Settings',
            routeOrFunction: 'user-forms/user-settings1',
            position: 20
          }
        ]
      },
      {
        name: 'Authentication',
        icon: 'lock',
        position: 66,
        subItems: [
          {
            name: 'Login Page',
            routeOrFunction: '/login',
            position: 5
          },
          // {
          //   name: 'Register Page',
          //   routeOrFunction: '/register',
          //   position: 10
          // },
          {
            name: 'Forgot Password',
            routeOrFunction: '/forgot-password',
            position: 15
          },
          {
            name: 'From Email Forgot Password',
            routeOrFunction: '/fe-forgotpassword',
            position: 20
          }
        ]
      },
    ]);
  }
}
