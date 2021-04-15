import { Get, Post, Body, Param, Res, Controller, HttpStatus, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(public readonly AppService: AppService) {}

  @Get('/products')
  async getAllProducts(@Res() res) {
    const data = await this.AppService.getAllProducts();
    if (data) {
      return res.status(HttpStatus.OK).send({ data });
    }

    return res.status(HttpStatus.NOT_FOUND).send({ data });
  }

  @Post('/carts/insertCart')
  async insertCart(@Body() cart, @Res() res) {
    const data = await this.AppService.insertCart(cart);
    if (data) {
      return res.status(HttpStatus.OK).send({ data });
    }

    return res.status(HttpStatus.NOT_FOUND).send({ data });
  }

  @Post('/carts/insertProduct')
  async insertProductOnCart(@Body() product, @Res() res) {
    const data = await this.AppService.insertProductOnCart(product);
    if (data) {
      return res.status(HttpStatus.OK).send({ data });
    }

    return res.status(HttpStatus.NOT_FOUND).send({ data });
  }

  @Delete('/carts/deleteProduct')
  async deleteProductOnCart(@Body() body, @Res() res) {
    const data = await this.AppService.deleteProductOnCart(body);

    if (data) {
      return res.status(HttpStatus.OK).send({ data });
    }

    return res.status(HttpStatus.NOT_FOUND).send({ data });
  }

  @Get('/carts/:id')
  async getCartById(@Param('id') cartId: number, @Res() res) {
    console.log(cartId);
    let data: any = await this.AppService.getCartById(cartId);
    let totals;
    if (!data) {
      return res.status(HttpStatus.NOT_FOUND).send({ data });
    }

    if (data.products.length > 1) {
      totals = data.products.reduce((a, b) => {
        return {
          totalPrice: a.price + b.price,
          totalQuantity: a.quantity + b.quantity,
        };
      });
      data = Object.assign(data, totals);
    }
    return res.status(HttpStatus.OK).send({ data });
  }
}
