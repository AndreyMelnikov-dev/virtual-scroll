# Коротко о проекте

## Запуск и тесты 

### npm start - запуск проекта
### npm run test - запуск тестов
### npm run build - сборка статики

## Стек

React / AntD / React-Query / React-Router-Dom / FSD*

*Давно практикую дополнительную кластеризацию по страницам внутри слоев entities, features, widgets, мне кажется удобным.

## Реализованный компонент

Основной элемент списка лежит в shared/ui/VirtualList + небольшой тест на jest (совсем небольшой).
Развивать и улучшать его можно много:)

## Intersection Observer

Не использовал его, основные проблемы: https://stackoverflow.com/questions/61951380/intersection-observer-fails-sometimes-when-i-scroll-fast

Релизовал через подписку на скролл. Такая же реализация в React-Window

## UI

### AntD + Inline Styles

Выбрал инлайновые стили, т.к. их очень мало с учетом использования AntD, подключать что-то
дополнительное смысла нет.

## Линтеры

Минимальные стандартные настройки
