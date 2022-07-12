import abobaLogo from '../assets/images/projectsLogos/aboba.png'
import asursoCustomNamesLogo from '../assets/images/projectsLogos/asurso-custom-names.png'
import atmosCraftLogo from '../assets/images/projectsLogos/atmoscraft.png'
import atmosSeriesBotLogo from '../assets/images/projectsLogos/atmosseriesbot.png'
import bitProtectLogo from '../assets/images/projectsLogos/bitprotect.png'
import botBizLandingLogo from '../assets/images/projectsLogos/bot-biz-landing.png'
import cleanerLogo from '../assets/images/projectsLogos/cleaner.png'
import czechLivingCostsLogo from '../assets/images/projectsLogos/czech-living-costs.png'
import educoLogo from '../assets/images/projectsLogos/educo.png'
import figmaAntiLGBTLogo from '../assets/images/projectsLogos/figma-anti-lgbt.png'
import fitVsFelLogo from '../assets/images/projectsLogos/fit-vs-fel.png'
import foodStuffLogo from '../assets/images/projectsLogos/foodstuff.png'
import gadzasNewLogo from '../assets/images/projectsLogos/gadzas.png'
import gadzasOldLogo from '../assets/images/projectsLogos/gadzas-old.png'
import gettrDarkThemeLogo from '../assets/images/projectsLogos/gettr-dark-theme.png'
import gladvalakasNT200instamask from '../assets/images/projectsLogos/insta-mask-glad-valakas-nt200.png'
import goodmorningBotLogo from '../assets/images/projectsLogos/goodmorning-bot.png'
import homirrorLogo from '../assets/images/projectsLogos/homirror.png'
import igroruporLogo from '../assets/images/projectsLogos/igrorupor.png'
import lisNceLogo from '../assets/images/projectsLogos/lis-nce.png'
import mashaSimulatorLogo from '../assets/images/projectsLogos/masha-simulator.png'
import mcDonaldsOffersLogo from '../assets/images/projectsLogos/mcdonaldsoffersbot.png'
import movieTimeFilmsBot from '../assets/images/projectsLogos/movietime-films-bot.png'
import mypronLogo from '../assets/images/projectsLogos/mypron.png'
import niolySchoolLogo from '../assets/images/projectsLogos/niolyschool.png'
import noSquidGameLogo from '../assets/images/projectsLogos/no-squid-game.png'
import ogeGeneratorLogo from '../assets/images/projectsLogos/oge-generator.png'
import panicButtonLogo from '../assets/images/projectsLogos/panic-button.png'
import probablyKrolLogo from '../assets/images/projectsLogos/probablykrol-bot.png'
import py3ExecLogo from '../assets/images/projectsLogos/py3exec.png'
import remafiaLogo from '../assets/images/projectsLogos/remafia.png'
import rJolygolfLogo from '../assets/images/projectsLogos/rJolygolf.png'
import roflCallsOrderWebsiteLogo from '../assets/images/projectsLogos/rofl-calls-order-website.png'
import rollerRideLogo from '../assets/images/projectsLogos/roller-ride.png'
import rusWordConBotLogo from '../assets/images/projectsLogos/ruswordconbot.png'
import samaracoinLogo from '../assets/images/projectsLogos/samaracoin.png'
import shizonyanLogo from '../assets/images/projectsLogos/shizonyan.png'
import sipackerLogo from '../assets/images/projectsLogos/sipacker.png'
import skeletronRockBot from '../assets/images/projectsLogos/skeletron-rock-bot.png'
import skysmartHelperLogo from '../assets/images/projectsLogos/skysmart-helper.png'
import stigfinnareLogo from '../assets/images/projectsLogos/stigfinnare.png'
import tinkoffCurrencyConverter from '../assets/images/projectsLogos/tinkoff-currency-converter.png'
import uselessCanvasBasedTextEditorLogo from '../assets/images/projectsLogos/useless-canvas-based-text-editor.png'
import vityaschelSiteLogo from '../assets/images/projectsLogos/vityaschel.png'
import wantToBeAProgrammerLogo from '../assets/images/projectsLogos/want-to-be-a-programmer.png'
import wikipediaSpeedrunLogo from '../assets/images/projectsLogos/wikipedia-speedrun.png'

// scope: 1=verysmall 2=small 3=average 4=big 5=huge

