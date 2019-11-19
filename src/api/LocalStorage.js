class LocalDb {
  constructor() {
    this.sessionKey = "simpleSchoolSession";
  }
  getSessions() {
    const itemGot = localStorage.getItem(this.sessionKey);
    if (itemGot != null) {
      return JSON.parse(itemGot);
    } else {
      return null;
    }
  }
  setSession(session, callback) {
    console.log("session value ", session)
    try {
      localStorage.setItem(this.sessionKey, JSON.stringify(session), error =>
        callback(error)
      );
      callback(false);
    } catch (error) {
      console.log("Error while setting session.", error);
    }
  }
  removeSession(callback) {
    try {
      localStorage.removeItem(this.sessionKey, error => callback(error));
    } catch (error) {
      console.log("Error while removing session.", error);
    }
  }
}
export default new LocalDb();
