// using reduce
// 배열을 객체로 결괏값을 만들때 사용
// 실무에서 보통 배열을 특정 자료형으로 변환하는데 사용함
// 단순히 합을 구하는 예제가 아니라, 배열을 숫자로 변환한 예제
function sum(numbers) {
  //reduce(사용할 인자값과 사용목적, 초깃값)
  return numbers.reduce((total, num) => total + num, 0);
}

function parse(qs) {
  const queryString = qs.substr(1); //'banana=10&apple=20&orange=30'
  const chunks = qs.split('&'); // ['banana=10', 'apple=20', 'orange=30']
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('='); //key = 'banana', value ='10'
      return { key, value }; // {key : 'banana', value: '10'}
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}

data = 'banana=10&apple=20&orange=30';

console.log(parse(data));
