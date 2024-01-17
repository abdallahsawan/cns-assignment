import {config} from './config';

export const api = {
    addUser: config.apiURL + '/user',
    updateUser: config.apiURL + '/user/',
    listUsers: config.apiURL + '/user/',
    getUser: config.apiURL + '/user',
    removeUser: config.apiURL + '/user/',
  }
;
