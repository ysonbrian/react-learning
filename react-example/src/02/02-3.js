// 기본
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
// 기본, 숫자 판별
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

//forEach
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

//forEach
//const { a, b } = c 사용
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
// console.log(parse(data));
// console.log(parse2(data));
// console.log(parse3(data));
// console.log(parse4(data));

// map 함수는 각 배열 요소를 정의된 함수를 통해 변환한 결괏값들로 새 배열을 반환
// const만 사용하려면 map()를 사용

//map
function parse5(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split('&');
  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split('=');
    //result[key] = value;
    //forEach함수는 가변변수를 위 처럼 만들어야 하지만 map은 결괏값을 바로 리턴해줌
    return { key, value };
  });
  return result;
}

console.log(parse5(data));
