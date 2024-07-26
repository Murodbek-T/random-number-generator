const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const changeButton = document.getElementById("btn");
changeButton.addEventListener("click", () => {
  const minInput = document.getElementById("min");
  const maxInput = document.getElementById("max");
  const min = Number(minInput.value);
  const max = Number(maxInput.value);

  if (maxInput.value === "" || minInput.value === "") {
    alert("Iltimos qiymat kiriting!");
    return;
  }

  if (max < min) {
    alert("Max qiymati min dan kichik bo'lmasligi kerak!");
    return;
  }

  const placeholder = document.getElementById("heading");
  placeholder.textContent = getRandomNumber(min, max);
});
