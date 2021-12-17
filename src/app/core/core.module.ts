import { NgModule, Optional, SkipSelf } from '@angular/core';

import { EnsureModuleLoadedOnceGuard } from './loaded-once.guard';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
