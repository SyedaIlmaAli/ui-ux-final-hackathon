// In your schema file
export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'fullName',
        title: 'Full Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
      },
      {
        name: 'postalCode',
        title: 'Postal Code',
        type: 'string',
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string',
      },
      {
        name: 'paymentMethod',
        title: 'Payment Method',
        type: 'string',
      },
      {
        name: 'cartProducts',
        title: 'Cart Products',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'string',
              },
              {
                name: 'price',
                title: 'Price',
                type: 'number',
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
              },
              {
                name: 'image',
                title: 'Image',
                type: 'string',
              },
            ],
          },
        ],
      },
      
      {
        name: 'subTotal',
        title: 'Subtotal',
        type: 'number',
      },
      {
        name: 'discountApplied',
        title: 'Discount Applied',
        type: 'number',
      },
      {
        name: 'total',
        title: 'Total',
        type: 'number',
      },
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
      },
    ],
  };
  