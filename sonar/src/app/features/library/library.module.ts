import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './components/library/library.component';
import { ButtonPrimaryComponent } from '../../shared/button-primary/button-primary.component';
import { TrackFormComponent } from '../../shared/track-form/track-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackSettingsComponent } from './components/track-settings/track-settings.component';
import { TrackCoversPopupComponent } from './components/track-covers-popup/track-covers-popup.component';
import { TrackFilesPopupComponent } from './components/track-files-popup/track-files-popup.component';


@NgModule({
  declarations: [
    LibraryComponent,
    ButtonPrimaryComponent,
    TrackFormComponent,
    TrackSettingsComponent,
    TrackCoversPopupComponent,
    TrackFilesPopupComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LibraryModule { }
