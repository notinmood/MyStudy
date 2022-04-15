// +--------------------------------------------------------------------------
// |::说明·| 现代实践中通常不使用命名空间；而是使用模块进行功能划分，就是在某个 JavaScript 或者
// |::一一·| TypeScript 文件中，将目标标的直接进行 export；然后再客户代码中，import 进来。
// +--------------------------------------------------------------------------

//不期望该命名空间导出，不加export
export namespace MyNameSpace {
    export var ArgInOtherFile: string = "hah";

    export function getName(): string {
        return "I am China!";
    }
}

//期望该命名空间导出，加export
export namespace YourNameSpace {
    export function printHello(): string {
        return "Hello world!";
    }
}

//一定要严格遵守！！！
//希望在别的文件中使用的就用export！！！
//不希望的就不加！！！
export var hah: string = "aaa";
