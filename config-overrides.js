module.exports = function configOverwrite(config) {
  const fallback = config.resolve.fallback || {};

  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    zlib: require.resolve("browserify-zlib"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
    assert: require.resolve("assert"),
    constants: require.resolve("constants-browserify"),
    util: require.resolve("util"),
    path: require.resolve("path-browserify"),
    util: require.resolve("util/"),
    buffer: require.resolve("buffer/"),
  });

  config.resolve.fallback = fallback;
  return config;
};
