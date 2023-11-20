import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faMask, faRing, faPersonWalkingArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee, faRing, faMask, faPersonWalkingArrowRight, faPlus);
  }
}
