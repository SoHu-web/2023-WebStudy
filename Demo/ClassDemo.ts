// 通过class关键字定义一个类，使用constructor定义构造函数（主要用来初始化类的成员变量属性，类的对象创建时自动调用，没有返回值）
class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}
// 使用extends关键字继承，子类中使用super方法来调用父类的构造函数和方法
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  sayHi(): string {
    return "Meow，" + super.sayHi();
  }
}
let c = new Cat("Tom");
console.log(c.sayHi());
// Typescript中有三种访问修饰符，public，projected，private，默认为public
class Father {
  public name: string;
  protected age: number;
  private money: number;
  constructor(name: string, age: number, money: number) {
    this.name = name;
    this.age = age;
    this.money = money;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}
class Child extends Father {
  constructor(name: string, age: number, money: number) {
    super(name, age, money);
  }
  desc() {
    console.log(`${this.name},${this.age}`);
  }
}
let children = new Child("金色小伙", 18, 1000);
console.log(children.name,children);
//console.log(children.age);
//console.log(children.money);


