import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-quotation',
  templateUrl: './supplier-quotation.component.html',
  styleUrls: ['./supplier-quotation.component.scss']
})
export class SupplierQuotationComponent {
  data = [
    {
      name: 'Hình 1',
      dtos: 'ResponseDTO, SuppliersDTO',
      apis: 'GetListSupplier, GetStatusSupplier, GetEffectiveDateRange'
    },
    {
      name: 'Hình 2',
      dtos: 'ResponseDTO, SuppliersDTO, ProductQuotationDTO',
      apis: 'GetListSupplier, GetListProductQuotation, GetImport, GetUpload, DeleteProductQuotation, GetStatusSupplier'
    },
    {
      name: 'Hình 3',
      dtos: 'ResponseDTO, ProductQuotationDTO, ProductDetailDTO',
      apis: 'GetListSupplier, GetListProductQuotation, GetListCountries, GetListCurrency, GetEventCommerce, GetPurchaseUnit, GetPurchaseDate, GetListGrouping, GetBaseUnit, GetRetailStores, GetProductDimensionDefault, UpdateProductQuotation'
    }
  ];

  showDialog = false;
  dialogTitle = '';
  dialogContent = '';

  dtosMapping: { [key: string]: string } = {
    'ResponseDTO': `export interface ResponseDTO {
  StatusCode: number | null;
  ErrorString: string | null;
  ObjectReturn: any | null;
}`,
    'SuppliersDTO': `export interface SuppliersDTO {
  supplierId: string;
  supplierName: string;
  effectiveDate: Date | null;
  reason: string | null;
  productDetail: ProductDetailDTO[];
  proposerName: string;
  proposedDate: Date | null;
  approverName?: string | null;
  approvedDate?: Date | null;
  status: 'Đang soạn thảo' | 'Gửi duyệt' | 'Đã duyệt' | 'Ngưng áp dụng';
  productQuotation: ProductQuotationDTO[];
}`,
    'ProductDetailDTO': `export interface ProductDetailDTO {
  isNew: boolean;
  isSupplierChanged: boolean;
  isPriceChanged: boolean;
}`,
    'ProductQuotationDTO': `export interface ProductQuotationDTO {
  productId: string;
  productName: string;
  barcode: number;
  postcode: number;
  imageUrl?: string | null;
  currentVATPrice?: number | null;
  proposedVATPrice?: number | null;
  currentRetailPrice?: number | null;
  proposedRetailPrice?: number | null;
  explanation?: string | null;
  classification: string | null;
  countries: string;
  producttNameJP?: string | null;
  declarationCode: string;
  declarationName: string;
  currentSupplierInfo: string;
  priceBeforeVAT: number;
  vatRate: number;
  priceWithVAT: number;
  retailPriceBeforeVAT: number;
  retailPriceWithVAT: number;
  condition: string;
  currency: string;
  margin: number;
  referenceCapitalPrice: number;
  extraQuantity: number;
  salesPerMonth: number;
  monthlyRevenue: number;
  minOrderQty: number;
  firstOrderQty: number;
  orderUnit: string;
  estimatedPOCode: string;
  estimatedFirstOrderDate: Date;
  estimatedLastOrderDate: Date;
  estimatedStoreStartDate: Date;
  estimatedStoreEndDate: Date;
  disableOnline: boolean;
  disableStore: boolean;
  disabledStores: string[];
  categoryLv1: string;
  categoryLv2: string;
  categoryLv3: string;
  categoryLv4: string;
  categoryLv5: string;
  shipper: string;
  maker: string;
  baseUnit: string;
  sizeProduct: DimensionDTO;
  sizeInner: DimensionDTO;
  sizeCarton: DimensionDTO;
  sizePallet: DimensionDTO;
  sizePackage: DimensionDTO;
  packInner: number;
  packCarton: number;
  packPallet: number;
  manageExpiryDate: boolean;
  shelfLifeWarningDays: number;
  usageDaysAfterOpening: number;
  specInfo: string;
}`,
    'DimensionDTO': `export interface DimensionDTO {
  length: number;
  width: number;
  height: number;
  weight?: number;
}`
  };

  apisMapping: { [key: string]: string } = {
    'GetListSupplier': `GetListSupplier: Lấy danh sách đề nghị báo giá từ NCC`,
    'GetStatusSupplier': `GetStatusSupplier: Lấy các trạng thái filter ("Đang soạn thảo", "Đã duyệt", ...)`,
    'GetEffectiveDateRange': `GetEffectiveDateRange: Lọc theo khoảng ngày hiệu lực`,
    'GetListProductQuotation': `GetListProductQuotation: Lấy danh sách sản phẩm của nhà cung cấp trong đề nghị`,
    'GetImport': `GetImport: Import file Excel danh sách sản phẩm`,
    'GetUpload': `GetUpload: Upload template để import sản phẩm`,
    'DeleteProductQuotation': `DeleteProductQuotation: Xoá sản phẩm khỏi danh sách`,
    'GetListCountries': `GetListCountries: Lấy danh sách xuất xứ`,
    'GetListCurrency': `GetListCurrency: Lấy danh sách loại tiền (VND, USD, ...)`,
    'GetEventCommerce': `GetEventCommerce: Lấy các điều kiện thương mại (DD, DT, ...)`,
    'GetPurchaseUnit': `GetPurchaseUnit: Đơn vị mua hàng (Inner, Carton, ...)`,
    'GetPurchaseDate': `GetPurchaseDate: Lấy 4 dropdown ngày dự kiến giao`,
    'GetListGrouping': `GetListGrouping: Lấy phân nhóm cấp 1 đến 5`,
    'GetBaseUnit': `GetBaseUnit: Đơn vị sản phẩm (Cái, Chai, ...)`,
    'GetRetailStores': `GetRetailStores: Lấy danh sách cửa hàng để check “Không kinh doanh tại…”`,
    'GetProductDimensionDefault': `GetProductDimensionDefault: Lấy kích thước mặc định của sản phẩm nếu đã có lịch sử`,
    'UpdateProductQuotation': `UpdateProductQuotation: API để cập nhật thông tin sản phẩm`
  };

  openDtoDialog(dto: string): void {
    const key = dto.trim();
    if (this.dtosMapping[key]) {
      this.dialogTitle = key;
      this.dialogContent = this.dtosMapping[key];
      this.showDialog = true;
    }
  }

  openApiDialog(api: string): void {
    const key = api.trim();
    if (this.apisMapping[key]) {
      this.dialogTitle = key;
      this.dialogContent = this.apisMapping[key];
      this.showDialog = true;
    }
  }

  closeDialog(): void {
    this.showDialog = false;
  }
}
