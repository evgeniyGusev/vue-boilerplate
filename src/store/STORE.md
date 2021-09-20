## STORE 
Директория содержит хранилища глобальных данных приложения, доступные из любого компонента через переменную `$store`
Файл `index.js` экспортирует экземпляр класса `Vuex.Store`. Если в приложении есть данные, которые логически отличаются
контекстом использования, то необходима разбить `Store` на модули. Например, у нас есть страница Личного кабинета пользователя `/account`,
которая содержит данные авторизованного пользователя и главная страница (`/`), которая содержит общие данные приложения.
В таком случае, будет уместным разделить хранилище на два модуля `account` и `main`, соответственно. Это позволит не запутаться в
данных и методах экземпляров и структурирует данные.

Пример использования:

```
// account.js
const account = {
  state: () => ({
    ...
  }),

  mutations: {...},

  actions: {...},
};

export default account;

// mian.js
const main = {
  state: () => ({
    ...
  }),

  mutations: {...},

  actions: {...},
};

export default main;

//index.js
import Vue from 'vue';
import Vuex from 'vuex';
import account from '@/store/account';
import main from '@/store/main';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account,
    main,
  },
});
```
