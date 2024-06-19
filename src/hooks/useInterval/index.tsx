import { useCallback, useEffect, useRef } from 'react'

/**
 * 避免在闭包陷阱的定时器
 * @description 定时器
 * @param {Function} fn 定时器执行函数
 * @param {number} time 定时器间隔时间
 * @return {Function} 清除定时器函数
 */
function useInterval(fn: Function, time: number) {
  /*
    首次加载渲染时，创建定时器。定时器中可以使用外部创建的闭包变量，避免闭包陷阱。
    定时器执行函数中，如果有操作使用的数据有更新，会触发重新渲染。
    因为定时器的依赖项是空数组，重渲染时也不会触发。所以触发的定时器还是同一个。
    此时，定时器内的执行函数就还是首次加载渲染时的执行函数，包括函数中使用的数据。
    从而导致闭包陷阱。
    但是如果在 useEffect 的依赖项中添加执行函数或函数中依赖的变量，则每次重渲染时，
    都会重新创建定时器，导致定时效果不正确。因此此方法也不可取。
    因此可以在 useEffect 外通过 useRef 存储定时器执行函数，每次重渲染时更新执行函数，
    而不管多少次重渲染，ref 都是同一个，此时定时器再通过 ref 去触发执行函数就是最新的。
  */
  const ref = useRef(fn) // 此处只定义了首次加载渲染时的值
  // 重渲染时，更新执行函数
  ref.current = fn

  const cleanUpFnRef = useRef<Function>()
  // 避免执行函数作为参数传入别的组件时，导致不必要的渲染
  const clean = useCallback(() => {
    cleanUpFnRef.current?.()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => ref.current?.(), time)

    // 设置定时器清理函数
    cleanUpFnRef.current = () => {
      clearInterval(timer)
    }

    // 销毁时，清除定时器
    return clean
  }, []) // 只有首次渲染时才会调用

  return clean
}

export default useInterval
