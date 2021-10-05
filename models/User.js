const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
{
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: "username_UNIQUE"
    },
    email: {
      type: DataTypes.STRING(125),
      allowNull: false,
      unique: "email_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    user_type: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "Trainer"
    },
    create_dtm: {
      type: DataTypes.DATE,
      allowNull: false,
      //defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_dtm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  },  
  {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "username_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });

  module.exports = User; 
