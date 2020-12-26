import { autoInjectable, injectable } from "tsyringe";

@injectable()
class HelloService {
    constructor() {}

    sayHello() {
        console.log('hello');
    }
}

export default HelloService;