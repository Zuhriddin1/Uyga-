// pop
// Array.prototype.Mypop = function () {
//   return this.pop();
// };
// // Example
// let array = [1, 2, 3, 4, 5];
// let element = array.Mypop();
// console.log(array, element);
// reverse
// Array.prototype.Myreverse = function () {
//   const array = this.slice().reverse();
//   for (let i = 0; i < array.length; i++) {
//     this[i] = array[i];
//   }
//   return this;
// };
// // Example
// let myArray = [1, 2, 3, 4, 5];
// myArray.Myreverse();
// console.log(myArray);
// shift
// Array.prototype.Myshift = function () {
//   if (this.length === 0) {
//     return undefined;
//   }
//   const ExElement = this[0];
//   for (let i = 0; i < this.length - 1; i++) {
//     this[i] = this[i + 1];
//   }
//   this.length--;
//   return ExElement;
// };
// let MyArray = [1, 2, 3, 4, 5];
// let ExElement = MyArray.Myshift();
// console.log(MyArray, ExElement);
// slice
// Array.prototype.Myslice = function (start, end) {
//   start = start || 0;
//   end = end || this.length;
//   const MyArray = [];
//   for (let i = start; i < end && i < this.length; i++) {
//     MyArray.push(this[i]);
//   }
//   return MyArray;
// };
// let myArray = [1, 2, 3, 4, 5];
// let portion = myArray.Myslice(1, 4);
// console.log(portion);