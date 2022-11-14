// 문제 설명
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

// 풀이 유추
// java에서는 //를 사용하면 되었는데, js도 통할까

// 입출력 예
// num1	num2	result
// 10	5	2
// 7	2	3


// 내 풀이
function solution(num1, num2) {
    var answer = parseInt(num1/num2);
    return answer;
}


// 실패원인
// int() 불가 -> parseInt() 를 사용해야함