import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCampaignModalComponent } from './manage-campaign-modal.component';

describe('ManageCampaignModalComponent', () => {
  let component: ManageCampaignModalComponent;
  let fixture: ComponentFixture<ManageCampaignModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCampaignModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCampaignModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
