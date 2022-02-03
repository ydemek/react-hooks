import axios from 'axios';


export var updateUserRequest = function (data, id) {
    return new Promise(function (resolve, reject) {
        var axiosUpdateUserPromise = axios.put(
            'https://jsonplaceholder.typicode.com/users/' + id,
            { data }
        );

        axiosUpdateUserPromise.then(function (result) {
            if (result.status === 200) {
                resolve('success');
            } else {
                reject('fail')
            }
        }).catch(function (error) {
            reject(error);
        });
    });
};


export var deleteUserRequest = function (id) {
    return new Promise(function (resolve, reject) {
        var axiosDeleteUserPromise = axios.delete(
            'https://jsonplaceholder.typicode.com/users/' + id
        );
        axiosDeleteUserPromise.then(function (result) {
            if (result.status === 200) {
                resolve('success');
            } else {
                reject('fail')
            }
        }).catch(function (error) {
            reject(error);
        });
    });
};
