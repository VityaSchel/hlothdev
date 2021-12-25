import dedent from 'dedent'

/* eslint-disable no-irregular-whitespace */

export default {
  'ru-RU': {
    'CARD_ABOUT': 'О сайте',
    'CARD_DONATE': 'Донаты',
    'CARD_ME_FIRST_NAME': 'Виктор',
    'CARD_ME_LAST_NAME': 'Щелочков',
    'CARD_ME_SPECIALIZATION': 'Веб-разработчик',
    'FULL_SPECIALIZATION': 'Разработчик веб-приложений',
    'CARD_ME_CITY': 'Самара',
    'CARD_PROJECTS': ['проект', 'проекта', 'проектов'],
    'CARD_PROJECTS_IN_PORTFOLIO': 'в портфолио',
    'CARD_SERVICES': 'Услуги',
    'THEME_SWITCH_TO_LIGHT': 'Включить светлую тему',
    'THEME_SWITCH_TO_DARK': 'Включить темную тему',
    'CHANGE_LANGUAGE': 'Сменить язык',
    'LANGUAGE_RUSSIAN': 'Русский язык',
    'LANGUAGE_ENGLISH': 'Английский язык',
    'BACK': 'Вернуться назад в главное меню',
    'PAGES_TITLES': {
      'me': 'Обо мне',
      'projects': 'Портфолио',
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
        'description': 'Разработка расширений для браузеров, разработка Minecraft-сервера, настройка почтового сервера и рассылок, вспомогательные плагины для Figma и другое',
        'price': 'Договорная цена'
      }
    },
    'ABOUT_ME': dedent`
      <p>Привет, меня зовут Виктор и я являюсь специалистом в области разработки веб-приложений.</p>
      <p>
        Я профессионально занимаюсь разработкой приложений PWA и инструментов для крупных клиентов более двух лет,
        а общий опыт разработки сайтов у меня более 5 лет. Мой основной стек для фронтенда: ReactJS, NextJS, React Native, Preact и Vite.
        В мои обязанности входит мобильный, кросс-браузерный и семантический адаптив, чтобы сайт смотрелся одинаково хорошо
        на всех устройствах и во всех браузерах.
      </p>

      <p>
        Помимо фронтенда я занимаюсь и бекендом, для своих клиентов создаю сайты «под ключ», настраивая сервер, почту и создавая сам сайт с нуля по желанию заказчика,
        помогая реализовать сайт с учетом конкретных технических требований и по макету Figma/Photoshop/Illustrator, или работая в команде с другими разработчиками.
        В своих проектах я чаще всего использую веб-серверы Express и Fastify с Nginx (ранее 3 года работал с Apache), базы данных
        MongoDB, Redis и LevelDB, подбирая подходящую базу данных с учетом размера проекта (ранее работал с MySQL и PostgreSQL)
      </p>

      <p>
        Более четырех лет я разрабатываю ботов для ВКонтакте, Телеграма, Дискорда, Реддита, Яндекс.Алисы, расширения для
        браузеров, плагины для Figma, инструменты для разработчиков, такие как библиотеки и другие полезные инструменты.
        Сейчас я учу kubernetes, знаю Docker и по вашему желанию создать образ/контейнер вместо архива с проектом, для
        быстрого масштабирования и развертки между серверами.
      </p>

      <h3>Опыт работы</h3>
      <ul>
        <li>Разработал несколько сайтов для российского блоггера-стримера, сайты (Президент Абоба, Гадзы Глада Валакаса) сейчас имеют сотни уникальных посетителей в месяц</li>
        <li>Разработал плагин Figma для быстрой верстки кросс-платформерных макетов для Joom</li>
        <li>Работал в команде над онлайн-школой английского языка на Electron.js</li>
        <li>Разработал бота с панелью управления, установкой на сервер для канала AtmosSeries в телеграме, который имеет охват в десятки тысяч пользователей, затем мы продолжили работать и совместно создали сервер для игры Minecraft с сайтом с оплатой для него</li>
        <li>Работал в команде Национального Центра Исследований в Казахстане, работающая над CRM для сотрудников центра</li>
      </ul>

      <p>
        Более подробную информацию о моих навыках вы можете найти в портфолио и в моем <a href='https://github.com/VityaSchel'>аккаунте GitHub</a>, который я веду
        с 2019 года, создаю полезные библиотеки и стремлюсь улучшать DX.
        Если у вас еще остались вопросы или вы готовы обсудить проект со мной — пишите мне в Телеграм: <a href='tg://resolve?domain=hlothdev'>@hlothdev</a>
        или в другие соц. сети, перечисленные на этой странице.
      </p>`
  },
  '_DEFAULT_': {
    'CARD_ABOUT': 'About',
    'CARD_DONATE': 'Donate',
    'CARD_ME_FIRST_NAME': 'Viktor',
    'CARD_ME_LAST_NAME': 'Shchelochkov',
    'CARD_ME_SPECIALIZATION': 'Web-developer',
    'FULL_SPECIALIZATION': 'Web-apps developer',
    'CARD_ME_CITY': 'Samara',
    'CARD_PROJECTS': 'projects',
    'CARD_PROJECTS_IN_PORTFOLIO': 'in portfolio',
    'CARD_SERVICES': 'Services',
    'THEME_SWITCH_TO_LIGHT': 'Switch to light theme',
    'THEME_SWITCH_TO_DARK': 'Switch to dark theme',
    'CHANGE_LANGUAGE': 'Change language',
    'LANGUAGE_RUSSIAN': 'Russian language',
    'LANGUAGE_ENGLISH': 'English language',
    'BACK': 'Return back to the main menu',
    'PAGES_TITLES': {
      'me': 'About me',
      'projects': 'Portfolio',
      'services': 'Services',
      'donate': 'Donates',
      'about': 'About this web-site'
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
        'title': 'Chat-bot or script-bot',
        'description': 'Increase conversions, provide users with feedback and promote channels with VKontakte, Telegram (Bot API and MTProto), WhatsApp or Viber bot, promote your product with a Discord bot, Yandex.Alice skill, Reddit app or a bot that works with other APIs',
        'price': 'Starting from 59 €'
      },
      'other': {
        'title': 'Other',
        'description': 'Browsers extensions, Minecraft-server development, mail server and mailings setup, plugins for Figma and other',
        'price': 'Let\'s talk'
      }
    }
  }
}
