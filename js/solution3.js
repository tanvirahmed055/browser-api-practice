// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও

const taskThree = () => {
    const response = confirm("Do you want to see the location of your website");

    if (response) {
        console.log(location.href);
    } else {
        console.log("It's ok, if you don't want to see.");
    }
}