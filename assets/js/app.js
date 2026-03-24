// i18n strings
const i18n = {
  ru: {
    navTools:'Инструменты', navRandom:'Случайный инструмент', navInfo:'Полезная информация',
    navPractice:'Практика', navResources:'Ресурсы',
    toolsEye:'Коллекция', toolsTitle:'OSINT Инструменты',
    toolsSub:'Подборка инструментов для разведки по открытым источникам.',
    todEye:'Рандом', todTitle:'Случайный инструмент',
    todSub:'Каждый раз — малоизвестный OSINT-инструмент с подробным описанием.',
    todLabel:'Случайный выбор', todHistory:'Уже показанные',
    infoEye:'База знаний', infoTitle:'Полезная информация',
    infoSub:'Подробные руководства по методам OSINT — от поиска по email до разведки инфраструктуры.',
    pracEye:'Тренировка', pracTitle:'Практика OSINT',
    pracSub:'Платформы и задания для отработки навыков разведки на реальных или тренировочных данных.',
    resEye:'Библиотека', resTitle:'Ресурсы',
    resSub:'Книги, каналы, подкасты и сообщества для изучения OSINT.',
    btnOpen:'Открыть', btnNext:'Другой инструмент',
    catAll:'Все', catNet:'Сеть', catSocial:'Соцсети', catGeo:'Гео',
    catPeople:'Люди', catEmail:'Email', catImage:'Изображения',
    lvlBeg:'Начальный', lvlMid:'Средний', lvlAdv:'Продвинутый',
    lvlEasy:'Лёгкое', lvlMed:'Среднее', lvlHard:'Сложное',
    chalEye:'Задания', chalTitle:'Быстрые задания',
    chal1Name:'Найди email компании',
    chal1Desc:'Используй Hunter.io и theHarvester чтобы найти email-адреса сотрудников конкретной организации. Задокументируй методологию.',
    chal2Name:'Определи геолокацию по фото',
    chal2Desc:'По заданному изображению определи страну, город и улицу — EXIF и визуальные подсказки.',
    chal3Name:'Раскрой инфраструктуру домена',
    chal3Desc:'Найди все поддомены, IP-адреса, открытые порты и технологии целевого домена.',
    pracTHM:'Интерактивные комнаты с OSINT-заданиями прямо в браузере. Идеально для старта.',
    pracHTB:'Реальные машины и OSINT-задачи. Специальный раздел OSINT challenges.',
    pracCTF:'Агрегатор CTF-соревнований со всего мира — многие содержат OSINT-треки.',
    pracGeo:'Угадывание мест по Street View — прокачивает геолокационный OSINT.',
    pracTrace:'OSINT CTF с реальной целью — поиск пропавших без вести. Серьёзный опыт.',
    pracTrain:'Курсы и тренировочные задания для OSINT-аналитиков всех уровней.',
    resMindset:'Актуальные инструменты, кейсы и методики от практикующих специалистов.',
    resBell:'Знаменитое следственное издание. Расследования и обучающие материалы.',
    resAwesome:'Огромный список OSINT-ресурсов, инструментов и методик на GitHub.',
    resOsintFramework:'Интерактивная карта всех OSINT-инструментов и ресурсов, организованная по категориям. Незаменимая точка отсчёта.',
    resNahamSec:'YouTube-канал одного из лучших багхантеров. Обучающие видео по веб-безопасности, recon и bug bounty.',
    resOsintPodcast:'Подкаст Майкла Баззела — одного из ведущих OSINT-экспертов. Техники, инструменты, реальные кейсы.',
    resChecklists:'Подборка чек-листов для OSINT-расследований: по людям, организациям, email, соцсетям и инфраструктуре.',
    resOsintCurious:'Обучающие материалы и видео от OSINT Curious — активного сообщества OSINT-исследователей.',
    resApiLeaks:'Руководство по поиску утечек API-ключей в открытых источниках и инструменты для их проверки.',
    resOsintTeam:'Telegram-сообщество OSINT-специалистов. Инструменты, кейсы, обсуждения методов разведки.',
    resHackTricks:'Энциклопедия хакерских техник и методологий. Охватывает веб, сети, Active Directory, OSINT и многое другое.',
    resPayloads:'Самая полная коллекция полезных нагрузок и техник обхода защит. Незаменимый справочник.',
    resRedditOsint:'Сообщество Reddit для OSINT-энтузиастов. Вопросы, инструменты, кейсы, новости со всего мира.',
    resTraceLabs:'НКО использующая OSINT для поиска пропавших без вести. CTF-соревнования с реальными целями.',
    resOsintStuff:'Масштабная коллекция OSINT-инструментов, сервисов и методов от Cipher387. Обновляется регулярно.',
    settTitle:'⚙️ Настройки', settLangLabel:'Язык', settThemeLabel:'Тема',
    suppTitle:'💎 Поддержка',
    suppSub:'Если проект оказался полезным — можно поддержать автора криптовалютой в сети TON:',
    suppOr:'— или —',
    suppCheck:'Кидайте чеки <a class="support-check-link" href="https://t.me/Alexander_Weronka" target="_blank">@Alexander_Weronka</a> ❤️',
    walletCopy:'нажми чтобы скопировать', walletCopied:'✓ скопировано',
    madeBy:'Создано:', suppBtnLabel:'Поддержка', settBtnLabel:'Настройки',
    searchPlaceholder:'Поиск инструмента...',
    histEmpty:'История появится после нескольких переключений.',
    emptyState:'Ничего не найдено по',
  },
  en: {
    navTools:'Tools', navRandom:'Random Tool', navInfo:'Knowledge Base',
    navPractice:'Practice', navResources:'Resources',
    toolsEye:'Collection', toolsTitle:'OSINT Tools',
    toolsSub:'A curated collection of open-source intelligence tools.',
    todEye:'Random', todTitle:'Random Tool',
    todSub:'Every time — a lesser-known OSINT tool with a detailed description.',
    todLabel:'Random pick', todHistory:'Already shown',
    infoEye:'Knowledge', infoTitle:'Knowledge Base',
    infoSub:'Detailed guides on OSINT methods — from email lookup to infrastructure recon.',
    pracEye:'Training', pracTitle:'OSINT Practice',
    pracSub:'Platforms and tasks for practicing intelligence skills on real or training data.',
    resEye:'Library', resTitle:'Resources',
    resSub:'Books, channels, podcasts and communities for learning OSINT.',
    btnOpen:'Open', btnNext:'Another tool',
    catAll:'All', catNet:'Network', catSocial:'Social', catGeo:'Geo',
    catPeople:'People', catEmail:'Email', catImage:'Images',
    lvlBeg:'Beginner', lvlMid:'Intermediate', lvlAdv:'Advanced',
    lvlEasy:'Easy', lvlMed:'Medium', lvlHard:'Hard',
    chalEye:'Challenges', chalTitle:'Quick Challenges',
    chal1Name:'Find company emails',
    chal1Desc:'Use Hunter.io and theHarvester to find employee email addresses of a specific organization. Document your methodology.',
    chal2Name:'Geolocate a photo',
    chal2Desc:'Given an image, determine the country, city and street using EXIF data and visual clues.',
    chal3Name:'Map domain infrastructure',
    chal3Desc:'Find all subdomains, IP addresses, open ports and technologies of a target domain.',
    pracTHM:'Interactive OSINT rooms right in the browser. Perfect for beginners.',
    pracHTB:'Real machines and OSINT challenges. Dedicated OSINT challenges section.',
    pracCTF:'Aggregator of CTF competitions worldwide — many contain OSINT tracks.',
    pracGeo:'Guess locations from Street View — trains geolocation OSINT skills.',
    pracTrace:'OSINT CTF with a real purpose — finding missing persons. Serious experience.',
    pracTrain:'Courses and training tasks for OSINT analysts of all levels.',
    resMindset:'Current tools, case studies and methodologies from practicing specialists.',
    resBell:'Famous investigative outlet. Investigations and educational materials.',
    resAwesome:'Huge list of OSINT resources, tools and methodologies on GitHub.',
    resOsintFramework:'Interactive map of all OSINT tools and resources organized by category. The indispensable starting point.',
    resNahamSec:'YouTube channel of one of the best bug bounty hunters. Tutorials on web security, recon and bug bounty.',
    resOsintPodcast:'Podcast by Michael Bazzell — one of the leading OSINT experts. Techniques, tools, real-world cases.',
    resChecklists:'Collection of checklists for OSINT investigations: people, organizations, email, social media and infrastructure.',
    resOsintCurious:'Educational content and videos from OSINT Curious — an active community of OSINT researchers.',
    resApiLeaks:'Guide to finding API key leaks in open sources and tools for verifying exposed keys.',
    resOsintTeam:'Telegram community of OSINT specialists. Tools, case studies, discussions of reconnaissance methods.',
    resHackTricks:'Encyclopedia of hacking techniques and methodologies. Covers web, networks, Active Directory, OSINT and much more.',
    resPayloads:'The most comprehensive collection of payloads and bypass techniques. An indispensable reference.',
    resRedditOsint:'Reddit community for OSINT enthusiasts. Questions, tools, case studies, news from around the world.',
    resTraceLabs:'NGO using OSINT to find missing persons. CTF competitions with real targets and real impact.',
    resOsintStuff:'Massive collection of OSINT tools, services and methods by Cipher387. Regularly updated.',
    settTitle:'⚙️ Settings', settLangLabel:'Language', settThemeLabel:'Theme',
    suppTitle:'💎 Support',
    suppSub:'If the project was useful — you can support the author with crypto on the TON network:',
    suppOr:'— or —',
    suppCheck:'Send receipts to <a class="support-check-link" href="https://t.me/Alexander_Weronka" target="_blank">@Alexander_Weronka</a> ❤️',
    walletCopy:'click to copy', walletCopied:'✓ copied',
    madeBy:'Made by:', suppBtnLabel:'Support', settBtnLabel:'Settings',
    searchPlaceholder:'Search tools...',
    histEmpty:'History will appear after a few switches.',
    emptyState:'Nothing found for',
  }
};


