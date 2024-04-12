import { Model, DataTypes } from "sequelize";
import sequelize from "../config/Database.js"; // sesuaikan dengan path Anda

class User extends Model {
  static associate(models) {
    // definisikan asosiasi di sini jika diperlukan
  }
}

User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
