const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ClientDiet extends Model {}

ClientDiet.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    meal1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meal2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meal3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meal4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meal5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meal6: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
        key: 'client_id'
      }
    },
    client_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
        key: 'user_id'
      }
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client_diet',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "client_id" },
          { name: "client_user_id" },
        ]
      },
      {
        name: "fk_diet_client1_idx",
        using: "BTREE",
        fields: [
          { name: "client_id" },
          { name: "client_user_id" },
        ]
      },
    ]
  });

  module.exports = ClientDiet;
