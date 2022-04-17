// 1. 使用TypeScript的情形
/* eslint-disable */
declare module '*.vue' {
    import type {DefineComponent} from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

// 2. 使用JavaScript的情形
// declare module '*.vue' {//declare  ambient module(  :   module  )
//   import Vue from 'vue'
//   export default Vue
// }

// declare module 'vue-echarts'// 引⼊ vue-echarts
