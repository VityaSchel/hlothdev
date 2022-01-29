import stigfinnareLogo from '../assets/images/projectsLogos/stigfinnare.png'
import rollerRideLogo from '../assets/images/projectsLogos/roller-ride.png'
import abobaLogo from '../assets/images/projectsLogos/aboba.png'
import gadzasOldLogo from '../assets/images/projectsLogos/gadzas-old.png'
import gadzasNewLogo from '../assets/images/projectsLogos/gadzas.png'
import sipackerLogo from '../assets/images/projectsLogos/sipacker.png'
import rJolygolfLogo from '../assets/images/projectsLogos/rJolygolf.png'
import shizonyanLogo from '../assets/images/projectsLogos/shizonyan.png'
import atmosCraftLogo from '../assets/images/projectsLogos/atmoscraft.png'
import samaracoinLogo from '../assets/images/projectsLogos/samaracoin.png'
import atmosSeriesBotLogo from '../assets/images/projectsLogos/atmosseriesbot.png'
import mashaSimulatorLogo from '../assets/images/projectsLogos/masha-simulator.png'
import remafiaLogo from '../assets/images/projectsLogos/remafia.png'
import lisNceLogo from '../assets/images/projectsLogos/lis-nce.png'
import ogeGeneratorLogo from '../assets/images/projectsLogos/oge-generator.png'
import fitVsFelLogo from '../assets/images/projectsLogos/fit-vs-fel.png'
import czechLivingCostsLogo from '../assets/images/projectsLogos/czech-living-costs.png'
import homirrorLogo from '../assets/images/projectsLogos/homirror.png'
import niolySchoolLogo from '../assets/images/projectsLogos/niolyschool.png'
import educoLogo from '../assets/images/projectsLogos/educo.png'
import bitProtectLogo from '../assets/images/projectsLogos/bitprotect.png'
import foodStuffLogo from '../assets/images/projectsLogos/foodstuff.png'
import goodmorningBotLogo from '../assets/images/projectsLogos/goodmorning-bot.png'
import mcDonaldsOffersLogo from '../assets/images/projectsLogos/mcdonaldsoffersbot.png'
import rusWordConBotLogo from '../assets/images/projectsLogos/ruswordconbot.png'
import vityaschelSiteLogo from '../assets/images/projectsLogos/vityaschel.png'
import igroruporLogo from '../assets/images/projectsLogos/igrorupor.png'
import cleanerLogo from '../assets/images/projectsLogos/cleaner.png'
import noSquidGameLogo from '../assets/images/projectsLogos/no-squid-game.png'
import gettrDarkThemeLogo from '../assets/images/projectsLogos/gettr-dark-theme.png'
import probablyKrolLogo from '../assets/images/projectsLogos/probablykrol-bot.png'
import skysmartHelperLogo from '../assets/images/projectsLogos/skysmart-helper.png'
import mypronLogo from '../assets/images/projectsLogos/mypron.png'
import panicButtonLogo from '../assets/images/projectsLogos/panic-button.png'
import asursoCustomNamesLogo from '../assets/images/projectsLogos/asurso-custom-names.png'
import uselessCanvasBasedTextEditorLogo from '../assets/images/projectsLogos/useless-canvas-based-text-editor.png'
import wikipediaSpeedrunLogo from '../assets/images/projectsLogos/wikipedia-speedrun.png'
import py3ExecLogo from '../assets/images/projectsLogos/py3exec.png'
import roflCallsOrderWebsiteLogo from '../assets/images/projectsLogos/rofl-calls-order-website.png'
import wantToBeAProgrammerLogo from '../assets/images/projectsLogos/want-to-be-a-programmer.png'

// scope: 1=verysmall 2=small 3=average 4=big 5=huge

