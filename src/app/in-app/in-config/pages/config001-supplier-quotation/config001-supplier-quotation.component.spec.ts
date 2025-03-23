import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Config001SupplierQuotationComponent } from './config001-supplier-quotation.component';

describe('Config001SupplierQuotationComponent', () => {
  let component: Config001SupplierQuotationComponent;
  let fixture: ComponentFixture<Config001SupplierQuotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Config001SupplierQuotationComponent]
    });
    fixture = TestBed.createComponent(Config001SupplierQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
