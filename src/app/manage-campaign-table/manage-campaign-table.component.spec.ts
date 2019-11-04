import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManageCampaignTableComponent } from "./manage-campaign-table.component";

describe("ManageCampaignTableComponent", () => {
  let component: ManageCampaignTableComponent;
  let fixture: ComponentFixture<ManageCampaignTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCampaignTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCampaignTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
