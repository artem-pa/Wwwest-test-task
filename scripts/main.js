const getS = (selector, number = null) => {
  const collection = document.querySelectorAll(selector);
  if (number === null) return collection;
  return collection[number];
}

const setPreview = (event) => {
  const target = event ? event.currentTarget : previewCollection[0];
  previewCollection.forEach(el => el.classList.remove('active'));
  target.classList.add('active');
  mainPreview.innerHTML = target.innerHTML;
}

const root = () => {
  getS('.preview .images__item').forEach((el, i) => {
    el.children[0].style.backgroundImage = `url('images/cars-view/${el.dataset.bg}')`;
    el.addEventListener('click', setPreview)
    if (i === 0) setPreview();
  })
}

const mainPreview = getS('.preview .images__preview', 0);
const previewCollection = getS('.preview .images__item');

root();