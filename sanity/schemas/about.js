export default {
  name: 'about',
  type: 'document',
  title: 'about',
  fields: [
    {
      name: 'description',
      title: 'Description',
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
