import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'size',
  title: 'Size',
  type: 'document',
  fields: [
    defineField({
      name: 'size',
      title: 'Size Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sizeType',
      title: 'Size Type',
      type: 'string',
      options: {
        list: [
          {title: 'XS', value: 'xs'},
          {title: 'S', value: 's'},
          {title: 'M', value: 'm'},
          {title: 'L', value: 'l'},
          {title: 'XL', value: 'xl'},
          {title: 'XXL', value: 'xxl'},
          {title: 'One Size', value: 'one-size'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
