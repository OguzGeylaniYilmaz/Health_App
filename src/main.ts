const bodySize = document.getElementById("sizeInput") as HTMLInputElement;
const age = document.getElementById("ageInput") as HTMLInputElement;
const weight = document.getElementById("weightInput") as HTMLInputElement;
const activity = document.getElementById("activity") as HTMLSelectElement;
// const male = document.getElementById("male") as HTMLInputElement;
const female = document.getElementById("female") as HTMLInputElement;
const metabolicKcal = document.querySelector(
  "metabolic-kcal"
) as HTMLTableCellElement;
const metabolicKj = document.querySelector(
  "metabolic-kj"
) as HTMLTableCellElement;
const energyKcal = document.querySelector(
  "energy-kcal"
) as HTMLTableCellElement;
const energyKj = document.querySelector("energy-kj") as HTMLTableCellElement;

const form = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit", calculateCalorie);

function calculateCalorie(e: Event) {
  e.preventDefault();

  if (female.checked === true) {
    const femaleBasalMetabolism =
      65.1 +
      9.6 * Number(weight.value) +
      1.8 * Number(bodySize.value) -
      4.7 * Number(age.value);

    const femaleTotalValue = femaleBasalMetabolism * Number(activity.value);

    metabolicKcal.innerText = femaleBasalMetabolism.toFixed(2);
    metabolicKj.innerText = (Number(femaleBasalMetabolism) * 4.184).toFixed(2);

    energyKcal.innerText = femaleTotalValue.toFixed(2);
    energyKj.innerText = (Number(femaleTotalValue) * 4.184).toFixed(2);
  } else {
    const maleBasalMetabolism =
      66.47 +
      13.7 * Number(weight.value) +
      5 * Number(bodySize.value) -
      6.8 * Number(age.value);

    const maleTotalValue = maleBasalMetabolism * Number(activity.value);

    metabolicKcal.innerText = maleBasalMetabolism.toFixed(2);
    metabolicKj.innerText = (Number(maleBasalMetabolism) * 4.184).toFixed(2);

    energyKcal.innerText = maleTotalValue.toFixed(2);
    energyKj.innerText = (Number(maleTotalValue) * 4.184).toFixed(2);
  }
}
