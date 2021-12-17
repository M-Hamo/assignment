import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from './modules/primeng.module';
import { ButtonComponent } from './components/button/button.component';
import { ShimmerLoadingComponent } from './components/shimmer-loading/loading.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { ElementsNumPipe } from './pipes/elements-num.pipe';

const LOCAL_COMPONENTS: any = [];
const SHARED_COMPONENTS: any = [
  ButtonComponent,
  ShimmerLoadingComponent,
  NoDataComponent,
];

const SHARED_PIPES: any = [ElementsNumPipe];

const LOCAL_DIRECTIVES: any = [];

const SHARED_DIRECTIVES: any = [];

const THIRD_MODULES = [MaterialModule, PrimeNgModule, FlexLayoutModule];

const COMMON_MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  HttpClientModule,
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
    ...LOCAL_COMPONENTS,
    ...LOCAL_DIRECTIVES,
    ...SHARED_DIRECTIVES,
    ...SHARED_PIPES,
  ],
  imports: [...COMMON_MODULES, ...THIRD_MODULES],
  exports: [
    ...SHARED_COMPONENTS,
    ...COMMON_MODULES,
    ...THIRD_MODULES,
    ...SHARED_PIPES,
  ],
})
export class SharedModule {}
