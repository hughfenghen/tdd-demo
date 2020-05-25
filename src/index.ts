// const container = document.querySelector('container')
const container = document.createElement('div')

// ！！！不建议写法
export function render(list: any[]): void {
  const ulEl = document.createElement('ul')
  // 简化逻辑
  list.forEach((txt) => {
    const itEl = document.createElement('li')
    itEl.textContent = txt
    ulEl.appendChild(itEl)
  })
  // dom操作
  container.appendChild(ulEl)
}

// √√√ 建议写法
// 尽量编写纯函数
export function renderPlus(list: any[]): HTMLUListElement {
  const ulEl = document.createElement('ul')
  // 简化逻辑
  list.forEach((txt) => {
    const itEl = document.createElement('li')
    itEl.textContent = txt
    ulEl.appendChild(itEl)
  })
  return ulEl
}

function mount() {
  const danmu1000 = Array(1000).fill(0).map(Math.random)
  container.appendChild(renderPlus(danmu1000))
}

// 练习题：弹幕量太大，分批挂载
