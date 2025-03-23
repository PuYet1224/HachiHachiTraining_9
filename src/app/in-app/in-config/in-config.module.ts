import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InConfigRoutingModule } from './in-config-routing.module';
import { InConfigComponent } from './in-config.component';
import { Config001SupplierQuotationComponent } from './pages/config001-supplier-quotation/config001-supplier-quotation.component';
import { SupplierQuotationComponent } from './shared/components/supplier-quotation/supplier-quotation.component';
import { CustomInputComponent } from './shared/components/custom-input/custom-input.component'; // import custom input
import { GridModule } from '@progress/kendo-angular-grid';
import { TextBoxModule, TextAreaModule, NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { DialogModule } from '@progress/kendo-angular-dialog'; 

@NgModule({
  declarations: [
    InConfigComponent,
    Config001SupplierQuotationComponent,
    SupplierQuotationComponent,
    CustomInputComponent  
  ],
  imports: [
    CommonModule,
    InConfigRoutingModule,
    GridModule,
    NumericTextBoxModule,
    TextAreaModule,
    TextBoxModule,
    FormsModule,
    DialogModule
  ],
  exports: [CustomInputComponent] 
})
export class InConfigModule { }
