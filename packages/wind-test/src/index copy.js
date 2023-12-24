// import './index.css'
// import './a.jpeg'
console.log('测试打包入口文件')


// const getname = () => {
//   return 'name'
// }

// async function getName() {
//   return 'name'
// }
// const name = await getName()
// console.log(name)

// function hoc(params) {
//   console.log(params, 'params')
//   return function(obj) {
//     console.log(obj, 'obj')
//   }
// }

// @hoc('sa')
// class Person {
//   name = 'Tom'
// }
class Person {
  name = 'Tom'
  getName(){
    console.log(this.name)
  }
}

let man = new Person()
man.getName()