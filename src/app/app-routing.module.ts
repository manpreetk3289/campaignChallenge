import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManageCampaignComponent } from "./manage-campaign/manage-campaign.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "campaign"
  },
  {
    path: "campaign",
    component: ManageCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
