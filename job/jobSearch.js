const category = Array.from(jCategory);

document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = category.filter((item) =>
    item.title.toLowerCase().includes(searchData)
  );
  displayItems(filterData);
});

const displayItems = (items) => {
  const rootElement = document.getElementById("root");

  rootElement.innerHTML = "";

  items.forEach((item) => {
    const { index, image, title, salary, type } = item;
    const jList = document.createElement("div");
    jList.classList.add("jList");
    jList.innerHTML = `
    <img src="${image}" alt="" />
    <h3>${title}</h3>
    <p>${salary}</p>
    <span id="key">${type}</span>
     `;

    rootElement.appendChild(jList);
  });
};

displayItems(category);
