const promise = new Promise(function (resolve, reject) {
  console.log("1");
  resolve();
  console.log("2");
});

promise.then(() => console.log("then"));
