function parse(qs) {
  let queryString = qs.substr(1);
  let chunks = qs.split('&');
  let result = {};
  for (let i = 0; i < chunks.length; i++) {
    let parts = chunks[i].split('=');
    let key = parts[0];
    let value = parts[1];
    result[key] = value;
  }
  return result;
}
function parse2(qs) {
  let queryString = qs.substr(1);
  let chunks = qs.split('&');
  let result = {};
  for (let i = 0; i < chunks.length; i++) {
    let parts = chunks[i].split('=');
    let key = parts[0];
    let value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  }
  return result;
}

function parse3(qs) {
  let queryString = qs.substr(1);
  let chunks = qs.split('&');
  let result = {};
  chunks.forEach((chunk) => {
    const parts = chunk.split('=');
    const key = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });
  return result;
}

function parse4(qs) {
  let queryString = qs.substr(1);
  let chunks = qs.split('&');
  let result = {};
  chunks.forEach((chunk) => {
    const [key, value] = chunk.split('=');
    result[key] = value;
  });
  return result;
}

data = 'banana=10&apple=200&orange=30';
console.log(parse(data));
console.log(parse2(data));
console.log(parse3(data));
console.log(parse4(data));
