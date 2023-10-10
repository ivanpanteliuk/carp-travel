/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "svg-sprite-loader",
          options: {
            symbolId: "[name]_[hash]",
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};
