export const animation = (elts: any) => {
  //转变的文字
  const texts: string[] = ['lowCode', 'Vue3', 'TypeScript']
  //用于控制动画速度
  const morphTime: number = 5
  const cooldownTime: number = 1

  let textIndex: number = texts.length - 1
  //获取时间
  let time: Date = new Date()
  let morph: number = 0
  let cooldown: number = cooldownTime
  //改变展示的文本内容
  elts.text1.textContent = texts[textIndex % texts.length]
  elts.text2.textContent = texts[(textIndex + 1) % texts.length]

  function doMorph() {
    //0+每次cooldown的绝对值
    morph -= cooldown
    //减完将其赋值为0，下次减dt其实就还是0-dt,所以每次都是加上一个dt值
    cooldown = 0
    //累计增加的变形时间/4
    let fraction: number = morph / morphTime
    //如果大于4
    if (fraction > 1) {
      //coolDown重新恢复为0.25，而不是0
      cooldown = cooldownTime
      fraction = 1
    }

    setMorph(fraction)
  }

  function setMorph(fraction: number) {
    //filter： blur(px)  :给图像设置高斯模糊，值越大约模糊
    elts.text2.style.filter = `blur(${Math.min(4 / fraction - 4, 100)}px)`
    elts.text2.style.opacity = `${Math.pow(fraction, 0.8) * 100}%`

    fraction = 1 - fraction
    elts.text1.style.filter = `blur(${Math.min(4 / fraction - 4, 100)}px)`
    elts.text1.style.opacity = `${Math.pow(fraction, 0.8) * 100}%`

    elts.text1.textContent = texts[textIndex % texts.length]
    elts.text2.textContent = texts[(textIndex + 1) % texts.length]
  }

  //每一次动画之后清空css中的filter和opacity数值
  function doCooldown() {
    morph = 0

    elts.text2.style.filter = ''
    elts.text2.style.opacity = '100%'

    elts.text1.style.filter = ''
    elts.text1.style.opacity = '0%'
  }

  function animate() {
    requestAnimationFrame(animate)

    let newTime: Date = new Date()
    let shouldIncrementIndex = cooldown > 0
    //16.7ms执行一次，这里是求得刷新的时间
    let dt =
      ((newTime as unknown as number) - (time as unknown as number)) / 1000
    time = newTime
    //减少的时间起初为0.25，然后每一次渲染都减少一定时间，使其变化越来越慢
    cooldown -= dt
    //当变化的时间小于0时
    if (cooldown <= 0) {
      //减一次dt之前还是正数，减之后变成负数了，就切换一次文本内容
      if (shouldIncrementIndex) {
        textIndex++
      }
      //只要cooldown是负数就执行
      doMorph()
    } else {
      doCooldown()
    }
  }

  animate()
}
