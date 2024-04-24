import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      categoryTitle: 'category.title',
      name: 'name',
    },
    prepare({
      categoryTitle,
      name,
    }) {
      return {
        title: categoryTitle,
        subtitle: name,
      }
    }
  }
})
