export type Translation = {
  ISO_CODE: string
  CARD_ABOUT: string
  CARD_DONATE: string
  CARD_ARCHIVE_LINK: string
  CARD_ME_FIRST_NAME: string
  CARD_ME_LAST_NAME: string
  CARD_ME_SPECIALIZATION: string
  FULL_SPECIALIZATION: string
  CARD_ME_CITY: string
  CARD_PORTFOLIO: string | string[]
  CARD_PORTFOLIO_IN_PORTFOLIO: string
  CARD_SERVICES: string
  ONION_SITE_LINK: string
  THEME_SWITCH_TO_LIGHT: string
  THEME_SWITCH_TO_DARK: string
  CHANGE_LANGUAGE: string
  LANGUAGE_RUSSIAN: string
  LANGUAGE_ENGLISH: string
  BACK: string
  PAGES_TITLES: {
    me: string
    portfolio: string
    services: string
    donate: string
    about: string
  }
  SERVICES_CARDS: {
    landing: {
      title: string
      description: string
      price: string
    }
    turnkey_website: {
      title: string
      description: string
      price: string
    }
    bot: {
      title: string
      description: string
      price: string
    }
    other: {
      title: string
      description: string
      price: string
    }
  }
  ABOUT_ME: {
    HEADING: string
    INTRO: string
    INTRO_IMAGE: string
    BACKEND: string
    MY_PROJECTS: string
    MY_PROJECTS_IMAGE: string
    FEATURED: string
    FEATURED_1: string
    FEATURED_2: string
    FEATURED_3: string
    FEATURED_4: string
    FEATURED_5: string
    FEATURED_6: string
    FEATURED_7: string
    FEATURED_8: string
    PARSING: string
    PARSING_IMAGE: string
    ENDING: string
    ENDING_IMAGE: string
    CATEGORIES: {
      frontend: string
      backend: string
      devops: string
      apps: string
      bot: string
      ai: string
      gamedev: string
      design: string
      mobile: string
    }
    STARTED_LEARNING: string
    OPEN_PROJECTS_CAPTION: string
    WHAT_IS_HLOTH: {
      HEADING: string
      TEXT: string
      CRITERIA: string[]
      TEXT2: string
      VARIANTS: string[]
      TEXT3: string
    }
    ABOUT_ME_AS_PERSON: {
      HEADING: string
      INTRO: string
      TEXT: string
    }
  }
  PORTFOLIO: {
    COLUMNS: {
      NAME: string
      DESCRIPTION: string
      TECHNOLOGIES: string
      DATES: {
        DEV_START: string
        RELEASE: string
        ABANDON: string
      }
    }
    SEARCH: {
      PLACEHOLDER: string
      EXAMPLE: string
      CLEAR: string
      QUICK_SEARCH: {
        TITLE: string
        WEB: string
        MOBILE: string
        BACKEND: string
        DATABASES: string
        DESIGN: string
        GAME_DEV: string
        BOTS: string
        DEV_OPS: string
        AI: string
        PAYMENTS: string
        SOFTWARE: string
        MODELING: string
        OTHER: string
      }
    }
    CATEGORIES: {
      'game/windows10': string
      'game/android': string
      website: string
      'bot/reddit': string
      figma_plugin: string
      'bot/telegram': string
      npmjs_library: string
      app: string
      'bot/vk': string
      'website/darknet': string
      'bot/yandex_alice': string
      chrome_extension: string
      stream: string
      programming_language: string
      minecraft_map: string
      instagram_mask: string
      developer_tool: string
      widget: string
      robot: string
      utility: string
      other: string
    }
    FILTERS: {
      ORDERS_ONLY: string
      PERSONAL_WEBSITES_ONLY: string
      RECENT_PROJECTS_ONLY: string
    }
    HIDDEN_PROJECT: {
      NAME: string
      DESCRIPTION_PREVIEW: string
      DESCRIPTION: string
    }
    SHOCK_PROJECT: {
      NAME: string
      DESCRIPTION_PREVIEW: string
      DESCRIPTION: string
    }
    PROJECT_DIALOG: {
      LINKS_LABEL: string
      SHARE_LABEL: string
      CLOSE_LABEL: string
      LINK_COPIED: string
      SHOW_SHOCKING_PROJECTS: string
      TRANSLATE_DESCRIPTION_LABEL?: string
      TRANSLATE_DESCRIPTION_CODE?: string
    }
    TAGS: {
      ORDER: string
    }
    DATES: {
      DEV_START: string
      RELEASE: string
      ABANDON: string
    }
  }
  ABOUT_THIS_WEBSITE: {
    HEADING: string
    TEXT: string
    PREVIOUS_SITES: string[]
    TEXT2: string
    VISITORS_THIS_MONTH: string
    NAN_VISITORS: string
    ZERO_VISITORS: string
    TOO_LOW_VISITORS: string
    LINKS: {
      INSTAGRAM_HIGHLIGHTS: string
      GITHUB_SOURCES: string
    }
  }
  DONATE: {
    MAIN_BLOCK_HEADING: string,
    INFO: string
  }
}

