import { render, renderPlus } from '../index';

test('渲染弹幕列表', () => {
  // 1000个随机数，模拟弹幕数据
  const danmu1000 = Array(1000).fill(0).map(Math.random)
  // expect(render(danmu1000))
  const ulEl = renderPlus(danmu1000)
  expect(ulEl).toBeInstanceOf(HTMLUListElement)
  expect(ulEl.childNodes.length).toBe(1000)
})