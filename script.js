const cast = {
  characters: [
    {
      name: "Michael Scott",
      title: "Regional Manager"
    },
    {
      name: "Dwight K Schrute",
      title: "Assistant to the Regional Manager"
    },
    {
      name: "Jim Halper",
      title: "Sales person"
    },
    {
      name: "Pam Beesly",
      title: "Secretary"
    }
  ]
};

window.onload = event => {
  const template = document.querySelector("#character-template").textContent;
  const compiled = Handlebars.compile(template);
  const list = document.querySelector(".character-list");
  list.innerHTML = compiled(cast);
};
