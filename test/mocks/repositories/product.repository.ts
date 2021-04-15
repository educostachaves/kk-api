import { ProductEntity } from '../../../src/products/entities/product.entity';
import { MockRepository } from '../mock.repository';

export class ProductRepository extends MockRepository<ProductEntity> {}
