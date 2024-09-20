const ulEl = document.getElementById('categories');

const getNumberOfCategories = container => container.children.length;

const getContentCategory = container => {
  const quantityItems = getNumberOfCategories(container);
  console.log(`Number of categories: ${quantityItems}`);

  for (let i = 0; i < quantityItems; i++) {
    console.log(`Category: ${container.children[i].children[0].textContent}`);
    console.log(`Elements: ${container.children[i].children[1].children.length}`);
  }
};

const category = getContentCategory(ulEl);
console.log(category);
