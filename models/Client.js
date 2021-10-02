const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Client extends Model {}

Client.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    address_line_1: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    address_line_2: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    create_dtm: {
      type: DataTypes.DATE,
      allowNull: false,
      //defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_dtm: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'client',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "user_id" },
        ]
      },
      {
        name: "fk_client_user_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });

  module.exports = Client;
