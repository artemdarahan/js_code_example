//1. Категорії меню
const categories = [
  { id: 1, title: "суші" },
  { id: 2, title: "піца" },
  { id: 3, title: "салати" },
  { id: 4, title: "напої" },
  { id: 5, title: "десерти" },
  { id: 6, title: "супи" },
  { id: 7, title: "паста" },
  { id: 8, title: "бургери" },
  { id: 9, title: "роли" },
  { id: 10, title: "сендвічі" },
];
//2. Додаткові позначки
const labels = [
  { id: 1, title: "веганьске" },
  { id: 2, title: "вегетарианське" },
  { id: 3, title: "гостре" },
  { id: 4, title: "містить алергени" },
  { id: 5, title: "без лактозне" },
];
//3. Меню
const products = [
  {
    id: 1,
    title: "Піца маргарита",
    category: 2,
    labels: [1, 5],
    params: ["30см", "45см"],
    price: 150.0,
  },
  {
    id: 2,
    title: "Тірамісу",
    category: 5,
    labels: [2],
    params: ["150гр"],
    price: 120.0,
  },
  {
    id: 3,
    title: "Суші з лососем",
    category: 9,
    labels: [1, 3],
    params: ["24шт/520гр", "32шт/640гр"],
    price: 200.0,
  },
  {
    id: 4,
    title: "Бургер з куркою",
    category: 8,
    labels: [4, 5],
    params: ["200гр"],
    price: 120.0,
  },
  {
    id: 5,
    title: "Цезар з креветками",
    category: 3,
    labels: [2, 4],
    params: ["200гр", "300гр"],
    price: 160.0,
  },
  {
    id: 6,
    title: "Піца гавайська",
    category: 2,
    labels: [5],
    params: ["30см", "45см"],
    price: 170.0,
  },
  {
    id: 7,
    title: "Салат з руколою",
    category: 3,
    labels: [2, 4],
    params: ["150гр", "250гр"],
    price: 80.0,
  },
  {
    id: 8,
    title: "Напій газований",
    category: 4,
    labels: [5],
    params: ["500мл", "750мл"],
    price: 50.0,
  },
  {
    id: 9,
    title: "Суп грибний",
    category: 6,
    labels: [4],
    params: ["300мл"],
    price: 90.0,
  },
  {
    id: 10,
    title: "Паста карбонара",
    category: 7,
    labels: [2, 5],
    params: ["200гр", "350гр"],
    price: 140.0,
  },
  {
    id: 11,
    title: "Рол з лососем",
    category: 9,
    labels: [1, 3],
    params: ["8шт/200гр"],
    price: 180.0,
  },
  {
    id: 12,
    title: "Сендвіч з куркою",
    category: 10,
    labels: [2, 4],
    params: ["150гр"],
    price: 70.0,
  },
  {
    id: 13,
    title: "Піца чотири сири",
    category: 2,
    labels: [1, 4],
    params: ["30см", "45см"],
    price: 180.0,
  },
  {
    id: 14,
    title: "Піца грибна",
    category: 2,
    labels: [1, 4],
    params: ["30см", "45см"],
    price: 160.0,
  },
  {
    id: 15,
    title: "Томатний суп",
    category: 6,
    labels: [4],
    params: ["300мл"],
    price: 85.0,
  },
  {
    id: 16,
    title: "Рол Каліфорнія",
    category: 9,
    labels: [1, 2],
    params: ["8шт/200гр", "12шт/300гр"],
    price: 190.0,
  },
  {
    id: 17,
    title: "Салат Грецький",
    category: 3,
    labels: [2, 5],
    params: ["200гр", "320гр"],
    price: 130.0,
  },
  {
    id: 18,
    title: "Напій безалкогольний",
    category: 4,
    labels: [5],
    params: ["500мл"],
    price: 60.0,
  },
  {
    id: 19,
    title: "Паста з морепродуктами",
    category: 7,
    labels: [1, 3],
    params: ["200гр", "320гр"],
    price: 180.0,
  },
  {
    id: 20,
    title: "Суші з тунцем",
    category: 9,
    labels: [1, 3],
    params: ["24шт/520гр", "32шт/640гр"],
    price: 220.0,
  },
];

//4. Замовлення
const order = [
  {
    id: 1,
    count: 2,
    param: "30см",
  },
  {
    id: 3,
    count: 1,
    param: "24шт/520гр",
  },
  {
    id: 7,
    count: 3,
    param: "150гр",
  },
  {
    id: 10,
    count: 1,
    param: "200гр",
  },
  {
    id: 12,
    count: 2,
    param: "150гр",
  },
];

//the first task
// Створити функцію "getFullProductList(products)", яка буде повертати оновлений масив "products" (див. вихідні дані),

