export default {
    name: 'communityImpact',
    title: 'Community Impact',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'value',
        title: 'Value',
        type: 'number',
      },
      {
        name: 'suffix',
        title: 'Suffix',
        type: 'string', // for suffix like "+" or any other
        initialValue: '+', // Default to "+" 
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'string', // Store the icon as a reference or path to the specific icon
        options: {
          list: [
            { title: 'Food Security', value: 'FaSeedling' },
            { title: 'Health Awareness', value: 'FaUserMd' },
            { title: 'Education', value: 'FaSchool' },
            { title: 'Environmental Conservation', value: 'FaWater' },
            { title: 'Community Support', value: 'FaHandsHelping' },
            { title: 'COVID-19 Response', value: 'FaVirus' },
          ], // Add more icons based on your requirement
        },
      },
      {
        name: 'textColor',
        title: 'Text Color',
        type: 'string', // Color as a string, can be used in CSS (e.g., "text-green-600")
      },
      {
        name: 'image',
        title: 'Image',
        type: 'reference',
        to: [{ type: 'customImage' }], // You can customize this based on your existing 'customImage' type
      },
    ],
  };
  