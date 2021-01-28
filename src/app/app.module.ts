import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import GetDataService from './get-data.service';
import { PhoneTransformPipe } from './phone-transform.pipe';
import { BirthdayTransformPipe } from './birthday-transform.pipe';

@NgModule({
  declarations: [AppComponent, PhoneTransformPipe, BirthdayTransformPipe],
  imports: [BrowserModule],
  providers: [GetDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
