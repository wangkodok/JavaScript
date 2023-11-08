const promise = new Promise(function (resolve, reject) {
  console.log("1");
  resolve();
  console.log("2");
});

promise.then(() => console.log("then"));

const one = () => Promise.resolve("one");

async function two() {
  const res = await one();
  console.log(res);
  console.log("ok");
}

two();

console.log("start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

console.log("end");
