
import { Controller, Get } from '@nestjs/common';

const {
  API_KK_PRODUCT: appProduct,
  API_KK_CART: appCart,
} = process.env;

@Controller()
export class AppController {
  private urlKKProduct: string = appProduct;
  private urlKKCart: string = appCart;

  constructor() {}

  @Get()
  check() {

  }
}
