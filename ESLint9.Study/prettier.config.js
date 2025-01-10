/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2025-01-10 15:06:39
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2025-01-10 15:06:54
 * @FilePath     : prettier.config.js
 * @Description  : 
 * Copyright (c) 2025 by Hiland & RainyTop, All Rights Reserved. 
 */

// prettier.config.js
/**
 * @type {import('prettier').Config}
 * @see https://www.prettier.cn/docs/options.html
 */
export default {
  trailingComma: 'all',
  singleQuote: true,
  semi: false,
  printWidth: 80,
  arrowParens: 'always',
  proseWrap: 'always',
  endOfLine: 'lf',
  experimentalTernaries: false,
  tabWidth: 2,
  useTabs: false,
  quoteProps: 'consistent',
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  jsxBracketSameLine: false,
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: false,
}