// але треба заповнити поля "category" та "labels" відповідними значеннями з відповідних масивів (categories, labels - див. вихідні дані).
console.log("The first task")
function getFullProductList(products) {
  return products.map(item => {
    const idCat = item.category;
    const nameCat = categories.filter(element => element.id === idCat)[0].title;
    const idLabelsArr = item.labels;
    const nameLabelsArr = idLabelsArr.map(item => {
      const name = labels.filter(elem => elem.id === item)[0].title;
      return name;
    });
    return { ...item, category: nameCat, labels: nameLabelsArr }
  });
}

console.log(getFullProductList(products));

//the second task
// Створити функцію "searchProducts(products, param)", яка буде повертати оновлений масив "products", який містить тільки значення,
// які відповідають "param". Пошук ведемо по полях "title", "category", "labels". "param" має містити хоча б 3 символа.
// Робимо пошук регістронезалежним. Якщо умова не виконується, повертаємо строку "Некоректні дані для пошуку".
console.log("The second task")
function searchProducts(products, param) {
  if (typeof param !== 'string' || param.length < 3) return 'Некоректні дані для пошуку'
  const fullProductList = getFullProductList(products)
  const result = fullProductList.filter((item) => item.title.toLowerCase().includes(param.toLowerCase()) || item.category.toLowerCase().includes(param.toLowerCase()))
  const second_result = []
  fullProductList.map(item => {
    const chosenArr = item.labels.filter(element => element.toLowerCase().includes(param.toLowerCase()))
    if (chosenArr.length !== 0) second_result.push(item)
  })
  return [...result, ...second_result]
}

console.log(searchProducts(products, "гост"))

// the third task
console.log("The third task")
function filterProductsBy(products, id, flag) {
  return products.filter((item) => {
    if (flag === 'category') {
      return item.category === id;
    }
    else if (flag === 'label') {
      return item.labels.includes(id);
    }

  });
}
console.log(filterProductsBy(products, 3, 'category'))

//the fourth task
console.log("The fourth task")
function multyFilterProductsBy(products, idArr, flag) {
  if (idArr.length === 0) {
    return []
  }

  switch (flag) {
    case "categories":
      return products.filter(product => idArr.includes(product.category))
    case "labels":
      return products.filter(product => {
        for (const labelId of idArr) {
          if (!product.labels.includes(labelId)) {
            return false
          }
        }
        return true
      })
    default:
      return []
  }
}

console.log("Results:")
console.log("1)")
const filteredProductsByCategories = multyFilterProductsBy(products, [2, 3, 7], "categories")
console.log(filteredProductsByCategories)

console.log("2)")
const filteredProductsByLabels = multyFilterProductsBy(products, [1, 4], "labels")
console.log(filteredProductsByLabels)


// the fifth task
function calcOrder(order) {
  let orderSum = 0 // Загальна сума замовлення
  let discount = 0 // Знижка
  let delivery = 70 // Вартість доставки
  let totalSum = 0 // Сума до оплати
  let details = [] // Деталі замовлення

  for (const item of order) {
    let product = null // Змінна для зберігання продукту

    for (const p of products) {
      if (p.id === item.id) {
        product = p
        break
      }
    }

    if (product === null) {
      // Продукт не знайдений, переходимо до наступного запису замовлення
      continue
    }

    const price = product.price // Базова ціна продукту

    let paramIndex = product.params.indexOf(item.param) // Індекс значення параметра в масиві params
    let paramMultiplier = 1 // Множник ціни параметра

    if (paramIndex > 0) {
      paramMultiplier = 1 + (paramIndex * 20) / 100 // Розрахунок множника ціни параметра
    }

    const itemSum = price * paramMultiplier * item.count // Сума для даного запису замовлення
    orderSum += itemSum // Додавання суми до загальної суми замовлення

    const detail = {
      id: item.id,
      title: product.title,
      count: item.count,
      param: item.param,
      price: price * paramMultiplier,
      sum: itemSum,
    }

    details.push(detail) // Додавання деталі замовлення до масиву details
  }

  if (orderSum > 500) {
    // Розрахунок знижки
    discount = 2 // Початкова знижка 2%
    let additionalDiscount = Math.floor(orderSum / 500) // Додаткова знижка за кожні 500 грн

    if (additionalDiscount > 15) {
      additionalDiscount = 15 // Максимальна додаткова знижка 15%
    }

    discount += additionalDiscount
  }

  totalSum = orderSum - (orderSum * discount) / 100 // Розрахунок суми до оплати

  if (orderSum < 1000) {
    delivery = 70 // Вартість доставки 70 грн, якщо замовлення менше 1000 грн
  } else {
    delivery = 0 // Безкоштовна доставка, якщо замовлення 1000 грн або більше
  }

  return {
    orderSum: orderSum,
    discount: discount,
    delivery: delivery,
    paySum: totalSum,
    details: details,
  }
}

console.log("The fifth task")
const result = calcOrder(order)
console.log(result)