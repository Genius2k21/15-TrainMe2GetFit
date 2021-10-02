const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ClientLog extends Model {}

ClientLog.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
        key: 'id'
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
      type: DataTypes.STRING(500),
      allowNull: false
    },
    create_dtm: {
      type: DataTypes.DATE,
      allowNull: false,
     // defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'client_log',
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
        name: "fk_client_log_client1_idx",
        using: "BTREE",
        fields: [
          { name: "client_id" },
          { name: "client_user_id" },
        ]
      },
    ]
  });

  module.exports = ClientLog;
