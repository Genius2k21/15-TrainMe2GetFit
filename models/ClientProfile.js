const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ClientProfile extends Model {}

ClientProfile.init({
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
    height: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    weight: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    goal_weight: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    shoulders: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    chest: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    waist: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    hips: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    left_thigh: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    right_thigh: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    left_calf: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    right_calf: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    create_dtm: {
      type: DataTypes.DATE,
      allowNull: true,
      //defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    update_dtm: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client_profile',
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
        name: "fk_client_profile_client1_idx",
        using: "BTREE",
        fields: [
          { name: "client_id" },
          { name: "client_user_id" },
        ]
      },
    ]
  });

  module.exports = ClientProfile;
