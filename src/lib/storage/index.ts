/**
 * @name React Async Storage
 * @desc 로컬스토리지처럼 React-native에서 스토리지를 생성,수정,삭제가 가능합니다
 * @reference https://react-native-community.github.io/async-storage/docs/usage
 */
import AsyncStorage from '@react-native-community/async-storage';

class Storage {
  constructor() {}

  async set(key: string, value: string | object) {
    try {
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (e) {
      console.warn('[Storage SET Error]', e);
      return false;
    }
  }

  async multiSet(itemList: [string, string][]) {
    try {
      await AsyncStorage.multiSet(itemList);
      return true;
    } catch (e) {
      console.warn('[Storage MULTI SET Error]', e);
      return false;
    }
  }

  async get(key: string) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      return console.warn('[Storage GET Error]', e);
    }
  }

  async multiGet(keyList: string[]) {
    try {
      return await AsyncStorage.multiGet(keyList);
    } catch (e) {
      return console.warn('[Storage MULTI GET Error]', e);
    }
  }

  async remove(key: string) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (e) {
      console.warn('[Storage REMOVE Error]', e);
      return false;
    }
  }

  async multiRemove(keyList: string[]) {
    try {
      await AsyncStorage.multiRemove(keyList);
      return true;
    } catch (e) {
      console.warn('[Storage MULTI REMOVE Error]', e);
      return false;
    }
  }

  async clearAll() {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (e) {
      console.warn('[Storage CLEAR Error]', e);
      return false;
    }
  }
}

const storage = new Storage();

export default storage;
