class SomeBody {
    firstName : string;
    lastName : string;
    constructor(firstName : string,  lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    greeter() {
        return "欢迎来到 typescript 的世界，hello " + this.firstName + " " + this.lastName;
    };
    talk(){
        return "I am a Chinese!";
    };
}