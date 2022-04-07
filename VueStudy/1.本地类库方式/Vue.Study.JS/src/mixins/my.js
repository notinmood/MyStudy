// 按照 Vue 的格式定义一个 mixin 对象。
export const my = {
    components: {},
    data() {
        return {
            age: 18,
            name: "zhangsan",
        }
    },
    mounted() {
        this.displayInfo();
    },
    methods: {
        displayInfo() {
            console.log(`我是：${this.name};年龄：${this.age}岁！`);
        },
    }
}