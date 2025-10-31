export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      // untuk payload non-file (opsional)
      jsonLimit: '50mb',
      formLimit: '50mb',
      textLimit: '50mb',
      // untuk multipart upload (file)
      formidable: {
        maxFileSize: 500 * 1024 * 1024, // 500 MB (>= 300 MB)
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
