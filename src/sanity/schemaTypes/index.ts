import { product } from './product'
import { Category } from './category'
import order from './order'
import { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product,
    Category,
    order
  ],
}
