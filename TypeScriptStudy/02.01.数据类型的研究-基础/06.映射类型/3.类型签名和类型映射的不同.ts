/**
 * @file   : index.ts
 * @time   : 10:25
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    class Horse {

    }

    // 1. 当你需要提前声明属性的类型时使用类型签名
    type OnlyBoolAndHorses = { [key: string]: boolean | Horse; };
    const conforms: OnlyBoolAndHorses = {del: true, rodney: false,};

    // 2. 而映射类型，就是使用了 PropertyKeys 联合类型的泛型，
    // 其中 PropertyKeys 多是通过 keyof 创建，然后循环遍历键名创建一个类型：

    /**
     * 在这个例子中，OptionsFlags 会遍历 Type 所有的属性，然后设置为布尔类型
     */
    type OptionsFlags<Type> = { [Property in keyof Type]: boolean; };

    type FeatureFlags = { darkMode: () => void; newUserProfile: () => void; };
    type FeatureOptions = OptionsFlags<FeatureFlags>; // darkMode: boolean; newUserProfile: boolean;
}

