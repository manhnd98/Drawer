import "reflect-metadata";
import { container } from "tsyringe";
import MainDraw from './main';

container.resolve(MainDraw);
