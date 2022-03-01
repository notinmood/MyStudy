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
