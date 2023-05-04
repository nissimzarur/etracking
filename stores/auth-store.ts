import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable, runInAction} from 'mobx';

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  public username = '';

  async setUsername(username: string): Promise<void> {
    runInAction(async () => {
      this.username = username;
      await AsyncStorage.setItem('userFullName', this.username);
    });
  }

  async signout(){
    this.username = '';
    await AsyncStorage.setItem('userFullName', this.username);
  }
}
export default new AuthStore();
