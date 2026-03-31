// OSINT Arsenal — каталог инструментов (редактировать массив TOOLS и CATEGORIES)

const TOOLS = [
  // network / recon
  {
    id: 1, name: 'Shodan', url: 'https://shodan.io',
    cat: 'network', type: 'Web',
    tags: ['iot', 'scan', 'ports', 'banners'],
    desc: {
      ru: 'Поисковик по устройствам подключённым к интернету: серверы, камеры, роутеры, промышленное оборудование. Позволяет найти открытые порты и уязвимые сервисы по всему миру.',
      en: 'Search engine for internet-connected devices: servers, cameras, routers, industrial equipment. Find open ports and vulnerable services worldwide.'
    }
  },
  {
    id: 2, name: 'SpiderFoot', url: 'https://spiderfoot.net',
    cat: 'network', type: 'Web',
    tags: ['automation', 'recon', 'framework', 'osint'],
    desc: {
      ru: 'Автоматизированный OSINT-фреймворк с 200+ модулями. Принимает IP, домен, email, строит карту связей между объектами и визуализирует результаты.',
      en: 'Automated OSINT framework with 200+ modules. Accepts IP, domain, email and builds relationship maps with visualization.'
    }
  },
  {
    id: 3, name: 'Recon-ng', url: 'https://github.com/lanmaster53/recon-ng',
    cat: 'network', type: 'CLI',
    tags: ['framework', 'recon', 'modules', 'metasploit-like'],
    desc: {
      ru: 'Модульный фреймворк для веб-разведки в стиле Metasploit с маркетплейсом модулей и встроенной базой данных SQLite для хранения результатов.',
      en: 'Modular web recon framework in Metasploit style with module marketplace and built-in SQLite database for storing results.'
    }
  },
  {
    id: 4, name: 'Subfinder', url: 'https://github.com/projectdiscovery/subfinder',
    cat: 'network', type: 'CLI',
    tags: ['subdomains', 'dns', 'passive', 'projectdiscovery'],
    desc: {
      ru: 'Быстрый пассивный сканер поддоменов от ProjectDiscovery. Использует 50+ источников (Censys, crt.sh, Shodan). Полностью пассивный — не отправляет запросы к цели.',
      en: 'Fast passive subdomain discovery tool from ProjectDiscovery. Uses 50+ sources (Censys, crt.sh, Shodan). Fully passive — no direct requests to target.'
    }
  },
  {
    id: 5, name: 'Amass', url: 'https://github.com/owasp-amass/amass',
    cat: 'network', type: 'CLI',
    tags: ['subdomains', 'dns', 'mapping', 'owasp', 'attack-surface'],
    desc: {
      ru: 'Комплексный инструмент OWASP для картирования внешней поверхности атаки. Объединяет пассивные и активные методы. Строит граф сетевой инфраструктуры.',
      en: 'Comprehensive OWASP tool for external attack surface mapping. Combines passive and active methods. Builds network infrastructure graph.'
    }
  },
  {
    id: 6, name: 'Censys', url: 'https://censys.io',
    cat: 'network', type: 'Web',
    tags: ['network', 'certs', 'tls', 'ports', 'scan'],
    desc: {
      ru: 'Поисковик по интернет-инфраструктуре с акцентом на TLS-сертификаты и открытые порты. Отлично подходит для поиска связанных доменов через сертификаты.',
      en: 'Internet infrastructure search engine focused on TLS certificates and open ports. Great for finding related domains through certificates.'
    }
  },
  {
    id: 7, name: 'Maltego CE', url: 'https://maltego.com',
    cat: 'network', type: 'Desktop',
    tags: ['graph', 'visualization', 'links', 'investigation'],
    desc: {
      ru: 'Стандарт индустрии для визуального анализа связей. Строит интерактивные графы: люди, домены, IP, email, организации. CE-версия бесплатная с ограничениями.',
      en: 'Industry standard for visual link analysis. Builds interactive graphs: people, domains, IPs, emails, organizations. CE version is free with limitations.'
    }
  },
  {
    id: 8, name: 'Whoxy', url: 'https://whoxy.com',
    cat: 'network', type: 'Web',
    tags: ['whois', 'domain', 'reverse-whois', 'registrar'],
    desc: {
      ru: 'WHOIS-поиск и обратный WHOIS. По email владельца находит ВСЕ домены зарегистрированные на одного человека — один из лучших методов OSINT.',
      en: 'WHOIS search and reverse WHOIS. By owner email finds ALL domains registered to one person — one of the best OSINT methods.'
    }
  },
  {
    id: 9, name: 'Metagoofil', url: 'https://github.com/laramies/metagoofil',
    cat: 'network', type: 'CLI',
    tags: ['metadata', 'documents', 'google', 'pdf', 'docx'],
    desc: {
      ru: 'Автоматически ищет публичные документы (PDF, DOC, XLS) через Google, скачивает и извлекает метаданные: имена пользователей, пути к файлам, email.',
      en: 'Automatically finds public documents (PDF, DOC, XLS) via Google, downloads and extracts metadata: usernames, file paths, emails.'
    }
  },
  {
    id: 10, name: 'Httpx', url: 'https://github.com/projectdiscovery/httpx',
    cat: 'network', type: 'CLI',
    tags: ['http', 'probe', 'scan', 'headers', 'wappalyzer'],
    desc: {
      ru: 'Быстрый HTTP-зондировщик от ProjectDiscovery. Из списка хостов определяет живые, снимает заголовки, технологии, скриншоты. Идеален после Subfinder.',
      en: 'Fast HTTP prober from ProjectDiscovery. From a list of hosts finds live ones, grabs headers, technologies, screenshots. Ideal after Subfinder.'
    }
  },

  // social
  {
    id: 11, name: 'Sherlock', url: 'https://github.com/sherlock-project/sherlock',
    cat: 'social', type: 'CLI',
    tags: ['username', 'accounts', 'social-media', '400+ platforms'],
    desc: {
      ru: 'Де-факто стандарт для поиска аккаунтов по никнейму. Одновременно проверяет 400+ платформ — от крупных соцсетей до нишевых форумов. Результаты с прямыми ссылками.',
      en: 'De-facto standard for username account search. Simultaneously checks 400+ platforms — from major social networks to niche forums. Results with direct links.'
    }
  },
  {
    id: 12, name: 'Maigret', url: 'https://github.com/soxoj/maigret',
    cat: 'social', type: 'CLI',
    tags: ['username', 'profiling', '3000+ platforms', 'graph'],
    desc: {
      ru: 'Эволюция Sherlock с акцентом на глубокое профилирование. Ищет на 3000+ платформах, рекурсивно собирает данные с профилей, строит граф связей между аккаунтами.',
      en: 'Evolution of Sherlock focused on deep profiling. Searches 3000+ platforms, recursively collects profile data, builds account connection graph.'
    }
  },
  {
    id: 13, name: 'Twint', url: 'https://github.com/twintproject/twint',
    cat: 'social', type: 'CLI',
    tags: ['twitter', 'scraping', 'no-api', 'tweets', 'followers'],
    desc: {
      ru: 'Скрапер Twitter/X без API-ключа. Собирает твиты за любой период, подписчиков, геолокации. Данные в CSV, JSON, SQLite.',
      en: 'Twitter/X scraper without API key. Collects tweets for any period, followers, geolocations. Data in CSV, JSON, SQLite.'
    }
  },
  {
    id: 14, name: 'Social Mapper', url: 'https://github.com/Greenwolf/social_mapper',
    cat: 'social', type: 'CLI',
    tags: ['face', 'social-media', 'facial-recognition', 'linkedin', 'facebook'],
    desc: {
      ru: 'Автоматизирует поиск профилей по фото и имени с распознаванием лиц. Принимает список сотрудников из корпоративного сайта, находит профили каждого.',
      en: 'Automates profile search by photo and name using facial recognition. Takes employee list from corporate site, finds each person\'s profiles.'
    }
  },
  {
    id: 15, name: 'Crosslinked', url: 'https://github.com/m8sec/crosslinked',
    cat: 'social', type: 'CLI',
    tags: ['linkedin', 'employees', 'email-gen', 'username'],
    desc: {
      ru: 'Сбор имён сотрудников через LinkedIn без API через Google-доркинг. Генерирует корпоративные email в разных форматах. Идеален для разведки по персоналу.',
      en: 'Collect employee names via LinkedIn without API through Google dorking. Generates corporate emails in various formats. Ideal for personnel recon.'
    }
  },
  {
    id: 16, name: 'Socialscan', url: 'https://github.com/iojw/socialscan',
    cat: 'social', type: 'CLI',
    tags: ['username', 'email', 'check', 'availability'],
    desc: {
      ru: 'Точная проверка доступности username и email на платформах. В отличие от Sherlock, использует точные API-запросы вместо эвристик — меньше ложных срабатываний.',
      en: 'Accurate username and email availability check on platforms. Unlike Sherlock, uses exact API requests instead of heuristics — fewer false positives.'
    }
  },

  // email
  {
    id: 17, name: 'theHarvester', url: 'https://github.com/laramies/theHarvester',
    cat: 'email', type: 'CLI',
    tags: ['email', 'dns', 'recon', 'google', 'shodan', 'kali'],
    desc: {
      ru: 'Классика OSINT. Собирает email, имена, поддомены, IP из Google, Bing, LinkedIn, Shodan. Входит в Kali Linux. Стандартный первый шаг при аудите домена.',
      en: 'OSINT classic. Collects emails, names, subdomains, IPs from Google, Bing, LinkedIn, Shodan. Included in Kali Linux. Standard first step in domain audit.'
    }
  },
  {
    id: 18, name: 'Hunter.io', url: 'https://hunter.io',
    cat: 'email', type: 'Web',
    tags: ['email', 'verify', 'corporate', 'domain'],
    desc: {
      ru: 'Поиск и верификация корпоративных email по домену. Определяет формат адресов (firstname.lastname), показывает найденные контакты с источниками.',
      en: 'Find and verify corporate emails by domain. Determines address format (firstname.lastname), shows found contacts with sources.'
    }
  },
  {
    id: 19, name: 'Holehe', url: 'https://github.com/megadose/holehe',
    cat: 'email', type: 'CLI',
    tags: ['email', 'accounts', 'password-recovery', '120+ services'],
    desc: {
      ru: 'Проверяет email через форму "Забыл пароль" на 120+ сервисах (Amazon, Twitter, Instagram, Spotify). Пользователь не получает уведомлений — полностью незаметно.',
      en: 'Checks email via "Forgot Password" form on 120+ services (Amazon, Twitter, Instagram, Spotify). User receives no notifications — fully stealthy.'
    }
  },
  {
    id: 20, name: 'h8mail', url: 'https://github.com/khast3x/h8mail',
    cat: 'email', type: 'CLI',
    tags: ['email', 'breach', 'leaks', 'haveibeenpwned', 'credentials'],
    desc: {
      ru: 'Поиск email в базах утечек через HaveIBeenPwned, Hunter, Snusbase. Находит пароли, хэши, связанные данные из реальных утечек. Работает с локальными базами.',
      en: 'Search email in breach databases via HaveIBeenPwned, Hunter, Snusbase. Finds passwords, hashes, linked data from real leaks. Works with local databases.'
    }
  },
  {
    id: 21, name: 'Phonebook.cz', url: 'https://phonebook.cz',
    cat: 'email', type: 'Web',
    tags: ['email', 'domain', 'urls', 'breach-data'],
    desc: {
      ru: 'Поиск email, доменов и URL по ключевому слову. Использует данные из публичных утечек и индексов. Быстрый способ найти все адреса организации.',
      en: 'Search emails, domains and URLs by keyword. Uses data from public leaks and indexes. Fast way to find all addresses of an organization.'
    }
  },
  {
    id: 22, name: 'GHunt', url: 'https://github.com/mxrch/GHunt',
    cat: 'email', type: 'CLI',
    tags: ['google', 'account', 'email', 'youtube', 'maps'],
    desc: {
      ru: 'Извлекает данные аккаунта Google по email: имя, фото, подключённые сервисы (YouTube, Maps), публичные отзывы, активность в Google Play. Неожиданно много информации.',
      en: 'Extracts Google account data by email: name, photo, connected services (YouTube, Maps), public reviews, Google Play activity. Surprisingly much info.'
    }
  },

  // images / media
  {
    id: 23, name: 'ExifTool', url: 'https://exiftool.org',
    cat: 'image', type: 'CLI',
    tags: ['metadata', 'exif', 'gps', 'files', 'batch'],
    desc: {
      ru: 'Универсальный инструмент для метаданных файлов. Из фото извлекает GPS-координаты, модель камеры, дату. Поддерживает 30 000+ тегов в сотнях форматов.',
      en: 'Universal file metadata tool. Extracts GPS coordinates, camera model, date from photos. Supports 30,000+ tags in hundreds of formats.'
    }
  },
  {
    id: 24, name: 'TinEye', url: 'https://tineye.com',
    cat: 'image', type: 'Web',
    tags: ['reverse-image', 'search', 'duplicate'],
    desc: {
      ru: 'Обратный поиск изображений с акцентом на точные совпадения. Показывает когда фото впервые появилось в интернете и как оно распространялось — хронология.',
      en: 'Reverse image search focused on exact matches. Shows when a photo first appeared online and how it spread — full chronology.'
    }
  },
  {
    id: 25, name: 'Pimeyes', url: 'https://pimeyes.com',
    cat: 'image', type: 'Web',
    tags: ['face', 'reverse', 'facial-recognition', 'social'],
    desc: {
      ru: 'Поиск лиц по фотографии в открытом интернете. Находит совпадения на сайтах и в соцсетях. Один из самых мощных инструментов для идентификации людей по фото.',
      en: 'Face search in the open internet by photo. Finds matches on websites and social networks. One of the most powerful person identification tools.'
    }
  },
  {
    id: 26, name: 'GeoSpy', url: 'https://geospy.ai',
    cat: 'image', type: 'Web',
    tags: ['geolocation', 'ai', 'photo', 'location'],
    desc: {
      ru: 'AI-инструмент для определения геолокации по фотографии через визуальный анализ архитектуры, растительности, вывесок и других признаков.',
      en: 'AI tool for photo geolocation via visual analysis of architecture, vegetation, signs and other clues.'
    }
  },

  // geo
  {
    id: 27, name: 'Creepy', url: 'https://github.com/ilektrojohn/creepy',
    cat: 'geo', type: 'Desktop',
    tags: ['geolocation', 'social', 'twitter', 'flickr', 'map'],
    desc: {
      ru: 'Собирает геолокационные данные из соцсетей (Twitter, Flickr, Instagram). Строит карту перемещений человека во времени. Экспорт в KML для Google Earth.',
      en: 'Collects geolocation data from social networks (Twitter, Flickr, Instagram). Builds person movement map over time. Export to KML for Google Earth.'
    }
  },
  {
    id: 28, name: 'SunCalc', url: 'https://suncalc.org',
    cat: 'geo', type: 'Web',
    tags: ['sun', 'shadow', 'time', 'geolocation-verify'],
    desc: {
      ru: 'Вычисляет положение солнца в любой точке мира для любого момента времени. Используется для верификации геолокации — направление тени на фото подтверждает или опровергает место.',
      en: 'Calculates sun position at any point in the world for any moment in time. Used for geolocation verification — shadow direction in photos confirms or refutes location.'
    }
  },

  // people
  {
    id: 29, name: 'PhoneInfoga', url: 'https://github.com/sundowndev/phoneinfoga',
    cat: 'people', type: 'CLI',
    tags: ['phone', 'lookup', 'carrier', 'web-interface'],
    desc: {
      ru: 'Разведка по номерам телефонов. Определяет страну, оператора, тип. Ищет номер в Google, соцсетях, справочниках. Имеет веб-интерфейс и REST API.',
      en: 'Phone number OSINT. Identifies country, carrier, type. Searches the number on Google, social networks, directories. Has web interface and REST API.'
    }
  },
  {
    id: 30, name: 'IntelTechniques', url: 'https://inteltechniques.com',
    cat: 'people', type: 'Web',
    tags: ['search', 'osint', 'people', 'tools', 'michael-bazzell'],
    desc: {
      ru: 'Сборник OSINT-инструментов и поисковых форм Майкла Баззела для поиска по людям, телефонам, email и соцсетям. Удобный агрегатор.',
      en: 'Michael Bazzell\'s collection of OSINT tools and search forms for people, phones, emails and social networks. Convenient aggregator.'
    }
  },
  {
    id: 31, name: 'OSINT Framework', url: 'https://osintframework.com',
    cat: 'people', type: 'Web',
    tags: ['directory', 'reference', 'map', 'all-tools'],
    desc: {
      ru: 'Интерактивное дерево ВСЕХ OSINT-инструментов сгруппированных по категориям: люди, username, email, телефон, домен, IP, изображения. Идеальная точка входа.',
      en: 'Interactive tree of ALL OSINT tools grouped by category: people, username, email, phone, domain, IP, images. The ideal starting point.'
    }
  },
  {
    id: 32, name: 'Pipl', url: 'https://pipl.com',
    cat: 'people', type: 'Web',
    tags: ['identity', 'search', 'people', 'aggregator'],
    desc: {
      ru: 'Поиск информации о людях по имени, email, телефону. Агрегирует данные из соцсетей, публичных реестров и других источников в единый профиль.',
      en: 'Search people by name, email, phone. Aggregates data from social networks, public registries and other sources into a unified profile.'
    }
  },

  // pentest
  {
    id: 33, name: 'Nuclei', url: 'https://github.com/projectdiscovery/nuclei',
    cat: 'pentest', type: 'CLI',
    tags: ['scanner', 'templates', 'cve', 'vulnerabilities', 'yaml'],
    desc: {
      ru: 'Быстрый сканер уязвимостей на YAML-шаблонах. Тысячи проверок: CVE, открытые панели, раскрытые .env/.git, API без авторизации. Поддерживает массовое сканирование.',
      en: 'Fast YAML-template vulnerability scanner. Thousands of checks: CVEs, open panels, exposed .env/.git, unauthenticated APIs. Supports mass scanning.'
    }
  },
  {
    id: 34, name: 'Nmap', url: 'https://nmap.org',
    cat: 'pentest', type: 'CLI',
    tags: ['port-scan', 'service-detection', 'os-detection', 'classic'],
    desc: {
      ru: 'Классика сетевого сканирования. Определяет открытые порты, сервисы, ОС, версии ПО. Поддерживает NSE-скрипты для автоматизации проверок безопасности.',
      en: 'Network scanning classic. Identifies open ports, services, OS, software versions. Supports NSE scripts for security check automation.'
    }
  },
  {
    id: 35, name: 'Metasploit', url: 'https://metasploit.com',
    cat: 'pentest', type: 'CLI',
    tags: ['exploitation', 'framework', 'payloads', 'meterpreter'],
    desc: {
      ru: 'Крупнейший фреймворк для пентеста. 2000+ модулей эксплойтов, полезные нагрузки, постэксплуатация. Стандарт индустрии для авторизованного тестирования.',
      en: 'The largest penetration testing framework. 2000+ exploit modules, payloads, post-exploitation. Industry standard for authorized testing.'
    }
  },
  {
    id: 36, name: 'Burp Suite', url: 'https://portswigger.net/burp',
    cat: 'pentest', type: 'Desktop',
    tags: ['web', 'proxy', 'scanner', 'web-security', 'intercept'],
    desc: {
      ru: 'Стандарт для тестирования безопасности веб-приложений. Прокси для перехвата трафика, сканер уязвимостей, инструменты для анализа запросов. Community Edition бесплатная.',
      en: 'Standard for web application security testing. Traffic interception proxy, vulnerability scanner, request analysis tools. Community Edition is free.'
    }
  },
  {
    id: 37, name: 'Nikto', url: 'https://github.com/sullo/nikto',
    cat: 'pentest', type: 'CLI',
    tags: ['web-scanner', 'misconfig', 'vulnerabilities', 'headers'],
    desc: {
      ru: 'Классический сканер веб-серверов. Проверяет на 6700+ потенциально опасных файлов и программ, устаревшие версии, неправильные конфигурации. Входит в Kali Linux.',
      en: 'Classic web server scanner. Checks for 6700+ potentially dangerous files and programs, outdated versions, misconfigurations. Included in Kali Linux.'
    }
  },
  {
    id: 38, name: 'SQLMap', url: 'https://sqlmap.org',
    cat: 'pentest', type: 'CLI',
    tags: ['sql-injection', 'database', 'automation', 'blind', 'dump'],
    desc: {
      ru: 'Автоматическое обнаружение и эксплуатация SQL-инъекций. Поддерживает MySQL, PostgreSQL, MSSQL, Oracle и другие СУБД. Может извлекать данные, файлы, выполнять команды.',
      en: 'Automatic SQL injection detection and exploitation. Supports MySQL, PostgreSQL, MSSQL, Oracle and other DBMSs. Can extract data, files, execute commands.'
    }
  },
  {
    id: 39, name: 'Dirb / Gobuster', url: 'https://github.com/OJ/gobuster',
    cat: 'pentest', type: 'CLI',
    tags: ['directory', 'fuzzing', 'brute-force', 'paths', 'wordlist'],
    desc: {
      ru: 'Gobuster — быстрый инструмент для перебора скрытых директорий и файлов на веб-сервере. Поддерживает DNS, vhost и S3 режимы. Написан на Go — очень быстрый.',
      en: 'Gobuster — fast tool for brute-forcing hidden directories and files on a web server. Supports DNS, vhost and S3 modes. Written in Go — very fast.'
    }
  },
  {
    id: 40, name: 'Hydra', url: 'https://github.com/vanhauser-thc/thc-hydra',
    cat: 'pentest', type: 'CLI',
    tags: ['brute-force', 'credentials', 'login', 'ssh', 'ftp', 'http'],
    desc: {
      ru: 'Быстрый и гибкий инструмент для брутфорса учётных данных. Поддерживает 50+ протоколов: SSH, FTP, HTTP, SMB, RDP, SMTP. Только для авторизованного тестирования.',
      en: 'Fast and flexible credential brute-force tool. Supports 50+ protocols: SSH, FTP, HTTP, SMB, RDP, SMTP. For authorized testing only.'
    }
  },
  {
    id: 41, name: 'Wireshark', url: 'https://wireshark.org',
    cat: 'pentest', type: 'Desktop',
    tags: ['network', 'packets', 'capture', 'analysis', 'traffic'],
    desc: {
      ru: 'Ведущий анализатор сетевых пакетов. Захват и глубокий анализ трафика в реальном времени. Поддерживает сотни протоколов. Стандарт для сетевой криминалистики.',
      en: 'Leading network packet analyzer. Real-time traffic capture and deep analysis. Supports hundreds of protocols. Standard for network forensics.'
    }
  },

  // forensics
  {
    id: 42, name: 'Autopsy', url: 'https://autopsy.com',
    cat: 'forensics', type: 'Desktop',
    tags: ['disk-forensics', 'evidence', 'timeline', 'artifacts', 'free'],
    desc: {
      ru: 'Бесплатная платформа цифровой криминалистики. Анализ дисков, восстановление удалённых файлов, построение временной линии, анализ браузерной истории и артефактов ОС.',
      en: 'Free digital forensics platform. Disk analysis, deleted file recovery, timeline building, browser history and OS artifact analysis.'
    }
  },
  {
    id: 43, name: 'Volatility', url: 'https://volatilityfoundation.org',
    cat: 'forensics', type: 'CLI',
    tags: ['memory', 'ram', 'forensics', 'malware-analysis', 'incident-response'],
    desc: {
      ru: 'Фреймворк для криминалистического анализа дампов оперативной памяти. Извлекает запущенные процессы, сетевые соединения, ключи реестра, пароли, артефакты вредоносного ПО.',
      en: 'Framework for forensic analysis of RAM dumps. Extracts running processes, network connections, registry keys, passwords, malware artifacts.'
    }
  },
  {
    id: 44, name: 'Binwalk', url: 'https://github.com/ReFirmLabs/binwalk',
    cat: 'forensics', type: 'CLI',
    tags: ['firmware', 'binary', 'extraction', 'embedded', 'reverse'],
    desc: {
      ru: 'Инструмент для анализа и извлечения данных из бинарных файлов и прошивок устройств. Автоматически обнаруживает встроенные файлы и сигнатуры. Популярен в IoT-security.',
      en: 'Tool for analyzing and extracting data from binary files and device firmware. Auto-detects embedded files and signatures. Popular in IoT security.'
    }
  },
  {
    id: 45, name: 'Ghidra', url: 'https://ghidra-sre.org',
    cat: 'forensics', type: 'Desktop',
    tags: ['reverse-engineering', 'disassembler', 'nsa', 'malware', 'binary'],
    desc: {
      ru: 'Бесплатный фреймворк обратной разработки от АНБ. Дизассемблер, декомпилятор, поддержка скриптов. Мощная альтернатива IDA Pro для анализа вредоносного ПО и бинарей.',
      en: 'Free reverse engineering framework by NSA. Disassembler, decompiler, script support. Powerful IDA Pro alternative for malware and binary analysis.'
    }
  },
  {
    id: 46, name: 'OSINT.industries', url: 'https://osint.industries',
    cat: 'forensics', type: 'Web',
    tags: ['email', 'phone', 'username', 'aggregator', 'visualization'],
    desc: {
      ru: 'Комплексная платформа OSINT для поиска по email, телефону и username. Красиво визуализирует данные из десятков источников в единый профиль цели.',
      en: 'Comprehensive OSINT platform for email, phone and username search. Beautifully visualizes data from dozens of sources into a unified target profile.'
    }
  },
];

const CATEGORIES = [
  { key: 'all',      label: { ru: 'Все',       en: 'All'       } },
  { key: 'network',  label: { ru: 'Сеть',      en: 'Network'   } },
  { key: 'social',   label: { ru: 'Соцсети',   en: 'Social'    } },
  { key: 'email',    label: { ru: 'Email',      en: 'Email'     } },
  { key: 'image',    label: { ru: 'Медиа',      en: 'Media'     } },
  { key: 'geo',      label: { ru: 'Гео',        en: 'Geo'       } },
  { key: 'people',   label: { ru: 'Люди',       en: 'People'    } },
  { key: 'pentest',  label: { ru: 'Пентест',    en: 'Pentest'   } },
  { key: 'forensics',label: { ru: 'Форензика',  en: 'Forensics' } },
];
