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

    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,       // otomatis buat schema dari content-type
            playgroundAlways: true, // aktifkan GraphQL Playground
            defaultLimit: 25,
            maxLimit: 100,
            apolloServer: {
                introspection: true,
            },
        },
    },
});
