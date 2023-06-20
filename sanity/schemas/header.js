export default {
  name: 'header',
  type: 'document',
  title: 'header',
  fields: [
    {
      name: 'subName',
      title: 'SubName',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'imageurl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
