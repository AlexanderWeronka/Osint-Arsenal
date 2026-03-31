const I18N = {
  ru: {
    /* Nav */
    navTools:     'Инструменты',
    navRandom:    'Случайный',
    navInfo:      'База знаний',
    navPractice:  'Практика',
    navResources: 'Ресурсы',
    navAuthor:    'О проекте',

    /* Tools page */
    toolsEye:   'Коллекция',
    toolsTitle: 'Арсенал инструментов',
    toolsSub:   'Отобранный каталог на этой вкладке. Расширенная база используется во вкладке «Случайный».',
    searchPlaceholder: 'Поиск инструмента...',
    emptyState: 'Ничего не найдено по запросу',
    countChipPartial: 'Показано {n} из {total}',
    countChipFull: 'Все {total} в каталоге',

    /* Random tool */
    todEye:     'Случайный выбор',
    todTitle:   'Инструмент дня',
    todSub:     'Каждый раз — запись из расширенной базы с подробным описанием; вкладка «Инструменты» показывает только основной список.',
    todPoolNote:
      'Пул случайного выбора: {pool} записей. Основной каталог: {main} инструментов.',
    todLabel:   'Случайный выбор',
    randomPoolBadgeTitle: 'Записей в расширенной базе для этой вкладки',
    todHistory: 'Уже показанные',
    histEmpty:  'История появится после нескольких переключений.',

    /* Info */
    infoEye:   'База знаний',
    infoTitle: 'Методики OSINT',
    infoSub:   'Подробные руководства — от поиска по email до разведки инфраструктуры.',

    /* Practice */
    pracEye:   'Тренировка',
    pracTitle: 'Практика',
    pracSub:   'Платформы и задания для отработки навыков разведки.',
    chalEye:   'Задания',
    chalTitle: 'Быстрые задания',

    /* Resources */
    resEye:   'Библиотека',
    resTitle: 'Ресурсы',
    resSub:   'Каналы, книги, подкасты и сообщества для изучения OSINT.',

    /* Author */
    authorEye:    'Проект',
    authorTitle:  'О проекте',
    authorSub:    'Канал digitalmole79, авторы и контакты.',
    authorStatsTitle: 'Статистика',
    statLabelCatalog: 'в каталоге',
    statLabelDb: 'в пуле «случайный»',
    statLabelCats: 'категорий',
    statLabelTopics: 'методик в базе',

    /* Buttons */
    btnOpen: 'Открыть',
    btnNext: 'Другой инструмент',

    /* Levels */
    lvlBeg: 'Начальный', lvlMid: 'Средний', lvlAdv: 'Продвинутый',
    lvlEasy: 'Лёгкое', lvlMed: 'Среднее', lvlHard: 'Сложное',

    /* Challenges */
    chal1Name: 'Найди email компании',
    chal1Desc: 'Используй Hunter.io и theHarvester чтобы найти email-адреса сотрудников конкретной организации. Задокументируй методологию.',
    chal2Name: 'Определи геолокацию по фото',
    chal2Desc: 'По заданному изображению определи страну, город и улицу — EXIF и визуальные подсказки.',
    chal3Name: 'Раскрой инфраструктуру домена',
    chal3Desc: 'Найди все поддомены, IP-адреса, открытые порты и технологии целевого домена.',

    /* Practice platforms */
    pracTHM:   'Интерактивные комнаты с OSINT-заданиями прямо в браузере. Идеально для старта.',
    pracHTB:   'Реальные машины и OSINT-задачи. Специальный раздел OSINT challenges.',
    pracCTF:   'Агрегатор CTF-соревнований со всего мира — многие содержат OSINT-треки.',
    pracGeo:   'Угадывание мест по Street View — прокачивает геолокационный OSINT.',
    pracTrace: 'OSINT CTF с реальной целью — поиск пропавших без вести. Серьёзный опыт.',
    pracTrain: 'Курсы и тренировочные задания для OSINT-аналитиков всех уровней.',

    /* Resources */
    resMindset:       'Актуальные инструменты, кейсы и методики от практикующих специалистов.',
    resBell:          'Знаменитое следственное издание. Расследования и обучающие материалы.',
    resAwesome:       'Огромный список OSINT-ресурсов, инструментов и методик на GitHub.',
    resOsintFramework:'Интерактивная карта всех OSINT-инструментов по категориям. Незаменимая точка отсчёта.',
    resNahamSec:      'YouTube-канал одного из лучших багхантеров. Обучающие видео по recon и bug bounty.',
    resOsintPodcast:  'Подкаст Майкла Баззела — одного из ведущих OSINT-экспертов. Техники, инструменты, кейсы.',
    resChecklists:    'Чек-листы для OSINT-расследований: по людям, email, соцсетям и инфраструктуре.',
    resOsintCurious:  'Материалы от OSINT Curious — активного сообщества OSINT-исследователей.',
    resApiLeaks:      'Руководство по поиску утечек API-ключей в открытых источниках.',
    resOsintTeam:     'Telegram-сообщество OSINT-специалистов. Инструменты, кейсы, методы разведки.',
    resHackTricks:    'Энциклопедия хакерских техник: веб, сети, Active Directory, OSINT и многое другое.',
    resPayloads:      'Самая полная коллекция полезных нагрузок и техник обхода защит.',
    resRedditOsint:   'Сообщество Reddit для OSINT-энтузиастов. Вопросы, инструменты, кейсы.',
    resTraceLabs:     'НКО использующая OSINT для поиска пропавших без вести. CTF с реальными целями.',
    resOsintStuff:    'Масштабная коллекция OSINT-инструментов от Cipher387. Обновляется регулярно.',

    /* Settings / Support */
    settTitle:     'Настройки',
    settLangLabel: 'Язык',
    settThemeLabel:'Тема',
    suppTitle:     'Поддержка',
    suppSub:       'Если проект оказался полезным — можно отправить донат в сети TON (адрес ниже, клик копирует):',
    suppOr:        'или',
    suppCheck:     'Скриншот перевода можно направить в Telegram: <a class="support-check-link" href="https://t.me/Alexander_Weronka" target="_blank" rel="noopener">@Alexander_Weronka</a> или <a class="support-check-link" href="https://t.me/AlexanderLapshakov" target="_blank" rel="noopener">@AlexanderLapshakov</a>',
    walletCopy:    'нажми чтобы скопировать',
    walletCopied:  'скопировано',
    madeBy:        'Сообщество:',
    suppBtnLabel:  'Поддержка',
    settBtnLabel:  'Настройки',

    authorBioDm1: '<strong>digitalmole79</strong> — канал и площадка для энтузиастов, которым интересны информационная безопасность, пентест, OSINT и всё, что рядом: разборы, дискуссии, практика без лишнего шума. Канал ведётся стабильно — <a class="inline-link" href="https://t.me/digitalmole79" target="_blank" rel="noopener">Telegram</a>, ссылка-переход: <a class="inline-link" href="https://t.me/digitalmole79" target="_blank" rel="noopener">t.me/digitalmole79</a>.',
    authorBioDm2: 'Каталог <strong>OSINT Arsenal</strong> — удобная точка входа: основной список инструментов на вкладке «Инструменты», расширенная база — для «Случайный», плюс методики, ресурсы и практика. Предложения и баги лучше писать в Telegram одному из авторов.',
    authorPeopleHtml: '<p><strong>Alexander Weronka</strong> — соавтор проекта. Связь в Telegram: <a class="inline-link" href="https://t.me/Alexander_Weronka" target="_blank" rel="noopener">@Alexander_Weronka</a></p><p><strong>Alexander Lapshakov</strong> — соавтор проекта. Telegram: <a class="inline-link" href="https://t.me/AlexanderLapshakov" target="_blank" rel="noopener">@AlexanderLapshakov</a>. Короткие видео: <a class="inline-link" href="https://www.tiktok.com/@alexanderlpsh?_r=1&amp;_t=ZS-95332MCRK6R" target="_blank" rel="noopener">TikTok @alexanderlpsh</a></p><p>Обратная связь по инструментам и интерфейсу — в личку в Telegram.</p>',
    authorAboutHtml: '<p><strong>OSINT Arsenal</strong> — каталог инструментов для разведки по открытым источникам, пентеста и цифровой криминалистики. Задача — одна точка входа: отфильтровать шум и оставить то, с чем реально работают.</p><p>Материалы подходят тем, кто только начинает, и тем, кто уже делает разведку или тесты по согласованию — важно помнить про законность и этику.</p>',
    disclaimerHtml: '<p>Все инструменты перечислены в <strong>учебных и легитимных целях</strong>: авторизованное тестирование, исследование безопасности, учёба и защита своих систем. Использование вне рамок закона — ваша зона ответственности; авторы не участвуют в таких сценариях.</p>',
  },

  en: {
    /* Nav */
    navTools:     'Tools',
    navRandom:    'Random',
    navInfo:      'Knowledge',
    navPractice:  'Practice',
    navResources: 'Resources',
    navAuthor:    'About',

    /* Tools page */
    toolsEye:   'Collection',
    toolsTitle: 'Tool Arsenal',
    toolsSub:   'Curated catalog on this tab. The Random tab draws from an extended pool.',
    searchPlaceholder: 'Search tools...',
    emptyState: 'Nothing found for',
    countChipPartial: 'Showing {n} of {total}',
    countChipFull: 'All {total} in catalog',

    /* Random tool */
    todEye:     'Random pick',
    todTitle:   'Tool of the Day',
    todSub:     'Each pick comes from the extended database with a full write-up; the Tools tab lists only the main catalog.',
    todPoolNote: 'Random pool: {pool} entries. Main catalog: {main} tools.',
    todLabel:   'Random pick',
    randomPoolBadgeTitle: 'Entries in the extended pool for this tab',
    todHistory: 'Already shown',
    histEmpty:  'History will appear after a few switches.',

    /* Info */
    infoEye:   'Knowledge',
    infoTitle: 'OSINT Methods',
    infoSub:   'Detailed guides — from email lookup to infrastructure reconnaissance.',

    /* Practice */
    pracEye:   'Training',
    pracTitle: 'Practice',
    pracSub:   'Platforms and challenges for practicing intelligence skills.',
    chalEye:   'Challenges',
    chalTitle: 'Quick Challenges',

    /* Resources */
    resEye:   'Library',
    resTitle: 'Resources',
    resSub:   'Channels, books, podcasts and communities for learning OSINT.',

    /* Author */
    authorEye:    'Project',
    authorTitle:  'About',
    authorSub:    'digitalmole79 channel, authors, and how to reach us.',
    authorStatsTitle: 'Stats',
    statLabelCatalog: 'in main catalog',
    statLabelDb: 'in random pool',
    statLabelCats: 'categories',
    statLabelTopics: 'knowledge topics',

    /* Buttons */
    btnOpen: 'Open',
    btnNext: 'Another tool',

    /* Levels */
    lvlBeg: 'Beginner', lvlMid: 'Intermediate', lvlAdv: 'Advanced',
    lvlEasy: 'Easy', lvlMed: 'Medium', lvlHard: 'Hard',

    /* Challenges */
    chal1Name: 'Find company emails',
    chal1Desc: 'Use Hunter.io and theHarvester to find employee email addresses of a specific organization. Document your methodology.',
    chal2Name: 'Geolocate a photo',
    chal2Desc: 'Given an image, determine the country, city and street using EXIF data and visual clues.',
    chal3Name: 'Map domain infrastructure',
    chal3Desc: 'Find all subdomains, IP addresses, open ports and technologies of a target domain.',

    /* Practice platforms */
    pracTHM:   'Interactive OSINT rooms right in the browser. Perfect for beginners.',
    pracHTB:   'Real machines and OSINT challenges. Dedicated OSINT challenges section.',
    pracCTF:   'CTF competition aggregator from around the world — many contain OSINT tracks.',
    pracGeo:   'Guess locations from Street View — trains geolocation OSINT skills.',
    pracTrace: 'OSINT CTF with a real purpose — finding missing persons. Serious experience.',
    pracTrain: 'Courses and training tasks for OSINT analysts of all levels.',

    /* Resources */
    resMindset:       'Current tools, case studies and methodologies from practicing specialists.',
    resBell:          'Famous investigative outlet. Investigations and educational materials.',
    resAwesome:       'Huge list of OSINT resources, tools and methodologies on GitHub.',
    resOsintFramework:'Interactive map of all OSINT tools by category. The indispensable starting point.',
    resNahamSec:      'YouTube channel of one of the best bug bounty hunters. Recon and bug bounty tutorials.',
    resOsintPodcast:  'Podcast by Michael Bazzell — leading OSINT expert. Techniques, tools, real-world cases.',
    resChecklists:    'Checklists for OSINT investigations: people, email, social media and infrastructure.',
    resOsintCurious:  'Educational content from OSINT Curious — an active community of OSINT researchers.',
    resApiLeaks:      'Guide to finding API key leaks in open sources and tools for verification.',
    resOsintTeam:     'Telegram community of OSINT specialists. Tools, cases, recon methods.',
    resHackTricks:    'Encyclopedia of hacking techniques: web, networks, Active Directory, OSINT and more.',
    resPayloads:      'The most comprehensive collection of payloads and bypass techniques.',
    resRedditOsint:   'Reddit community for OSINT enthusiasts. Questions, tools, case studies, news.',
    resTraceLabs:     'NGO using OSINT to find missing persons. CTF competitions with real targets.',
    resOsintStuff:    'Massive OSINT tool collection by Cipher387. Regularly updated.',

    /* Settings / Support */
    settTitle:     'Settings',
    settLangLabel: 'Language',
    settThemeLabel:'Theme',
    suppTitle:     'Support',
    suppSub:       'If the project helped you — a TON transfer is welcome (click address to copy):',
    suppOr:        'or',
    suppCheck:     'You can send a screenshot to Telegram: <a class="support-check-link" href="https://t.me/Alexander_Weronka" target="_blank" rel="noopener">@Alexander_Weronka</a> or <a class="support-check-link" href="https://t.me/AlexanderLapshakov" target="_blank" rel="noopener">@AlexanderLapshakov</a>',
    walletCopy:    'click to copy',
    walletCopied:  'copied',
    madeBy:        'Community:',
    suppBtnLabel:  'Support',
    settBtnLabel:  'Settings',

    authorBioDm1: '<strong>digitalmole79</strong> is a channel and community for people into infosec, pentesting, OSINT and related topics — tool breakdowns and practice without noise. Active <a class="inline-link" href="https://t.me/digitalmole79" target="_blank" rel="noopener">Telegram</a>: <a class="inline-link" href="https://t.me/digitalmole79" target="_blank" rel="noopener">t.me/digitalmole79</a>.',
    authorBioDm2: '<strong>OSINT Arsenal</strong> is a practical entry point: the main tool list on Tools, a larger pool for Random, plus methods, resources and practice. Suggestions and bug reports are best sent in Telegram to one of the authors.',
    authorPeopleHtml: '<p><strong>Alexander Weronka</strong> — co-author. Telegram: <a class="inline-link" href="https://t.me/Alexander_Weronka" target="_blank" rel="noopener">@Alexander_Weronka</a></p><p><strong>Alexander Lapshakov</strong> — co-author. Telegram: <a class="inline-link" href="https://t.me/AlexanderLapshakov" target="_blank" rel="noopener">@AlexanderLapshakov</a>. Short videos: <a class="inline-link" href="https://www.tiktok.com/@alexanderlpsh?_r=1&amp;_t=ZS-95332MCRK6R" target="_blank" rel="noopener">TikTok @alexanderlpsh</a></p><p>Feedback on tools and the UI — Telegram DM.</p>',
    authorAboutHtml: '<p><strong>OSINT Arsenal</strong> is a curated catalog for open-source intelligence, pentesting and digital forensics — one entry point with less noise.</p><p>Use the materials lawfully and ethically, including for authorized testing and learning.</p>',
    disclaimerHtml: '<p>Tools are listed for <strong>education and legitimate use</strong>: authorized testing, security research, learning, and protecting your own systems. Misuse is on you; the authors do not assist with illegal activity.</p>',
  }
};
