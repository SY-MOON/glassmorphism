//참고
//https://morioh.com/p/93f49be41d72
//https://www.youtube.com/watch?v=HfKBKQOyWHM

const cursor = gsap.to('.cursor', { opacity: 0, ease: "power2.inOut", repeat: -1})

const masterTL = gsap.timeline({defaults: { ease: "power2.inOut", duration: 1.5}});
masterTL.from('.circle', { x: '-10%', opacity: 0 })
        .from('.card', {opacity: 0, delay: 1}, "-=1.5")
        .from('.card', { y: '-20%', backdropFilter: 'blur(0px)'},  "-=1.5")

const wordsTL = gsap.timeline({repeat: -1})

const words = ['Glassmorphism', 'GSAP', 'HTML/CSS']
words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
  tl.to('.text', {duration: 1, text: word})
  wordsTL.add(tl)
})