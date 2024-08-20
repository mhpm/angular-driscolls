import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, SidemenuComponent],
  exports: [SidemenuComponent],
})
export class CoreModule {}
