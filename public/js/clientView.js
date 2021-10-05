window.alert("hello");

// Promise.all([
//     fetch('http://localhost:3009/api/client/clientprofile/4/user/4'),
//     fetch('http://localhost:3009/api/client/clientworkout/4/user/4'),
//     fetch('http://localhost:3009/api/client/clientdiet/4/user/4')
// ]).then(function (responses) {
//     return Promise.all(responses.map(function (res) {
//         return res.json()
//     }));
// }).then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log(err);
// });



const profileFetch = fetch(
    '/api/client/clientprofile/4/user/4'
    ).then((res) => res.json());
const workoutFetch = fetch(
    '/api/client/clientworkout/4/user/4'
    ).then((res) => res.json());
const dietFetch = fetch(
    '/api/client/clientdiet/4/user/4'
    ).then((res) => res.json());
// const combine = [].concat(profileFetch, workoutFetch, dietFetch);
const allData = Promise.all([profileFetch, workoutFetch, dietFetch]);

allData.then((res) => console.log(res));
