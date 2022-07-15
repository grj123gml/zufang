// 封装对本地存储
// 存
export const setItem = (name, value) => {
  // 复杂数据类型
  if (typeof value === 'object') {
    window.localStorage.setItem(name, JSON.stringify(value))
  } else { // 普通数据类型
    window.localStorage.setItem(name, value)
  }
}
// 取
export const getItem = name => {
  const value = window.localStorage.getItem(name)
  try {
    return JSON.parse(value)
  } catch (err) { return value }
}
// 根据名字删除
export const clearItem = (name) => {
  localStorage.removeItem(name)
}
// 删除全部
export const clearAllItem = () => {
  localStorage.clear()
}
