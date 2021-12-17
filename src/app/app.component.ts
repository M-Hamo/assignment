import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>`,
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this._hidePreloader();
  }

  private _hidePreloader(): void {
    const el = document.getElementById('globalLoader');
    if (el) {
      el.addEventListener('transitionend', () => {
        el.style.display = 'none';
      });

      if (!el.className.includes('global-loader-hidden')) {
        el.style.display = 'none';
      }
    }
  }
}
