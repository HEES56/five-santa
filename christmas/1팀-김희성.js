/* # 🎅 산타 잡기 게임
- getSanta를 최대한 많이 호출해서 산타를 많이 잡아보세요!
- play method의 중괄호를 벗어나선 안됩니다. method안에서만 코드를 작성해주세요.
- 제약 조건은 제약 조건.txt를 확인하세요
- 코드를 실행시켜 보고 싶으면 node main.js 입력!
*/

export default {
  name: "김희성",
  play: async (getSanta) => {
    setTimeout(() => {
      for (let i = 0; i < 100; i++) {
      getSanta = () => {Math.random() < 0.01
          ? Math.floor(Math.random() * 200 + 100)
          : Math.floor(Math.random() * 3 + 1);}; 
        getSanta();
      }
    }, 500); 
  },
};

