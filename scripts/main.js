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


  getS('.catalogue__cards').forEach((el, i) => {
    el.addEventListener('scroll', e => {
      const target = e.target;
      const percent = target.scrollLeft / (target.scrollWidth - target.clientWidth);
      const [leftPoint, rightPoint] = [0.1, 0.9];
      let [opacityLeft, opacityRight] = [0, 1];

      if (percent < leftPoint) {
        opacityLeft = 0;
        opacityRight = 1;
      }
      else if (percent > rightPoint) {
        opacityLeft = 1;
        opacityRight = 0;
      }
      else {
        opacityLeft = ((percent - leftPoint) / (rightPoint - leftPoint)) ** 0.5;
        opacityRight = ((percent - rightPoint) / (leftPoint - rightPoint)) ** 0.5;
      }

      getS('.shadow.left', i).style.opacity = opacityLeft;
      getS('.shadow.right', i).style.opacity = opacityRight;
    })
  })
}

const mainPreview = getS('.preview .images__preview', 0);
const previewCollection = getS('.preview .images__item');

root();