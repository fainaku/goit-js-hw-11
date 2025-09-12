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

  getImagesByQuery(inputQuery)
    .then(response => {
      clearGallery();
      createGallery(response.hits);
      hideLoader();
      if (response.hits.length === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        return;
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(formEl.reset());
}
