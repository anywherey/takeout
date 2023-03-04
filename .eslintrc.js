module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/standard'
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
     // 关闭名称校验
     "vue/multi-word-component-names":"off",
     "vue/no-unused-components": "off",
     // 禁用 vue/no-v-model-argument 规则
    'vue/no-v-model-argument': 'off',
    'vue/no-dupe-keys': 'off',
    // 禁用变量声明但未使用的提示
    'vue/no-unused-vars':'off'
  }
}
