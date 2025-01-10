/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2025-01-10 14:13:17
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2025-01-10 15:26:40
 * @FilePath     : eslint.config.js
 * @Description  : 
 * Copyright (c) 2025 by Hiland & RainyTop, All Rights Reserved. 
 */

// 导入eslint的推荐配置库
import eslint from '@eslint/js';
//导入需要声明的全局变量
import globals from 'globals';
//导入typescript eslint的解析器和规则
import tseslint from 'typescript-eslint';
// //导入vue eslint的规则
// import eslintPluginVue from 'eslint-plugin-vue';
// // 导入一些常用的规则
// import stylistic from '@stylistic/eslint-plugin';
// //导入Prettier的规则
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

//这里推荐每种规则都单独一个对象框起来，方便管理，因为后面还有vue、typescript等规则。
export default [
  //使用eslint的推荐配置
  //eslint.configs.all
  eslint.configs.recommended,

  /** ts推荐配置 */
  //tseslint.configs.recommended 会在配置中自动添加插件和规则。
  ...tseslint.configs.recommended,

  /** vue推荐配置 */
  //使用导入的vue的配置（作为vue的推荐规则配置。同时，里面还包含了vue的ESlint插件，用于解析vue文件，这也是ESlint配置为什么要大改的问题，因为它让ESlint配置更加简单了。）
  // ...eslintPluginVue.configs['flat/recommended'],

  // stylistic.configs.customize({
  //   indent: 2,
  //   quotes: 'single',
  //   semi: false,
  //   jsx: true,
  //   braceStyle: '1tbs',
  //   arrowParens: 'always',
  // }),

  //添加进行ESLint校验时候，需要忽略的目录，比如node_modules、dist、public等
  {
    ignores: [
      'node_modules',
      'dist',
      'public',
    ],
  },

  //JavaScript语言自定义检验规则
  {
    rules: {
      'no-console': 'off',
    }
  },
  /**
   * 配置全局变量
   */
  {
    languageOptions: {
      globals: {
        ...globals.browser,

        /** 追加一些其他自定义全局规则 */
        wx: true,
      },
    },
  },


  // /**
  //  * vue 规则
  //  */
  // {
  //   //如果不写files，则该规则配置对所有文件起作用。如果写了files，则只对匹配的文件起作用。
  //   //这里还要注意规则的优先级问题，后面的规则会覆盖前面的规则，所以一般会把recommended写在最前面，然后后面再去关掉/启用一些其他规则。
  //   files: ['**/*.vue'],
  //   languageOptions: {
  //     parserOptions: {
  //       /** typescript项目需要用到这个 */
  //       parser: tseslint.parser,
  //       ecmaVersion: 'latest',
  //       /** 允许在.vue 文件中使用 JSX */
  //       ecmaFeatures: {
  //         jsx: true,
  //       },
  //     },
  //   },
  //   rules: {
  //     // 在这里追加 vue 规则
  //     'vue/no-mutating-props': [
  //       'error',
  //       {
  //         shallowOnly: true,
  //       },
  //     ],
  //   },
  // },

  /**
   * typescript 规则
   */
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
    },
  },


  /**
 * prettier 配置
 * 这里仅仅是添加一句eslint-plugin-prettier/recommended，非常简单对吧，它的作用是off与它冲突的ESlint规则，并且启用自己的Recommended规则，并且它会自动合并prettier.config.js配置，所以我们还需要在根目录创建一份prettier.config.js，
 * @see https://prettier.io/docs/en/options
 */
  // eslintPluginPrettierRecommended,
]


