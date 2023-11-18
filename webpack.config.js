{
    resolve: {
        fallback: {
            http: require.resolve("stream-http"),
                zlib: require.resolve("browserify-zlib"),
        }
    }
}