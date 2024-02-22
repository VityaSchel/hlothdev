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
    BOTS: string
    PARSING: string
    PARSING_IMAGE: string
    WORK_EXPERIENCE_LABEL: string
    WORK_EXPERIENCE_BLOCK: string
    PLAYLIST_HINT: string
    ENDING: string
    ENDING_IMAGE: string
    CATEGORIES: {
      frontend: string
      backend: string
      apps: string
      bot: string
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
        DEVSTART: string
        RELEASE: string
        ABANDON: string
      }
    }
    SEARCH: {
      PLACEHOLDER: string
      EXAMPLE: string
      CLEAR: string
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
    DONATES_HISTORY: string,
    FORM: {
      USERNAME: string,
      AMOUNT: string
    }
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
    'CARD_ME_SPECIALIZATION': 'Веб-разработчик',
    'FULL_SPECIALIZATION': 'Разработчик веб-приложений',
    'CARD_ME_CITY': 'Самара',
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
        'description': 'Поднимите продажи продукта и расскажите о нем максимально просто и ясно с помощью лендинга — одностраничного сайта с запоминающимся контентом и интерактивными элементами',
        'price': 'С макетом — от 10 000 ₽, без макета — от 15 000 ₽'
      },
      'turnkey_website': {
        'title': 'Разработка сайта «под ключ»',
        'description': 'Блог с базой данных MongoDB или SQL, СМИ, интернет-магазин с приемом оплаты и админ-панелью — верстка сайта, разработка бекенда, настройка сервера и баз данных входит в единую услугу',
        'price': 'От 25 000 ₽'
      },
      'bot': {
        'title': 'Разработка бота',
        'description': 'Увеличьте конверсии, предоставьте пользователям обратную связь и продвигайте сообщества и каналы проверкой на подписку с ботом ВКонтакте, Telegram (Bot API и MTProto), WhatsApp или Viber,продвигайте свой продукт с ботом Discord, навыком Яндекс.Алиса, приложением Reddit или ботом, работающим с другими API',
        'price': 'От 5 000 ₽'
      },
      'other': {
        'title': 'Разработка уникального инструмента',
        'description': 'Разработка расширений для браузеров, разработка Minecraft-сервера, настройка почтового сервера и рассылок, вспомогательные плагины для Figma, читы и другое',
        'price': 'Договорная цена'
      }
    },
    'ABOUT_ME': {
      'HEADING': 'Привет, меня зовут Виктор, и я специалист в области разработки веб-приложений',
      'INTRO': 'Я профессионально занимаюсь разработкой приложений PWA, веб-сайтов, ботов и инструментов для крупных клиентов и частных заказчиков более двух лет, а общий опыт разработки сайтов у меня более 5 лет. Мой основной стек для фронтенда: <b>React, Next.js, GraphQL, Preact и Vite</b>. В мои обязанности во время разработки входит мобильный, кросс-браузерный и семантический адаптив, чтобы сайт смотрелся одинаково хорошо\nна всех устройствах и во всех браузерах.',
      'INTRO_IMAGE': 'Стикер белой собаки Спотти ВКонакте с жестом Лайк',
      'BACKEND': 'Помимо фронтенда я занимаюсь и бекендом, для своих клиентов создаю сайты «под ключ», настраивая сервер, почту и создавая сам сайт с нуля по желанию заказчика,\nпомогая реализовать сайт с учетом конкретных технических требований и по макету Figma/Photoshop/Illustrator, или работая в команде с другими разработчиками. Мой стек: <b>Node.js (%date_fns_1590955200%) или Go (%date_fns_1643659200%)</b>.',
      'MY_PROJECTS': 'В своих проектах я чаще всего использую веб-серверы <b>Express и Fastify с Nginx</b> (ранее 3 года работал с Apache), базы данных\n<b>MongoDB, Redis и LevelDB</b>, подбираю подходящую базу данных с учетом размера проекта (ранее работал с MySQL и PostgreSQL). Работал с платежными шлюзами QIWI p2p и ЮКасса.',
      'MY_PROJECTS_IMAGE': 'Колобанга с жестом Коза',
      'BOTS': 'Более четырех лет я разрабатываю <b>ботов для разных платформ, таких как ВКонтакте, Телеграма, Дискорда, Реддита, Яндекс.Алисы</b>, также разработал несколько расширений для\nбраузеров, плагины для Figma, инструменты для разработчиков, такие как библиотеки.\nСейчас я учу Kubernetes, работал с <b>Docker</b>, и по желанию создам образ/контейнер вместо архива с проектом, для\nбыстрого масштабирования и развертки между серверами или ci/cd (или настрою самостоятельно с Netlify).',
      'PARSING': 'Я разработал несколько врапперов API, а с февраля 2022 года изучаю Golang и работаю с оперативной памятью для создания модификаций игр и программ. Также я работал со скрейпингом информации с сайтов и парсингом данных: я создал уже несколько\nбиблиотек JS для работы с закрытым API некоторых сайтов, причем они включают в себя как работу с голым HTML, так и\nработу напрямую с SignalR. Еще я увлекаюсь мобильной разработкой и с августа 2021 года работаю с Expo (React Native).',
      'PARSING_IMAGE': 'Шрек смотрит налево (направо относительно него)',
      'WORK_EXPERIENCE_LABEL': 'Опыт работы',
      'WORK_EXPERIENCE_BLOCK': '<ul>  <li>Разработал <a href="https://hloth.dev/portfolio/bot-biz-landing" target="_blank" rel="noreferrer">лендинг</a> для сайта Bot.Biz, занимающегося коммерческой деятельностью в сфере ботов, сайтов и приложений. После успешного опыта работы со мной, заказчик пригласил на полную занятость в течение двух месяцев (с июня 2022 по август), на что я согласился и работал над <a href=\'https://hloth.dev/portfolio/bot-biz-panels\' target="_blank" rel="noreferrer">панелью управления</a> в команде разработчиков</li>  <li>Разработал <a href="https://hloth.dev/portfolio/jswitcher" target="_blank" rel="noreferrer">плагин Figma</a> для быстрой верстки кросс-платформерных макетов для команды дизайнеров Латвийского онлайн-маркетплейса Joom</li>  <li>Разработал <a href="https://hloth.dev/portfolio/atmosseriesbot" target="_blank" rel="noreferrer">Телеграм-бота</a> с панелью управления для канала AtmosSeries, публикующего рецензии на фильмы в Телеграм и Тикток. У бота на момент написания текста 84 тыс. активных пользователей, и еще 30 тыс. остановили и заблокировали его. Бот позволяет администраторам делать рекламные рассылки и вести статистику реферральных регистраций</li><li>После разработки бота, заказчик предложил работать дальше, и мы совместно создали <a href="https://hloth.dev/portfolio/atmoscraft" target="_blank" rel="noreferrer">сервер для игры Minecraft и сайтом с донатом</a> (пользователь платит деньги и получает привилегии)</li>  <li>Работал в команде Национального Центра Исследований в Казахстане, разрабатывал <a href="https://hloth.dev/portfolio/lis-nce" target="_blank" rel="noreferrer">CRM для сотрудников центра</a> и оцифровывал текстовые формы с результатами обследований</li> <li>Разработал <a href="https://hloth.dev/portfolio/nmchatbot" target="_blank" rel="noreferrer">чат-бота ВКонтакте</a> для сети пабликов «Найди меня» в разных городах, суммарный охват которых достигает 200 тыс. пользователей. Бот принимает оплату, автоматически удаляет посты и отправляет уведомления о срочных поисках. Дополнительные инструменты этого бота включают в себя поиск рекламных записей в похожих пабликах по критериям и модерацию контента, основывающуюся на схожести фото и уникальности текста</li> </ul>',
      'PLAYLIST_HINT': 'Просто хотите увидеть, на что я способен? Посмотрите <a href="https://www.youtube.com/playlist?list=PL_R5-1HYwG_WkxqeSQgkoCFxIsh77l4Wm" target="_blank" rel="noreferrer">этот плейлист на YouTube</a> с демонстрациями того, что я уже сделал!',
      'ENDING': 'В командах работал с таск-менеджерами GitLab Boards, Jira, Trello. <b>Предложения работать на полную занятость (более 5 часов в день), с оплатой за процент или полностью после выполнения работ сейчас не рассматриваю.</b> Более подробную информацию о моих навыках вы можете найти <a href=\'https://hloth.dev/portfolio\' target="_blank" rel="noreferrer">в портфолио</a> и в моем <a href=\'https://github.com/VityaSchel\' target="_blank" rel="noreferrer">аккаунте GitHub</a>, который я веду\nс 2019 года, создаю полезные инструменты и стремлюсь улучшать DX в сообществе разработчиков JS :) Если у вас еще остались вопросы или вы готовы обсудить проект со мной, пишите мне в Телеграм: <a href=\'tg://resolve?domain=hlothdev\'>@hlothdev</a> или в другие соц. сети, перечисленные на этой странице.',
      'ENDING_IMAGE': 'UWU эмодзи',
      'CATEGORIES': {
        'frontend': 'Фронтенд',
        'backend': 'Бекенд',
        'apps': 'Приложения',
        'bot': 'Разработка ботов',
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
          'devitya — было уже занято'
        ],
        'TEXT3': 'Все эти варианты даже не рассматривались, когда я придумал hloth.'
      },
      'ABOUT_ME_AS_PERSON': {
        'HEADING': 'Обо мне (как о человеке)',
        'INTRO': 'Однажды я услышал, как мудрый человек сказал: «В хорошем резюме должно быть четыре страницы: 1. Опыт работы, 2. Образовние, 3. Скиллы, 4. Немного о Вас». Итак, вы добрались до четвертой страницы моего резюме (в виде сайта), и сейчас я хотел бы рассказать немного о себе как о человеке.',
        'TEXT': 'Я серьезный человек, но только до тех пор, пока меня кто-нибудь не рассмешит осудительным анекдотом. Моя жизненная цель — выбраться из России в Чехию, выучив Чешский язык (поэтому даже не думайте ждать, пока я снижу цены, лучше заказывайте прямо сейчас!), но пока я знаю только Ahoj! Jmenuji Vitez Alkalie. Ja jsem webu-programator. Čau! Я уже привык к тому, что неоплачиваемые работники в команде уходят через 7 дней (но я уйду раньше). Я слушаю мешапы и видео на ютубе вместо музыки, потому что у меня нет денег на платные подписки. Мечтаю научиться играть на фортепиано и гитаре, чтобы не платить композиторам для создания музыки к моим играм. Сломал макбук через 2 месяца после покупки, но я все равно очень ответственный. С марта 2021 года работаю на ноутбуке через внешний монитор, поэтому не смогу в выходные в 2 часа ночи за городом срочно переписать код в вашем проекте. Когда-нибудь я обязательно накоплю деньги на ремонт диспеля и смогу как настоящий программист ходить с макбуком в Старбакс 🧋'
      }
    },
    'PORTFOLIO': {
      'COLUMNS': {
        'NAME': 'Название',
        'DESCRIPTION': 'Описание',
        'TECHNOLOGIES': 'Технологии',
        'DATES': {
          'DEVSTART': 'Начало разработки',
          'RELEASE': 'Релиз',
          'ABANDON': 'Приостановка'
        }
      },
      'SEARCH': {
        'PLACEHOLDER': 'Поиск по портфолио: название, описание, технологии',
        'EXAMPLE': 'Например, «Лендинг» или «Redux, React Native»',
        'CLEAR': 'Очистить'
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
        'developer_tool': 'Инструмент для разработчиков'
      },
      'FILTERS': {
        'ORDERS_ONLY': 'Только заказы',
        'PERSONAL_WEBSITES_ONLY': 'Только мои персональные сайты',
        'RECENT_PROJECTS_ONLY': 'Только проекты за последние 12 месяцев'
      },
      'HIDDEN_PROJECT': {
        'NAME': 'Скрытый проект',
        'DESCRIPTION_PREVIEW': 'Нажмите, чтобы узнать подробнее',
        'DESCRIPTION': 'Информация об этом проекте скрыта, потому что её разглашение противоречит моим принципам о сохранении конфиденциальности или может дискредитировать меня. Если этот проект вас заинтересовал, я готов рассказать о нем лично, для этого назовите его номер: %PROJECT_ID%.'
      },
      'SHOCK_PROJECT': {
        'NAME': 'Нежелательный контент',
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
      }
    },
    'ABOUT_THIS_WEBSITE': {
      'HEADING': 'Сайт hloth.dev',
      'TEXT': 'Это мой шестой по-счету персональный сайт. Он содержит информацию обо мне, моих проектах, является неким портфолио и резюме одновременно, и даже служит инструментом для пожертвований мне. Если вам все еще интересно, почему опубликовав игру в Steam и получая заказы со фриланса, я имею совесть просить донаты, то во-первых, я разработчик open source приложений, инструментов для разработчиков и просто полезных программ, веселых сайтов (без рекламы!) и мобильных игр без доната, а во-вторых позвольте привести мне немного статистики по моей прибыли со всех моих продуктов (за исключением Stigfinnare, потому что это запрещено условиями договора NDA от Steam Direct): ровно 0 долларов, что в рублях по текущему курсу тоже ноль! На моих сайтах нет рекламы, потому что с АдБлоком бороться бесполезно (но я успешно внедрил прокси для Google Аналитики, который не блокируется uOrigin), я не встраиваю платные подписки в игры, а деньги я получаю только с донатов друзей (привет Ване Севрюкову и Артуру Фейтуллаеву). С донатов за 2021 год я получил меньше 1000 рублей, а что до Stigfinnare, так я в итоге так и не вышел даже в ноль по прибыли. <br></br>Немного информации о моих предыдущих сайтах:',
      'PREVIOUS_SITES': [
        'Сайт на конструкторе uCoz (2015-2016) — Мой первый сайт, на котором были игры, тесты и другие штучки, чем-то вдохновлён легендарным сайтом <a href="http://devo4ka‑diano4ka.narod.ru/" target="_blank" rel="noreferrer">девочки Дианочки</a>',
        'Сайт на hostinger (2018-2019) — Сайт на котором я учился на практике веб-разработке: я создавал страницы, смотрел как работает html и даже смог установить свою первую «капчу» с проверкой на стороне сервера',
        'Карта проектов (первая четверть 2020) — Сайт на котором была карта с проектами. Всего было несколько пузырьков, а связь между ними обозначалась линиями. Если навести курсор, то появлялось описание. Сделано на написанном мною движке на JavaScript 😳',
        'Галерея проектов (вторая четверть 2020) — Сразу после того, как я выучил теорию по JS, я переделал свой сайт, он уже выглядел более современно, имел приятную палитру цветов, информацию обо мне и мое портфолио (только самые главные проекты), и впервые мой сайт имел адекватную мобильную версию',
        'Лендинг с космическим дизайном (четвертая четверть 2020) — Сайт с анимациями, параллаксом, шейдером для градиентов в JavaScript и OpenGL от stripe.com, формой для связи, связанной с телеграм-ботом, который, в свою очередь, связан с SMTP-сервером для обратной связи. К сожалению, был закрыт через месяц из-за сложностей с созданием мобильной версии и лагами, потому что сайт был сделан на ванильном JS. Всего через неделю я выучил React и сайт стал бесполезен'
      ],
      'TEXT2': 'Кстати, пока вы еще здесь, почему бы вам не взглянуть на файл <a href="https://hloth.dev/robots.txt" target="blank" rel="noreferrer">robots.txt</a>? В 500 КБ, разрешенные поисковиками Google и Яндекс, я смог уместить ASCII-рисунки, анекдоты, текста песен, 100 000 первых цифр числа Пи, транскрипт эпизода «Времени приключений» и даже 70-секундный аудио-фрагмент из «Шрека» и другое. Все вспомогательные инструменты для конвертации и форматирования текста я написал сам, используя Node и FFMpeg. Предупреждение: слабонервным просмотр запрещается!',
      'VISITORS_THIS_MONTH': 'Посетителей за этот месяц',
      'NAN_VISITORS': 'Да, именно NaN. Вы знали, что это тоже число? Точнее, его особое состояние. Почитайте на Википедии. Ладно, это баг, может у вас фильтр в браузере, а может сервер упал. Обещаю исправить к вашему следующему визиту 😵‍💫',
      'ZERO_VISITORS': 'Стоп, 0 посетителей? что? а как такое вообще возможно если вы сейчас это читаете? Сервер упал?! Прошу прощения за этот инцидент...',
      'TOO_LOW_VISITORS': 'Стоп, всего %v? о боже я же работал над этим сайтом 6 месяцев :(',
      'LINKS': {
        'INSTAGRAM_HIGHLIGHTS': 'Больше скриншотов в "Актуальном"',
        'GITHUB_SOURCES': 'Исходники сайта на GitHub'
      }
    },
    'DONATE': {
      'MAIN_BLOCK_HEADING': 'Донаты',
      'DONATES_HISTORY': 'История донатов',
      'FORM': {
        'USERNAME': 'Ваше имя',
        'AMOUNT': 'Сумма'
      }
    }
  },
  '_DEFAULT_': {
    'ISO_CODE': 'en-US',
    'CARD_ABOUT': 'About',
    'CARD_DONATE': 'Donate',
    'CARD_ARCHIVE_LINK': 'Archive',
    'CARD_ME_FIRST_NAME': 'Viktor',
    'CARD_ME_LAST_NAME': 'Shchelochkov',
    'CARD_ME_SPECIALIZATION': 'Web-developer',
    'FULL_SPECIALIZATION': 'Web-apps developer',
    'CARD_ME_CITY': 'Samara',
    'CARD_PORTFOLIO': 'Projects',
    'CARD_PORTFOLIO_IN_PORTFOLIO': 'in portfolio',
    'CARD_SERVICES': 'Services',
    'ONION_SITE_LINK': 'Switch to onion-service with this site',
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
        'description': 'Increase product sales and tell about it as simply and clearly as possible using a landing page - a one-page website with fresh looking design and interactive elements',
        'price': 'With your layout — starting form 119 €, if you have no layout — from 179 €'
      },
      'turnkey_website': {
        'title': 'Turnkey website',
        'description': 'Blog with MongoDB or SQL Database, mass media, online shop with e-commerce/payments and admin panel — frontend+backend development, VPS and Database setup in single service',
        'price': 'Starting from 299 €'
      },
      'bot': {
        'title': 'Chatbot or scripted bot',
        'description': 'Increase conversions, provide users with feedback and promote channels with VKontakte, Telegram (Bot API and MTProto), WhatsApp or Viber bot, promote your product with a Discord bot, Yandex.Alice skill, Reddit app or a bot that works with other APIs',
        'price': 'Starting from 59 €'
      },
      'other': {
        'title': 'Other',
        'description': 'Browsers extensions, Minecraft-server development, mail server and mailings setup, plugins for Figma, cheats and other stuff',
        'price': 'Let\'s talk'
      }
    },
    'ABOUT_ME': {
      'HEADING': 'Hi, my name is Viktor, and I\'m a web-applications developer from Russia',
      'INTRO': 'I have been professionally developing PWA apps, web-sites bots and tools for major clients for over two years, and I have over five years of overall web-development experience. My main frontend stack is <b>React, Next.js, GraphQL, Preact, and Vite</b>. My responsibilities while developing website include mobile, cross-browser, and semantic responsive development so that\nthe site looks equally good on all devices and in all browsers.',
      'INTRO_IMAGE': 'White dog sticker from VKontakte social network',
      'BACKEND': 'In addition to the frontend, I also work with backend. For my clients I create turnkey websites, setting up the hosting, optionally mail server, and develop the site itself from scratch at the request of the customer, according to the\nFigma/Photoshop/Illustrator layout or working in team with other developers. My stack: <b>Node.js (%date_fns_1590955200%) or Go (%date_fns_1643659200%)</b>',
      'MY_PROJECTS': 'In my projects, I mostly use\n<b>Express and Fastify</b> web servers with Nginx reverse proxy or CGI (recently moved from Apache with which I was\nworking for three years), <b>MongoDB, Redis and LevelDB</b> databases, choosing the appropriate database depending on\nthe size of the project (previously I worked with MySQL and PostgreSQL)',
      'MY_PROJECTS_IMAGE': 'Yellow Kolobok with sign of the horns gesture',
      'BOTS': 'For more than four years I have been developing <b>chat bots for platforms as VKontakte, Telegram, Discord, Reddit, Yandex.Alice</b>, I made several browser extensions, plugins for Figma, developer tools such as libraries, and other useful instruments. Now I am learning Kubernetes, already have significant experience of working with <b>Docker</b>, and, at your request, I could\ncreate a container instead of a ZIP archive with a project, for quick scaling and deployment between your servers and ci/cd (or setup it myself with Netlify).',
      'PARSING': 'Lately I\'ve started getting into API wrappers, and I\'m learing Golang since February of 2022 to work with processes memory on low-level to create games modifications and software. In past I worked with screen-scraping from websites and data parsing: I\'ve already created several\nJS libraries to work with the closed API of some websites, and they include working with bare HTML, working with\nSignalR directly and other things. Also I\'m passionate about mobile development and I\'m learning Expo (React Native) since August of 2021.',
      'PARSING_IMAGE': 'Shrek looking at the left (right relative to him)',
      'WORK_EXPERIENCE_LABEL': 'Work Experience',
      'WORK_EXPERIENCE_BLOCK': '<ul>  <li>I made a <a href="https://hloth.dev/portfolio/bot-biz-landing" target="_blank" rel="noreferrer">landing</a> for Bot.Biz, who are developing commercial soltions in IT-sphere, such as bots, websites and apps. After successfull experience of working with me, my client invited me to work fulltime for two months (starting from June of 2022 to August 2022). I agreed and was working in developer team on <a href=\'https://hloth.dev/portfolio/bot-biz-panels\' target="_blank" rel="noreferrer">admin control panel</a></li>  <li>I have developed <a href="https://hloth.dev/portfolio/jswitcher" target="_blank" rel="noreferrer">Figma plugin</a> for a fast cross-platform layout design for designers team of Latvia fintech company Joom</li>  <li>I have developed a <a href="https://hloth.dev/portfolio/atmosseriesbot" target="_blank" rel="noreferrer">Telegram bot</a> with an admin control panel, installed on a customer\'s server for the AtmosSeries      channel in Telegram, that posts movies recommendations in Telegram and TikTok. The bot had 84k active users at the time of writing this and another 30k users stopped it. The bot allows admins to distribute ads in       private chat with bot and count referral registrations</li>  <li>Previous client liked me as a developer, so we continued to work and created a <a href="https://hloth.dev/portfolio/atmoscraft" target="_blank" rel="noreferrer">Minecraft server and a website</a> with       payments processing</li>  <li>I worked in the team of the National Research Center in Kazakhstan, we were working on <a href="https://hloth.dev/portfolio/lis-nce" target="_blank" rel="noreferrer">CRM for the       center\'s employees</a>, and my job was to create a custom React component</li><li>I have developed <a href="https://hloth.dev/portfolio/nmchatbot" target="_blank" rel="noreferrer">VKontakte chatbot</a> (VK is Russian analog of Facebook) for a network of groups «Find me» in many cities. In total, network has a reach of 200k users. Bot processes payments, automatically deletes posts and sends notifications to admins about urgent searches. Additional tools of this bot for admins includes search of ads posts in similar groups and content moderation based on photo similarity and text uniqueness</li></ul>',
      'PLAYLIST_HINT': 'Just want to see what I can do? Check out this <a href="https://www.youtube.com/playlist?list=PL_R5-1HYwG_WkxqeSQgkoCFxIsh77l4Wm" target="_blank" rel="noreferrer">playlist on YouTube</a> with demos of projects I made!',
      'ENDING': 'In teams I worked with  GitLab Boards, Jira Trello task-managers. <b>I\'m not interested in fulltime job offers (>5 hours), pay-for-percent and pay-after-done.</b> You can find more information on my skills in <a href=\'https://hloth.dev/portfolio\' target="_blank" rel="noreferrer">my portfolio</a> and in <a href=\'https://github.com/VityaSchel\'>my GitHub account</a>, which I\'ve created\nin 2019 and publishing libraries used by other web developers there, striving to improve DX in JS community :) If you have any questions or want to discuss your case with me — contact me in Telegram: <a href=\'tg://resolve?domain=hlothdev\'>@hlothdev</a> or other ways listed on this page.',
      'ENDING_IMAGE': 'UWU emoji',
      'CATEGORIES': {
        'frontend': 'Frontend',
        'backend': 'Backend',
        'apps': 'Apps',
        'bot': 'Bot development',
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
          'devitya — was taken already'
        ],
        'TEXT3': 'All these options were not even considered, when I came up with hloth.'
      },
      'ABOUT_ME_AS_PERSON': {
        'HEADING': 'About me (as a person)',
        'INTRO': 'I once heard a wise man say: “A good resume should have four pages: 1. Work experience, 2. Education, 3. Skills, 4. A little about you.” So, you have reached the fourth page of my resume (in the form of a website), and now I would like to tell you about myself as a person.',
        'TEXT': 'I\'m a serious person, but only until someone makes me laugh on dirty joke. My life goal is to get out of Russia to the Czech Republic by learning the Czech language, but so far I only know Ahoj! Jmenuji Vitez Alkalie. Jsem webu-programator. Čau! I\'ve already used to the fact that unpaid employees in the team leave after 7 days (but I\'ll leave earlier). I listen to mashups and YouTube videos instead of music, because I have no money for paid subscriptions. My dream is to learn how to play the piano and guitar so I can stop paying composers to create music for my games. I broke my Macbook 2 months after purchase, I\'m still responsible tho. I have been working on this laptop through an external display since March 2021, so I can\'t rewrite piece of code on weekend in 2 AM. Someday I will definitely save up enough money to repair my Macbook to be able to go to Starbucks with it like a real programmer 🧋'
      }
    },
    'PORTFOLIO': {
      'COLUMNS': {
        'NAME': 'Name',
        'DESCRIPTION': 'Description (ru)',
        'TECHNOLOGIES': 'Technologies',
        'DATES': {
          'DEVSTART': 'Dev. started',
          'RELEASE': 'Released',
          'ABANDON': 'Abandoned'
        }
      },
      'SEARCH': {
        'PLACEHOLDER': 'Search in portfolio: name, description, technologies',
        'EXAMPLE': 'e.g. «API» or «Redux, React Native»',
        'CLEAR': 'Clear'
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
        'developer_tool': 'Developer tool'
      },
      'FILTERS': {
        'ORDERS_ONLY': 'Orders only',
        'PERSONAL_WEBSITES_ONLY': 'My personal websites only',
        'RECENT_PROJECTS_ONLY': 'Projects released in last 12 months only'
      },
      'HIDDEN_PROJECT': {
        'NAME': 'Hidden project',
        'DESCRIPTION_PREVIEW': 'Click to read more',
        'DESCRIPTION': 'Information about this project is hidden, because its disclosure is against my principles about maintaining confidentiality and may discredit me. If you are interested in this project, I\'m happy to tell you more personally, if you send me the number of this project: %PROJECT_ID%.'
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
      }
    },
    'ABOUT_THIS_WEBSITE': {
      'HEADING': 'Website hloth.dev',
      'TEXT': 'This is my sixth personal site. It contains information about me, my projects, is a kind of portfolio and resume at the same time, and even serves as a tool for donations to me. If you wondering why with published game on Steam and a lot of orders from freelance, I still have the conscience to ask for donations, then firstly, I am a developer of open-source applications, DX tools and just useful programs, fun websites (with no ads!) and mobile games without microtransactions, and secondly, let me give you some statistics on my profit from all my products (with the exception of Stigfinnare, because it is prohibited by the NDA from Steam Direct): exactly 0 dollars, which is in euro, in the current exchange rate, zero euro. There are no ads on my websites, because there is no point to fight with AdBlock (but I\'ve successfully implemented Google Analytics proxy that can fool uOrigin), and I do not embed paid subscriptions. I receive money only from friends donations (hello to Vanya Sevryukov and Arthur Fejtullaev). I received less than 1000₽ ($16 at the moment) from donations in 2021. And as for Stigfinnare, since I cannot disclose any information about product sells, I can only give you a hint: actually I received exactly 0 dollars, and if you count it with development costs, I lost 20K ₽. Some information about my previous personal websites:',
      'PREVIOUS_SITES': [
        'Website on uCoz CMS (2015-2016) — My first website, which has a lot of games, tests and other stuff, inspired by legendary girl Diana website http://devo4ka-diano4ka.narod.ru/',
        'Website on hostinger (2017-2018) — Website I used to learn web: I created pages, watched how html works and I even created my first CAPTCHA with actual check',
        'Projects map (first quarter of 2020) — Website with my projects map, which had a few bubbles with projects info, connected with lines, if you hover cursor above any of it, you could read description. It was made on self-made engine written in JavaScript',
        'Projects gallery (second quarter of 2020) — Right after I learned JS theory, I remade my website, now it looked much more better and stylish, had nice color palette, information about me and my portfolio (only popular projects), and the most important thing is that it had mobile version',
        'Landing with cosmic design (fourth quarter of 2020) — Website with animations, parallax, shaders for gradients in JavaScript and OpenGL, contact form, linked with telegram bot, which is linked to SMTP-server for feedback. Unfortunately, it was closed after just a month because of difficulties with creating mobile version and lags, because I made it in vanilla JS. In just a week I started learning React.'
      ],
      'TEXT2': 'While you still here, why don\'t you take a look at <a href="https://hloth.dev/robots.txt" target="blank" rel="noreferrer">robots.txt</a> file? In just 500 KB, allowed by Google and Yandex crawlers, I put ASCII arts, jokes, songs texts, first 100 000 digits of Pi, transcript of single «Adventure Time» episode and even 70 seconds fragment of «Shrek» movie audio and more. All tools for converting and formatting I made myself with Node and FFMpeg. Warning: do not look at this if you weak or scary of things!',
      'NAN_VISITORS': 'Yes, exactly NaN. Did you know that it\'s a number too? I mean, special state of number. Read about it on Wikipedia. Okay, it\'a bug, I promise I\'ll fix this until you visit this site next time 😵‍💫',
      'VISITORS_THIS_MONTH': 'Visitors this month',
      'ZERO_VISITORS': 'Wait, 0 visitors? What? How is this even possible if you are on the website? Is the server down?! uh sorry for this...',
      'TOO_LOW_VISITORS': 'Wait, only %v? C\'mon I was working on this website for 6 months :(',
      'LINKS': {
        'INSTAGRAM_HIGHLIGHTS': 'More screenshots in "Highlights"',
        'GITHUB_SOURCES': 'Website sources on GitHub'
      }
    },
    'DONATE': {
      'MAIN_BLOCK_HEADING': 'Donates',
      'DONATES_HISTORY': 'Donates history',
      'FORM': {
        'USERNAME': 'Your name',
        'AMOUNT': 'Amount'
      }
    }
  }
}

export default translation