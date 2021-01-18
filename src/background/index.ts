import "reflect-metadata";
import { container } from "tsyringe";
import HelloService from "./HelloService";


const helloService = container.resolve(HelloService);