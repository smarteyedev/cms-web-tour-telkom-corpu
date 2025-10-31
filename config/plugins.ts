export default ({ env }) => ({
    upload: {
        config: {
            provider: 'local',              // default, simpan di ./public/uploads
            providerOptions: {
                sizeLimit: env.int('UPLOAD_SIZE_LIMIT', 500 * 1024 * 1024), // 500 MB (>= 300 MB)
            },
            // optional: nonaktifkan thumbnail utk file raksasa
            // breakpoints: {},
        },
    },
});
