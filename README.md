# typscript-react-redux-saga

Для запуска надо установить все зависимости для сервера и клиента
для этого в каждой директории прописываем "npm i"
После установки всех зависимостей для начало запускаем сервер для этого преходим в папку server и с помощью команды "npm run dev" запускаем сервер
А потом запускаем клиентскую часть с помощью команды "npm start"
Дальнейшее пользование показано на скриншотах

---
Основной стек технологии
    axios,
    jwt-decode,
    react,
    react-bootstrap,
    react-dom,
    react-icons,
    react-router-dom,
    redux-saga,
    typescript

---

Главное страница

---

## ![image](https://user-images.githubusercontent.com/74898494/133442257-5ac79a01-f1d3-45e8-8c60-f424f721e8f3.png)

## На главной странице работает сортировка по типу и бренду

## ![image](https://user-images.githubusercontent.com/74898494/133443769-34859666-e2da-481e-b2b9-42d49b3fa2ef.png)

## Товары можно добавить с помощью админ панели

![image](https://user-images.githubusercontent.com/74898494/133445096-261ba6a3-d015-49fa-9bab-68728f2a9a98.png)

## Также можно смотреть все характеристике

![image](https://user-images.githubusercontent.com/74898494/133445440-52160494-e82a-48d1-b30f-57353cc223e6.png)
Если пользователь не авторизован ему не доступны не добавление товара в корзину не админ панель

---

## ![image](https://user-images.githubusercontent.com/74898494/146887766-10a6c7af-159f-444f-a384-f44a207d5c28.png)

Пользователь может войти или зарегистрироваться на странице авторизации
Пока что всем пользователям присваивается рол “admin”

---

## ![image](https://user-images.githubusercontent.com/74898494/146887871-a70ae686-4fad-446d-91e5-4441292f9926.png)

## ![image](https://user-images.githubusercontent.com/74898494/146887997-58b6c812-030b-47ec-a4a1-5198a157ff15.png)

## После авторизации можно добавлять товар в корзине

## ![image](https://user-images.githubusercontent.com/74898494/146888866-596ad1bf-804c-44ed-8c88-d9fc09c5ae9a.png)

В корзине мы видим все товары которых вы добавили туда
Также есть общая сумма за всех товаров

---

## ![image](https://user-images.githubusercontent.com/74898494/146889166-d0604ffb-83fd-4502-8169-77bf790a0e2d.png)

## Так же пользователю доступно удаление товаров из корзины

![image](https://user-images.githubusercontent.com/74898494/146889568-ffd281e4-dde1-4e7f-b871-20433a4161c2.png)

---

![image](https://user-images.githubusercontent.com/74898494/146889679-c29b0a8b-3083-4580-846d-93fe0e50be7b.png)

---

Если в корзины нету товаров, то пользователю выводиться соответствующая надпись

---