export default [
  {
    name: 'Stigfinnare',
    stack: [
      'Unity',
      'C#',
      'Photon Engine',
      'MySQL',
      'PostgreSQL',
    ],
    supported: 'partially',
    dates: {
      devStart: '20 October 2018',
      release: '27 June 2019',
      abandon: '2020'
    },
    scope: 5,
    description: 'Многопользовательская видео-игра, где до 6 игроков сражаются в мини-играх за большее кол-во очков',
    unpublic: false,
    hidden: false,
    logo: stigfinnareLogo,
    links: [
      'https://stigfinnare.utidteam.com/'
    ],
    category: 'game/windows10',
    id: 'stigfinnare'
  },
  {
    name: 'Roller-ride',
    stack: [
      'Unity',
      'C#'
    ],
    supported: 'partially',
    dates: {
      devStart: '2018',
      release: '27 September 2018'
    },
    scope: 3,
    description: 'Мобильная аркада, в которой игрок, минуя препятствия и пролетая разные локации, стремится к солнцу',
    unpublic: false,
    hidden: false,
    logo: rollerRideLogo,
    links: [
      'https://play.google.com/store/apps/details?id=com.VityaSchel.RollerRide'
    ],
    category: 'game/android',
    id: 'roller-ride'
  },
  {
    name: 'AtmosCraft',
    stack: [
      'React',
      'Figma',
      'Sketch',
      'Fastify',
      'LevelDB'
    ],
    supported: false,
    dates: {
      devStart: '27 September 2021',
      release: '6 October 2021',
      abandon: '30 December 2021'
    },
    scope: 3,
    description: 'Лендинг для майнкрафт сервера и веб-сервер с API (rcon+status)',
    unpublic: false,
    hidden: false,
    tags: [
      'order'
    ],
    logo: atmosCraftLogo,
    links: [
      'https://web.archive.org/web/20211130051931/https://atmosgroup.org/',
      'https://www.figma.com/file/FFnAfrV8W7SeigyuwkZrFP/AtmosCraft',
      'https://freelance.habr.com/projects/249937'
    ],
    category: 'website',
    id: 'atmoscraft'
  },
  {
    name: 'JSwitcher',
    stack: [
      'React',
      'TypeScript',
      'Figma Plugin API',
      'Figma REST API'
    ],
    supported: false,
    dates: {
      devStart: '25 November 2021',
      release: '3 December 2021',
      abandon: '3 December 2021'
    },
    scope: 3,
    description: 'Плагин который помогает менять макеты Android на iOS и наоборот',
    unpublic: false,
    hidden: false,
    tags: [
      'order'
    ],
    links: [
      'https://freelance.habr.com/projects/259285'
    ],
    category: 'figma_plugin',
    id: 'jswitcher'
  },
  {
    name: 'SIPacker',
    stack: [
      'React',
      'React-router',
      'MUI'
    ],
    supported: 'partially',
    dates: {
      devStart: '19 September 2021',
      release: '31 October 2021'
    },
    scope: 3,
    description: 'Онлайн-редактор паков для игры SiGame (Своя Игра)',
    unpublic: false,
    hidden: false,
    logo: sipackerLogo,
    links: [
      'https://github.com/VityaSchel/SIPacker'
    ],
    category: 'website',
    id: 'sipacker'
  },
  {
    name: 'AtmosSeriesBot',
    stack: [
      'NodeJS',
      'MongoDB',
      'Telegram Bot API'
    ],
    supported: false,
    dates: {
      devStart: '31 July 2021',
      release: '2 August 2021',
      abandon: '2 August 2021'
    },
    scope: 2,
    description: 'Панель управления ботом с добавлением админов, рефералов, проверка на подписку, рассылкой рекламы по пользователям и встроенной статистикой',
    unpublic: false,
    hidden: false,
    tags: [
      'order'
    ],
    logo: atmosSeriesBotLogo,
    links: [
      'https://freelance.habr.com/projects/244063'
    ],
    category: 'bot/telegram',
    id: 'atmosseriesbot'
  },
  {
    name: 'Симулятор Маши из GoStudy',
    stack: [
      'Unity',
      'C#'
    ],
    supported: false,
    dates: {
      devStart: '20 July 2021',
      release: '23 July 2021',
      abandon: '24 July 2021'
    },
    scope: 2,
    description: 'Мобильная игра про Машу из GoStudy, которая шуршит микрофоном и мешает стриму',
    unpublic: false,
    hidden: false,
    logo: mashaSimulatorLogo,
    links: [
      'https://play.google.com/store/apps/details?id=com.VityaSchel.GoStudyMashaSimulator'
    ],
    category: 'game/android',
    id: 'симулятор-маши-из-gostudy'
  },
  {
    name: 'bot.biz (landing)',
    stack: [
      'NextJS',
      'TypeScript',
      'React-redux',
      'next-i18next',
      'react-reveal',
      'GraphQL'
    ],
    supported: 'partially',
    dates: { devStart: '2022-05-11', release: '2022-05-28' },
    scope: 3,
    description: 'Лендинг с анимациями по готовому макету для сервиса, занимающегося коммерческой деятельностью в сфере ботов, сайтов и приложений. Адаптирован под мобильные устройства, браузер Safari, есть кастомный компонент карусели с нативным скроллингом, переключение темы с переходом и локализация на два языка (пока реализован только один).',
    unpublic: false,
    hidden: false,
    logo: botBizLandingLogo,
    tags: ['order'],
    links: [
      'https://www.figma.com/file/T4fTAPKZXo5nKUiiPE00DU/Local-bot.biz?node-id=0%3A1',
      'https://youtu.be/zdMy_A5Y2Kk'
    ],
    category: 'website',
    id: 'bot-biz-landing'
  },
  {
    name: 'АБОБА 2024 Кандидат в президенты',
    stack: [
      'NextJS',
      'React',
      'less',
      'TypeScript'
    ],
    supported: true,
    dates: {
      devStart: '23 March 2021',
      release: '28 March 2021'
    },
    scope: 3,
    description: 'Сайт абобы: кандидата в президенты и мема от Глада Валакаса',
    unpublic: false,
    hidden: false,
    logo: abobaLogo,
    links: [
      'https://aboba.utidteam.com/',
      'https://freelance.habr.com/projects/244049'
    ],
    category: 'website',
    id: 'абоба-2024-кандидат-в-президенты'
  },
  {
    name: 'Гадзы Глада Валакаса (1.0)',
    stack: [
      'Vanilla JS',
      'PHP',
      'MySQL',
      'Telegram Bot API',
      'Express'
    ],
    supported: false,
    dates: {
      devStart: '20 February 2020',
      release: '20 February 2020',
      abandon: '20 February 2021'
    },
    scope: 4,
    description: 'Сборник всех гадз глада валакаса (раннее известен как гадзы.online)',
    unpublic: false,
    hidden: false,
    logo: gadzasOldLogo,
    links: [
      'https://godzilla.utidteam.com/'
    ],
    category: 'website',
    id: 'гадзы-глада-валакаса-1-0-'
  },
  {
    name: 'Гадзы Глада Валакаса (2.0)',
    stack: [
      'React'
    ],
    supported: 'partially',
    dates: {
      devStart: '20 February 2021',
      release: '20 February 2021'
    },
    scope: 4,
    description: 'Сборник всех гадз глада валакаса (раннее известен как гадзы.online)',
    unpublic: false,
    hidden: false,
    logo: gadzasNewLogo,
    links: [
      'https://godzilla.utidteam.com/'
    ],
    category: 'website',
    id: 'гадзы-глада-валакаса-2-0-'
  },
  {
    name: 'r/Jolygolf',
    stack: [
      'Python',
      'PHP'
    ],
    supported: 'partially',
    dates: {
      devStart: '2019',
      release: '2019'
    },
    scope: 4,
    description: 'Сабреддит Алексея Шевцова на Reddit',
    unpublic: false,
    hidden: false,
    logo: rJolygolfLogo,
    links: [
      'https://github.com/VityaSchel/RedditJolygolfBot',
      'https://freelance.habr.com/projects/216865'
    ],
    category: 'bot/reddit',
    id: 'r-jolygolf'
  },
  {
    name: 'Шизоньян',
    stack: [
      'Python',
      'markovify',
      'Express',
      'React'
    ],
    supported: 'partially',
    dates: {
      devStart: '2021',
      release: '2021'
    },
    scope: 2,
    description: 'Сайт генератор твитов маргариты симоньян',
    unpublic: false,
    hidden: false,
    logo: shizonyanLogo,
    links: [
      'https://shizonyan.utidteam.com/'
    ],
    category: 'website',
    id: 'шизоньян'
  },
  {
    name: 'SAMARACOIN',
    stack: [
      'NodeJS',
      'MongoDB',
      'Telegram Bot API'
    ],
    supported: true,
    dates: {
      devStart: '6 May 2021',
      release: '10 May 2022'
    },
    scope: 3,
    description: 'Альткоин и некрипто-валюта в телеграме майнится написанием слова самара',
    unpublic: false,
    hidden: false,
    logo: samaracoinLogo,
    links: [
      'https://t.me/samaracoinbot'
    ],
    category: 'bot/telegram',
    id: 'samaracoin'
  },
  {
    name: 'asurso',
    stack: [
      'NodeJS',
      'Jest',
      'SignalR'
    ],
    supported: true,
    dates: {
      devStart: '13 January 2022',
      release: '15 January 2022'
    },
    scope: 2,
    description: 'Библиотека для взаимодействия с закрытым API сайта АСУ РСО (электронный дневник)',
    unpublic: false,
    hidden: false,
    links: [
      'https://www.npmjs.com/package/asurso'
    ],
    category: 'npmjs_library',
    id: 'asurso'
  },
  {
    name: 'reuploader',
    stack: [
      'NodeJS',
      'NodeJS',
      'streamlink',
      'ffmpeg',
      'Kubernetes',
      'Docker'
    ],
    supported: 'partially',
    dates: {
      devStart: '20 November 2021',
      release: '20 November 2021'
    },
    scope: 1,
    description: 'Инструмент для автоматической записи и перезалива стримов с YouTube',
    unpublic: false,
    hidden: false,
    links: [
      'https://github.com/VityaSchel/reuploader'
    ],
    category: 'app',
    id: 'reuploader'
  },
  {
    name: 'Ремафия',
    stack: [
      'React Native',
      'Expo',
      'React',
      'React-admin',
      'Redis',
      'MUI',
      'React-native-paper',
      'Redux-toolkit'
    ],
    supported: true,
    dates: {
      devStart: '26 August 2021',
      abandon: '10 January 2022'
    },
    scope: 4,
    description: 'Карточная игра Мафия, но онлайн. Ремейк легендарной Мафии Онлайн на React Native. Задумывалась как конкурент, который поглотит Мафию Онлайн и Мафию GO',
    unpublic: false,
    hidden: false,
    logo: remafiaLogo,
    category: 'game/android',
    id: 'ремафия'
  },
  {
    name: 'LIS NCE',
    stack: [
      'React',
      'MUI',
      'Redux',
      'React-redux',
      'Redux-toolkit',
      'rtk-query'
    ],
    supported: false,
    dates: {
      devStart: '30 November 2021',
      release: '30 December 2021'
    },
    scope: 4,
    description: 'Сайт для национального центра исследований в Казахстане, разрабатывался в команде',
    unpublic: false,
    hidden: false,
    tags: [
      'order'
    ],
    logo: lisNceLogo,
    links: [
      'https://freelance.habr.com/projects/259287'
    ],
    category: 'website',
    id: 'lis-nce'
  },
  {
    name: 'nmchatbot',
    stack: [
      'TypeScript',
      'NodeJS',
      'MongoDB',
      'VK API',
      'VK-IO',
      'YooCheckout'
    ],
    supported: 'partially',
    dates: { devStart: '2022-06-14' },
    scope: 3,
    description: 'Чат-бот ВКонтакте, обрабатывающий запросы от пользователей, помогающий с частыми вопросами. Принимает оплату в ЮКасса для автоматического удаления постов и публикации без очереди. Передает сообщения администраторам в поддержку. Работает параллельно на 11 группах.',
    unpublic: false,
    hidden: false,
    tags: ['order'],
    links: ['https://vk.com/nm.tyumen'],
    category: 'bot/vk',
    id: 'nmchatbot'
  },
  {
    name: 'MovieTime films bot',
    stack: ['NodeJS', 'MongoDB', 'Telegram Bot API'],
    supported: false,
    dates: { devStart: '2022-05-05', release: '2022-05-07' },
    scope: 2,
    description: 'Панель управления ботом с добавлением модераторов, фильмов, проверка на подписку',
    unpublic: false,
    hidden: false,
    tags: ['order'],
    logo: movieTimeFilmsBot,
    links: ['https://t.me/movietime_films_bot'],
    category: 'bot/telegram',
    id: 'movietime-films-bot'
  },
  {
    name: 'destream-api',
    stack: [
      'NodeJS'
    ],
    supported: 'partially',
    dates: {
      devStart: '29 May 2021',
      release: '31 May 2021'
    },
    scope: 2,
    description: 'Враппер для API DeStream на NodeJS',
    unpublic: false,
    hidden: false,
    links: [
      'https://www.npmjs.com/package/destream-api'
    ],
    category: 'npmjs_library',
    id: 'destream-api'
  },
  {
    name: 'alerts-api',
    stack: [
      'NodeJS'
    ],
    supported: false,
    dates: {
      devStart: '28 May 2021',
      release: '28 May 2021',
      abandon: '28 May 2021'
    },
    scope: 1,
    description: 'Враппер для API DonationAlerts на NodeJS',
    unpublic: false,
    hidden: false,
    links: [
      'https://www.npmjs.com/package/alerts-api'
    ],
    category: 'npmjs_library',
    id: 'alerts-api'
  },
  {
    name: 'ОГЭ Генератор',
    stack: [
      'React',
      'Reactstrap',
      'Bootstrap',
      'less'
    ],
    supported: 'partially',
    dates: {
      devStart: '2021',
      release: '2021'
    },
    scope: 3,
    description: 'Генератор вариантов огэ по информатике 2021',
    unpublic: false,
    hidden: false,
    logo: ogeGeneratorLogo,
    links: [
      'https://oge.utidteam.com/'
    ],
    category: 'website',
    id: 'огэ-генератор'
  },
  {
    name: 'bot.biz (panels)',
    stack: ['NextJS', 'TypeScript', 'React-redux', 'GraphQL', 'next-i18next'],
    supported: 'partially',
    dates: { devStart: '2022-06-09' },
    scope: 3,
    description: 'Панель управления, написанная для сервиса, занимающегося коммерческой деятельностью в сфере ботов, сайтов и приложений. Адаптирован под мобильные устройства, браузер Safari, есть кастомный компонент карусели с нативным скроллингом, переключение темы с переходом и локализация на два языка (пока реализован только один).',
    unpublic: false,
    hidden: false,
    logo: botBizLandingLogo,
    tags: ['order'],
    links: [
      'https://youtu.be/buxSGd_65U4',
      'https://youtu.be/6WhqQxV1-0Q',
      'https://youtu.be/zx27GHjpedU'
    ],
    category: 'website',
    id: 'bot-biz-panels'
  },
  {
    name: 'FIT vs FEL',
    stack: [
      'React',
      'MUI'
    ],
    supported: 'partially',
    dates: {
      devStart: '13 June 2021',
      release: '13 June 2021',
      abandon: '13 June 2021'
    },
    scope: 1,
    description: 'Шуточный сайт, где можно покрутить колесо удачи и узнать куда поступать (всегда будет ČZU)',
    unpublic: false,
    hidden: false,
    logo: fitVsFelLogo,
    links: [
      'https://utidteam.com/FITvsFEL/'
    ],
    category: 'website',
    id: 'fit-vs-fel'
  },
  {
    name: 'czech-living-costs',
    stack: [
      'React',
      'MUI'
    ],
    supported: 'partially',
    dates: {
      devStart: '5 June 2021',
      release: '5 June 2021'
    },
    scope: 1,
    description: 'Шуточный сайт, где можно посчитать, сколько стоит учеба в Чехии для студента + расходы',
    unpublic: false,
    hidden: false,
    logo: czechLivingCostsLogo,
    links: [
      'https://utidteam.com/gostudy/'
    ],
    category: 'website',
    id: 'czech-living-costs'
  },
  {
    name: 'Homirror лендинг',
    stack: [
      'Vanilla JS',
      'less'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 2,
    description: 'Лендинг про интерьер для дома',
    unpublic: false,
    hidden: false,
    logo: homirrorLogo,
    links: [
      'https://portfolio.utidteam.com/homirror'
    ],
    category: 'website',
    id: 'homirror-лендинг'
  },
  {
    name: 'NiolySchool лендинг',
    stack: [
      'Vanilla JS',
      'less'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 2,
    description: 'Лендинг про обучение тильде (CMS)',
    unpublic: false,
    hidden: false,
    logo: niolySchoolLogo,
    links: [
      'https://portfolio.utidteam.com/niolyschool'
    ],
    category: 'website',
    id: 'niolyschool-лендинг'
  },
  {
    name: 'Educo лендинг',
    stack: [
      'Vanilla JS',
      'less'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2021'
    },
    scope: 2,
    description: 'Лендинг про обучающую школу',
    unpublic: false,
    hidden: false,
    logo: educoLogo,
    links: [
      'https://portfolio.utidteam.com/educo'
    ],
    category: 'website',
    id: 'educo-лендинг'
  },
  {
    name: 'Bitprotect лендинг',
    stack: [
      'Vanilla JS',
      'less'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2021'
    },
    scope: 2,
    description: 'Лендинг про кибербезопасность сайтов',
    unpublic: false,
    hidden: false,
    logo: bitProtectLogo,
    links: [
      'https://portfolio.utidteam.com/bitprotect'
    ],
    category: 'website',
    id: 'bitprotect-лендинг'
  },
  {
    name: 'FoodStuff лендинг',
    stack: [
      'Vanilla JS',
      'less'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2021'
    },
    scope: 2,
    description: 'Лендинг про интернет магазин еды',
    unpublic: false,
    hidden: false,
    logo: foodStuffLogo,
    links: [
      'https://portfolio.utidteam.com/foodstuff'
    ],
    category: 'website',
    id: 'foodstuff-лендинг'
  },
  {
    name: 'tJocer',
    stack: ['Go', 'giu', 'imgui'],
    supported: true,
    dates: { devStart: '2022-03-27' },
    scope: 3,
    description: 'Трейнер для игры The Joy of Creation, написанный на Go. Умеет взаимодействовать с нативным API Windows для поиска адресов в оперативной памяти и чтения нужных значений. Имеет графический интерфейс, написанный на библиотеке Giu.',
    unpublic: false,
    hidden: false,
    tags: [],
    links: ['https://github.com/VityaSchel/tJocer'],
    category: 'app',
    id: 'tjocer'
  },
  {
    name: 'Доброе утро и хорошего дня',
    stack: [
      'NodeJS',
      'Express',
      'VK API'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 2,
    description: 'Бот, отправляющий каждое утро гифку с добрым утром',
    unpublic: false,
    hidden: false,
    logo: goodmorningBotLogo,
    links: [
      'https://github.com/VityaSchel/goodmorning-bot'
    ],
    category: 'bot/vk',
    id: 'доброе-утро-и-хорошего-дня'
  },
  {
    name: 'private-repo-cloner',
    stack: ['NodeJS'],
    dates: { devStart: '2022-02-26', release: '2022-02-26' },
    scope: 1,
    description: 'Инструмент для бекапа приватных зашифрованных репозиториев с GitHub на Яндекс.Диск из-за санкций',
    unpublic: false,
    hidden: false,
    tags: [],
    links: ['https://github.com/VityaSchel/private-repo-cloner'],
    category: 'developer_tool',
    id: 'private-repo-cloner'
  },
  {
    name: 'vk-content-moderation',
    stack: ['TypeScript', 'NodeJS', 'MongoDB', 'VK API', 'VK-IO'],
    supported: 'partially',
    dates: { devStart: '2022-05-13', release: '2022-06-05' },
    scope: 3,
    description: 'Бот, выполняющий модерацию контента (предложки нескольких пабликов ВК), основывающуюся на схожести фото по перцептивным хешам изображений и уникальности текста',
    unpublic: false,
    hidden: false,
    tags: ['order'],
    links: ['https://youtu.be/3rqj1YDWEQc'],
    category: 'bot/vk',
    id: 'vk-content-moderation'
  },
  {
    name: 'ads-parser-bot',
    stack: ['TypeScript', 'NodeJS', 'VK-IO', 'VK API'],
    supported: 'partially',
    dates: { devStart: '2022-05-10', release: '2022-05-11' },
    scope: 2,
    description: 'Бот, выполняющий парсинг рекламных записей по заданному фильтру из отправленных групп ВКонтакте и управляется через сообщения, специально созданной для него группы.',
    unpublic: false,
    hidden: false,
    tags: ['order'],
    links: ['https://freelance.habr.com/tasks/433865'],
    category: 'bot/vk',
    id: 'ads-parser-bot'
  },
  {
    name: 'McDonaldsOffersBot',
    stack: [
      'NodeJS',
      'McDonalds API'
    ],
    supported: 'partially',
    dates: {
      devStart: '3 November 2021',
      release: '3 November 2021'
    },
    scope: 1,
    description: 'Бот, который парсит сайт макдональдса и пишет в чат об акциях',
    unpublic: false,
    hidden: false,
    logo: mcDonaldsOffersLogo,
    links: [
      'https://t.me/macsamarabot'
    ],
    category: 'bot/telegram',
    id: 'mcdonaldsoffersbot'
  },
  {
    name: 'RussianWordConjugationBot',
    stack: [
      'NodeJS',
      'MongoDB',
      'Express',
      'Fastify',
      'LevelDB'
    ],
    supported: 'partially',
    dates: {
      devStart: '23 May 2021',
      release: '23 May 2021',
      abandon: '23 May 2021'
    },
    scope: 1,
    description: 'Бот для тренировки спряжений, осенью 2021 был переписан для использования LevelDB и Fastify вместо MongoDB и Express',
    unpublic: false,
    hidden: false,
    logo: rusWordConBotLogo,
    links: [
      'https://t.me/ruswordconbot'
    ],
    category: 'bot/telegram',
    id: 'russianwordconjugationbot'
  },
  {
    name: 'hiddenID_7',
    stack: [
      'Fastify',
      'VK API'
    ],
    supported: 'partially',
    dates: {
      devStart: '16 September 2021',
      release: '20 September 2021',
      abandon: '15 November 2021'
    },
    scope: 2,
    description: '',
    unpublic: true,
    hidden: true,
    category: 'bot/vk',
    id: 'hiddenid-7'
  },
  {
    name: 'VityaSchel Site: uCoz версия',
    stack: [
      'uCoz CMS'
    ],
    dates: {
      devStart: '2015',
      release: '2015',
      abandon: '2016'
    },
    scope: 3,
    description: 'Первый сайт про меня на uCoz CMS',
    unpublic: false,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo,
    category: 'website',
    id: 'vityaschel-site-ucoz-версия'
  },
  {
    name: 'VityaSchel Site: terminal версия (hostinger)',
    stack: [
      'Vanilla JS'
    ],
    dates: {
      devStart: '2018',
      release: '2018',
      abandon: '2019'
    },
    scope: 3,
    description: 'Второй сайт в виде консоли на бесплатном хостинге',
    unpublic: false,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo,
    category: 'website',
    id: 'vityaschel-site-terminal-версия-hostinger-'
  },
  {
    name: 'VityaSchel Site: карта проектов',
    stack: [
      'Vanilla JS'
    ],
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2020'
    },
    scope: 2,
    description: 'Третий сайт про все мои проекты со связями в виде карты',
    unpublic: false,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo,
    category: 'website',
    id: 'vityaschel-site-карта-проектов'
  },
  {
    name: 'VityaSchel Site: лаймовая галлерея',
    stack: [
      'Vanilla JS'
    ],
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2020'
    },
    scope: 3,
    description: 'Четвертый сайт про все мои проекты и меня в виде лаймовой галереи',
    unpublic: false,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo,
    category: 'website',
    id: 'vityaschel-site-лаймовая-галлерея'
  },
  {
    name: 'VityaSchel Site: космический параллакс',
    stack: [
      'Vanilla JS'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2021'
    },
    scope: 4,
    description: 'Пятый, огромный сайт с красивыми анимациями про все, что со мной связано',
    unpublic: false,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo,
    links: [
      'https://vityaschel.utidteam.com'
    ],
    category: 'website',
    id: 'vityaschel-site-космический-параллакс'
  },
  {
    name: 'VityaSchel Site: hloth.dev с 3D-фигурами',
    stack: [
      'React',
      'ThreeJS',
      'React-three-fiber',
      'Redux',
      'React-redux',
      'MUI',
      'Fastify'
    ],
    supported: true,
    dates: {
      devStart: '24 November 2021'
    },
    scope: 4,
    description: 'Шестой сайт про все мои проекты, услуги, технологии и донаты с использованием ThreeJS',
    unpublic: false,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo,
    links: [
      'https://hloth.dev'
    ],
    category: 'website',
    id: 'vityaschel-site-hloth-dev-с-3d-фигурами'
  },
  {
    name: 'Glad Valakas NT200',
    stack: ['Spark AR', 'Blender'],
    dates: { devStart: '30 Jan 2022', release: '30 Jan 2022' },
    scope: 2,
    description: 'Маска в инстаграм с элементами пожилого тела',
    unpublic: false,
    hidden: false,
    logo: gladvalakasNT200instamask,
    tags: [],
    links: ['https://www.instagram.com/ar/617429272667716/'],
    category: 'instagram_mask',
    id: 'glad-valakas-nt200'
  },
  {
    name: 'scratch2tggame_bot',
    stack: [
      'NodeJS',
      'MongoDB',
      'Telegram Bot API',
      'Telegram Gaming Platform',
      'Fastify',
      'Scratch API',
      'Turbowarp',
      'Redis',
      'bee-queue'
    ],
    supported: false,
    dates: {
      devStart: '2022-02-01',
      release: '2022-02-06',
      abandon: '2022-04-11'
    },
    scope: 2,
    description: 'Бот, конвертирующий игры с сайта scratch.mit.edu в игры на Telegram Gaming Platform. Помимо встраивания нативного HTML плеера в телеграм, планировалась интеграция облака с ником, передаваемым от Telegram и адаптивное управление для телефонов.',
    unpublic: false,
    hidden: false,
    tags: [],
    links: ['https://github.com/VityaSchel/scratch2tggame_bot'],
    category: 'bot/telegram',
    id: 'scratch2tggame-bot'
  },
  {
    name: 'hiddenID_2',
    stack: [
      'NextJS',
      'MongoDB',
      'Mapbox',
      'ThreeJS',
      'React-three-fiber'
    ],
    supported: true,
    dates: {
      devStart: '30 March 2021',
      release: '18 April 2021'
    },
    scope: 4,
    description: '',
    unpublic: true,
    hidden: true,
    category: 'website',
    id: 'hiddenid-2'
  },
  {
    name: 'Vite CSGO Case Simulator',
    stack: [
      'Vite',
      'Preact',
      'webpack',
      'babel',
      'Redux',
      'React-redux',
      'nginx'
    ],
    supported: 'partially',
    dates: {
      devStart: '6 January 2022',
      release: '6 January 2022'
    },
    scope: 2,
    description: 'Мой первый даркнет-сайт и первый проект на Vite с рулеткой CS:GO',
    unpublic: false,
    hidden: false,
    links: [
      'https://github.com/VityaSchel/vitejs-csgo-case-simulator'
    ],
    category: 'website/darknet',
    id: 'vite-csgo-case-simulator'
  },
  {
    name: 'random-steam-avatar',
    stack: [
      'JavaScript'
    ],
    supported: false,
    dates: {
      devStart: '6 January 2022',
      release: '6 January 2022'
    },
    scope: 1,
    description: 'Библиотека для получения случайной аватарки из steam',
    unpublic: false,
    hidden: false,
    links: [
      'https://www.npmjs.com/package/random-steam-avatar'
    ],
    category: 'npmjs_library',
    id: 'random-steam-avatar'
  },
  {
    name: 'Бот Алисы: Игрорупор',
    stack: [
      'Яндекс.Диалоги API',
      'PHP',
      'DuckDuckGo API',
      'MySQL'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2021'
    },
    scope: 3,
    description: 'Бот Алисы, который афиширует новости из мира игр и может угадать игру по описанию',
    unpublic: false,
    hidden: false,
    logo: igroruporLogo,
    category: 'bot/yandex_alice',
    id: 'бот-алисы-игрорупор'
  },
  {
    name: 'bank-sms-codes-forwarder',
    stack: ['NodeJS', 'Telegram Bot API', 'nginx'],
    supported: false,
    dates: { devStart: '2022-12-21', release: '2022-12-21' },
    scope: 1,
    description: 'Бот, перенаправляющий СМС от Альфа-банка в Телеграм. Ранее использовалось API Альфа-банка, но из-за сложностей было решено переключиться на СМС и FastCGI-сервер.',
    unpublic: false,
    hidden: false,
    category: 'bot/telegram',
    id: 'bank-sms-codes-forwarder'
  },
  {
    name: 'Уборщица',
    stack: [
      'Vanilla JS'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 2,
    description: 'Расширение удаляющее сообщения Кирилла Смирнова из бесед ВКонтакте',
    unpublic: false,
    hidden: false,
    logo: cleanerLogo,
    links: [
      'https://chrome.google.com/webstore/detail/%D1%83%D0%B1%D0%BE%D1%80%D1%89%D0%B8%D1%86%D0%B0/pbkimmanmhebbfdphpkjpdkolihanmah?hl=ru'
    ],
    category: 'chrome_extension',
    id: 'уборщица'
  },
  {
    name: 'No Squid Game',
    stack: [
      'Vanilla JS'
    ],
    supported: 'partially',
    dates: {
      devStart: '12 October 2021',
      release: '12 October 2021'
    },
    scope: 1,
    description: 'Расширение, которое удаляет все новости и видео об Игре в Кальмара',
    unpublic: false,
    hidden: false,
    logo: noSquidGameLogo,
    links: [
      'https://chrome.google.com/webstore/detail/no-squid-game/enmgknhljpalgmfclkinhglkkpgjogdd'
    ],
    category: 'chrome_extension',
    id: 'no-squid-game'
  },
  {
    name: 'Stigfinnare 3D adventure',
    stack: [
      'Unity',
      'C#'
    ],
    dates: {
      devStart: '2018',
      abandon: '2018'
    },
    scope: 3,
    description: 'Адвенчура без сюжета, делалась как открытый мир с красивой графикой и головоломками',
    unpublic: false,
    hidden: false,
    category: 'game/windows10',
    id: 'stigfinnare-3d-adventure'
  },
  {
    name: 'Stigfinnare 2D',
    stack: [
      'Unity',
      'C#'
    ],
    dates: {
      devStart: '2018',
      abandon: '2018'
    },
    scope: 3,
    description: 'Батл рояль в 2д',
    unpublic: false,
    hidden: false,
    category: 'game/windows10',
    id: 'stigfinnare-2d'
  },
  {
    name: 'Соловьев или Гитлер?',
    stack: [
      'Vanilla JS'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 2,
    description: 'Сайт где надо угадать чья цитата: соловьева или гитлера',
    unpublic: false,
    hidden: false,
    links: [
      'https://github.com/VityaSchel/vladimir-solovyev'
    ],
    category: 'website',
    id: 'соловьев-или-гитлер-'
  },
  {
    name: 'Gettr Dark Theme',
    stack: [
      'CSS'
    ],
    supported: false,
    dates: {
      devStart: '7 July 2021',
      release: '7 July 2021',
      abandon: '7 July 2021'
    },
    scope: 1,
    description: 'Расширение для добавления темной темы в соц. сеть Gettr',
    unpublic: true,
    hidden: false,
    logo: gettrDarkThemeLogo,
    links: [
      'https://chrome.google.com/webstore/detail/gettr-dark-theme/jcjmdpdahejbjiopgedoljllckbmmekc'
    ],
    category: 'website',
    id: 'gettr-dark-theme'
  },
  {
    name: 'ProbablyKrolBot',
    stack: [
      'PHP',
      'Telegram Bot API'
    ],
    supported: 'partially',
    dates: {
      devStart: '2021',
      release: '2021'
    },
    scope: 2,
    description: 'Бот в телеграме отправляющий гифки кролика в чат по текстовому запросу, работает с API Giphy и Tenor',
    unpublic: false,
    hidden: false,
    logo: probablyKrolLogo,
    links: [
      'https://t.me/probablykrolbot'
    ],
    category: 'bot/telegram',
    id: 'probablykrolbot'
  },
  {
    name: 'СКЕЛЕТ БОТ',
    stack: ['NodeJS'],
    dates: {
      devStart: '2022-02-17',
      release: '2022-02-17',
      abandon: '2022-02-17'
    },
    scope: 1,
    description: 'Бот в Telegram по мотивам мема с крутыми скелетами на YouTube на канале Uncle Knuckles. Уже не работает, но видео есть в репозитории.',
    unpublic: false,
    hidden: false,
    logo: skeletronRockBot,
    tags: [],
    links: ['https://github.com/VityaSchel/skeletron_rock_bot'],
    category: 'bot/telegram',
    id: 'скелет-бот'
  },
  {
    name: 'react-graphic-key',
    stack: [
      'React'
    ],
    supported: false,
    dates: {
      devStart: '2021',
      release: '2021'
    },
    scope: 2,
    description: 'Компонент графического ключа для реакта',
    unpublic: false,
    hidden: false,
    links: [
      'https://www.npmjs.com/package/react-graphic-key'
    ],
    category: 'npmjs_library',
    id: 'react-graphic-key'
  },
  {
    name: 'Навальный арестован?',
    stack: [
      'Vanilla JS',
      'PHP',
      'Telegram Bot API'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 2,
    description: 'Сайт где написано, арестован ли Алексей Навальный',
    unpublic: false,
    hidden: false,
    links: [
      'https://navalnyarrested.utidteam.com/'
    ],
    category: 'bot/telegram',
    id: 'навальный-арестован-'
  },
  {
    name: '#СвободуНавальному стрим',
    stack: [
      'NodeJS',
      'OBS'
    ],
    dates: {
      devStart: '2021',
      release: '2021',
      abandon: '2021'
    },
    scope: 3,
    description: 'Стрим, длившийся неделю, где писалось кол-во зарегистрированных людей на митинг 21 апреля 2021',
    unpublic: false,
    hidden: false,
    links: [
      'https://www.youtube.com/watch?v=eUpy5KzF8XY&list=PLog2oYXiWbm0lYL_q86UIT2FzfrmDm1cT'
    ],
    category: 'stream',
    id: '-свободунавальному-стрим'
  },
  {
    name: 'tinkoff-currency-converter',
    stack: ['NodeJS', 'nginx'],
    dates: { devStart: '2022-02-27', release: '2022-02-27' },
    scope: 1,
    description: 'Бот для получения текущего курса покупки евро в Тинькофф банке для моих заказчиков, работающий с Tinkoff REST API',
    unpublic: false,
    hidden: false,
    logo: tinkoffCurrencyConverter,
    tags: [],
    links: ['https://t.me/eurocurbot'],
    category: 'bot/telegram',
    id: 'tinkoff-currency-converter'
  },
  {
    name: 'Ruscript',
    stack: [
      'JavaScript'
    ],
    supported: false,
    dates: {
      devStart: '2021',
      release: '2021'
    },
    scope: 3,
    description: 'Псевдо язык на JS полностью на русском языке',
    unpublic: false,
    hidden: false,
    links: [
      'https://github.com/vityaschel/ruscript'
    ],
    category: 'programming_language',
    id: 'ruscript'
  },
  {
    name: 'SkySmart helper',
    stack: [
      'Vanilla JS'
    ],
    supported: 'partially',
    dates: {
      devStart: '2021',
      release: '2021'
    },
    scope: 2,
    description: 'Помощник к сайту SkySmart чтобы списывать было легче',
    unpublic: false,
    hidden: false,
    logo: skysmartHelperLogo,
    links: [
      'https://chrome.google.com/webstore/detail/skysmart-helper/jedfnnibgbfgmcjbibkfbjclbicdfoim?hl=ru'
    ],
    category: 'chrome_extension',
    id: 'skysmart-helper'
  },
  {
    name: 'figma-anti-lgbt',
    stack: ['CSS'],
    supported: true,
    dates: { devStart: '2022-06-16', release: '2022-06-16' },
    scope: 1,
    description: 'Расширение Chrome, заменяющее радужную полосу загрузки на сайте figma.com, появляющуюся во время месяца Pride, на стандартную синюю',
    unpublic: true,
    hidden: false,
    logo: figmaAntiLGBTLogo,
    links: ['https://github.com/VityaSchel/figma-anti-lgbt'],
    category: 'chrome_extension',
    id: 'figma-anti-lgbt'
  },
  {
    name: 'mypron',
    stack: [
      'Tauri',
      'Vite',
      'Preact',
      'TypeScript'
    ],
    supported: false,
    dates: {
      devStart: '12 January 2022',
      release: '13 January 2022',
      abandon: '13 January 2022'
    },
    scope: 2,
    description: 'Нативное приложение, позволяющее находить торренты с контентом для взрослых',
    unpublic: true,
    hidden: false,
    logo: mypronLogo,
    links: [
      'https://github.com/VityaSchel/mypron'
    ],
    id: 'mypron'
  },
  {
    name: 'Panic Button',
    stack: [
      'React',
      'less'
    ],
    supported: false,
    dates: {
      devStart: '2021',
      release: '2021'
    },
    scope: 1,
    description: 'Сайт, где женщина громко кричит, если нажать на кнопку (первый сайт на React)',
    unpublic: false,
    hidden: false,
    logo: panicButtonLogo,
    links: [
      'https://github.com/VityaSchel/panic-button'
    ],
    category: 'website',
    id: 'panic-button'
  },
  {
    name: 'АСУ РСО кастомные названия предметов',
    stack: [
      'Vanilla JS'
    ],
    supported: false,
    dates: {
      devStart: '2021',
      release: '2021'
    },
    scope: 2,
    description: 'Расширение создающее свои названия для предметов в асу рсо',
    unpublic: true,
    hidden: false,
    logo: asursoCustomNamesLogo,
    links: [
      'https://github.com/VityaSchel/asurso-custom-names'
    ],
    category: 'chrome_extension',
    id: 'асу-рсо-кастомные-названия-предметов'
  },
  {
    name: 'hiddenID_5',
    stack: [
      'Vanilla JS',
      'less'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 3,
    description: '',
    unpublic: true,
    hidden: true,
    category: 'website',
    id: 'hiddenid-5'
  },
  {
    name: 'Wikipedia Speedrun',
    stack: [
      'Vanilla JS',
      'PHP'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 2,
    description: 'Игра про спидраннинг википедии (от случайной статьи до гитлера)',
    unpublic: false,
    hidden: false,
    logo: wikipediaSpeedrunLogo,
    links: [
      'https://wikipedia.utidteam.com'
    ],
    category: 'website',
    id: 'wikipedia-speedrun'
  },
  {
    name: 'Py3Exec',
    stack: [
      'Vanilla JS',
      'Bootstrap',
      'PHP',
      'MySQL'
    ],
    supported: false,
    dates: {
      devStart: '2019',
      release: '2019',
      abandon: '2021'
    },
    scope: 3,
    description: 'Сайт для тренировки написания кода на питоне, решая задачи',
    unpublic: false,
    hidden: false,
    logo: py3ExecLogo,
    category: 'website',
    id: 'py3exec'
  },
  {
    name: 'Dragon Quests',
    stack: [],
    supported: false,
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 3,
    description: 'Огромная карта майнкрафт с развитыми ветками диалогов',
    unpublic: false,
    hidden: false,
    links: [
      'https://www.planetminecraft.com/project/dragon-quests/'
    ],
    category: 'minecraft_map',
    id: 'dragon-quests'
  },
  {
    name: 'Сайт для заказа рофл-звонков Валакаса',
    stack: [
      'Vanilla JS',
      'PHP',
      'MySQL'
    ],
    supported: false,
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2020'
    },
    scope: 4,
    description: 'Сайт для заказа пранк звонков от Глада Валакаса',
    unpublic: false,
    hidden: false,
    logo: roflCallsOrderWebsiteLogo,
    links: [
      'https://github.com/VityaSchel/glad-valakas-website'
    ],
    category: 'website',
    id: 'сайт-для-заказа-рофл-звонков-валакаса'
  },
  {
    name: 'Stigfinnare Stats',
    stack: [
      'Vanilla JS',
      'PHP',
      'Python'
    ],
    supported: 'partially',
    dates: {
      devStart: '2019',
      release: '2019',
      abandon: '2020'
    },
    scope: 2,
    description: 'Статистика из моей игры Stigfinnare',
    unpublic: false,
    hidden: false,
    logo: stigfinnareLogo,
    links: [
      'http://stats.utidteam.com/'
    ],
    category: 'website',
    id: 'stigfinnare-stats'
  },
  {
    name: 'Хочешь стать программистом?',
    stack: [
      'Vanilla JS'
    ],
    supported: false,
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 2,
    description: 'Сайт мем про "Хочешь стать программистом?"',
    unpublic: true,
    hidden: false,
    logo: wantToBeAProgrammerLogo,
    links: [
      'https://github.com/VityaSchel/YouWantToBecomeAProgrammer'
    ],
    category: 'website',
    id: 'хочешь-стать-программистом-'
  },
  {
    name: 'bridgedb-tgbot',
    stack: [
      'NodeJS',
      'apache',
      'Telegram Bot API'
    ],
    supported: false,
    dates: {
      devStart: '7 January 2022',
      release: '7 January 2022',
      abandon: '7 January 2022'
    },
    scope: 1,
    description: 'Бот, который присылал мосты из BridgeDB для TOR, делая парсинг HTML кода',
    unpublic: false,
    hidden: false,
    links: [
      'https://github.com/VityaSchel/bridgedb-tgbot'
    ],
    category: 'bot/telegram',
    id: 'bridgedb-tgbot'
  },
  {
    name: 'hiddenID_1',
    stack: [
      'Java',
      'Vanilla JS',
      'PHP',
      'MySQL'
    ],
    supported: false,
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2020'
    },
    scope: 3,
    description: '',
    unpublic: true,
    hidden: true,
    id: 'hiddenid-1'
  },
  {
    name: 'hiddenID_8',
    stack: ['React', 'NodeJS', 'FastCGI'],
    dates: { devStart: '2022-05-05', release: '2022-05-07' },
    scope: 2,
    description: '',
    unpublic: true,
    hidden: true,
    category: 'website',
    id: 'hiddenid-8'
  },
  {
    name: 'Witness Guesser',
    stack: [
      'Vanilla JS',
      'PHP',
      'Python',
      'Clarifai API'
    ],
    dates: {
      devStart: '2020',
      abandon: '2020'
    },
    scope: 2,
    description: 'Нейросеть, которая угадывает ПО ФОТО из игры witness как решить головоломку, используя сервис Clarifai',
    unpublic: false,
    hidden: false,
    category: 'website',
    id: 'witness-guesser'
  },
  {
    name: 'Useless canvas based editor',
    stack: [
      'Vanilla JS'
    ],
    supported: false,
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 2,
    description: 'Редактор текста на основе canvas',
    unpublic: false,
    hidden: false,
    logo: uselessCanvasBasedTextEditorLogo,
    links: [
      'https://github.com/VityaSchel/useless-canvas-based-text-editor'
    ],
    category: 'website',
    id: 'useless-canvas-based-editor'
  },
  {
    name: 'StreamDO',
    stack: [
      'Vanilla JS'
    ],
    dates: {
      devStart: '2019',
      abandon: '2019'
    },
    scope: 2,
    description: 'Сайт который задумывался как альтернатива Twitch без идиотских правил; закрыт навсегда из-за bitwave',
    unpublic: false,
    hidden: false,
    category: 'website',
    id: 'streamdo'
  },
  {
    name: 'Bad UX support form',
    stack: [
      'Vanilla JS'
    ],
    supported: false,
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 1,
    description: 'Сайт c плохим интерфейсом, для поста на реддите',
    unpublic: false,
    hidden: false,
    links: [
      'https://github.com/VityaSchel/bad-ux-support-widget'
    ],
    category: 'website',
    id: 'bad-ux-support-form'
  },
  {
    name: 'hiddenID_4',
    stack: [
      'React',
      'C',
      'Figma',
      'MariaDB'
    ],
    supported: false,
    dates: {
      devStart: '2021',
      abandon: '2021'
    },
    scope: 3,
    description: '',
    unpublic: true,
    hidden: true,
    category: 'website',
    id: 'hiddenid-4'
  },
  {
    name: 'EvieBotCanTalk',
    stack: [
      'Vanilla JS'
    ],
    dates: {
      devStart: '2017',
      abandon: '2017'
    },
    scope: 2,
    description: 'Расширение для общения двух чатботов, популярного в YouTube на тот момент, Evie',
    unpublic: false,
    hidden: false,
    category: 'chrome_extension',
    id: 'eviebotcantalk'
  },
  {
    name: 'PsStoreMobile',
    stack: [
      'Java'
    ],
    dates: {
      devStart: '2018',
      abandon: '2018'
    },
    scope: 2,
    description: 'Приложение на телефон, где можно было найти интересные игры по персональным рекоммендациям',
    unpublic: false,
    hidden: false,
    category: 'app',
    id: 'psstoremobile'
  },
  {
    name: 'PGI',
    stack: [
      'Java'
    ],
    dates: {
      devStart: '2020',
      abandon: '2020'
    },
    scope: 2,
    description: 'Приложение для посика биолгических родителей и связей с другими людьми',
    unpublic: false,
    hidden: false,
    category: 'app',
    tags: [
      'order'
    ],
    id: 'pgi'
  },
  {
    name: 'hiddenID_6',
    stack: [
      'React'
    ],
    supported: 'partially',
    dates: {
      devStart: '5 July 2021',
      release: '6 July 2021'
    },
    scope: 2,
    description: '',
    unpublic: true,
    hidden: true,
    category: 'website',
    id: 'hiddenid-6'
  },
  {
    name: '6 причин перейти с Native на PWA',
    stack: [
      'React'
    ],
    supported: false,
    dates: {
      devStart: '2021',
      release: '2021'
    },
    scope: 1,
    description: 'Статья',
    unpublic: false,
    hidden: false,
    links: [
      'https://6oj54.csb.app/'
    ],
    category: 'website',
    id: '6-причин-перейти-с-native-на-pwa'
  },
  {
    name: 'Escape The Mall',
    stack: [
      'Unity',
      'C#'
    ],
    supported: false,
    dates: {
      devStart: '2020',
      abandon: '2020'
    },
    scope: 4,
    description: 'Хоррор где надо наворовать в магазине и убежать',
    unpublic: false,
    hidden: false,
    category: 'game/windows10',
    id: 'escape-the-mall'
  },
  {
    name: 'Anonymizer',
    stack: [
      'Vanilla JS',
      'PHP'
    ],
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2021'
    },
    scope: 1,
    description: 'Мой персональный анонимайзер (прокси сервер) с паролем',
    unpublic: false,
    hidden: false,
    category: 'website',
    id: 'anonymizer'
  },
  {
    name: 'Big Quest',
    stack: [
      'Unity',
      'C#'
    ],
    supported: false,
    dates: {
      devStart: '2018',
      release: '2018'
    },
    scope: 3,
    description: 'Игра, где разбившись на самолете, игроку предстоит собрать чипы, открыть дверь в бункер и спастись',
    unpublic: false,
    hidden: false,
    category: 'game/windows10',
    id: 'big-quest'
  },
  {
    name: 'Nikita-bot',
    stack: [
      'Python',
      'markovify'
    ],
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2020'
    },
    scope: 1,
    description: 'ИИ, генерирующий предложения, похожие на то, что говорит мой друг Никита Ким',
    unpublic: false,
    hidden: false,
    category: 'website',
    id: 'nikita-bot'
  },
  {
    name: 'hiddenID_3',
    stack: [
      'uCoz CMS'
    ],
    supported: false,
    dates: {
      devStart: '2015',
      release: '2015',
      abandon: '2018'
    },
    scope: 3,
    description: '',
    unpublic: true,
    hidden: true,
    category: 'website',
    id: 'hiddenid-3'
  },
  {
    name: 'В чем разница?',
    stack: [
      'Vanilla JS'
    ],
    supported: false,
    dates: {
      devStart: '2018',
      release: '2018',
      abandon: '2018'
    },
    scope: 1,
    description: 'Сайт, объясняющий разницу между похожими вещами. Мой самый первый сайт.',
    unpublic: false,
    hidden: false,
    category: 'website',
    id: 'в-чем-разница-'
  },
  {
    name: 'qqsh',
    stack: [
      'phpDevelStudio',
      'PHP'
    ],
    dates: {
      devStart: '2016',
      abandon: '2016'
    },
    scope: 1,
    description: 'Игра по типу quiplash',
    unpublic: false,
    hidden: false,
    category: 'game/windows10',
    id: 'qqsh'
  },
]
