import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form');
formElem.addEventListener('submit', onBtnHendle);

function onBtnHendle(e) {
  e.preventDefault();
  const delay = Number(formElem.elements.delay.value);
  const state = formElem.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (state === 'fulfilled') {
            resolve(delay);
        }
        else {
            reject(delay);
        }
    }, delay);
  });
        promise
            .then(ms => {
                iziToast.show({
                    position: 'topRight',
                    backgroundColor: '#01a81dff',
                    messageColor: 'white',
                    title: '✅',
                    message: `Fulfilled promise in ${delay} ms`,
                });
            })
            .catch(ms => {
                iziToast.show({
                    position: 'topRight',
                    backgroundColor: '#fa5656',
                    messageColor: 'white',
                    title: '❌',
                    message: `Rejected promise in ${delay} ms`,
                });
            });
      formElem.reset();
    }


