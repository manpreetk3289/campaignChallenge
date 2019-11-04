import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import * as moment from "moment";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-manage-campaign-tab",
  templateUrl: "./manage-campaign-tab.component.html",
  styleUrls: ["./manage-campaign-tab.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ManageCampaignTabComponent implements OnInit {
  constructor() {}
  public upcoming: object[] = [];
  public live: object[] = [];
  public past: object[] = [];
  displayedColumns: string[] = ["Date", "Campaign", "View", "Actions"];

  public ELEMENT_DATA = [
    {
      name: "Auto Chess",
      region: "US",
      createdOn: 1559807714999,
      price: "Price info of Test Whatsapp",
      csv: "Some CSV link for Whatsapp",
      report: "Some report link for Whatsapp",
      image_url: "80.png",
      date: moment().add(1, "days")
    },
    {
      name: "PubG Mobile",
      region: "CA, FR",
      createdOn: 1559806715124,
      price: "Price info of Super Jewels Quest",
      csv: "Some CSV link for Super Jewels Quest",
      report: "Some report link for Super Jewels Ques",
      image_url: "81.png",
      date: moment().add(5, "days")
    },
    {
      name: "Shadow Fight 3",
      region: "FR",
      createdOn: 1559806711124,
      price: "Price info of Mole Slayer",
      csv: "Some CSV link for Mole Slayer",
      report: "Some report link for Mole Slayer",
      image_url: "82.png",
      date: moment().subtract(2, "days")
    },
    {
      name: "Flow Free",
      region: "JP",
      createdOn: 1559806680124,
      price: "Price info of Mancala Mix",
      csv: "Some CSV link for Mancala Mix",
      report: "Some report link for Mancala Mix",
      image_url: "83.png",
      date: moment().add(3, "days")
    },
    {
      name: "Flow Free 2",
      region: "JP",
      createdOn: 1559806680124,
      price: "Price info of Mancala Mix",
      csv: "Some CSV link for Mancala Mix",
      report: "Some report link for Mancala Mix",
      image_url: "84.png",
      date: moment().add(8, "days")
    }
  ];
  campaignData$ = this.getCampaignData();
  public getCampaignData(): Observable<any> {
    return of(this.ELEMENT_DATA);
  }

  public dateChange = data => {
    this.updateCampaign();
  };
  ngOnInit() {
    this.updateCampaign();
  }

  private updateCampaign() {
    this.past = [];
    this.live = [];
    this.upcoming = [];
    this.campaignData$.subscribe(campData =>
      campData.forEach(data => {
        const daysDiff = moment().diff(data.date, "days");
        if (daysDiff > 0) {
          this.past.push(data);
        } else if (daysDiff < 0) {
          this.upcoming.push(data);
        } else {
          this.live.push(data);
        }
      })
    );
  }
}
