const adviceBtn = document.querySelector(".btn");
const adviceId = document.querySelector(".advice-number");
const adviceText = document.querySelector(".text-generator");

const fetchData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    const {slip} = data;
    adviceId.innerHTML = slip.id;
    adviceText.innerHTML = '"' + slip.advice + '"';
};

fetchData()
adviceBtn.addEventListener("click", fetchData);