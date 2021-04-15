import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

const { API_KK_PRODUCT: appProduct, API_KK_CART: appCart } = process.env;

@Injectable()
export class AppService {
  private urlKKProduct: string = appProduct;
  private urlKKCart: string = appCart;

  constructor(private http: HttpService) {}

  async getAllProducts(): Promise<AxiosResponse<any>> {
    return this.http
      .get(`${this.urlKKProduct}/product`)
      .toPromise()
      .then(res => res.data)
      .catch(err => err.message);
  }

  async insertProductOnCart(body): Promise<AxiosResponse<any>> {
    return this.http
      .post(`${this.urlKKCart}/products`, body)
      .toPromise()
      .then(res => res.data)
      .catch(err => err.message);
  }

  async deleteProductOnCart(body): Promise<AxiosResponse<any>> {
    return this.http
      .post(`${this.urlKKCart}/products/deleteByProductId`, body)
      .toPromise()
      .then(res => res.data)
      .catch(err => err.message);
  }

  async getCartById(cartId): Promise<AxiosResponse<any>> {
    return this.http
      .get(`${this.urlKKCart}/carts/${cartId}`)
      .toPromise()
      .then(res => res.data)
      .catch(err => err.message);
  }
}
