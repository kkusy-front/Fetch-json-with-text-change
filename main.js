async function getData() {
  const response = await fetch("./zadanie.json");
  return response.json();
}

(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let city = urlParams.get("miasto");

  const getHeading = document.querySelector("#heading");
  const getDescription = document.querySelector("#description");

  getData().then((res) => {
    res.city.map((el) => {
      if (el.name === city) {
        getHeading.innerText = el.h1;
        getDescription.innerText = el.p;
      }
    });
  });
})();
