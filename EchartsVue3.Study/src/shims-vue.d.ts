/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


// declare module '*.vue' {//declare  ambient module(  :   module  )
//   import Vue from 'vue'
//   export default Vue
// }

// declare module 'vue-echarts'// 引⼊ vue-echarts
