/**
 * @file   : 3.1.Pick的使用.ts
 * @time   : 11:42
 * @date   : 2022/5/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    interface User {
        id: number
        age: number
        name: string
    }

    type Picked1 = Pick<User, 'id'>;//{id: number}
    type Picked2 = Pick<User, "id" | "age">;//{id: number, age: number}

    // 以下代码无法编译通过，因为 city 不是 User 的成员
    // type Picked3 = Pick<User, "id" | "city">;
}
