module.exports = {
  plugins: {
    autoprefixer: {},
    // flexible配置
    "postcss-pxtorem": {
      rootValue: 16, // fonz-size：16
      propList: ["*"], // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
    },
  },
};