export default [
  {
    name: 'Stigfinnare',
    stack: [
      'Unity',
      'C#'
    ],
    supported: 'partially',
    dates: {
      devStart: '2018',
      release: '27 June 2019',
      abandon: '2020'
    },
    scope: 5,
    description: 'Игра где 6 людей сражаются в мини играх за большее кол-во очков',
    public: true,
    hidden: false,
    logo: stigfinnareLogo,
    links: [
      'https://stigfinnare.utidteam.com/'
    ],
    category: 'game/windows10'
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
    description: 'Игра про шарик (аркада) в которой ты летишь до солнца минуя препятствия',
    public: true,
    hidden: false,
    logo: rollerRideLogo,
    links: [
      'https://play.google.com/store/apps/details?id=com.VityaSchel.RollerRide'
    ],
    category: 'game/android'
  },
  {
    name: 'АБОБА 2024 Кандидат в президенты',
    stack: [
      'NextJS',
      'React',
      'less'
    ],
    supported: true,
    dates: {
      devStart: '2021',
      release: '2022'
    },
    scope: 3,
    description: 'Сайт абобы: кандидата в президенты и мема от Глада Валакаса',
    public: true,
    hidden: false,
    logo: abobaLogo,
    links: [
      'https://aboba.utidteam.com/',
      'https://freelance.habr.com/projects/244049'
    ],
    category: 'website'
  },
  {
    name: 'Гадзы Глада Валакаса (1.0)',
    stack: [
      'Vanilla JS',
      'PHP'
    ],
    supported: false,
    dates: {
      devStart: '20 February 2020',
      release: '20 February 2020',
      abandon: '20 February 2021'
    },
    scope: 4,
    description: 'Сборник всех гадз глада валакаса (раннее известен как гадзы.online)',
    public: true,
    hidden: false,
    logo: gadzasOldLogo,
    links: [
      'https://godzilla.utidteam.com/'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: gadzasNewLogo,
    links: [
      'https://godzilla.utidteam.com/'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: sipackerLogo,
    links: [
      'https://github.com/VityaSchel/SIPacker'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: rJolygolfLogo,
    links: [
      'https://github.com/VityaSchel/RedditJolygolfBot',
      'https://freelance.habr.com/projects/216865'
    ],
    category: 'bot/reddit'
  },
  {
    name: 'Шизоньян',
    stack: [
      'python',
      'markovify',
      'express',
      'React'
    ],
    supported: 'partially',
    dates: {
      devStart: '2021',
      release: '2021'
    },
    scope: 2,
    description: 'Сайт генератор твитов маргариты симоньян',
    public: true,
    hidden: false,
    logo: shizonyanLogo,
    links: [
      'https://shizonyan.utidteam.com/'
    ],
    category: 'website'
  },
  {
    name: 'AtmosCraft',
    stack: [
      'React',
      'Fastify',
      'Level'
    ],
    supported: false,
    dates: {
      devStart: '27 September 2021',
      release: '6 October 2021',
      abandon: '30 December 2021'
    },
    scope: 3,
    description: 'Лендинг для майнкрафт сервера и веб-сервер с API (rcon+status)',
    public: true,
    hidden: false,
    tags: [
      'order'
    ],
    logo: atmosCraftLogo,
    links: [
      'https://freelance.habr.com/projects/249937'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    tags: [
      'order'
    ],
    links: [
      'https://freelance.habr.com/projects/259285'
    ],
    category: 'figma_plugin'
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
      devStart: '2021',
      release: '2022'
    },
    scope: 3,
    description: 'Альткоин и не крипто валюта в телеграме майнится написанием слова самара',
    public: true,
    hidden: false,
    logo: samaracoinLogo,
    links: [
      'https://t.me/samaracoinbot'
    ],
    category: 'bot/telegram'
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
    public: true,
    hidden: false,
    links: [
      'https://www.npmjs.com/package/asurso'
    ],
    category: 'npmjs_library'
  },
  {
    name: 'reuploader',
    stack: [
      'NodeJS',
      'NodeJS',
      'streamlink',
      'ffmpeg',
      'Kubernetes',
      'docker'
    ],
    supported: 'partially',
    dates: {
      devStart: '20 November 2021',
      release: '20 November 2021'
    },
    scope: 1,
    description: 'Инструмент для автоматической записи и перезалива стримов с YouTube',
    public: true,
    hidden: false,
    links: [
      'https://github.com/VityaSchel/reuploader'
    ],
    category: 'app'
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
    description: 'Панель управления ботом с добавлением модераторов, контента, проверка на подписку',
    public: true,
    hidden: false,
    tags: [
      'order'
    ],
    logo: atmosSeriesBotLogo,
    links: [
      'https://freelance.habr.com/projects/244063'
    ],
    category: 'bot/telegram'
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
    public: true,
    hidden: false,
    logo: mashaSimulatorLogo,
    links: [
      'https://play.google.com/store/apps/details?id=com.VityaSchel.GoStudyMashaSimulator'
    ],
    category: 'game/android'
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
      'React-native-paper'
    ],
    supported: true,
    dates: {
      devStart: '26 August 2021',
      abandon: '10 January 2022'
    },
    scope: 4,
    description: 'Карточная игра Мафия, но онлайн. Ремейк легендарной Мафии Онлайн на React Native. Задумывалась как конкурент, который поглотит Мафию Онлайн и Мафию GO',
    public: true,
    hidden: false,
    logo: 0,
    category: 'game/android'
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
    public: true,
    hidden: false,
    tags: [
      'order'
    ],
    logo: lisNceLogo,
    links: [
      'https://freelance.habr.com/projects/259287'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    links: [
      'https://www.npmjs.com/package/destream-api'
    ],
    category: 'npmjs_library'
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
    public: true,
    hidden: false,
    links: [
      'https://www.npmjs.com/package/alerts-api'
    ],
    category: 'npmjs_library'
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
    public: true,
    hidden: false,
    logo: ogeGeneratorLogo,
    links: [
      'https://oge.utidteam.com/'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: fitVsFelLogo,
    links: [
      'https://utidteam.com/FITvsFEL/'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: czechLivingCostsLogo,
    links: [
      'https://utidteam.com/gostudy/'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: homirrorLogo,
    links: [
      'https://portfolio.utidteam.com/homirror'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: niolySchoolLogo,
    links: [
      'https://portfolio.utidteam.com/niolyschool'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: educoLogo,
    links: [
      'https://portfolio.utidteam.com/educo'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: bitProtectLogo,
    links: [
      'https://portfolio.utidteam.com/bitprotect'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: foodStuffLogo,
    links: [
      'https://portfolio.utidteam.com/foodstuff'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: goodmorningBotLogo,
    links: [
      'https://github.com/VityaSchel/goodmorning-bot'
    ],
    category: 'bot/vk'
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
    public: true,
    hidden: false,
    logo: mcDonaldsOffersLogo,
    links: [
      'https://t.me/macsamarabot'
    ],
    category: 'bot/telegram'
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
    public: true,
    hidden: false,
    logo: rusWordConBotLogo,
    links: [
      'https://t.me/ruswordconbot'
    ],
    category: 'bot/telegram'
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
    public: false,
    hidden: true,
    category: 'bot/vk'
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
    public: true,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: 0,
    category: 'website'
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
    public: true,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: 0,
    category: 'website'
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
    public: true,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: 0,
    category: 'website'
  },
  {
    name: 'VityaSchel Site: лаймовая галлерея',
    stack: [
      'Vanilla JS',
      'Plain HTML'
    ],
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2020'
    },
    scope: 3,
    description: 'Четвертый сайт про все мои проекты и меня в виде лаймовой галереи',
    public: true,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: 0,
    category: 'website'
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
    public: true,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo,
    links: [
      'https://vityaschel.utidteam.com'
    ],
    category: 'website'
  },
  {
    name: 'VityaSchel Site: hloth.dev с 3D-фигурами',
    stack: [
      'React',
      'ThreeJS',
      'React-three-fiber',
      'Redux',
      'React-redux',
      'MUI'
    ],
    supported: true,
    dates: {
      devStart: '24 November 2021'
    },
    scope: 4,
    description: 'Шестой сайт про все мои проекты, услуги, технологии и донаты с использованием ThreeJS',
    public: true,
    hidden: false,
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo,
    links: [
      'https://hloth.dev'
    ],
    category: 'website'
  },
  {
    name: 'hiddenID_2',
    stack: [
      'NextJS',
      'MongoDB',
      'Mapbox',
      'ThreeJS',
      'React-three-fiber',
      'scss'
    ],
    supported: true,
    dates: {
      devStart: '30 March 2021',
      release: '18 April 2021'
    },
    scope: 4,
    description: '',
    public: false,
    hidden: true,
    category: 'website'
  },
  {
    name: 'Vite CSGO Case Simulator',
    stack: [
      'Vite',
      'Preact',
      'webpack',
      'babel',
      'redux',
      'react-redux',
      'nginx'
    ],
    supported: 'partially',
    dates: {
      devStart: '6 January 2022',
      release: '6 January 2022'
    },
    scope: 2,
    description: 'Мой первый даркнет-сайт и первый проект на Vite с рулеткой CS:GO',
    public: true,
    hidden: false,
    links: [
      'https://github.com/VityaSchel/vitejs-csgo-case-simulator'
    ],
    category: 'website/darknet'
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
    public: true,
    hidden: false,
    links: [
      'https://www.npmjs.com/package/random-steam-avatar'
    ],
    category: 'npmjs_library'
  },
  {
    name: 'Бот Алисы: Игрорупор',
    stack: [
      'PHP',
      'DuckDuckGo API'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2021'
    },
    scope: 3,
    description: 'Бот Алисы, который афиширует новости из мира игр и может угадать игру по описанию',
    public: true,
    hidden: false,
    logo: 0,
    category: 'bot/yandex_alice'
  },
  {
    name: 'Уборщица',
    stack: [
      'Vanilla JS',
      'Plain HTML'
    ],
    supported: 'partially',
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 2,
    description: 'Расширение удаляющее сообщения Кирилла Смирнова из бесед ВКонтакте',
    public: true,
    hidden: false,
    logo: cleanerLogo,
    links: [
      'https://chrome.google.com/webstore/detail/%D1%83%D0%B1%D0%BE%D1%80%D1%89%D0%B8%D1%86%D0%B0/pbkimmanmhebbfdphpkjpdkolihanmah?hl=ru'
    ],
    category: 'chrome_extension'
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
    public: true,
    hidden: false,
    logo: noSquidGameLogo,
    links: [
      'https://chrome.google.com/webstore/detail/no-squid-game/enmgknhljpalgmfclkinhglkkpgjogdd'
    ],
    category: 'chrome_extension'
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
    public: true,
    hidden: false,
    category: 'game/windows10'
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
    public: true,
    hidden: false,
    category: 'game/windows10'
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
    public: true,
    hidden: false,
    links: [
      'https://github.com/VityaSchel/vladimir-solovyev'
    ],
    category: 'website'
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
    public: false,
    hidden: false,
    logo: gettrDarkThemeLogo,
    links: [
      'https://chrome.google.com/webstore/detail/gettr-dark-theme/jcjmdpdahejbjiopgedoljllckbmmekc'
    ],
    category: 'website'
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
    description: 'Бот в телеграме отправляющий гифки кролика в чат по текстовому запросу',
    public: true,
    hidden: false,
    logo: probablyKrolLogo,
    links: [
      'https://t.me/probablykrolbot'
    ],
    category: 'bot/telegram'
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
    public: true,
    hidden: false,
    links: [
      'https://www.npmjs.com/package/react-graphic-key'
    ],
    category: 'npmjs_library'
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
    public: true,
    hidden: false,
    links: [
      'https://navalnyarrested.utidteam.com/'
    ],
    category: 'bot/telegram'
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
    public: true,
    hidden: false,
    links: [
      'https://www.youtube.com/watch?v=eUpy5KzF8XY&list=PLog2oYXiWbm0lYL_q86UIT2FzfrmDm1cT'
    ],
    category: 'stream'
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
    public: true,
    hidden: false,
    links: [
      'https://github.com/vityaschel/ruscript'
    ],
    category: 'programming_language'
  },
  {
    name: 'SkySmart helper',
    stack: [
      'Vanilla JS',
      'Plain HTML'
    ],
    supported: 'partially',
    dates: {
      devStart: '2021',
      release: '2021'
    },
    scope: 2,
    description: 'Помощник к сайту SkySmart чтобы списывать было легче',
    public: true,
    hidden: false,
    logo: skysmartHelperLogo,
    links: [
      'https://chrome.google.com/webstore/detail/skysmart-helper/jedfnnibgbfgmcjbibkfbjclbicdfoim?hl=ru'
    ],
    category: 'chrome_extension'
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
    public: false,
    hidden: false,
    logo: mypronLogo,
    links: [
      'https://github.com/VityaSchel/mypron'
    ]
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
    public: true,
    hidden: false,
    logo: panicButtonLogo,
    links: [
      'https://github.com/VityaSchel/panic-button'
    ],
    category: 'website'
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
    public: false,
    hidden: false,
    logo: asursoCustomNamesLogo,
    links: [
      'https://github.com/VityaSchel/asurso-custom-names'
    ],
    category: 'chrome_extension'
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
    public: false,
    hidden: true,
    category: 'website'
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
    public: true,
    hidden: false,
    logo: wikipediaSpeedrunLogo,
    links: [
      'https://wikipedia.utidteam.com'
    ],
    category: 'website'
  },
  {
    name: 'Py3Exec',
    stack: [
      'Vanilla JS',
      'Bootstrap',
      'PHP'
    ],
    supported: false,
    dates: {
      devStart: '2019',
      release: '2019',
      abandon: '2021'
    },
    scope: 3,
    description: 'Сайт для тренировки написания кода на питоне, решая задачи',
    public: true,
    hidden: false,
    logo: 0,
    category: 'website'
  },
  {
    name: 'Dragon Quests',
    stack: '',
    supported: false,
    dates: {
      devStart: '2020',
      release: '2020'
    },
    scope: 3,
    description: 'Огромная карта майнкрафт с развитыми ветками диалогов',
    public: true,
    hidden: false,
    links: [
      'https://www.planetminecraft.com/project/dragon-quests/'
    ],
    category: 'minecraft_map'
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
    public: true,
    hidden: false,
    logo: roflCallsOrderWebsiteLogo,
    links: [
      'https://github.com/VityaSchel/glad-valakas-website'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    logo: stigfinnareLogo,
    links: [
      'http://stats.utidteam.com/'
    ],
    category: 'website'
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
    description: 'Сайт мем про \"Хочешь стать программистом?\"',
    public: false,
    hidden: false,
    logo: wantToBeAProgrammerLogo,
    links: [
      'https://github.com/VityaSchel/YouWantToBecomeAProgrammer'
    ],
    category: 'website'
  },
  {
    name: 'bridgedb-tgbot',
    stack: [
      'NodeJS',
      'nginx',
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
    public: true,
    hidden: false,
    links: [
      'https://github.com/VityaSchel/bridgedb-tgbot'
    ],
    category: 'bot/telegram'
  },
  {
    name: 'hiddenID_1',
    stack: [
      'Java',
      'Vanilla JS',
      'PHP'
    ],
    supported: false,
    dates: {
      devStart: '2020',
      release: '2020',
      abandon: '2020'
    },
    scope: 3,
    description: '',
    public: false,
    hidden: true
  },
  {
    name: 'Witness Guesser',
    stack: [
      'Vanilla JS',
      'PHP',
      'Python'
    ],
    dates: {
      devStart: '2020',
      abandon: '2020'
    },
    scope: 2,
    description: 'ИИ которое угадывает ПО ФОТО из игры witness как решить головоломку',
    public: true,
    hidden: false,
    category: 'website'
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
    public: true,
    hidden: false,
    logo: uselessCanvasBasedTextEditorLogo,
    links: [
      'https://github.com/VityaSchel/useless-canvas-based-text-editor'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    category: 'website'
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
    public: true,
    hidden: false,
    links: [
      'https://github.com/VityaSchel/bad-ux-support-widget'
    ],
    category: 'website'
  },
  {
    name: 'hiddenID_4',
    stack: [
      'React',
      'C',
      'MariaDB'
    ],
    supported: false,
    dates: {
      devStart: '2021',
      abandon: '2021'
    },
    scope: 3,
    description: '',
    public: false,
    hidden: true,
    category: 'website'
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
    public: true,
    hidden: false,
    category: 'chrome_extension'
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
    public: true,
    hidden: false
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
    public: true,
    hidden: false,
    tags: [
      'order'
    ]
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
    public: false,
    hidden: true,
    category: 'website'
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
    public: true,
    hidden: false,
    links: [
      'https://6oj54.csb.app/'
    ],
    category: 'website'
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
    public: true,
    hidden: false,
    category: 'game/windows10'
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
    public: true,
    hidden: false,
    category: 'website'
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
    public: true,
    hidden: false,
    category: 'game/windows10'
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
    public: true,
    hidden: false,
    category: 'website'
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
    public: false,
    hidden: true,
    category: 'website'
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
    public: true,
    hidden: false,
    category: 'website'
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
    public: true,
    hidden: false,
    category: 'game/windows10'
  },
  {
    name: 'CWN',
    stack: [
      'Vanilla JS'
    ],
    dates: {
      devStart: '2018',
      abandon: '2018'
    },
    scope: 3,
    description: 'Сайт задумывался как возможность дать любому пользователю 1 страницу где можно разместить HTML',
    public: true,
    hidden: false,
    category: 'website'
  }
]
