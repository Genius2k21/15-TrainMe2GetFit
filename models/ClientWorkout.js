const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ClientWorkout extends Model {}

ClientWorkout.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dayofweek: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING(500),
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
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'exercise',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'client_workout',
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
          { name: "exercise_id" },
        ]
      },
      {
        name: "fk_workout_client1_idx",
        using: "BTREE",
        fields: [
          { name: "client_id" },
          { name: "client_user_id" },
        ]
      },
      {
        name: "fk_workout_exercise1_idx",
        using: "BTREE",
        fields: [
          { name: "exercise_id" },
        ]
      },
    ]
  });

  module.exports = ClientWorkout;