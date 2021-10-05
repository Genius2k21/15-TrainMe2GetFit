const User = require('./User');
const Client = require('./Client');
const ClientDiet = require('./ClientDiet');
const ClientLog = require('./ClientLog');
const ClientProfile = require('./ClientProfile');
const ClientWorkout = require('./ClientWorkout');
const Exercise = require('./Exercise');


User.hasMany(Client, {
    foreignKey: 'user_id'
});

Client.belongsTo(User, {
    foreignKey: 'user_id'
});

Client.hasMany(ClientDiet, {
    foreignKey: 'client_id'
});

User.hasMany(ClientDiet,{
    foreignKey: 'client_user_id'
});

Client.belongsTo(ClientProfile, {
    foreignKey: 'client_id'
});

Client.hasMany(ClientWorkout, {
    foreignKey: 'client_id'
});

User.hasMany(ClientDiet,{
    foreignKey: 'client_user_id'
});

module.exports = { User, Client, ClientDiet, ClientLog, ClientProfile, ClientWorkout, Exercise };

