import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './category'
import {order} from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Category,product,order],
}