let currentLang = localStorage.getItem('osint_lang') || null;

// LANGUAGE
function setLang(lang, fromSettings = false) {
  currentLang = lang;
  localStorage.setItem('osint_lang', lang);
  document.getElementById('langScreen').classList.add('hidden');
  applyLang();
  if (fromSettings) {
    document.getElementById('btnLangRu').classList.toggle('active', lang === 'ru');
    document.getElementById('btnLangEn').classList.toggle('active', lang === 'en');
  }
  renderTools();
  renderInfo();
}

function applyLang() {
  const t = i18n[currentLang] || i18n.ru;
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.getElementById('searchInput').placeholder = t.searchPlaceholder;
  document.getElementById('settTitle').textContent = t.settTitle;
  document.getElementById('settLangLabel').textContent = t.settLangLabel;
  document.getElementById('settThemeLabel').textContent = t.settThemeLabel;
  document.getElementById('suppTitle').textContent = t.suppTitle;
  document.getElementById('suppSub').textContent = t.suppSub;
  document.getElementById('suppOr').textContent = t.suppOr;
  document.getElementById('suppCheck').innerHTML = t.suppCheck;
  document.getElementById('walletCopyHint').textContent = t.walletCopy;
  document.getElementById('madeBy').textContent = t.madeBy;
  document.getElementById('suppBtnLabel').textContent = t.suppBtnLabel;
  document.getElementById('settBtnLabel').textContent = t.settBtnLabel;
}

// THEME
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('osint_theme', theme);
  document.getElementById('btnDark').classList.toggle('active', theme === 'dark');
  document.getElementById('btnLight').classList.toggle('active', theme === 'light');
}


// SETTINGS
function openSettings() {
  document.getElementById('settingsOverlay').classList.add('open');
  const t = document.documentElement.getAttribute('data-theme');
  document.getElementById('btnDark').classList.toggle('active', t === 'dark');
  document.getElementById('btnLight').classList.toggle('active', t === 'light');
  document.getElementById('btnLangRu').classList.toggle('active', currentLang === 'ru');
  document.getElementById('btnLangEn').classList.toggle('active', currentLang === 'en');
}
function closeSettings() { document.getElementById('settingsOverlay').classList.remove('open'); }

// SUPPORT
function openSupport() { document.getElementById('supportOverlay').classList.add('open'); }
function closeSupport() { document.getElementById('supportOverlay').classList.remove('open'); }

function copyWallet(el, addr) {
  navigator.clipboard.writeText(addr).then(() => {
    const hint = document.getElementById('walletCopyHint');
    const t = i18n[currentLang] || i18n.ru;
    hint.textContent = t.walletCopied;
    el.style.borderColor = 'var(--accent)';
    setTimeout(() => { hint.textContent = t.walletCopy; el.style.borderColor = ''; }, 2000);
  });
}

