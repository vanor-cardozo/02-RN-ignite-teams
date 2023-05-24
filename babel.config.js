module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["babel-plugin-styled-components"],
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
