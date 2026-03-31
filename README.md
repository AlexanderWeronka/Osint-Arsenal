# OSINT Arsenal

Привет. Меня знают как Александр Лапшаков, и вместе с Александром Веронкой мы сделали этот проект для тех, кто только входит в тему инфобеза и OSINT. OSINT Arsenal — каталог инструментов, методичек и сервисов: всё в одном месте, без лишнего шума.

Проект привязан к каналу **digitalmole79** в Telegram: [t.me/digitalmole79](https://t.me/digitalmole79). Там — статьи по OSINT, пентесту, нетсталкингу и смежным темам.

**Live:** https://alexanderweronka.github.io/Osint-Arsenal

---

*Hello. I go by Alexander Lapshakov, and together with Alexander Weronka we built this for anyone getting started with infosec and OSINT. OSINT Arsenal is a catalog of tools, guides and services — everything in one place, no clutter.*

*The project is tied to the **digitalmole79** Telegram channel: [t.me/digitalmole79](https://t.me/digitalmole79). Articles on OSINT, pentesting, netstalking and related topics.*

---


## Структура / Structure

```
osint-arsenal/
├── welcome.html           — заглавная страница / landing page
├── index.html             — основное приложение / main app
├── README.md
└── assets/
    ├── css/style.css
    └── js/
        ├── app.js              — логика: вкладки, поиск, модалки, тема, язык
        ├── i18n.js             — строки интерфейса RU/EN
        ├── tools.js            — основной каталог (46 инструментов)
        ├── tools-db.js         — расширенный пул для «случайного» (345 записей)
        └── info-topics.js      — статьи базы знаний RU/EN
```

Данные лежат в `assets/js/` — редактировать можно без правки разметки.

---

## Контакты / Contacts

- **Alexander Weronka** — [Telegram @Alexander_Weronka](https://t.me/Alexander_Weronka)
- **Alexander Lapshakov** — [Telegram @AlexanderLapshakov](https://t.me/AlexanderLapshakov), [TikTok @alexanderlpsh](https://www.tiktok.com/@alexanderlpsh)

Предложения и баги — в личку в Telegram.

---

## Поддержка / Support

В приложении есть раздел поддержки: TON-кошельки, копирование по клику. При переводе можно написать в Telegram и приложить скриншот.

*The app has a support section with TON wallet addresses (click to copy). When sending, feel free to message either author on Telegram with a screenshot.*

---

## Ответственность / Disclaimer

Все материалы предназначены для обучения и работы в рамках полномочий: согласованный пентест, защита своих систем, исследование безопасности. За использование инструментов вне закона отвечаете вы.

*All content is for education and authorized use only. Misuse is your responsibility.*

---

MIT License
