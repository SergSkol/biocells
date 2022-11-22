export default class Storage {
  constructor() {
    this.storageKey = 'biocells';
  }

  save = (data) => {
    if (typeof data !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
  };

  load = () => {
    const json = localStorage.getItem(this.storageKey);
    if (typeof json === 'undefined') {
      return null;
    }
    const data = JSON.parse(json);
    return data;
  };

  remove = () => {
    localStorage.removeItem(this.storageKey);
  };
}
