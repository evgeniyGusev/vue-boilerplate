## ROUTER
Директория, которая содержит один единственный файл, содержащий настройки маршрутизации проекта.
Все функции, которые используем в хуках жизненного цикла маршрута импортируем из директории `~@/helpers`.
Для всех маршрутов устанавливаем `meta.title`.

Пример хелпера для хука:

```
// в хелпере
import Vue from 'vue';

export default async function isLoggedIn(to, from, next) {
  if (Vue.$cookies.get('token')) {
    next();
  } else {
    next('/');
  }
}

// в router/index.js
import isLoggedIn from '@/helpers/isLoggedIn';

const routes = [
  ...,
  {
    path: '/account',
    name: 'account',
    component: Account,
    beforeEnter: isLoggedIn,
    meta: {
      title: 'Главная страница',
    },
  }
];
```
