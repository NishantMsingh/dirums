function initDB() {
    const indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    const request = indexedDB.open("TaskDatabase", 1);
  
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
    };
  
    return request;
  }

  export {initDB};