// 1. 使用TypeScript的情形
declare module "*.vue" {
    import type {DefineComponent} from "vue";

    // eslint-disable-next-line @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

// 2. 使用JavaScript的情形
// declare module '*.vue' {//declare  ambient module(  :   module  )
//   import Vue from 'vue'
//   export default Vue
// }

// declare module 'vue-echarts'// 引⼊ vue-echarts
