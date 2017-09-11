function getTempCallback (location, callback){
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', function(err, temp){
  if(err) {
    console.log('error', err);
  }
  else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject){
      resolve(79);
      reject('City not found');
  });
}

getTempPromise('Philadelphia').then(
  function (temp) {
    console.log('promise success', temp);
  },
  function (err) {
    console.log('promise error', err);
  }
)

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
      resolve(a+b);
      reject('Num Error');
  });
}

addPromise(5,7).then(
  function (temp) {
    console.log('promise success', temp);
  },
  function (err) {
    console.log('promise error', err);
  }
)
