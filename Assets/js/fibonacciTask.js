const nthFibo = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let a = 0, b = 1;
  for (let i = 3; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}

console.log(nthFibo(4), "<--такой ответ для n = 4");
console.log(nthFibo(10), "<--такой ответ для n = 10");
console.log(nthFibo(20), "<--такой ответ для n = 20"); 