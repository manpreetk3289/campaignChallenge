import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ManageCampaignComponent } from "./manage-campaign/manage-campaign.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ManageCampaignTabComponent } from "./manage-campaign-tab/manage-campaign-tab.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { ManageCampaignTableComponent } from "./manage-campaign-table/manage-campaign-table.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ManageCampaignModalComponent } from "./manage-campaign-modal/manage-campaign-modal.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";

import { MatNativeDateModule } from "@angular/material/core";
@NgModule({
  declarations: [
    AppComponent,
    ManageCampaignComponent,
    ManageCampaignTabComponent,
    ManageCampaignTableComponent,
    ManageCampaignModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  entryComponents: [ManageCampaignModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

/**
 * Defines the path to i18n files.
 *
 * @param http to get the i18n files
 * @return translate loader
 */
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/", ".json");
}
