// -- GLOBAL --
const checkOneContainer = document.querySelector(".checkbox-one")
const checkTwoContainer = document.querySelector(".checkbox-two")

const checkOneChecked = document.querySelector(".checked-one")
const checkOneUnchecked = document.querySelector(".unchecked-one")

const checkTwoChecked = document.querySelector(".checked-two")
const checkTwoUnchecked = document.querySelector(".unchecked-two")

// -- CHANGE CHECKBOX ICON --
const checkboxOneFn = () => {
  const handleClick = () => {
    if (checkOneChecked.className.includes("hidden")) {
      checkOneChecked.classList.remove("hidden")
      checkOneUnchecked.classList.add("hidden")

      checkTwoChecked.classList.add("hidden")
      checkTwoUnchecked.classList.remove("hidden")
    }
  }

  checkOneContainer.addEventListener("click", handleClick)
}
checkboxOneFn()

const checkboxTwoFn = () => {
  const handleClick = () => {
    if (checkTwoChecked.className.includes("hidden")) {
      checkTwoChecked.classList.remove("hidden")
      checkTwoUnchecked.classList.add("hidden")

      checkOneChecked.classList.add("hidden")
      checkOneUnchecked.classList.remove("hidden")
    }
  }

  checkTwoContainer.addEventListener("click", handleClick)
}
checkboxTwoFn()
