// src/BackButtonHandler.js
import { createBrowserHistory } from 'history';

class BackButtonHandler {
  constructor() {
    this.history = createBrowserHistory();
    this.listeners = [];

    this.history.listen((location, action) => {
      if (action === 'POP') {
        this.notifyListeners(location);
      }
    });
  }

  onBackButton(callback) {
    this.listeners.push(callback);
  }

  offBackButton(callback) {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }

  notifyListeners(location) {
    this.listeners.forEach(listener => listener(location));
  }

  navigate(path) {
    this.history.push(path);
  }
}

const backButtonHandler = new BackButtonHandler();
export default backButtonHandler;
