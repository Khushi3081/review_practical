import { DataTypes } from "sequelize";
import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import {
  RequiredReviewAttributes,
  ReviewAttributes,
} from "./interface/review.interface";

@Table({
  timestamps: true,
  tableName: "review",
  paranoid: true,
})
export default class Review extends Model<
  ReviewAttributes,
  RequiredReviewAttributes
> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  })
  uuid: number;

  @Column({
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  })
  title: string;

  @Column({
    allowNull: false,
    unique: true,
    type: DataTypes.TEXT("long"),
  })
  content: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  readonly toJSON = () => {
    const values = Object.assign({}, this.get());
    // delete values.password;
    return values;
  };
}
