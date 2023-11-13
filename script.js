// window.addEventListener('load', () => {
//   const main = document.querySelector('.main');
//   const blocks = document.querySelectorAll('.block');
//   console.log('blocks', blocks[3].getBoundingClientRect().x)

//   main.addEventListener('scroll', (event) => {
//     // we were so far
//     //   ... yet so far away
//     console.log(main.scrollTop, [...blocks].map(x => x.getBoundingClientRect().top));
//     const elementsScrolledBy = [...blocks].filter(x => x.getBoundingClientRect().top <= main.scrollTop);
//     console.log(elementsScrolledBy);
//   });
// });
