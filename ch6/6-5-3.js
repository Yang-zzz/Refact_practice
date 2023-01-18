export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}

// 함수 내부에서 필요한 것 만 받아오고 , 외부의 의존성을 낮추는게 좋다.
// 필요한것  == state