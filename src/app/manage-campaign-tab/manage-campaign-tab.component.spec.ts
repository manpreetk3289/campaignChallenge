import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCampaignTabComponent } from './manage-campaign-tab.component';

describe('ManageCampaignTabComponent', () => {
  let component: ManageCampaignTabComponent;
  let fixture: ComponentFixture<ManageCampaignTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCampaignTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCampaignTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
