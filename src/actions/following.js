var { API_URL } = require('../PLEnv');
var { Action, ThunkAction } = require('./types');


function getFollowings(token, page, per_page){
    return new Promise((resolve, reject) => {
        fetch(API_URL + '/v2/user/followings?_format=json&page='+ page +'&per_page=' + per_page, {
            method: 'GET',
            headers: {
                'token': token,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Following API call Success:", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Following API call Error", err);
            reject(err);
        });
    });    
}

function getFollowers(token, page,per_page){
    return new Promise((resolve, reject) => {
        fetch(API_URL + '/v2/user/followers?_format=json&page='+page +'&per_page=' + per_page, {
            method: 'GET',
            headers: {
                'token': token,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then(data => {
            console.log("Followers API call Success:", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Following API call Error", err);
            reject(err);
        });
    });
}

function unFollowings(token, id){
    return new Promise((resolve, reject) => {
        fetch(API_URL + '/v2/user/followings/' + id, {
            method: 'DELETE',
            headers: {
                'token': token,
                'Content-Type': 'application/json'
            }
        })        
        .then(() => {
            console.log("UnFollowing API call Success:");
            resolve();
        })
        .catch(err => {
            console.log("UnFollowing API call Error", err);
            reject(err);
        });
    });
}

function unFollowers(token, id){
    return new Promise((resolve, reject) => {
        fetch(API_URL + '/v2/user/followers/' + id, {
            method: 'DELETE',
            headers: {
                'token': token,
                'Content-Type': 'application/json'
            }
        })        
        .then(() => {
            console.log("UnFollowing API call Success:");
            resolve();
        })
        .catch(err => {
            console.log("UnFollowing API call Error", err);
            reject(err);
        });
    });
}

function acceptFollowers(token, id){
    return new Promise((resolve, reject) => {
        fetch(API_URL + '/v2/user/followers/' + id, {
            method: 'PATCH',
            headers: {
                'token': token,
                'Content-Type': 'application/json'
            }
        })        
        .then(() => {
            console.log("UnFollowing API call Success:");
            resolve();
        })
        .catch(err => {
            console.log("UnFollowing API call Error", err);
            reject(err);
        });
    });
}

function searchForUsersFollowableByCurrentUser(token, queryText, page = 0, max_count = 20){
    return new Promise((resolve, reject) => {
        fetch(API_URL + '/users/?unfollowing=1&page='+ page +'&max_count=' + max_count + '&q=' + queryText, {
            method: 'GET',
            headers: {
                'token': token,
                'Content-Type': 'application/json'
            }
        })      
        .then((res) => res.json())  
        .then((data) => {
            console.log("Seach Followable users API call Success:", data);
            resolve(data);
        })
        .catch(err => {
            console.log("Seach Followable users API call Error", err);
            reject(err);
        });
    });
}

function putFollowings(token, id){
    return new Promise((resolve, reject) => {
        fetch(API_URL + '/v2/user/followings/' + id, {
            method: 'PUT',
            headers: {
                'token': token,
                'Content-Type': 'application/json'
            }
        })      
        .then(() => {
            console.log("Following a user,  API call Success:");
            resolve();
        })
        .catch(err => {
            console.log("Following a user, API call Error", err);
            reject(err);
        });
    });
}

module.exports = {
    getFollowings,
    getFollowers,
    unFollowings,
    unFollowers,
    acceptFollowers,
    searchForUsersFollowableByCurrentUser,
    putFollowings
};