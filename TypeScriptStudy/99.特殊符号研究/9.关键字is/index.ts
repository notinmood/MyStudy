/**
 * @file   : index.ts
 * @time   : 18:07
 * @date   : 2022/5/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 参见：https://blog.csdn.net/Magneto7/article/details/121489097
 */

export namespace MyNameSpace {
    class Bird {
        fly() {
            console.log('Bird flying');
        }

        layEggs() {
            console.log('Bird layEggs');
        }
    }

    class Fish {
        swim() {
            console.log('Fish swimming');
        }

        layEggs() {
            console.log('Fish layEggs');
        }
    }

    const bird = new Bird();
    const fish = new Fish();

    function start(pet: Bird | Fish) {
        // 调用 layEggs 没问题，因为 Bird 或者 Fish 都有 layEggs 方法
        pet.layEggs();

        //1. 直接调用不存在的方法会报错
        // 会报错：Property 'fly' does not exist on type 'Bird | Fish'
        // pet.fly();

        // 会报错：Property 'swim' does not exist on type 'Bird | Fish'
        // pet.swim();

        //2. 使用之前先判断方法是否存在
        if ((pet as Bird).fly) {
            (pet as Bird).fly();
        } else if ((pet as Fish).swim) {
            (pet as Fish).swim();
        }

        //3. 使用 is 进行类型判断
        function isBird(bird: Bird | Fish): bird is Bird {
            //if (bird is Bird){}//本行代码说明 is 不能在 if 语句中进行判定
            return !!(bird as Bird).fly
        }

        if (isBird(pet)) {
            pet.fly();
        } else {
            pet.swim();
        }
    }

    start(bird);
    start(fish);
}
