import {makeAutoObservable, runInAction} from 'mobx';

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  public username = '';

  async setUsername(username: string): Promise<void> {
    runInAction(() => {
      this.username = username;
    });
  }
}
export default new AuthStore();
