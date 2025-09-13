import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  showLoader();

  const inputQuery = event.currentTarget.elements['search-text'].value.trim();

  if (!inputQuery) {
    iziToast.warning({
      title: '',
      message: 'Please enter a search query!',
    });
    hideLoader();
    return;
  }

  clearGallery();

  getImagesByQuery(inputQuery)
    .then(images => {
      hideLoader();
      if (images.length === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        return;
      }
      createGallery(images);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
      });
    })
    .finally(() => {
      hideLoader();
      formEl.reset();
    });
}
