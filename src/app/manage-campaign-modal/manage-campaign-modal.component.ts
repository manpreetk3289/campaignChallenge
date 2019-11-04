import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-manage-campaign-modal",
  templateUrl: "./manage-campaign-modal.component.html",
  styleUrls: ["./manage-campaign-modal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ManageCampaignModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ManageCampaignModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