document.getElementById('settingsOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeSettings(); });
document.getElementById('supportOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeSupport(); });

// TOOLS DATA (20 main)
const tools = [
  { id:1,  name:'Maltego',         url:'https://maltego.com',                          icon:'🕸️', tags:['graph','network'],   cat:'network', type:'Desktop',  desc:{ru:'Инструмент для визуального анализа связей между объектами — людьми, доменами, IP-адресами и организациями. Используется аналитиками для построения графов взаимосвязей при расследованиях.', en:'Tool for visual link analysis between objects — people, domains, IPs and organizations. Used by analysts to build relationship graphs during investigations.'} },
  { id:2,  name:'Shodan',          url:'https://shodan.io',                            icon:'🔍', tags:['iot','scan'],         cat:'network', type:'Web API',  desc:{ru:'Поисковик по устройствам подключённым к интернету: серверы, камеры, роутеры, промышленное оборудование. Позволяет найти открытые порты и уязвимые сервисы по всему миру.', en:'Search engine for internet-connected devices: servers, cameras, routers, industrial equipment. Find open ports and vulnerable services worldwide.'} },
  { id:3,  name:'theHarvester',    url:'https://github.com/laramies/theHarvester',     icon:'🌾', tags:['emails','dns'],       cat:'email',   type:'CLI',      desc:{ru:'Сбор email-адресов, поддоменов, имён сотрудников и IP из открытых источников: Google, Bing, LinkedIn, Shodan. Стандартный инструмент для разведки по домену.', en:'Collect emails, subdomains, employee names and IPs from open sources: Google, Bing, LinkedIn, Shodan. Standard domain recon tool.'} },
  { id:4,  name:'SpiderFoot',      url:'https://spiderfoot.net',                       icon:'🕷️', tags:['automation','recon'], cat:'network', type:'Web',      desc:{ru:'Автоматизированный OSINT-фреймворк с 200+ модулями. Собирает данные по IP, домену, email, строит карту связей.', en:'Automated OSINT framework with 200+ modules. Collects data on IPs, domains, emails, builds relationship maps.'} },
  { id:5,  name:'Recon-ng',        url:'https://github.com/lanmaster53/recon-ng',      icon:'🛰️', tags:['framework','recon'],  cat:'network', type:'CLI',      desc:{ru:'Модульный фреймворк для разведки в стиле Metasploit с маркетплейсом модулей и встроенной базой данных.', en:'Modular recon framework in Metasploit style with module marketplace and built-in database.'} },
  { id:6,  name:'Sherlock',        url:'https://github.com/sherlock-project/sherlock', icon:'🔎', tags:['username','social'],  cat:'social',  type:'CLI',      desc:{ru:'Поиск аккаунтов по никнейму на 400+ платформах одновременно. Результаты с прямыми ссылками на профили.', en:'Search accounts by username on 400+ platforms simultaneously. Results include direct profile links.'} },
  { id:7,  name:'Twint',           url:'https://github.com/twintproject/twint',        icon:'🐦', tags:['twitter','scraping'], cat:'social',  type:'CLI',      desc:{ru:'Скрапер Twitter без API-ключа. Собирает твиты, подписчиков, геолокации и упоминания по заданным фильтрам.', en:'Twitter scraper without API key. Collects tweets, followers, geolocations and mentions by filters.'} },
  { id:8,  name:'GeoSpy',          url:'https://geospy.ai',                            icon:'📍', tags:['geolocation'],        cat:'geo',     type:'Web',      desc:{ru:'Определение геолокации по фотографии через визуальный анализ архитектуры, растительности и других признаков.', en:'Geolocation from photos via visual analysis of architecture, vegetation and other clues.'} },
  { id:9,  name:'ExifTool',        url:'https://exiftool.org',                         icon:'📷', tags:['metadata','exif'],    cat:'image',   type:'CLI',      desc:{ru:'Чтение метаданных файлов. Из фото извлекает GPS-координаты, модель камеры, дату съёмки.', en:'Read file metadata. Extracts GPS coordinates, camera model, capture date from photos.'} },
  { id:10, name:'Hunter.io',       url:'https://hunter.io',                            icon:'✉️', tags:['email','verify'],     cat:'email',   type:'Web',      desc:{ru:'Поиск и верификация корпоративных email по домену. Показывает формат адресов и найденные контакты.', en:'Find and verify corporate emails by domain. Shows address format and found contacts.'} },
  { id:11, name:'Censys',          url:'https://censys.io',                            icon:'🌐', tags:['network','certs'],    cat:'network', type:'Web API',  desc:{ru:'Поисковик по интернет-инфраструктуре с акцентом на TLS-сертификаты и открытые порты.', en:'Internet infrastructure search engine focused on TLS certificates and open ports.'} },
  { id:12, name:'Pipl',            url:'https://pipl.com',                             icon:'🧑', tags:['identity','search'],  cat:'people',  type:'Web API',  desc:{ru:'Поиск информации о людях по имени, email, телефону. Агрегирует данные из социальных сетей и публичных реестров.', en:'Search people by name, email, phone. Aggregates data from social networks and public registries.'} },
  { id:13, name:'IntelTechniques', url:'https://inteltechniques.com',                  icon:'🧠', tags:['search','osint'],     cat:'people',  type:'Web',      desc:{ru:'Сборник OSINT-инструментов и поисковых форм для поиска по людям, телефонам, email и социальным сетям.', en:'Collection of OSINT tools and search forms for people, phones, emails and social networks.'} },
  { id:14, name:'TinEye',          url:'https://tineye.com',                           icon:'👁️', tags:['reverse image'],      cat:'image',   type:'Web',      desc:{ru:'Обратный поиск изображений — находит где ещё встречается данная фотография в интернете.', en:'Reverse image search — finds where else this photo appears on the internet.'} },
  { id:15, name:'Pimeyes',         url:'https://pimeyes.com',                          icon:'😶', tags:['face','reverse'],      cat:'image',   type:'Web',      desc:{ru:'Поиск лиц по фотографии в открытом интернете. Находит совпадения на сайтах и в социальных сетях.', en:'Face search in the open internet. Finds matches on websites and social networks.'} },
  { id:16, name:'Whoxy',           url:'https://whoxy.com',                            icon:'🏷️', tags:['whois','domain'],      cat:'network', type:'Web API',  desc:{ru:'WHOIS-поиск и обратный WHOIS. Находит все домены зарегистрированные на конкретного человека.', en:'WHOIS search and reverse WHOIS. Finds all domains registered to a specific person.'} },
  { id:17, name:'Phonebook.cz',    url:'https://phonebook.cz',                         icon:'📒', tags:['email','domain'],     cat:'email',   type:'Web',      desc:{ru:'Поиск email-адресов, доменов и URL по ключевому слову. Использует данные из утечек и публичных источников.', en:'Search emails, domains and URLs by keyword. Uses breach data and public sources.'} },
  { id:18, name:'Social Mapper',   url:'https://github.com/Greenwolf/social_mapper',   icon:'🗂️', tags:['face','mapping'],      cat:'social',  type:'CLI',      desc:{ru:'Поиск профилей человека в социальных сетях по фото и имени с использованием распознавания лиц.', en:'Search person profiles on social networks by photo and name using face recognition.'} },
  { id:19, name:'Metagoofil',      url:'https://github.com/laramies/metagoofil',       icon:'📄', tags:['metadata','docs'],     cat:'network', type:'CLI',      desc:{ru:'Извлечение метаданных из публичных документов найденных через Google: имена пользователей, пути к файлам.', en:'Extract metadata from public documents found via Google: usernames, file paths.'} },
  { id:20, name:'OSINT Framework', url:'https://osintframework.com',                   icon:'📡', tags:['directory'],           cat:'people',  type:'Web',      desc:{ru:'Интерактивное дерево OSINT-инструментов сгруппированных по категориям. Отличная точка входа.', en:'Interactive tree of OSINT tools grouped by category. Great starting point.'} },
];

// INFO TOPICS
const infoTopics = {
  ru: [
    {
      icon:'📧', title:'Поиск по email-адресу', sub:'Email → личность', badge:'МЕТОД',
      body:`<p>Email-адрес — один из самых ценных идентификаторов в OSINT. Начните с базовой проверки через <strong>Hunter.io</strong> или <strong>Emailrep.io</strong> — эти сервисы покажут с какими доменами связан адрес, насколько он активен, есть ли публичные профили. Далее введите email в Google в кавычках: <em>"user@example.com"</em> — поисковик найдёт все публичные упоминания адреса на форумах, сайтах, в документах.</p>

<p>Инструмент <strong>Holehe</strong> использует нестандартный но очень эффективный подход: он проверяет форму "Забыл пароль" на 120+ сервисах. Это позволяет узнать на каких платформах зарегистрирован человек — Instagram, Twitter, Amazon, Spotify, Adobe — без отправки реального запроса на восстановление. Пользователь не получает никаких уведомлений, а вы получаете список активных сервисов.</p>

<p>Проверка в базах утечек — обязательный шаг. <strong>HaveIBeenPwned</strong> содержит данные из сотен утечек. Если email есть в базах — вы узнаете из каких именно утечек и что могло быть скомпрометировано (пароль, имя, телефон). Инструменты <strong>h8mail</strong> и <strong>WhatBreach</strong> агрегируют несколько источников утечек одновременно.</p>

<p>Если email корпоративный — по домену можно найти коллег через <strong>theHarvester</strong> или <strong>Phonebook.cz</strong>. WHOIS домена иногда содержит контактные данные владельца. Поиск по части адреса до @ через Sherlock может найти аккаунты с совпадающим никнеймом. PGP-серверы (keys.openpgp.org) часто содержат реальные имена и дополнительные email связанные с основным адресом.</p>

<p>Не забудьте проверить социальные сети напрямую: в Facebook, LinkedIn, Twitter можно искать по email напрямую или через форму входа узнать привязан ли аккаунт. Google также индексирует профили привязанные к email — поиск по адресу может выдать Google Maps профили, YouTube-каналы и другие Google-сервисы человека.</p>`
    },
    {
      icon:'📱', title:'Разведка по номеру телефона', sub:'Телефон → данные', badge:'МЕТОД',
      body:`<p>Разведка по номеру телефона начинается с базовой верификации. Определите страну и оператора через онлайн-сервисы типа <strong>NumLookup</strong>, <strong>PhoneInfoga</strong> или <strong>Sync.me</strong>. PhoneInfoga — специализированный OSINT-инструмент который не только определяет оператора, но и ищет номер через несколько поисковых движков одновременно, проверяет в открытых каталогах и телефонных книгах. Введите номер в Google в разных форматах: с кодом страны, через пробел, дефис, в скобках.</p>

<p>Мессенджеры — золотая жила данных. В <strong>Telegram</strong> можно напрямую добавить номер в контакты и увидеть профиль если человек разрешил поиск по номеру. В <strong>WhatsApp</strong> достаточно сохранить контакт и открыть диалог — сразу виден аватар и статус. В <strong>Viber</strong> поиск работает аналогично. Через <strong>Signal</strong> можно проверить есть ли регистрация, хотя профиль не отображается.</p>

<p><strong>GetContact</strong> и <strong>TrueCaller</strong> — особенно ценные источники. Они показывают как номер записан в телефонных книгах других пользователей их приложений. Это часто раскрывает реальное имя, должность, название компании — именно так люди сохранили этот контакт. Бывает что один номер записан по-разному у разных людей что само по себе информативно.</p>

<p>Поиск в утечках: многие базы данных утечек содержат номера телефонов привязанные к email, именам, паролям. Инструменты <strong>Snusbase</strong>, <strong>IntelX</strong> и <strong>Phonebook.cz</strong> позволяют искать по номеру. Социальные сети также стоит проверить — Facebook, ВКонтакте, Instagram позволяли регистрацию по телефону и иногда раскрывают профили через форму восстановления доступа.</p>

<p>Расширенные методы: проверьте номер в <strong>Skype</strong> (поиск в приложении по номеру), в системах онлайн-доставки (иногда номер можно найти в отзывах), на сайтах знакомств, в объявлениях на Avito/OLX. Если номер принадлежит бизнесу — Google Maps, Яндекс.Карты, 2ГИС покажут связанную организацию. Автоматизировать весь процесс поможет инструмент <strong>Ignorant</strong> — аналог Holehe но для телефонных номеров.</p>`
    },
    {
      icon:'🖼️', title:'Обратный поиск по фотографии', sub:'Фото → личность', badge:'МЕТОД',
      body:`<p>Обратный поиск изображений — один из мощнейших методов OSINT. Используйте <strong>несколько поисковиков одновременно</strong> так как их базы существенно различаются. <strong>Google Images</strong> (lens.google.com) отлично находит точные совпадения и похожие изображения. <strong>Yandex Images</strong> — лидер по распознаванию лиц, особенно эффективен для людей из СНГ. <strong>Bing Visual Search</strong> дополняет предыдущие. <strong>TinEye</strong> специализируется на точных совпадениях и показывает когда фото впервые появилось в интернете и как распространялось.</p>

<p>Для идентификации людей по лицу используйте специализированные инструменты. <strong>Pimeyes</strong> сканирует открытый интернет и находит лица на разных сайтах и в социальных сетях — результаты могут быть впечатляющими. <strong>FaceCheck.id</strong> ищет в социальных сетях. <strong>Search4Faces</strong> специализируется на ВКонтакте и OK.ru. <strong>FindFace</strong> был закрыт, но его аналоги продолжают появляться. Важно помнить об этических и правовых аспектах использования facial recognition.</p>

<p>EXIF-метаданные — первое что нужно проверить. Используйте <strong>ExifTool</strong>, Jeffrey's Exif Viewer (онлайн) или просто правый клик → Свойства в Windows. GPS-координаты в EXIF дают точное местоположение съёмки. Дата и время помогают строить временную линию. Модель камеры может совпадать с другими фотографиями человека. Однако большинство социальных сетей (Instagram, Facebook, Twitter) автоматически удаляют EXIF при загрузке — это защита приватности.</p>

<p>Если EXIF пуст — анализируйте визуальные подсказки. <strong>Надписи и вывески</strong>: язык, шрифты, логотипы местных брендов. <strong>Архитектура</strong>: стиль зданий характерен для определённых регионов и эпох. <strong>Растительность</strong>: пальмы vs хвойные деревья сразу указывают на климатическую зону. <strong>Транспорт</strong>: форма и цвет такси, трамваев, автобусов уникальны для городов. <strong>Номерные знаки</strong>: дизайн и буквы указывают на страну и регион. <strong>Дорожные знаки</strong>: форма, цвет, язык. Инструмент <strong>GeoSpy</strong> автоматизирует часть этого анализа.</p>

<p>Для верификации найденного местоположения используйте <strong>Google Street View</strong> и <strong>Google Maps</strong>. Найдите характерное здание или перекрёсток и сравните с фото. <strong>SunCalc</strong> поможет определить направление по тени от солнца и подтвердить или опровергнуть предполагаемую локацию по времени суток. Инструменты типа <strong>GeoEstimator</strong> и соревнования на GeoGuessr прокачивают навык визуальной геолокации.</p>`
    },
    {
      icon:'📍', title:'Геолокация по фото/видео', sub:'Медиа → место', badge:'МЕТОД',
      body:`<p>Геолокация медиаконтента — сочетание технического анализа и детективной работы. Первый шаг всегда одинаков: <strong>проверьте EXIF-метаданные</strong> через ExifTool или онлайн-сервис. Если фото не прошло через социальные сети, GPS-координаты могут быть встроены напрямую в файл с точностью до метра. Современные смартфоны по умолчанию записывают геолокацию — многие люди не знают об этом.</p>

<p>Если EXIF недоступен — начинается визуальная разведка. Разбейте изображение на компоненты. <strong>Текст и языки:</strong> любая надпись на родном языке — мощная зацепка. Кириллица сразу указывает на постсоветское пространство, арабское письмо на Ближний Восток и Северную Африку. Переведите текст и ищите конкретные названия. <strong>Бренды и логотипы:</strong> местные бренды которые есть только в определённых странах или регионах. <strong>Валюта и цены:</strong> если видны ценники — символ валюты и ценообразование указывают на страну.</p>

<p>Анализ инфраструктуры. <strong>Электрические розетки и выключатели</strong> — у каждой страны свой стандарт. <strong>Дорожное движение:</strong> левостороннее (Великобритания, Австралия, Япония) vs правостороннее. <strong>Цвет и форма пешеходных переходов, дорожных знаков.</strong> <strong>Провода и столбы</strong> — воздушные провода характерны для развивающихся стран, подземная прокладка для развитых. <strong>Архитектурные детали:</strong> характерная кладка кирпича, форма крыш, стиль балконов.</p>

<p>Природные признаки. <strong>Растительность</strong> может указать климатическую зону с высокой точностью — набор видов растений специфичен для регионов. <strong>Горный рельеф:</strong> форма горных массивов хорошо известна геологам и туристам. <strong>Береговая линия:</strong> уникальная форма берегов. <strong>Цвет почвы</strong> (красная земля Австралии, чернозём, песок) — визуальная зацепка. <strong>Звёздное небо</strong> на ночных фото: расположение созвездий указывает на полушарие.</p>

<p>Инструменты верификации: <strong>Google Earth</strong> позволяет виртуально облететь предполагаемый район и найти точку съёмки. <strong>Google Street View</strong> — сравнить конкретную улицу. <strong>SunCalc</strong> — проверить угол тени для подтверждения времени и места. <strong>Wikimapia</strong> содержит информацию о зданиях от местных пользователей. <strong>Mapillary</strong> — ещё один источник уличных фотографий. Для видео используйте отдельные кадры как отдельные фотографии — движение камеры и смена фонов часто даёт несколько точек верификации.</p>`
    },
    {
      icon:'🌐', title:'Разведка по домену', sub:'Домен → инфраструктура', badge:'МЕТОД',
      body:`<p>Разведка по домену начинается с <strong>WHOIS-запроса</strong>. Используйте who.is, Whoxy или ICANN RDAP. WHOIS содержит: дату регистрации (старые домены вызывают меньше подозрений), регистратора, имя и email владельца (часто скрыты через privacy protection), серверы имён. <strong>Обратный WHOIS по email</strong> — один из лучших методов: если email владельца известен, Whoxy покажет ВСЕ домены зарегистрированные на него. Люди часто используют один email для регистрации десятков доменов.</p>

<p>DNS-разведка даёт полную картину инфраструктуры. A-запись: реальный IP сервера. MX-записи: почтовые серверы (часто раскрывают почтового провайдера — Google Workspace, Microsoft 365, собственный сервер). NS-записи: серверы имён. TXT-записи: содержат верификационные коды для Google Search Console, Facebook, различных SaaS-сервисов — это список всех сервисов которыми пользуется организация. SPF-запись говорит с каких IP отправляется почта. DMARC раскрывает политику обработки почты. Используйте <strong>SecurityTrails</strong> для получения исторических DNS-данных — реальный IP за CDN можно найти в исторических записях.</p>

<p>Поиск поддоменов — критически важный этап. Комбинируйте методы: пассивные источники (<strong>crt.sh</strong>, <strong>Subfinder</strong>, <strong>Amass</strong>) и активный DNS-брутфорс (<strong>MassDNS</strong>, <strong>PureDNS</strong>). crt.sh использует логи Certificate Transparency — все выданные SSL-сертификаты регистрируются публично. Wildcard сертификаты (*.example.com) скрывают поддомены, но multi-SAN сертификаты явно перечисляют их. Shodan и Censys также индексируют поддомены через сертификаты. Инструмент <strong>Altdns</strong> генерирует перестановки найденных поддоменов (dev-api, api-dev, staging-api) — часто находит то что другие пропускают.</p>

<p>Анализ веб-сервера: определите технологический стек через <strong>Wappalyzer</strong>, <strong>WhatWeb</strong> или заголовки HTTP. Server, X-Powered-By заголовки раскрывают версии ПО. Cookies часто содержат имена фреймворков (PHPSESSID, JSESSIONID, laravel_session). Wayback Machine (web.archive.org) покажет историю сайта — что было раньше, какие страницы существовали. robots.txt и sitemap.xml могут раскрывать внутреннюю структуру.</p>

<p>Поиск связанных активов: по найденным IP-адресам запросите обратный DNS (ptr-записи). Через Shodan/Censys найдите все другие домены на том же IP — возможно организация хостит несколько сайтов вместе. Анализ SSL-сертификата (openssl s_client -connect) раскрывает все домены в Subject Alternative Names. ASN организации (через BGP.he.net) даёт полный список IP-блоков. GitHub-поиск по домену часто находит репозитории с кодом использующим конфигурацию этого домена.</p>`
    },
    {
      icon:'👤', title:'Поиск по никнейму', sub:'Username → профили', badge:'МЕТОД',
      body:`<p>Поиск по никнейму — один из самых продуктивных методов OSINT когда известен уникальный идентификатор человека. Начните с <strong>Sherlock</strong> — де-факто стандарт для этой задачи. Он проверяет username на 400+ платформах одновременно за минуты. Дополните его <strong>Maigret</strong> — более продвинутый инструмент который не только ищет на 3000+ сайтах, но и рекурсивно собирает данные с найденных профилей, строя граф связей. Обязательно используйте оба инструмента — они имеют разные базы платформ.</p>

<p>Ручная проверка ключевых платформ. <strong>GitHub</strong> — особенно ценный источник: публичные репозитории могут содержать реальное имя автора, рабочий email в коммитах (git log --format='%ae'), местоположение в профиле, ссылки на другие аккаунты. <strong>Reddit</strong>: история постов и комментариев создаёт детальный портрет интересов и взглядов. <strong>Steam</strong>: игровая история, друзья, ссылки на другие профили. <strong>LinkedIn</strong>: если ник совпадает с именем — прямой путь к профессиональной информации. <strong>HackerNews</strong>: технические обсуждения с реальным именем.</p>

<p>Поиск в утечках по никнейму. Многие базы утечек содержат поле "username". Инструменты <strong>Snusbase</strong>, <strong>IntelX</strong>, <strong>DeHashed</strong> позволяют искать по username. Часто находится привязанный email, хэш пароля (по которому можно судить о сложности и паттерне паролей человека), дата регистрации, IP-адрес при регистрации. <strong>WhatsMyName</strong> — проект с обновляемой базой правил для точной проверки: в отличие от Sherlock, он проверяет наличие реального аккаунта, а не просто страницы.</p>

<p>Анализ паттернов и вариаций. Если основной ник не дал результатов — попробуйте вариации: добавление цифр (nick123, nick_1337), замена букв (n1ck, n!ck), добавление подчёркиваний, комбинации с реальным именем. Люди часто используют один и тот же ник с небольшими вариациями на разных платформах. Стиль написания и тематика сообщений тоже могут помочь идентифицировать человека через разные аккаунты.</p>

<p>Форумы и нишевые платформы. Специализированные форумы часто содержат подробные профили с реальной информацией которую человек не стал бы публиковать в основных соцсетях. Хакерские форумы, игровые сообщества, профессиональные платформы — всё это потенциальные источники. Поиск по Google с оператором <em>site:reddit.com "username"</em> или <em>"username" forum</em> находит упоминания в обсуждениях. Wayback Machine сохраняет страницы удалённых аккаунтов.</p>`
    },
    {
      icon:'🏢', title:'Разведка по организации', sub:'Компания → данные', badge:'МЕТОД',
      body:`<p>Разведка по организации начинается с <strong>публичных реестров</strong>. В России — ЕГРЮЛ (egrul.nalog.ru): ИНН, ОГРН, юридический адрес, учредители, директор, уставный капитал, история изменений. В Великобритании — Companies House. В США — Edgar (SEC filings). <strong>OpenCorporates</strong> агрегирует данные из реестров 140+ стран. Эти источники дают официальную структуру: кто владеет компанией, кто управляет, какие аффилированные структуры существуют.</p>

<p>Разведка персонала. <strong>LinkedIn</strong> — главный источник: список сотрудников, их должности, отделы, карьерная история. Инструмент <strong>Crosslinked</strong> автоматически собирает сотрудников компании и генерирует возможные корпоративные email в разных форматах. <strong>theHarvester</strong> по корпоративному домену собирает email-адреса из поисковиков. <strong>Hunter.io</strong> определяет формат корпоративных адресов и верифицирует их существование. Корпоративный сайт часто содержит раздел "Команда" — источник имён и должностей для дальнейшего поиска.</p>

<p>Технический профиль организации. DNS-разведка по корпоративному домену раскрывает инфраструктуру: почтовые серверы, CDN, облачные провайдеры. <strong>Shodan</strong> по диапазону IP (ASN организации) показывает все публично доступные сервисы: веб-серверы, FTP, базы данных, VPN-шлюзы. <strong>Censys</strong> дополняет данными о сертификатах. Certificate Transparency логи через crt.sh раскрывают внутренние поддомены которые не должны быть публичными (dev.corp.company.com, jenkins.internal.company.com).</p>

<p>GitHub и публичный код. Поиск по организации в GitHub может найти: официальные репозитории с документацией и конфигурациями, личные репозитории сотрудников с рабочим кодом, случайно закоммиченные секреты (API-ключи, пароли, токены). Инструменты <strong>TruffleHog</strong> и <strong>GitLeaks</strong> автоматизируют поиск секретов. Даже удалённые файлы из истории коммитов могут содержать ценную информацию.</p>

<p>Финансовая и публичная информация. Для публичных компаний — финансовая отчётность, презентации для инвесторов, пресс-релизы раскрывают стратегию, партнёров, клиентов. <strong>Crunchbase</strong> и <strong>PitchBook</strong> содержат данные о финансировании стартапов. <strong>Wayback Machine</strong> сохраняет удалённые страницы сайта — предложения продуктов которые больше не существуют, старые команды, исторические партнёрства. Тендерные базы (zakupki.gov.ru в России) раскрывают государственные контракты и поставщиков.</p>`
    },
  ],
  en: [
    {
      icon:'📧', title:'Email Address Research', sub:'Email → identity', badge:'METHOD',
      body:`<p>An email address is one of the most valuable identifiers in OSINT. Start with basic verification through <strong>Hunter.io</strong> or <strong>Emailrep.io</strong> — these services show which domains the address is associated with, how active it is, and whether public profiles exist. Next, Google the email in quotes: <em>"user@example.com"</em> — the search engine will find all public mentions on forums, sites, and documents.</p>

<p>The tool <strong>Holehe</strong> uses an unconventional but highly effective approach: it checks the "Forgot Password" form on 120+ services. This reveals which platforms the person is registered on — Instagram, Twitter, Amazon, Spotify, Adobe — without sending an actual recovery request. The user receives no notifications, and you get a list of active services.</p>

<p>Breach database checking is a mandatory step. <strong>HaveIBeenPwned</strong> contains data from hundreds of breaches. If the email appears in databases — you'll learn exactly which breaches and what may have been compromised (password, name, phone). Tools like <strong>h8mail</strong> and <strong>WhatBreach</strong> aggregate multiple breach sources simultaneously.</p>

<p>If it's a corporate email — you can find colleagues via <strong>theHarvester</strong> or <strong>Phonebook.cz</strong> using the domain. WHOIS for the domain sometimes contains owner contact data. Searching the username part (before @) through Sherlock may find accounts with matching nicknames. PGP servers (keys.openpgp.org) often contain real names and additional emails linked to the main address.</p>

<p>Don't forget to check social networks directly: on Facebook, LinkedIn, and Twitter you can search by email directly, or use the login form to check if an account is linked. Google also indexes profiles tied to emails — searching the address may reveal Google Maps profiles, YouTube channels, and other Google services belonging to the person.</p>`
    },
    {
      icon:'📱', title:'Phone Number Intelligence', sub:'Phone → data', badge:'METHOD',
      body:`<p>Phone number OSINT starts with basic verification. Identify the country and carrier through online services like <strong>NumLookup</strong>, <strong>PhoneInfoga</strong>, or <strong>Sync.me</strong>. PhoneInfoga is a specialized OSINT tool that not only identifies the carrier but searches the number across multiple search engines simultaneously, checks public directories and phone books. Enter the number in Google in different formats: with country code, with spaces, dashes, or parentheses.</p>

<p>Messengers are a goldmine of data. In <strong>Telegram</strong> you can add the number as a contact and see the profile if the person allows search by phone. In <strong>WhatsApp</strong>, saving the contact and opening a chat immediately shows the avatar and status. <strong>Viber</strong> works similarly. Through <strong>Signal</strong> you can check if a registration exists, though the profile isn't displayed.</p>

<p><strong>GetContact</strong> and <strong>TrueCaller</strong> are particularly valuable sources. They show how the number is saved in the phonebooks of other users of their apps. This often reveals the real name, job title, company name — exactly how people saved this contact. Sometimes one number is saved differently by different people, which is itself informative.</p>

<p>Breach searching: many leaked databases contain phone numbers tied to emails, names, and passwords. Tools like <strong>Snusbase</strong>, <strong>IntelX</strong>, and <strong>Phonebook.cz</strong> allow searching by number. Social networks are also worth checking — Facebook, VKontakte, Instagram allowed phone registration and sometimes reveal profiles through account recovery forms.</p>

<p>Advanced methods: check the number in <strong>Skype</strong> (search by number in the app), in online delivery systems (numbers sometimes appear in reviews), on dating sites, in classifieds on Craigslist/OLX. If the number belongs to a business — Google Maps, Apple Maps will show the associated organization. The tool <strong>Ignorant</strong> automates the process — it's the phone number equivalent of Holehe.</p>`
    },
    {
      icon:'🖼️', title:'Reverse Image Search', sub:'Photo → identity', badge:'METHOD',
      body:`<p>Reverse image search is one of the most powerful OSINT methods. Use <strong>multiple search engines simultaneously</strong> as their indexes differ significantly. <strong>Google Images</strong> (lens.google.com) excels at finding exact matches and similar images. <strong>Yandex Images</strong> leads in face recognition, especially effective for people from Eastern Europe. <strong>Bing Visual Search</strong> complements the others. <strong>TinEye</strong> specializes in exact matches and shows when a photo first appeared online and how it spread.</p>

<p>For identifying people by face, use specialized tools. <strong>Pimeyes</strong> scans the open internet and finds faces on different sites and social networks — results can be remarkable. <strong>FaceCheck.id</strong> searches social networks. <strong>Search4Faces</strong> specializes in VKontakte and OK.ru. It's important to be aware of the ethical and legal aspects of using facial recognition.</p>

<p>EXIF metadata — the first thing to check. Use <strong>ExifTool</strong>, Jeffrey's Exif Viewer (online), or simply right-click → Properties in Windows. GPS coordinates in EXIF give the exact shooting location. Date and time help build a timeline. The camera model may match other photos from the same person. However, most social networks (Instagram, Facebook, Twitter) automatically strip EXIF when uploading — this is a privacy protection measure.</p>

<p>If EXIF is empty — analyze visual clues. <strong>Text and signs</strong>: language, fonts, local brand logos. <strong>Architecture</strong>: building styles are characteristic of certain regions and eras. <strong>Vegetation</strong>: palm trees vs conifers immediately indicate a climate zone. <strong>Transport</strong>: shape and color of taxis, trams, buses are unique to cities. <strong>License plates</strong>: design and letters indicate country and region. The tool <strong>GeoSpy</strong> automates part of this analysis.</p>

<p>To verify a found location use <strong>Google Street View</strong> and <strong>Google Maps</strong>. Find a distinctive building or intersection and compare with the photo. <strong>SunCalc</strong> helps determine direction from sun shadows and confirm or refute a proposed location based on time of day. Tools like <strong>GeoEstimator</strong> and GeoGuessr competitions sharpen visual geolocation skills.</p>`
    },
    {
      icon:'📍', title:'Photo/Video Geolocation', sub:'Media → location', badge:'METHOD',
      body:`<p>Media geolocation is a combination of technical analysis and detective work. The first step is always the same: <strong>check EXIF metadata</strong> via ExifTool or an online service. If the photo hasn't passed through social networks, GPS coordinates may be embedded directly in the file with meter-level accuracy. Modern smartphones record geolocation by default — many people don't know this.</p>

<p>If EXIF is unavailable — visual reconnaissance begins. Break the image into components. <strong>Text and languages</strong>: any inscription in a native language is a powerful clue. Cyrillic immediately points to the post-Soviet space, Arabic script to the Middle East and North Africa. Translate text and search for specific names. <strong>Brands and logos</strong>: local brands that exist only in certain countries or regions. <strong>Currency and prices</strong>: if price tags are visible — the currency symbol and pricing indicate the country.</p>

<p>Infrastructure analysis. <strong>Electrical outlets and switches</strong> — every country has its standard. <strong>Traffic direction</strong>: left-hand (UK, Australia, Japan) vs right-hand. <strong>Color and shape of crosswalks, road signs. Power lines and poles</strong> — overhead wires are typical of developing countries, underground cabling of developed ones. <strong>Architectural details</strong>: characteristic brick patterns, roof shapes, balcony styles.</p>

<p>Natural indicators. <strong>Vegetation</strong> can indicate a climate zone with high accuracy — plant species sets are specific to regions. <strong>Mountain relief</strong>: mountain range shapes are well known to geologists and tourists. <strong>Coastlines</strong>: unique shoreline shapes. <strong>Soil color</strong> (red earth of Australia, black soil, sand) — a visual clue. <strong>Starry sky</strong> in night photos: constellation positions indicate the hemisphere.</p>

<p>Verification tools: <strong>Google Earth</strong> lets you virtually fly over the proposed area to find the shooting point. <strong>Google Street View</strong> — compare the specific street. <strong>SunCalc</strong> — check shadow angle to confirm time and place. <strong>Wikimapia</strong> contains building information from local users. <strong>Mapillary</strong> — another source of street photos. For video, use individual frames as separate photos — camera movement and changing backgrounds often provide multiple verification points.</p>`
    },
    {
      icon:'🌐', title:'Domain Intelligence', sub:'Domain → infrastructure', badge:'METHOD',
      body:`<p>Domain recon starts with a <strong>WHOIS query</strong>. Use who.is, Whoxy, or ICANN RDAP. WHOIS contains: registration date (older domains raise fewer suspicions), registrar, owner name and email (often hidden via privacy protection), name servers. <strong>Reverse WHOIS by email</strong> — one of the best methods: if the owner's email is known, Whoxy will show ALL domains registered to it. People often use one email to register dozens of domains.</p>

<p>DNS recon provides a complete infrastructure picture. A record: real server IP. MX records: mail servers (often reveal the mail provider — Google Workspace, Microsoft 365, own server). NS records: name servers. TXT records: contain verification codes for Google Search Console, Facebook, various SaaS services — this is a list of all services the organization uses. SPF record shows which IPs send mail. DMARC reveals mail handling policy. Use <strong>SecurityTrails</strong> for historical DNS data — the real IP behind a CDN can be found in historical records.</p>

<p>Subdomain discovery is a critical phase. Combine methods: passive sources (<strong>crt.sh</strong>, <strong>Subfinder</strong>, <strong>Amass</strong>) and active DNS brute-force (<strong>MassDNS</strong>, <strong>PureDNS</strong>). crt.sh uses Certificate Transparency logs — all issued SSL certificates are publicly logged. Wildcard certificates (*.example.com) hide subdomains, but multi-SAN certificates explicitly list them. Shodan and Censys also index subdomains through certificates. <strong>Altdns</strong> generates permutations of found subdomains (dev-api, api-dev, staging-api) — often finds what others miss.</p>

<p>Web server analysis: identify the technology stack via <strong>Wappalyzer</strong>, <strong>WhatWeb</strong>, or HTTP headers. Server, X-Powered-By headers reveal software versions. Cookies often contain framework names (PHPSESSID, JSESSIONID, laravel_session). Wayback Machine (web.archive.org) shows the site's history — what existed before, which pages were present. robots.txt and sitemap.xml may reveal internal structure.</p>

<p>Finding related assets: for found IP addresses, request reverse DNS (PTR records). Through Shodan/Censys, find all other domains on the same IP — the organization may host multiple sites together. SSL certificate analysis (openssl s_client -connect) reveals all domains in Subject Alternative Names. The organization's ASN (via BGP.he.net) gives the full list of IP blocks. GitHub search by domain often finds repositories with code using that domain's configuration.</p>`
    },
    {
      icon:'👤', title:'Username Research', sub:'Username → profiles', badge:'METHOD',
      body:`<p>Username search is one of the most productive OSINT methods when a person's unique identifier is known. Start with <strong>Sherlock</strong> — the de facto standard for this task. It checks usernames on 400+ platforms simultaneously in minutes. Supplement with <strong>Maigret</strong> — a more advanced tool that not only searches on 3000+ sites but recursively collects data from found profiles, building a connection graph. Always use both tools — they have different platform databases.</p>

<p>Manual checking of key platforms. <strong>GitHub</strong> — particularly valuable source: public repositories may contain the author's real name, work email in commits (git log --format='%ae'), location in profile, links to other accounts. <strong>Reddit</strong>: post and comment history creates a detailed portrait of interests and views. <strong>Steam</strong>: gaming history, friends, links to other profiles. <strong>LinkedIn</strong>: if the username matches a name — direct path to professional information. <strong>HackerNews</strong>: technical discussions with real names.</p>

<p>Breach searching by username. Many breach databases contain a "username" field. Tools like <strong>Snusbase</strong>, <strong>IntelX</strong>, <strong>DeHashed</strong> allow searching by username. Often a linked email is found, a password hash (from which you can judge the complexity and pattern of the person's passwords), registration date, registration IP address. <strong>WhatsMyName</strong> — a project with an updatable rules database for accurate checking: unlike Sherlock, it verifies the presence of a real account, not just a page.</p>

<p>Pattern analysis and variations. If the main username yielded no results — try variations: adding numbers (nick123, nick_1337), letter substitution (n1ck, n!ck), adding underscores, combinations with real name. People often use the same username with small variations on different platforms. Writing style and post topics can also help identify a person across different accounts.</p>

<p>Forums and niche platforms. Specialized forums often contain detailed profiles with real information that a person wouldn't post on mainstream social media. Hacker forums, gaming communities, professional platforms — all are potential sources. Google searches with the operator <em>site:reddit.com "username"</em> or <em>"username" forum</em> find mentions in discussions. Wayback Machine preserves pages of deleted accounts.</p>`
    },
    {
      icon:'🏢', title:'Organization Intelligence', sub:'Company → data', badge:'METHOD',
      body:`<p>Organization recon starts with <strong>public registries</strong>. In the UK — Companies House. In the USA — Edgar (SEC filings). Internationally — <strong>OpenCorporates</strong> aggregates data from registries in 140+ countries. These sources provide the official structure: who owns the company, who manages it, what affiliated structures exist, legal address, registration history.</p>

<p>Personnel intelligence. <strong>LinkedIn</strong> — the main source: employee list, job titles, departments, career history. The tool <strong>Crosslinked</strong> automatically collects company employees and generates possible corporate emails in various formats. <strong>theHarvester</strong> by corporate domain collects email addresses from search engines. <strong>Hunter.io</strong> determines the corporate email format and verifies their existence. The corporate site often has a "Team" section — a source of names and titles for further research.</p>

<p>Technical profile of the organization. DNS recon on the corporate domain reveals infrastructure: mail servers, CDN, cloud providers. <strong>Shodan</strong> by IP range (organization's ASN) shows all publicly accessible services: web servers, FTP, databases, VPN gateways. <strong>Censys</strong> supplements with certificate data. Certificate Transparency logs via crt.sh reveal internal subdomains that shouldn't be public (dev.corp.company.com, jenkins.internal.company.com).</p>

<p>GitHub and public code. Searching by organization on GitHub can find: official repositories with documentation and configurations, personal employee repositories with work code, accidentally committed secrets (API keys, passwords, tokens). Tools <strong>TruffleHog</strong> and <strong>GitLeaks</strong> automate secret searching. Even deleted files from commit history can contain valuable information.</p>

<p>Financial and public information. For public companies — financial reports, investor presentations, press releases reveal strategy, partners, clients. <strong>Crunchbase</strong> and <strong>PitchBook</strong> contain startup funding data. <strong>Wayback Machine</strong> preserves deleted site pages — discontinued product offerings, former teams, historical partnerships. Tender databases reveal government contracts and suppliers.</p>`
    },
  ]
};

// SESSION HISTORY (no repeats per session)
let todHistory = [];

// RENDER TOOLS
let activeFilter = 'all', searchVal = '';

function renderTools() {
  const t = i18n[currentLang] || i18n.ru;
  const grid = document.getElementById('toolsGrid');
  const visible = tools.filter(t2 => {
    const mc = activeFilter === 'all' || t2.cat === activeFilter;
    const ms = !searchVal || t2.name.toLowerCase().includes(searchVal) || t2.tags.some(g => g.includes(searchVal));
    return mc && ms;
  });
  const n = visible.length;
  const suffix = currentLang === 'ru'
    ? (n === 1 ? '' : n < 5 ? 'а' : 'ов')
    : (n === 1 ? '' : 's');
  const word = currentLang === 'ru' ? 'инструмент' : 'tool';
  document.getElementById('countLabel').textContent = `${n} ${word}${suffix}`;
  document.getElementById('toolsCount').textContent = n;
  grid.innerHTML = '';
  if (!visible.length) {
    grid.innerHTML = `<div class="empty-state">${t.emptyState} «<em>${searchVal}</em>»</div>`;
    return;
  }
  visible.forEach((tool, i) => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.style.animationDelay = `${i * .045}s`;
    let host = '';
    try { host = new URL(tool.url).hostname.replace('www.', '') } catch { host = tool.url }
    const icon = tool.icon;
    const desc = tool.desc[currentLang] || tool.desc.ru;
    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon">${icon}</div>
        <a class="card-link-btn" href="${tool.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          ${host}
        </a>
      </div>
      <div class="card-name">${tool.name}</div>
      <div class="card-tags">${tool.tags.map(g=>`<span class="tag">${g}</span>`).join('')}</div>
      <div class="card-desc">${desc}</div>
      <div class="card-foot"><span class="type-badge">${tool.type}</span></div>`;
    card.addEventListener('click', () => openToolModal(tool));
    grid.appendChild(card);
  });
}

function openToolModal(tool) {
  const desc = tool.desc[currentLang] || tool.desc.ru;
  document.getElementById('modalTitle').textContent = tool.name;
  document.getElementById('modalUrl').textContent = tool.url;
  document.getElementById('modalLink').href = tool.url;
  document.getElementById('modalTags').innerHTML = tool.tags.map(g=>`<span class="tag">${g}</span>`).join('');
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('modalOverlay').classList.add('open');
}

document.querySelectorAll('.pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.cat;
    renderTools();
  });
});
document.getElementById('searchInput').addEventListener('input', e => {
  searchVal = e.target.value.toLowerCase().trim();
  renderTools();
});

// RANDOM TOOL (from toolsDB)
function loadTod() {
  const nameEl = document.getElementById('todName');
  const urlEl  = document.getElementById('todUrl');
  const descEl = document.getElementById('todDesc');
  const linkEl = document.getElementById('todLink');
  const btn    = document.getElementById('todRefresh');

  btn.disabled = true;
  nameEl.innerHTML = `<div class="dots"><span></span><span></span><span></span></div>`;
  descEl.innerHTML = `<div class="dots"><span></span><span></span><span></span></div>`;
  urlEl.textContent = '';

  // Filter out already shown in this session
  const available = toolsDB.filter((_, i) => !todHistory.includes(i));
  const pool = available.length ? available : toolsDB;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  const idx  = toolsDB.indexOf(pick);
  todHistory.push(idx);
  if (todHistory.length > toolsDB.length) todHistory = todHistory.slice(-10);

  setTimeout(() => {
    nameEl.textContent = pick.name;
    urlEl.textContent  = pick.url;
    descEl.textContent = (currentLang === 'en' && pick.descEn) ? pick.descEn : pick.desc;
    linkEl.href        = pick.url;
    btn.disabled = false;
    renderTodHist();
  }, 400);
}

function renderTodHist() {
  const t = i18n[currentLang] || i18n.ru;
  const list  = document.getElementById('todHistList');
  const shown = [...todHistory].reverse().slice(1, 8);
  list.innerHTML = shown.map(i => {
    const tool = toolsDB[i];
    return `<div class="tod-hist-item" onclick="openTodHistItem(${i})">
      <div class="tod-hist-icon">${tool.icon||'🛠️'}</div>
      <div class="tod-hist-name">${tool.name}</div>
      <span class="tod-hist-cat">${tool.cat}</span>
    </div>`;
  }).join('') || `<div style="color:var(--text-muted);font-size:13px;padding:8px 0">${t.histEmpty}</div>`;
}

function openTodHistItem(idx) {
  const tool = toolsDB[idx];
  document.getElementById('modalTitle').textContent = tool.name;
  document.getElementById('modalUrl').textContent   = tool.url;
  document.getElementById('modalLink').href          = tool.url;
  document.getElementById('modalTags').innerHTML     = `<span class="tag">${tool.cat}</span>`;
  document.getElementById('modalDesc').textContent   = (currentLang === 'en' && tool.descEn) ? tool.descEn : tool.desc;
  document.getElementById('modalOverlay').classList.add('open');
}

document.getElementById('todRefresh').addEventListener('click', loadTod);

// INFO
let infoLoaded = false;
function renderInfo() {
  const list = document.getElementById('infoList');
  list.innerHTML = '';
  const topics = infoTopics[currentLang] || infoTopics.ru;
  topics.forEach((topic, i) => {
    const card = document.createElement('div');
    card.className = 'info-card';
    card.style.animationDelay = `${i * .06}s`;
    card.innerHTML = `
      <div class="info-card-top">
        <div class="info-icon">${topic.icon}</div>
        <div class="info-meta">
          <div class="info-title">${topic.title}</div>
          <div class="info-sub">${topic.sub}</div>
        </div>
        <span class="info-badge">${topic.badge}</span>
        <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="info-body" id="ib-${i}"></div>`;
    card.addEventListener('click', () => toggleInfo(card, i, topic));
    list.appendChild(card);
  });
}

function toggleInfo(card, i, topic) {
  const open = card.classList.contains('open');
  document.querySelectorAll('.info-card.open').forEach(c => c.classList.remove('open'));
  if (open) return;
  card.classList.add('open');
  const body = document.getElementById(`ib-${i}`);
  if (!body.innerHTML) body.innerHTML = `<div class="info-body">${topic.body}</div>`;
}

// CHALLENGES
function openChal(n) {
  const t = i18n[currentLang] || i18n.ru;
  const c = {
    1: { title: t.chal1Name, desc: t.chal1Desc },
    2: { title: t.chal2Name, desc: t.chal2Desc },
    3: { title: t.chal3Name, desc: t.chal3Desc },
  };
  const ch = c[n];
  document.getElementById('modalTitle').textContent = ch.title;
  document.getElementById('modalUrl').textContent   = '// Challenge';
  document.getElementById('modalLink').href          = '#';
  document.getElementById('modalTags').innerHTML     = '';
  document.getElementById('modalDesc').textContent   = ch.desc;
  document.getElementById('modalOverlay').classList.add('open');
}

// TABS
let todLoaded = false;
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const id = tab.dataset.tab;
    const page = document.getElementById(`tab-${id}`);
    page.classList.add('active');
    if (id === 'tod' && !todLoaded) { todLoaded = true; loadTod(); }
    if (id === 'info' && !infoLoaded) { infoLoaded = true; renderInfo(); }
  });
});

// MODAL
document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) e.target.classList.remove('open'); });
document.getElementById('modalClose').addEventListener('click', () => document.getElementById('modalOverlay').classList.remove('open'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') { document.getElementById('modalOverlay').classList.remove('open'); closeSettings(); closeSupport(); } });

// INIT
(function init() {
  // Restore theme
  const savedTheme = localStorage.getItem('osint_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);


  // Language screen
  if (currentLang) {
    document.getElementById('langScreen').classList.add('hidden');
    applyLang();
    renderTools();
  }
  // else lang screen shows automatically
})();
