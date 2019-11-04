import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  EventEmitter,
  Output,
  SimpleChanges
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import * as moment from "moment";

import { MatDialog } from "@angular/material/dialog";
import { ManageCampaignModalComponent } from "../manage-campaign-modal/manage-campaign-modal.component";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { Observable, of } from "rxjs";
@Component({
  selector: "app-manage-campaign-table",
  templateUrl: "./manage-campaign-table.component.html",
  styleUrls: ["./manage-campaign-table.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ManageCampaignTableComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  // @Input() campaignData$: Observable<any[]>;
  @Input() campaignData$: any;
  @Output() dateChange = new EventEmitter();
  public date: any;
  displayedColumns: string[] = ["Date", "Campaign", "View", "Actions"];

  public dataSource;
  public data1: any;

  ngOnInit() {}
  public getDataSource() {
    // console.log("-", this.campaignData$);
    // let data1;
    // this.campaignData$.subscribe(data => {
    //   data1 = data;
    // });
    this.dataSource = new MatTableDataSource(this.campaignData$);
    return this.dataSource;
  }

  public getDateDiff = date => {
    return moment(date).fromNow();
  };
  openDialog(selectedData): void {
    const dialogRef = this.dialog.open(ManageCampaignModalComponent, {
      width: "400px",
      height: "450px",
      data: selectedData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>, selectedData) {
    this.date = moment(event.value);
    selectedData.date = moment(event.value);

    this.dateChange.emit(selectedData);
  }
}
