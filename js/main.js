let submit = document.querySelector(".card-actionOcured-button");

const birsdayInput = document.querySelector("#birsday"); //month
const monthInput = document.querySelector("#month");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (birsdayInput.value.trim() && monthInput.value.trim()) {
    if (birsdayInput.value.length <= 2 && monthInput.value.length <= 2) {
      let date = Number(birsdayInput.value);
      let month = Number(monthInput.value);
      switch (month) {
        case (1, 3, 5, 7, 8, 10, 12): {
          if (date > 0 && date <= 31) alert(MOD(date, month));
          else alert("Число не явялется корректным.");
          break;
        }
        case (4, 6, 9, 11): {
          if (date > 0 && date <= 30) alert(MOD(date, month));
          else alert("Число не явялется корректным.");
          break;
        }
        case 2: {
          if (year(new Date().getFullYear())) {
            if (date > 0 && date <= 29) alert(MOD(date, month));
            else
              alert(
                "Число не явялется корректным. В не висакосном году 29 дней в феврале."
              );
          } else {
            if (date > 0 && date <= 28) alert(MOD(date, month));
            else
              alert(
                "Число не явялется корректным. В не висакосном году 28 дней в феврале."
              );
          }
          break;
        }
        default: {
          alert("Такой месяц не существует.");
          break;
        }
      }
    } else {
      monthInput.style.borderColor = "red";
      birsdayInput.style.borderColor = "red";
      alert("Поля не могут содержать 2+ символа!");
    }
  } else {
    birsdayInput.style.borderColor = "red";
    monthInput.style.borderColor = "red";
    alert("Поля не могут быть пустыми!");
  }
  birsdayInput.value = null;
  monthInput.value = null;
});

function MOD(date, month) {
  return ((date % month) + 1).toString();
}

function year(yr) {
  return !(yr % 4 || (!(yr % 100) && yr % 400));
}
