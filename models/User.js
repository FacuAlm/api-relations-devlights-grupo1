import { DataTypes } from "sequelize";
import db from "../config/db.js";

const User = db.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
  }
);

db.sync();

export default User;
