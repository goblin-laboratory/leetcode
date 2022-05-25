class Scheduler {
  constructor(limit = 2) {
    this.limit = limit;
    this.qunue = [];
    this.running = 0;
  }
  // promiseCreator 是一个异步函数，return Promise
  add = promiseCreator => {
    if (this.running >= this.limit) {
      const promise = new Promise((resolve, reject) => {
        this.qunue.push({ promiseCreator, resolve, reject });
      });
      return promise;
    }
    this.running++;
    return promiseCreator().then(data => {
      this.running--;
      if (this.running < this.limit && 0 < this.qunue.length) {
        const it = this.qunue.shift();
        this.add(it.promiseCreator).then(it.resolve);
      }
      return data;
    });
  };
}

const timeout = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });
const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(400, 4);
addTask(200, 2);
addTask(300, 3);
addTask(100, 1);
