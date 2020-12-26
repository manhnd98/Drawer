import "reflect-metadata";
import { container } from "tsyringe";
import Database from "./Database";
import HelloService from "./HelloService";

console.log("Chrome Extension running");
console.log("------------------------");

const helloService = container.resolve(HelloService);
helloService.sayHello()