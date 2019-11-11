import {
  logInitiate,
  logSuccess,
  logError,
} from '../../utils/logger';
import initRedisClient from './init';

// NOTE: using redis with node: https://www.sitepoint.com/using-redis-node-js/
export default class RedisClient {
  constructor() {
    this.init();
    this.lists = {}
  }

  init() {
    this.client = initRedisClient();
  }

  // store list/array
  async addListToRedis(arr) {
    return new Promise((resolve, reject) => {
      const action = 'adding list to redis: ' + arr[0];
      logInitiate(action);
      // first string in array is key, subsequent are strings to store
      this.client.rpush(arr, function(err, reply) {
        if (err) {
          reject(err);
        }

        logSuccess(action);
        resolve(reply);
      });
    });
  }

  // fetch list by key
  async fetchListFromRedis(listKey) {
    return new Promise((resolve, reject) => {
      const action = 'fetching list from redis: ' + listKey;
      logInitiate(action);
      const that = this;
      this.client.lrange(listKey, 0, -1, function(err, reply) {
        if (err) {
          reject(err);
        }

        that.lists[listKey] = reply;
        logSuccess(action);
        console.log('list:', reply);
        resolve(reply);
      });
    });
  }

  // remove item from list
  async deleteItemFromListInRedis(listKey, listItemStr) {
    return new Promise((resolve, reject) => {
      const action = 'deleting item from list: ' + listKey + ': ' + listItemStr;
      logInitiate(action);
      this.client.lrem(listKey, -2, listItemStr, function(err, reply) {
        if (err) {
          reject(err);
        }

        logSuccess(action);
        resolve(reply);
      });
    });
  }

  // push item to list
  async pushItemToListInRedis(listKey, listItemStr) {
    return new Promise((resolve, reject) => {
      const action = 'pushing item to list: ' + listKey + ': ' + listItemStr;
      logInitiate(action);
      const that = this;
      this.client.lpush(listKey, listItemStr, function(err, reply) {
        if (err) {
          reject(err);
        }

        that.lists[listKey].push(listItemStr);
        logSuccess(action);
        resolve(reply);
      });
    });
  }

  // store object to redis by key
  async storeObjectToRedis(keyName, obj) {
    return new Promise((resolve, reject) => {
      // obj must be string key/value pairs, e.g. 'animal': 'dog'
      const action = 'storing object in redis: ' + keyName;
      this.client.hmset(keyName, obj, function(err, reply) {
        if (err) {
          reject(err);
        }

        logSuccess(action);
        resolve(reply);
      });
    });
  }

  // fetch object from redis by key
  fetchObjectByKeyFromRedis(key) {
    return new Promise((resolve, reject) => {
      const action = 'fetching object by key in redis: ' + key;
      this.client.hgetall(key, function(err, object) {
        if (err) {
          reject(err);
        }

        logSuccess(action);
        resolve(object);
      });
    });
  }

  // check existence of redis key
  checkRedisKey(key) {
    return new Promise((resolve, reject) => {
      const action = 'checking key in redis: ' + key;
      this.client.exists(key, function(err, reply) {
        if (err) {
          reject(err);
        }

        logSuccess(action);
        if (reply === 1) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  // delete redis item by key
  async deleteRedisKey(key) {
    return new Promise((resolve, reject) => {
      const action = 'deleting key in redis: ' + key;
      const that = this;
      this.client.del(key, function(err, reply) {
        if (err) {
          reject(err);
        }

        logSuccess(action);
        delete that.lists[key];
      });
    });
  }
}
