import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNavComponent } from './add-nav.component';
/*export*/
export { AddNavComponent } from './add-nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AddNavComponent
  ],
  exports: [AddNavComponent]
})
export class AddNavModule {}
