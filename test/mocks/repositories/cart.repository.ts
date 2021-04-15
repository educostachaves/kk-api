import { CartEntity } from '../../../src/carts/entities/cart.entity';
import { MockRepository } from '../mock.repository';

export class CartRepository extends MockRepository<CartEntity> {}
