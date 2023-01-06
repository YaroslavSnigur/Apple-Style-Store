import {AiFillAppstore} from 'react-icons/ai'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: AiFillAppstore,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
}
