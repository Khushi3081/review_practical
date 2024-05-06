import { Model, ModelCtor } from "sequelize-typescript";
import db from "../models";

export default abstract class BaseRepository<M extends Model> {
    readonly DBModel: ModelCtor<M>;
  
    constructor(readonly modelName: string) {
      this.DBModel = <ModelCtor<M>>db?.models[modelName];
    }
}