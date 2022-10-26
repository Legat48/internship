# testPitch
Тестовое задание для компании Pitch

ТЗ:

Верстка по своему усмотрению, можно использовать готовые библиотеки или свои заготовки.

Задача: реализовать урезанный функционал интернет-магазина: список товаров и список избранного.
Подзадачи:
Авторизация (log: test@test.ru, pass: 1234). Остальные страницы должны быть недоступны без авторизации.
Страница /catalog
Вывод списка товаров с пагинацией. По 50 шт на странице. В карточке товара достаточно иметь название товара и одну кнопку-сердечко для добавления в избранное. Вид кнопки должен отображать статус добавленности в избранное.
Добавление/удаление товара в избранное по клику на кнопку-сердечко
Страница /favourites
Вывод списка избранных товаров с пагинацией по 50 шт на странице. Вид карточки такой же как в каталоге.
Выход из аккаунта.


Свагер: https://dev.api.cloud-atlas.online/api/doc
Адрес для запросов: https://dev.api.cloud-atlas.online
Во все запросы прокидывать заголовок: account: 8b59a775077536f3b73bb774655b94f6
Авторизационный заголовок: Authorization: TOKEN

Используемые в задании запросы:
POST /auth/login
GET /commerce/products
filters[aggregate] – получить счетчик товаров, filters[limit]=N – получить N-штук товаров, filters[offset]=N – получить товары начиная с N-позиции
POST /commerce/products/favourites payload: { product: {id} }
DELETE /commerce/products/{id}/favourites
GET /commerce/products/favourites
filters[aggregate] – получить счетчик товаров, filters[limit]=N – получить N-штук товаров, filters[offset]=N – получить товары начиная с N-позиции
POST /auth/logout