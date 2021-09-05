// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে।

console.log("I am the first one");
console.log("I am the second one");
console.log("I am the third one");
setTimeout(() => {
    console.log("I am the fourth one");
}, 3500);
console.log("I am the fifth one");
console.log("I am the sixth one");