const translation: Record<'ru-RU' | '_DEFAULT_', Translation> = {
  'ru-RU': {
    'ISO_CODE': 'ru-RU',
    'CARD_ABOUT': 'О сайте',
    'CARD_DONATE': 'Донаты',
    'CARD_ARCHIVE_LINK': 'Архив',
    'CARD_ME_FIRST_NAME': 'Виктор',
    'CARD_ME_LAST_NAME': 'Щелочков',
    'CARD_ME_SPECIALIZATION': 'Fullstack developer',
    'FULL_SPECIALIZATION': 'Фуллстек разработчик',
    'CARD_ME_CITY': 'Батуми',
    'CARD_PORTFOLIO': [
      'проект',
      'проекта',
      'проектов'
    ],
    'CARD_PORTFOLIO_IN_PORTFOLIO': 'в портфолио',
    'CARD_SERVICES': 'Услуги',
    'ONION_SITE_LINK': 'Переключиться на onion-сервис этого сайта',
    'THEME_SWITCH_TO_LIGHT': 'Включить светлую тему',
    'THEME_SWITCH_TO_DARK': 'Включить темную тему',
    'CHANGE_LANGUAGE': 'Сменить язык',
    'LANGUAGE_RUSSIAN': 'Русский язык',
    'LANGUAGE_ENGLISH': 'Английский язык',
    'BACK': 'Вернуться назад в главное меню',
    'PAGES_TITLES': {
      'me': 'Обо мне',
      'portfolio': 'Портфолио',
      'services': 'Услуги',
      'donate': 'Донаты',
      'about': 'О сайте'
    },
    'SERVICES_CARDS': {
      'landing': {
        'title': 'Разработка лендинга',
        'description': 'Лендинг — это отличный способ передать информацию о вашем продукте или услуге, привлечь внимание и начать продажи. Я могу интегрировать любые API, платежные шлюзы, впечатляющую графику и анимацию, а также сделать сайт адаптивным и оптимизированным для поисковых систем.',
        'price': 'С готовым дизайном — от 300$ и 5 часов'
      },
      'turnkey_website': {
        'title': 'Разработка сайта «под ключ»',
        'description': 'Блог с базой данных NoSQL (такие как MongoDB) или SQL (такие как PostgreSQL), интернет-магазин с приёмом оплаты и админ-панелью, система для работы с данными. Верстка сайта, разработка бекенда и микросервисов, API, авторизации, настройка CI/CD, настройка сервера и баз данных — все это входит в единую услугу.',
        'price': 'От 1000$ и 20 часов'
      },
      'bot': {
        'title': 'Разработка бота',
        'description': 'Увеличьте конверсии, предоставьте пользователям обратную связь и продвигайте сообщества и каналы проверкой на подписку с ботом ВКонтакте, Telegram (через Bot API или от имени пользователя с MTProto Core API), WhatsApp или Viber, продвигайте свой продукт с ботом Discord, навыком Яндекс.Алиса, приложением Reddit или ботом, работающим с любыми другими API. Разработка сценариев, тестирование и интеграция с вашим продуктом.',
        'price': 'От 50$ за Telegram-бота и от 150$ за другие платформы'
      },
      'other': {
        'title': 'Разработка уникального инструмента',
        'description': 'Разработка расширений для браузеров (работал с Chrome, Firefox, Tor), плагинов для существующих платформ, модификаций опенсурс проектов, разработка игровых серверов, настройка SMTP сервера и рассылок, интеграция AI в ваши проекты, кодревью.',
        'price': 'Договорная цена (от 50$/час)'
      }
    },
    'ABOUT_ME': {
      'HEADING': 'Привет, меня зовут Виктор, и я фуллстек разработчик',
      'INTRO': 'Я занимаюсь разработкой PWA, веб-сайтов (фронтенд и бекенд), ботов, инструментов для разработчиков, библиотек, плагинов, парсеров и агрегаторов для крупных клиентов и частных заказчиков более двух лет. У меня за плечами сотни часов коммерческой разработки и тысячи часов общей практики с React, Next.js, TypeScript. Мой основной стек для фронтенда: <b>React, Next.js, Vite, Bun.sh и Elysia</b> (опыт работы %date_fns_1610222400%). Я использую методологию Feature-Sliced Design для упорядочивания файлов в проекте, линтеры и кодстайлеры в VSCode. У меня есть опыт интеграции ИИ в веб-сайты, я разрабатываю много сайд-проектов с GPT (например, BMO из Времени Приключений в реальной жизни: OpenAI Whisper, GPT4).',
      'INTRO_IMAGE': 'Стикер белой собаки Спотти ВКонакте с жестом Лайк',
      'BACKEND': 'Помимо фронтенда я занимаюсь и бекендом, обычно создавая сайты «под ключ», делая деплой на Vercel, Netlify, GitHub/GitLab CI/CD или напрямую на VPS с контейнером Docker или без. Я работал как под управлением старших разработчиков в команде, так и тимлидом. Обычно я пишу бекенд на <b>Node.js</b> (опыт работы %date_fns_1590955200%), но также успел поработать с Rust, Go, Ruby.',
      'MY_PROJECTS': 'Я попробовал себя в многих областях IT и продолжаю экспериментировать и находить для себя новые технологии. Я держу руку на пульсе жизни вебдева и знаю обо всех новых фичах спецификации w3c и браузеров, новых фреймворках и пробую их.',
      'MY_PROJECTS_IMAGE': 'Колобанга с жестом Коза',
      'FEATURED': 'Все мои проекты вы можете увидеть на <a href="/portfolio">странице "портфолио"</a>, но вот некоторые из них:',
      'FEATURED_1': '<b>Работа с блокчейном 2024Q1.</b> Я разработал сайт с фронтендом на Next.js, Tailwind и @shadcn/ui и бекендом на Node.js, который автоматически анализирует блокчейн OXEN на появление новых записей об ONS записях, парсит их с помощью JSON RPC и расшифровывает значения с помощью Blake2b и argon2. Фронтенд ориентирован на работу офлайн, поэтому я написал собственный сервис воркер с механизмом background sync и локальной базой данных. Этот сайт также полностью автоматически интегрируется с блокчейном для создания записей, чтобы пользователю не нужно было покупать криптовалюту. Я развернул собственный SMTP сервер и настроил 100% доставку писем и интегрировал сайт с YooKassa для приема платежей и оплаты. <a href="/portfolio/ons-registry" target="_blank" rel="nofollow noreferrer">Подробнее.</a>',
      'FEATURED_2': '<b>Работа с ботами 2024Q1.</b> Я разработал сайт с фронтендом на <b>Remix</b> и бекендом на Node.js, на котором разработчики могут полностью автоматически опубликовать бота для мессенджера Session. Мой скрипт проведет полную верификацию авторства бота при помощи отсылки команд в сторонний мессенджер и проверит контент бота с помощью OpenAI Moderation. <a href="/portfolio/session-bots-directory" target="_blank" rel="nofollow noreferrer">Подробнее.</a>',
      'FEATURED_3': '<b>Работа с данными 2023Q4.</b> В одиночку разработал парсер для гигантского маркетплейса, создал процессы анализа гигабайтов собранных данных, придумал модель хранения данных и настроил алгоритмы систематизации в MongoDB. Результат: выдача тысяч рядов данных с гибкими фильтрами, сортировкой и различными представлениями пользователю за доли секунд.',
      'FEATURED_4': '<b>Модификации 2023Q3.</b> Требовалось развернуть Mastodon с существенными изменениями: добавить монетизацию с BTCPayServer и автоматическим пуллингом транзакций из блокчейна криптовалюты, модифицировать бекенд на Ruby, чтобы добавить защиту от DDOS с hCaptcha, работать с бд PostgreSQL и добавить таблицу для хранения выдаваемых плашек рядом с именем пользователя. Позже я также разработал для клиента полностью собственный сервис капчи, ориентированный на пользователей Tor.',
      'FEATURED_5': '<b>Opensource и боты. 2024Q1</b> Я разработал 4 проекта для сообщества мессенджера Session — форка Signal с открытым кодом, ориентированного на нулевое хранение персональных данных. Я проанализировал код Session, удалил всю часть, отвечающую за рендеринг (в том числе, все что связано с Electron) и оставил только бекенд (node.js). Таким образом я получил headless клиент мессенджера, который теперь используют десятки разработчиков для создания своих ботов. Мой проект стал первым открытым фреймворком для разработки ботов в миллионном сообществе Session. <a href="/portfolio/session-messenger-nodejs" target="_blank" rel="nofollow noreferrer">Подробнее.</a>',
      'FEATURED_6': '<b>Редактор паков. 2022Q3</b> Веб-приложение, созданное как замена неудобному официальному приложению SiQuester, обревшее огромную популярность среди любителей "Своей игры". Построен на React и MaterialUI, фронтенд анализирует xml-файлы игры и позволяет редактировать в удобном интерфейсе все вопросы и темы. Имеет встроенный файловый менеджер с хранилищем в IndexedDB, где файлы являются Blob-ами и могут быть импортированы как через встроенный файлпикер системы, так и через скачивание с URL. <a href="/portfolio/sipacker" target="_blank" rel="nofollow noreferrer">Подробнее.</a>',
      'FEATURED_7': '<b>Генератор вариантов ОГЭ. 2021Q1</b> Это сайт на React и Bootstrap с открытым кодом для школьников, сделанный мной в 9 классе. Это сайт, генерирующий задания для тренировки сдачи экзамена, в котором есть редактор кода и компилятор js и python (на WebAssembly), генератор архивов с jszip, генератор таблиц с xlsx.js <a href="/portfolio/огэ-генератор" target="_blank" rel="nofollow noreferrer">Подробнее.</a>',
      'FEATURED_8': '<b>Опыт работы.</b> За свою карьеру я занимался и другими проектами, например <a href="https://hloth.dev/portfolio/jswitcher" target="_blank" rel="nofollow noreferrer">плагин Figma</a> для быстрой верстки кросс-платформерных макетов для команды дизайнеров Латвийского онлайн-маркетплейса Joom; <a href="https://hloth.dev/portfolio/atmosseriesbot">Telegram-бота</a> для массовых рассылок и статистики реферральных регистраций с панелью управления прямо внутри бота с интеграцией с MongoDB (300 тыс. активных пользователей на пике); <a href="/portfolio/hloth-telegram-greeting">авто-ответчик в Telegram</a> и <a href="/portfolio/telegram-channel-mirror-mtproto">бот, воссоздающий зеркало любого канала Telegram</a>, когда изучал Telegram MTProto (Telegram User API); <a href="/portfolio/bot-biz-panels">админ-панель x5.io</a> с интеграцией apollo graphql, grpc и MaterialUI и другие проекты не по моей специальности',
      'PARSING': 'Я люблю помогать другим разработчикам и иногда делаю пулл реквесты в опенсурс, а иногда я создаю проекты с нуля, если этим еще никто до меня не занялся: у меня есть несколько врапперов API, работающие со скрейпингом HTML, коммуницирующие с SignalR или GraphQL. Я люблю инди-хакинг (3 раза взломал свою школу, вот <a href="/portfolio/fuck-samlit" target="_blank" rel="nofollow noreferrer">одна из статей</a>) и реверс-инженеринг, а еще я увлекаюсь мобильной разработкой и с августа 2021 года выпустил несколько приложений с Expo (React Native).',
      'PARSING_IMAGE': 'Шрек смотрит налево (направо относительно него)',
      'ENDING': 'В командах работал с таск-менеджерами GitLab Boards, Jira, Trello. <b>Прямо сейчас рассматриваю возможность релокации в США на полную занятость, удаленно (от 150.000$ в год)</b> Более подробную информацию о моих навыках вы можете найти <a href=\'https://hloth.dev/portfolio\' target="_blank" rel="noreferrer">в портфолио</a> и в моем <a href=\'https://github.com/VityaSchel\' target="_blank" rel="noreferrer">аккаунте GitHub (150+ репозиториев)</a>, который я веду\nс 2019 года, создаю полезные инструменты и стремлюсь улучшать DX в сообществе разработчиков JS :) Если у вас еще остались вопросы или вы готовы обсудить проект со мной, пишите мне в Телеграм: <a href=\'https://t.me/hlothdev\'>@hlothdev</a> или в другие соц. сети, перечисленные на этой странице.',
      'ENDING_IMAGE': 'UWU эмодзи',
      'CATEGORIES': {
        'frontend': 'Фронтенд',
        'backend': 'Бекенд',
        'devops': 'DevOps',
        'apps': 'Приложения',
        'bot': 'Разработка ботов',
        'ai': 'ИИ (Искуственный Интеллект)',
        'gamedev': 'Разработка игр',
        'design': 'Дизайн',
        'mobile': 'Мобайл'
      },
      'STARTED_LEARNING': 'Учу с',
      'OPEN_PROJECTS_CAPTION': 'Смотреть проекты',
      'WHAT_IS_HLOTH': {
        'HEADING': 'Как переводится "hloth"?',
        'TEXT': 'hloth (на рус. хлоз, читается как [h l ó θ]) — этот никнейм я придумал в ноябре 2021 года, когда создавал профиль фрилансера. Этот никнейм не случайный набор букв, потому что у меня было 5 критериев:',
        'CRITERIA': [
          'от 5 до 7 букв',
          'связано с программированием или не связано с другими тематиками',
          'не является существующим словом и не похоже на негативные слова',
          'читается в 1 или 2 слога',
          '(необязательно) похоже на «Витя»'
        ],
        'TEXT2': 'А также обязательно должен был быть доступен домен с таким именем в зоне .dev или в зоне, заканчивающей никнейм. <br></br>Вообще, в древнегреческой мифологии, бог Хаос — это бессмертный бог порождений, что уже одним названием указывает на то, что мое творчество не имеет границ и будет существовать, пока жив сам мир. Именно поэтому я решил взять такой никнейм, но немного его изменить, чтобы не ассоциироваться с неорганизованностью у заказчика. <br><br/>Это, конечно, шутка. Этот текст нужен для заполнения пространства слева, чтобы вы могли увидеть используемые мной технологии в правой части страницы (или над этим блоком в мобильной версии) и провели на сайте больше времени для повышения SEO. Никнейм я придумал случайно, подбирая простые окончания к "хл". Мои друзья предлагали мне и другие варианты:',
        'VARIANTS': [
          'vítěz — символы вне группы таблицы ASCII нежелательно использовать в домене, тем более мне нужно было напечатать его на своем рюкзаке в реальной жизни, а не каждый пользователь и потенциальный заказчик сообразит, как ввести буквы из чешского алфавита',
          'megakiller — спасибо, Саша',
          'pykov — предложил искуственный интеллект, генерирующий имя для бизнеса',
          'vitezhorny',
          'weetapp',
          'viapp — идея была в том, что vi читается как we (мы/наше)',
          'vitsch — сокращение от vityaschel, которое тоже явяляется сокращением',
          'devitya — было уже занято, а вот у моего мужа никнейм devio'
        ],
        'TEXT3': 'Все эти варианты даже не рассматривались, когда я придумал hloth.'
      },
      'ABOUT_ME_AS_PERSON': {
        'HEADING': 'Обо мне (как о человеке)',
        'INTRO': 'Однажды я услышал, как мудрый человек сказал: «В хорошем резюме должно быть четыре страницы: 1. Опыт работы, 2. Образовние, 3. Скиллы, 4. Немного о Вас». Итак, вы добрались до четвертой страницы моего резюме (в виде сайта), и сейчас я хотел бы рассказать немного о себе как о человеке.',
        'TEXT': 'Больше всего я люблю путешествовать с моим бойчиком ❤️, который профессионально занимается геймдевом. Мы вместе уже %date_fns_1680377388% и вместе собираемся покорить весь мир! Вы часто увидите нас в <a href="https://instagram.com/vityaczech">моем Instagram</a>. Помимо путешествий (и коротких поездок на электро-самокатах) я люблю спорт и поддерживаю здоровый образ жизни, слушаю мешапы и ру-инди, веду несколько блогов и <a href="https://www.youtube.com/@hlothdev/videos">YouTube-канал</a> для моих дорогих коллег-программистов.\n\nЯ начал программировать в 6 лет на Pascal.ABC и с тех пор пробовал разрабатывать все. Первую игру я написал в 7 лет на Pascal, потом на Scratch, потом на Kodu Game Lab, в 13 лет опубликовал свою <a href="/portfolio/roller-ride">первую мобильную игру</a> на Unity в PlayMarket. <a href="/portfolio/camlit">Первый сайт</a> я сделал во втором классе про мою школу, так я начал изучать HTML и в 14 лет добрался до написания программ на JavaScript. В 7 классе я каждый год делал проекты, выступал на IT конференциях и завоевал множество дипломов. В то же время я полностью в одиночку написал онлайн-шутер с бекендом на PHP, Python и MySQL и арендовал собственный VPS, на котором экспериментировал с Linux и git. В 15 лет я уже изучал Kubernetes и Docker, React и Next.js, React Native и разработку мобильных приложений. Первую работу я получил в 16 лет, но параллельно изучал и другие технологии, например писал на Go и Scala, изучил Telegram MTProto и Bot API, а к 18 годам в моем <a href="https://github.com/vityaschel">GitHub аккаунте</a> было уже 150+ репозиториев и <a href="https://www.npmjs.com/~vityaschel">27 опубликованных пакетов в npmjs</a>.\n\nТакже я каждый месяц жертвую часть своей зарплаты на благотворительность и веду об этом блог. <a href="https://twitter.com/hlothdon">Мой чарити-блог в Twitter</a>.\n\nСейчас мне %date_fns_1120590000%, я живу в городе Батуми, Грузия.'
      }
    },
    'PORTFOLIO': {
      'COLUMNS': {
        'NAME': 'Название',
        'DESCRIPTION': 'Описание',
        'TECHNOLOGIES': 'Технологии',
        'DATES': {
          'DEV_START': 'Начало разработки',
          'RELEASE': 'Релиз',
          'ABANDON': 'Отмена/прекращение'
        }
      },
      'SEARCH': {
        'PLACEHOLDER': 'Поиск по портфолио: название, описание, технологии',
        'EXAMPLE': 'Например, «Лендинг» или «Redux, React Native»',
        'CLEAR': 'Очистить',
        QUICK_SEARCH: {
          TITLE: 'Поиск по сферам',
          WEB: 'Фронтенд и веб',
          MOBILE: 'Мобайл',
          BACKEND: 'Бекенд',
          DATABASES: 'БД',
          DESIGN: 'Дизайн',
          GAME_DEV: 'Геймдев',
          BOTS: 'Боты',
          DEV_OPS: 'Девопс',
          AI: 'ИИ',
          PAYMENTS: 'Платежи',
          SOFTWARE: 'Софт',
          MODELING: '3D',
          OTHER: 'Другое',
        }
      },
      'CATEGORIES': {
        'game/windows10': 'Игра Windows 10',
        'game/android': 'Игра Android',
        'website': 'Веб-сайт',
        'bot/reddit': 'Бот Reddit',
        'figma_plugin': 'Плагин Figma',
        'bot/telegram': 'Бот Telegram',
        'npmjs_library': 'Библиотека js',
        'app': 'Приложение',
        'bot/vk': 'Бот ВКонтакте',
        'website/darknet': 'Веб-сайт Tor Hidden Services',
        'bot/yandex_alice': 'Бот Алисы',
        'chrome_extension': 'Расширение Chrome',
        'stream': 'Стрим',
        'programming_language': 'Компилятор языка',
        'minecraft_map': 'Minecraft карта',
        'instagram_mask': 'Instagram-маска',
        'developer_tool': 'Инструмент для разработчиков',
        'widget': 'Виджет',
        'robot': 'Робот',
        'utility': 'Утилита',
        'other': 'Другое',
      },
      'FILTERS': {
        'ORDERS_ONLY': 'Только заказы',
        'PERSONAL_WEBSITES_ONLY': 'Только мои персональные сайты',
        'RECENT_PROJECTS_ONLY': 'Только проекты за последние 12 месяцев'
      },
      'HIDDEN_PROJECT': {
        'NAME': 'Скрытый проект',
        'DESCRIPTION_PREVIEW': 'Нажмите, чтобы узнать подробнее',
        'DESCRIPTION': 'Информация об этом проекте скрыта, потому что так захотел клиент (если это заказ) или я просто не хочу им делиться; но я готов показать вам его лично, для этого обратитесь ко мне и назовите его id: %PROJECT_ID%.'
      },
      'SHOCK_PROJECT': {
        'NAME': 'Шокирующий контент',
        'DESCRIPTION_PREVIEW': 'Нажмите, чтобы показать информацию о проекте',
        'DESCRIPTION': 'Указанный контент может показаться некоторым людям оскорбительным и шокирующим, однако он имеет достаточно ценное значение для моего портфолио, чтобы оставить его здесь. Если вы хотите увидеть информацию об этом и других проектах из этой категории, нажмете кнопку Показать ниже.'
      },
      'PROJECT_DIALOG': {
        'LINKS_LABEL': 'Ссылки',
        'SHARE_LABEL': 'Поделиться',
        'CLOSE_LABEL': 'Закрыть',
        'LINK_COPIED': 'Ссылка скопирована',
        'SHOW_SHOCKING_PROJECTS': 'Показать'
      },
      'TAGS': {
        'ORDER': 'Заказ'
      },
      'DATES': {
        'DEV_START': 'Начало разработки',
        'RELEASE': 'Релиз',
        'ABANDON': 'Отмена/прекращение'
      }
    },
    'ABOUT_THIS_WEBSITE': {
      'HEADING': 'Сайт hloth.dev',
      'TEXT': 'Это мой шестой по-счету персональный сайт. Он содержит информацию обо мне, моих проектах, является неким портфолио и резюме одновременно, и даже служит инструментом для пожертвований мне. <br></br>Немного информации о моих предыдущих сайтах:',
      'PREVIOUS_SITES': [
        'Сайт на конструкторе uCoz (2012-2013) — Мой первый сайт, на котором были игры, тесты и другие штучки, чем-то вдохновлён легендарным сайтом <a href="http://devo4ka‑diano4ka.narod.ru/" target="_blank" rel="noreferrer">девочки Дианочки</a>. Сделал в 8 лет.',
        'Сайт на hostinger (2018-2019) — Сайт на котором я учился на практике веб-разработке: я создавал страницы, смотрел как работает html и даже смог установить свою первую «капчу» с проверкой на стороне сервера. Сделал в 13 лет.',
        'Карта проектов (первая четверть 2020) — Сайт на котором была карта с проектами. Всего было несколько пузырьков, а связь между ними обозначалась линиями. Если навести курсор, то появлялось описание. Сделал в 14 лет. Сделано на написанном мною движке на JavaScript 😳.',
        'Галерея проектов (вторая четверть 2020) — Сразу после того, как я выучил теорию по JS, я переделал свой сайт, он уже выглядел более современно, имел приятную палитру цветов, информацию обо мне и мое портфолио (только самые главные проекты), и впервые мой сайт имел адекватную мобильную версию. Сделал в 14 лет. <a href="https://web.archive.org/web/20200829125415/https://vityaschel.utidteam.com/" target="_blank" rel="nofollow noreferrer">Архивировано</a>',
        'Лендинг с космическим дизайном (четвертая четверть 2020) — Сайт с анимациями, параллаксом, шейдером для градиентов в JavaScript и OpenGL от stripe.com, формой для связи, связанной с телеграм-ботом, который, в свою очередь, связан с SMTP-сервером для обратной связи. Сделал в 15 лет. К сожалению, был закрыт через месяц из-за сложностей с созданием мобильной версии и лагами, потому что сайт был сделан на ванильном JS. Всего через неделю я выучил React и сайт стал бесполезен. Архивировано: <a href="https://web.archive.org/web/20201223160040/https://vityaschel.utidteam.com/"  target="_blank" rel="nofollow noreferrer">лагающая, но полноценная версия</a>, <a href="https://web.archive.org/web/20210419020534/https://vityaschel.utidteam.com/"  target="_blank" rel="nofollow noreferrer">оптимизированная, но без блока "Процесс разработки"</a> (в обоих версиях скройте тулбар Wayback machine и дождитесь полной загрузки сайта перед тем, как скроллить)'
      ],
      'TEXT2': 'Кстати, пока вы еще здесь, почему бы вам не взглянуть на файл <a href="/robots.txt" target="blank" rel="noreferrer">robots.txt</a>? В 500 КБ, разрешенные поисковиками Google и Яндекс, я смог уместить ASCII-рисунки, анекдоты, текста песен, 100 000 первых цифр числа Пи, транскрипт эпизода «Времени приключений» и даже 70-секундный аудио-фрагмент из «Шрека», закодированный в Base64 и другое. Все вспомогательные инструменты для конвертации и форматирования текста я написал сам, используя Node.js и FFMpeg.',
      'VISITORS_THIS_MONTH': 'Посетителей за этот месяц',
      'NAN_VISITORS': 'Да, именно NaN. Вы знали, что это тоже считается числом в JavaScript? На самом деле это баг, у меня упал бекенд 😵‍💫',
      'ZERO_VISITORS': 'Погодите, 0 посетителей? что? как такое вообще возможно если вы сейчас это читаете? Сервер упал?! упс...',
      'TOO_LOW_VISITORS': 'Всего %v? я же работал над этим сайтом 6 месяцев!',
      'LINKS': {
        'INSTAGRAM_HIGHLIGHTS': 'Больше скриншотов в "Актуальном"',
        'GITHUB_SOURCES': 'Исходники сайта на GitHub'
      }
    },
    'DONATE': {
      'MAIN_BLOCK_HEADING': 'Донаты',
      'INFO': 'Помимо того, что я разрабатываю open source приложения, инструменты для разработчиков и просто полезные программы, веселые сайты (без рекламы!) и мобильные игры без доната, я также <a href="https://twitter.com/hlothdon" target="_blank" rel="noreferrer nofollow">жертвую</a> часть от своей зарплаты на благотворительность. Если вы хотите поддержать меня и мое творчество, а также помочь мне оплатить хостинг и домен, вы можете сделать это с помощью криптовалюты, задонатив на один из кошельков ниже. P.S. Если вы уже отправили пожертвование, свяжитесь со мной в <a href="https://t.me/hlothdev">Телеграме</a>, чтобы я мог поблагодарить вас лично!',
    }
  },
  '_DEFAULT_': {
    'ISO_CODE': 'en-US',
    'CARD_ABOUT': 'About',
    'CARD_DONATE': 'Donate',
    'CARD_ARCHIVE_LINK': 'Archive',
    'CARD_ME_FIRST_NAME': 'Viktor',
    'CARD_ME_LAST_NAME': 'Shchelochkov',
    'CARD_ME_SPECIALIZATION': 'Fullstack-developer',
    'FULL_SPECIALIZATION': 'Fullstack developer',
    'CARD_ME_CITY': 'Batumi',
    'CARD_PORTFOLIO': 'Projects',
    'CARD_PORTFOLIO_IN_PORTFOLIO': 'in portfolio',
    'CARD_SERVICES': 'Services',
    'ONION_SITE_LINK': 'Switch to onion version of this website',
    'THEME_SWITCH_TO_LIGHT': 'Switch to light theme',
    'THEME_SWITCH_TO_DARK': 'Switch to dark theme',
    'CHANGE_LANGUAGE': 'Change language',
    'LANGUAGE_RUSSIAN': 'Russian language',
    'LANGUAGE_ENGLISH': 'English language',
    'BACK': 'Return back to the main menu',
    'PAGES_TITLES': {
      'me': 'About me',
      'portfolio': 'Portfolio',
      'services': 'Services',
      'donate': 'Donates',
      'about': 'About this website'
    },
    'SERVICES_CARDS': {
      'landing': {
        'title': 'Landing page',
        'description': 'Landing page — a great way to convey information about your product or service, attract attention and start sales. I can integrate any APIs, payment gateways, impressive graphics and animation, as well as make the site responsive and optimized for search engines.',
        'price': 'With ready-made design — from 300$ and 5 hours'
      },
      'turnkey_website': {
        'title': 'Fullstack website',
        'description': 'Blog with NoSQL (like MongoDB) or SQL (like PostgreSQL) database, online store with payment processing and admin panel, data management system. Site layout, backend and microservices development, API, authorization, CI/CD setup, server and database setup — all this is included in a single service.',
        'price': 'Starting from 1000$ and 20 hours'
      },
      'bot': {
        'title': 'Chatbot or scripted bot',
        'description': 'Increase conversions, provide user feedback, and promote communities and channels by checking for subscription with a VKontakte, Telegram (via Bot API or on behalf of the user with MTProto Core API), WhatsApp or Viber bot, promote your product with a Discord bot, Yandex.Alice skill, Reddit app or bot working with any other API. Scenario development, testing and integration with your product.',
        'price': 'From 50$ for a Telegram bot and from 150$ for other platforms'
      },
      'other': {
        'title': 'Other',
        'description': 'Browser extensions (worked with Chrome, Firefox, Tor), plugins for existing platforms, modifications of open source projects, development of game servers, SMTP server setup and mailings, AI integration into your projects, code review.',
        'price': 'Let\'s talk (from 50$/hour)'
      }
    },
    'ABOUT_ME': {
      'HEADING': 'Hi, my name is Viktor, and I\'m a fullstack webapps developer',
      'INTRO': 'I am developing Progressive Web Apps (PWA), websites (frontend and backend), bots, developer tools, libraries, plugins, parsers and aggregators for large clients and private customers for more than two years. I have hundreds of hours of commercial development and thousands of hours of general practice with React, Next.js, TypeScript. My main frontend stack: <b>React, Next.js, Vite, Bun.sh and Elysia</b> (experience working with it since %date_fns_1610222400%). I use the Feature-Sliced Design methodology to organize files in the project, linters and code stylers in VSCode. I have experience integrating AI into websites, I develop many side projects with GPT (for example, BMO from Adventure Time in real life: OpenAI Whisper, GPT4).',
      'INTRO_IMAGE': 'White dog sticker from VKontakte social network',
      'BACKEND': 'In addition to the frontend, I also do backend, usually creating turnkey websites, deploying to Vercel, Netlify, GitHub/GitLab CI/CD or directly to a VPS with a Docker container or without. I have worked both under the supervision of senior developers in a team and as a team leader. I usually write the backend in <b>Node.js</b> (experience working with it since %date_fns_1590955200%), but I also had time to work with Rust, Go, Ruby.',
      'MY_PROJECTS': 'I have tried myself in many areas of IT and continue to experiment and find new technologies for myself. I keep my hand on the pulse of webdev life and know about all the new features of the w3c specification and browsers, new frameworks and try them.',
      'MY_PROJECTS_IMAGE': 'Yellow Kolobok with sign of the horns gesture',
      'FEATURED': 'All my projects you can see on <a href="/portfolio">portfolio page</a>, but here are some of them:',
      'FEATURED_1': '<b>Working with blockchain 2024Q1.</b> I developed a website with a frontend on Next.js, Tailwind and @shadcn/ui and a backend on Node.js, which automatically analyzes the OXEN blockchain for new ONS records, parses them using JSON RPC and decrypts values using Blake2b and argon2. The frontend is designed to work offline, so I wrote my own service worker with a background sync mechanism and a local database. This site also fully automatically integrates with the blockchain to create records, so the user does not need to buy cryptocurrency. I deployed my own SMTP server and set up 100% email delivery and integrated the site with YooKassa for payments and payment. <a href="/portfolio/ons-registry" target="_blank" rel="nofollow noreferrer">More.</a>',
      'FEATURED_2': '<b>Creating developer community 2024Q1.</b> I developed a website with a frontend on <b>Remix</b> and a backend on Node.js, on which developers can fully automatically publish a bot for the Session messenger. My script will fully verify the authorship of the bot by sending commands to a third-party messenger and check the bot\'s content with OpenAI Moderation. <a href="/portfolio/session-bots-directory" target="_blank" rel="nofollow noreferrer">More.</a>',
      'FEATURED_3': '<b>Working with data 2023Q4.</b> I developed a parser for a giant marketplace alone, created processes for analyzing gigabytes of collected data, came up with a data storage model and set up systematization algorithms in MongoDB. Result: thousands of rows of data with flexible filters, sorting and different user views in fractions of a second.',
      'FEATURED_4': '<b>Mastodon fork 2023Q3.</b> It was necessary to deploy Mastodon with significant changes: add monetization with BTCPayServer and automatic pooling of transactions from the cryptocurrency blockchain, modify the backend in Ruby to add protection from DDOS with hCaptcha, work with the PostgreSQL database and add a table to store issued badges next to the username. Later, I also developed a completely custom captcha service for the client, focused on Tor users.',
      'FEATURED_5': '<b>Opensource and bots 2024Q1</b> I developed 4 projects for the Session messenger community — a fork of Signal with open source, aimed at zero storage of personal data. I analyzed the Session code, removed all the part responsible for rendering (including everything related to Electron) and left only the backend (node.js). Thus, I got a headless messenger client, which is now used by dozens of developers to create their own bots. My project became the first open framework for bot development in the million-strong Session community. <a href="/portfolio/session-messenger-nodejs" target="_blank" rel="nofollow noreferrer">More.</a>',
      'FEATURED_6': '<b>Web-based editor 2022Q3</b> A web application created as a replacement for the inconvenient official SiQuester application, which has gained huge popularity among fans of "Your game". Built on React and MaterialUI, the frontend analyzes the game\'s xml files and allows you to edit all questions and topics in a convenient interface. It has a built-in file manager with storage in IndexedDB, where files are Blobs and can be imported both through the system\'s built-in file picker and through downloading from a URL. <a href="/portfolio/sipacker" target="_blank" rel="nofollow noreferrer">More.</a>',
      'FEATURED_7': '<b>Students exams generator 2021Q1</b> This is a React and Bootstrap open source site for schoolchildren, made by me in 9th grade. This is a site that generates tasks for exam preparation, which has a code editor and a js and python (on WebAssembly) compiler, an archive generator with jszip, a table generator with xlsx.js <a href="/portfolio/огэ-генератор" target="_blank" rel="nofollow noreferrer">More.</a>',
      'FEATURED_8': '<b>Work experience.</b> During my career, I have also worked on other projects, for example <a href="https://hloth.dev/portfolio/jswitcher" target="_blank" rel="nofollow noreferrer">Figma plugin</a> for fast cross-platform layout design for the design team of the Latvian online marketplace Joom; <a href="https://hloth.dev/portfolio/atmosseriesbot">Telegram bot</a> for mass mailings and statistics of referral registrations with a control panel directly inside the bot with MongoDB integration (300k active users at peak); <a href="/portfolio/hloth-telegram-greeting">auto-responder in Telegram</a> and <a href="/portfolio/telegram-channel-mirror-mtproto">bot that recreates a mirror of any Telegram channel</a>, when I was studying Telegram MTProto (Telegram User API); <a href="/portfolio/bot-biz-panels">admin panel x5.io</a> with apollo graphql, grpc and MaterialUI integration and other projects not in my specialty',
      'PARSING': 'Lately I\'ve started getting into API wrappers, and I\'m learing Golang since February of 2022 to work with processes memory on low-level to create games modifications and software. In past I worked with screen-scraping from websites and data parsing: I\'ve already created several\nJS libraries to work with the closed API of some websites, and they include working with bare HTML, working with\nSignalR directly and other things. Also I\'m passionate about mobile development and I\'m learning Expo (React Native) since August of 2021.',
      'PARSING_IMAGE': 'Shrek looking at the left (right relative to him)',
      'ENDING': 'I worked in teams with task managers GitLab Boards, Jira, Trello. <b>Right now I\'m considering offers for relocation to the USA for full-time remote work (from 150.000$ annually)</b> More detailed information about my skills you can find <a href=\'https://hloth.dev/portfolio\' target="_blank" rel="noreferrer">in portfolio</a> and in my <a href=\'https://hloth.dev/cv\' target="_blank" rel="noreferrer">CV</a>.',
      'ENDING_IMAGE': 'UWU emoji',
      'CATEGORIES': {
        'frontend': 'Frontend',
        'backend': 'Backend',
        'devops': 'DevOps',
        'apps': 'Apps',
        'bot': 'Bot development',
        'ai': 'AI (Artificial Intelligence)',
        'gamedev': 'Game development',
        'design': 'Design',
        'mobile': 'Mobile'
      },
      'STARTED_LEARNING': 'Learning since',
      'OPEN_PROJECTS_CAPTION': 'Open projects',
      'WHAT_IS_HLOTH': {
        'HEADING': 'What is "hloth"?',
        'TEXT': 'hloth (rus. хлоз, read as [h l ó θ]) — is a nickname I came up with in November of 2021, when I was creating freelance profile. This nickname isn\'t just a set of letters, because I had a list of requirements:',
        'CRITERIA': [
          'from 5 to 7 letters',
          'related to programming or isn\'t related to anything',
          'is not an existing word and is not similiar to negative words',
          'read in 1 or 2 syllables',
          '(optional) similiar to «Vitya»'
        ],
        'TEXT2': 'On top of that, a domain must be available with such a name in the .dev zone or in the zone ending this word. <br></br>Did you know that in ancient Greek mythology, the god Chaos is the immortal god of generations, which indicates that my creativity has no boundaries and will exist as long as the world itself is alive? This is why I took such nickname, but with slight corrections, so that the client won\'t think I\'m unorganized. <br></br>Of course, this is a joke, and this text is here just to fill the space on the left so that you can see the technologies I use on the right side of this page (above this block on mobile verson) and spend more time to improve SEO. Fun fact: while translating this text to English, I was trying to find god that has closer pronounciation to "hloth" and I found "hoth", however, he was blind and killed his brother, so I decided to stay on Chaos 🤓 I came up with this nickname randomly, while picking up simple endings for "hl". My friends offered me some other options:',
        'VARIANTS': [
          'vítěz — characters out of ASCII is not recomended to be used in domain name. Also I wanted to print domain name on products in real life, and not every average user and potential client knows, how to type Czech alphabet letters',
          'megakiller — thanks, Sasha',
          'pykov — proposed by an AI generating business names (translates as «farty» from Russian)',
          'vitezhorny',
          'weetapp',
          'viapp — the idea was that vi can be heard as we (our)',
          'vitsch — short for vityaschel, which is also short form of my initials',
          'devitya — was taken already, but my husband has nickname devio'
        ],
        'TEXT3': 'All these options were not even considered, when I came up with hloth.'
      },
      'ABOUT_ME_AS_PERSON': {
        'HEADING': 'About me (as a person)',
        'INTRO': 'I once heard a wise man say: “A good resume should have four pages: 1. Work experience, 2. Education, 3. Skills, 4. A little about you.” So, you have reached the fourth page of my resume (in the form of a website), and now I\'d like to tell you a little about myself as a person.',
        'TEXT': 'Most of all I love to travel with my husband ❤️, who is a professional game developer. We have been together for %date_fns_1680377388% and together we are going to conquer the whole world! You will often see us in <a href="https://instagram.com/vityaczech">my Instagram</a>. In addition to traveling (and short trips on electric scooters), I love sports and a healthy lifestyle, listen to mashups and ru-indie, run several blogs and <a href="https://www.youtube.com/@hlothdev/videos">YouTube channel</a> for my dear programmer colleagues.\n\nI started programming at the age of 6 on Pascal.ABC and since then I have tried to develop everything. I wrote my first game at the age of 7 on Pascal, then on Scratch, then on Kodu Game Lab, at 13 I published my <a href="/portfolio/roller-ride">first mobile game</a> on Unity in PlayMarket. <a href="/portfolio/camlit">The first website</a> I made in the second grade about my school, so I started learning HTML and at the age of 14 I got to writing programs in JavaScript. In the 7th grade, I made projects every year, spoke at IT conferences and won many diplomas. At the same time, I wrote an online shooter completely alone with a backend on PHP, Python and MySQL and rented my own VPS, on which I experimented with Linux and git. At the age of 15, I was already studying Kubernetes and Docker, React and Next.js, React Native and mobile app development. I got my first job at 16, but at the same time I was studying other technologies, for example, I wrote in Go and Scala, studied Telegram MTProto and Bot API, and by the age of 18 in my <a href="https://github.com/vityaschel">GitHub account</a> there were already 150+ repositories and <a href="https://www.npmjs.com/~vityaschel">27 published packages in npmjs</a>.\n\nAlso, every month I donate part of my salary to charity and blog about it. <a href="https://twitter.com/hlothdon">My charity blog on Twitter</a>.\n\nNow I am %date_fns_1120590000%, I live in the city of Batumi, Georgia.'
      }
    },
    'PORTFOLIO': {
      'COLUMNS': {
        'NAME': 'Name',
        'DESCRIPTION': 'About',
        'TECHNOLOGIES': 'Technology stack',
        'DATES': {
          'DEV_START': 'Dev. started',
          'RELEASE': 'Released',
          'ABANDON': 'Abandoned'
        }
      },
      'SEARCH': {
        'PLACEHOLDER': 'Search in portfolio: name, description, technologies',
        'EXAMPLE': 'e.g. «API» or «Redux, React Native»',
        'CLEAR': 'Clear',
        QUICK_SEARCH: {
          TITLE: 'Quick search',
          WEB: 'Frontend and web',
          MOBILE: 'Mobile',
          BACKEND: 'Backend',
          DATABASES: 'DB',
          DESIGN: 'Design',
          GAME_DEV: 'Gamedev',
          BOTS: 'Bots',
          DEV_OPS: 'DevOps',
          AI: 'AI',
          PAYMENTS: 'Payments',
          SOFTWARE: 'Software',
          MODELING: '3D',
          OTHER: 'Other',
        }
      },
      'CATEGORIES': {
        'game/windows10': 'Windows 10 video-game',
        'game/android': 'Android video-game',
        'website': 'Web-site',
        'bot/reddit': 'Reddit bot',
        'figma_plugin': 'Figma plugin',
        'bot/telegram': 'Telegram bot',
        'npmjs_library': 'JS library',
        'app': 'App',
        'bot/vk': 'VKontakte bot',
        'website/darknet': 'Tor Hidden Services website',
        'bot/yandex_alice': 'Alice bot',
        'chrome_extension': 'Chrome extension',
        'stream': 'Stream',
        'programming_language': 'Programming language',
        'minecraft_map': 'Minecraft map',
        'instagram_mask': 'Instagram mask',
        'developer_tool': 'Developer tool',
        'widget': 'Widget',
        'robot': 'Robot',
        'utility': 'Utility',
        'other': 'Other',
      },
      'FILTERS': {
        'ORDERS_ONLY': 'Orders only',
        'PERSONAL_WEBSITES_ONLY': 'My personal websites only',
        'RECENT_PROJECTS_ONLY': 'Projects released in last 12 months only'
      },
      'HIDDEN_PROJECT': {
        'NAME': 'Hidden project',
        'DESCRIPTION_PREVIEW': 'Click to read more',
        'DESCRIPTION': 'Information about this project is hidden, because that\'s what the client wanted (if it is the order) or I just don\'t want to share it publically; but I\'m ready to discuss it personally, just tell me this ID: %PROJECT_ID%.'
      },
      'SHOCK_PROJECT': {
        'NAME': 'Shocking project',
        'DESCRIPTION_PREVIEW': 'Click to reveal details',
        'DESCRIPTION': 'The specified content may seem offensive and shocking to some people, however it is valueable enough, to leave it in my portfolio. If you want to see information about this project and other projects from the same category, please press the Show button below.'
      },
      'PROJECT_DIALOG': {
        'LINKS_LABEL': 'Links',
        'SHARE_LABEL': 'Share',
        'CLOSE_LABEL': 'Close',
        'LINK_COPIED': 'Link was copied',
        'SHOW_SHOCKING_PROJECTS': 'Show',
        'TRANSLATE_DESCRIPTION_LABEL': 'Translate to English',
        'TRANSLATE_DESCRIPTION_CODE': 'en'
      },
      'TAGS': {
        'ORDER': 'Order'
      },
      'DATES': {
        'DEV_START': 'Dev. started',
        'RELEASE': 'Released',
        'ABANDON': 'Abandoned'
      }
    },
    'ABOUT_THIS_WEBSITE': {
      'HEADING': 'Website hloth.dev',
      'TEXT': 'This is my sixth personal site. It contains information about me, my projects, is a kind of portfolio and resume at the same time, and even serves as a tool for donations to me. <br></br>Some information about my previous personal websites:',
      'PREVIOUS_SITES': [
        'Website on uCoz CMS (2015-2016) — My first website, which had a lot of games, tests and other stuff, inspired by legendary girl Diana website <a href="http://devo4ka‑diano4ka.narod.ru/" target="_blank" rel="noreferrer">http://devo4ka-diano4ka.narod.ru/</a>',
        'Website on hostinger (2017-2018) — Website I used to learn web: I created pages, watched how html works and I even created my first CAPTCHA with actual check',
        'Projects map (first quarter of 2020) — Website with my projects map, which had a few bubbles with projects info, connected with lines, if you hover cursor above any of it, you could read description. It was made on self-made engine written in JavaScript',
        'Projects gallery (second quarter of 2020) — Right after I learned JS theory, I remade my website, now it looked much more better and stylish, had nice color palette, information about me and my portfolio (only popular projects), and the most important thing is that it had mobile version',
        'Landing with cosmic design (fourth quarter of 2020) — Website with animations, parallax, shaders for gradients in JavaScript and OpenGL, contact form, linked with telegram bot, which is linked to SMTP-server for feedback. Unfortunately, it was closed after just a month because of difficulties with creating mobile version and lags, because I made it in vanilla JS. In just a week I started learning React.'
      ],
      'TEXT2': 'While you\'re still here, why don\'t you take a look at <a href="https://hloth.dev/robots.txt" target="blank" rel="noreferrer">robots.txt</a> file? In just 500 KB, allowed by Google and Yandex crawlers, I put ASCII arts, jokes, songs texts, first 100 000 digits of Pi, transcript of single «Adventure Time» episode and even 70 seconds fragment of «Shrek» movie audio and more. All tools for converting and formatting I coded myself with Node.js and FFMpeg.',
      'NAN_VISITORS': 'Yes, exactly NaN. Did you know that it\'s a JavaScript special state of Number? Actually it\'a bug, my backend is down 😵‍💫',
      'VISITORS_THIS_MONTH': 'Visitors this month',
      'ZERO_VISITORS': 'Wait, 0 visitors? How is this even possible if you are on the website? Is the server down?! oops...',
      'TOO_LOW_VISITORS': 'Wait, only %v? I was working on this website for 6 months :(',
      'LINKS': {
        'INSTAGRAM_HIGHLIGHTS': 'More screenshots in "Highlights"',
        'GITHUB_SOURCES': 'Website sources on GitHub'
      }
    },
    'DONATE': {
      'MAIN_BLOCK_HEADING': 'Donates',
      'INFO': 'In addition to the fact that I develop open source applications, developer tools and just useful programs, fun websites (without ads!) and mobile games without donate, I also <a href="https://twitter.com/hlothdon" target="_blank" rel="noreferrer nofollow">donate</a> part of my salary to charity. If you want to support me and my creativity, and also help me pay for hosting and domain, you can do this with cryptocurrency, by donating to one of the wallets below. P.S. If you have already sent a donation, contact me in <a href="https://t.me/hlothdev">Telegram</a> so I can thank you personally!',
    }
  }
}

export default translation