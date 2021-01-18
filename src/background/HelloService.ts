import { autoInjectable, injectable } from "tsyringe";

@injectable()
class HelloService {
    constructor() {
        this.sayHello();
    }

    sayHello() {
        console.log('hello');
    }
}

export default HelloService;