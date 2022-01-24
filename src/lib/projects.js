import stigfinnareLogo from '../assets/images/projectsLogos/stigfinnare.png'
import rollerRideLogo from '../assets/images/projectsLogos/roller-ride.png'
import abobaLogo from '../assets/images/projectsLogos/aboba.png'
import gadzasOldLogo from '../assets/images/projectsLogos/gadzas-old.png'
import gadzasNewLogo from '../assets/images/projectsLogos/gadzas.png'
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
import probablyKrolLogo from '../assets/images/projectsLogos/probablykrol-bot.jpeg'
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
      abandon: '2020 (частично)'
    },
    scope: 5,
    description: 'Игра где 6 людей сражаются в мини играх за большее кол-во очков',
    public: true,
    hidden: false,
    category: 'Игра Windows 10',
    logo: stigfinnareLogo,
    links: ['https://stigfinnare.utidteam.com/']
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
    category: 'Игра Android',
    logo: rollerRideLogo,
    links: ['https://play.google.com/store/apps/details?id=com.VityaSchel.RollerRide']
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
    category: 'Веб-сайт',
    logo: abobaLogo,
    links: ['https://aboba.utidteam.com/', 'https://freelance.habr.com/projects/244049']
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
    category: 'Веб-сайт',
    logo: gadzasOldLogo,
    links: ['https://godzilla.utidteam.com/']
  },
  {
    name: 'Гадзы Глада Валакаса (2.0)',
    stack: [
      'React'
    ],
    supported: 'partially',
    dates: {
      devStart: '20 февраля 2021',
      release: '20 февраля 2021'
    },
    scope: 4,
    description: 'Сборник всех гадз глада валакаса (раннее известен как гадзы.online)',
    public: true,
    hidden: false,
    category: 'Веб-сайт',
    logo: gadzasNewLogo,
    links: ['https://godzilla.utidteam.com/']
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
    category: 'Веб-сайт',
    links: ['https://github.com/VityaSchel/SIPacker']
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
    category: 'Бот Reddit',
    logo: rJolygolfLogo,
    links: ['https://github.com/VityaSchel/RedditJolygolfBot', 'https://freelance.habr.com/projects/216865']
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
    category: 'Веб-сайт',
    logo: shizonyanLogo,
    links: ['https://shizonyan.utidteam.com/']
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
    category: 'Веб-сайт',
    tags: [
      'order'
    ],
    logo: atmosCraftLogo,
    links: ['https://freelance.habr.com/projects/249937']
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
    category: 'Плагин Figma',
    tags: [
      'order'
    ],
    links: ['https://freelance.habr.com/projects/259285']
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
    category: 'Бот Telegram',
    logo: samaracoinLogo,
    links: ['https://t.me/samaracoinbot']
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
    category: 'Библиотека js',
    links: ['https://www.npmjs.com/package/asurso']
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
    category: 'Приложение',
    links: ['https://github.com/VityaSchel/reuploader']
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
    category: 'Бот Telegram',
    tags: [
      'order'
    ],
    logo: atmosSeriesBotLogo,
    links: ['https://freelance.habr.com/projects/244063']
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
    category: 'Игра Android',
    logo: mashaSimulatorLogo,
    links: ['https://play.google.com/store/apps/details?id=com.VityaSchel.GoStudyMashaSimulator']
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
    category: 'Игра Android',
    logo: remafiaLogo
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
    category: 'Веб-сайт',
    tags: [
      'order'
    ],
    logo: lisNceLogo,
    links: ['https://freelance.habr.com/projects/259287']
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
    category: 'Библиотека js',
    links: ['https://www.npmjs.com/package/destream-api']
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
    category: 'Библиотека js',
    links: ['https://www.npmjs.com/package/alerts-api']
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
    category: 'Веб-сайт',
    logo: ogeGeneratorLogo,
    links: ['https://oge.utidteam.com/']
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
    category: 'Веб-сайт',
    logo: fitVsFelLogo,
    links: ['https://utidteam.com/FITvsFEL/']
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
    category: 'Веб-сайт',
    logo: czechLivingCostsLogo,
    links: ['https://utidteam.com/gostudy/']
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
    category: 'Веб-сайт',
    logo: homirrorLogo,
    links: ['https://portfolio.utidteam.com/homirror']
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
    category: 'Веб-сайт',
    logo: niolySchoolLogo,
    links: ['https://portfolio.utidteam.com/niolyschool']
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
    category: 'Веб-сайт',
    logo: educoLogo,
    links: ['https://portfolio.utidteam.com/educo']
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
    category: 'Веб-сайт',
    logo: bitProtectLogo,
    links: ['https://portfolio.utidteam.com/bitprotect']
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
    category: 'Веб-сайт',
    logo: foodStuffLogo,
    links: ['https://portfolio.utidteam.com/foodstuff']
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
    category: 'Бот ВКонтакте',
    logo: goodmorningBotLogo,
    links: ['https://github.com/VityaSchel/goodmorning-bot']
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
    category: 'Бот Telegram',
    logo: mcDonaldsOffersLogo,
    links: ['https://t.me/macsamarabot']
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
    category: 'Бот Telegram',
    logo: rusWordConBotLogo,
    links: ['https://t.me/ruswordconbot']
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
    category: 'Бот ВКонтакте'
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
    category: 'Веб-сайт',
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo
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
    category: 'Веб-сайт',
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo
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
    category: 'Веб-сайт',
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo
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
    category: 'Веб-сайт',
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo
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
    category: 'Веб-сайт',
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo,
    links: ['https://vityaschel.utidteam.com']
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
    category: 'Веб-сайт',
    tags: [
      'personalsite'
    ],
    logo: vityaschelSiteLogo,
    links: ['https://hloth.dev']
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
    category: 'Веб-сайт'
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
    category: 'Веб-сайт Tor Hidden Services',
    links: ['https://github.com/VityaSchel/vitejs-csgo-case-simulator']
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
    category: 'Библиотека js',
    links: ['https://www.npmjs.com/package/random-steam-avatar']
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
    category: 'Бот Алисы',
    logo: igroruporLogo
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
    category: 'Расширение Chrome',
    logo: cleanerLogo,
    links: ['https://chrome.google.com/webstore/detail/%D1%83%D0%B1%D0%BE%D1%80%D1%89%D0%B8%D1%86%D0%B0/pbkimmanmhebbfdphpkjpdkolihanmah?hl=ru']
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
    category: 'Расширение Chrome',
    logo: noSquidGameLogo,
    links: ['https://chrome.google.com/webstore/detail/no-squid-game/enmgknhljpalgmfclkinhglkkpgjogdd']
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
    category: 'Игра Windows 10'
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
    category: 'Игра Windows 10'
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
    category: 'Веб-сайт',
    links: ['https://github.com/VityaSchel/vladimir-solovyev']
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
    category: 'Веб-сайт',
    logo: gettrDarkThemeLogo,
    links: ['https://chrome.google.com/webstore/detail/gettr-dark-theme/jcjmdpdahejbjiopgedoljllckbmmekc']
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
    category: 'Бот Telegram',
    logo: probablyKrolLogo,
    links: ['https://t.me/probablykrolbot']
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
    category: 'Библиотека js',
    links: ['https://www.npmjs.com/package/react-graphic-key']
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
    category: 'Бот Telegram',
    links: ['https://navalnyarrested.utidteam.com/']
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
    category: 'Стрим',
    links: ['https://www.youtube.com/watch?v=eUpy5KzF8XY&list=PLog2oYXiWbm0lYL_q86UIT2FzfrmDm1cT']
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
    category: 'Компилятор языка',
    links: ['https://github.com/vityaschel/ruscript']
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
    category: 'Расширение Chrome',
    logo: skysmartHelperLogo,
    links: ['https://chrome.google.com/webstore/detail/skysmart-helper/jedfnnibgbfgmcjbibkfbjclbicdfoim?hl=ru']
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
    category: 'Нативное приложение',
    logo: mypronLogo,
    links: ['https://github.com/VityaSchel/mypron']
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
    category: 'Веб-сайт',
    logo: panicButtonLogo,
    links: ['https://github.com/VityaSchel/panic-button']
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
    category: 'Расширение Chrome',
    logo: asursoCustomNamesLogo,
    links: ['https://github.com/VityaSchel/asurso-custom-names']
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
    category: 'Веб-сайт'
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
    category: 'Веб-сайт',
    logo: wikipediaSpeedrunLogo,
    links: ['https://wikipedia.utidteam.com']
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
    category: 'Веб-сайт',
    logo: py3ExecLogo
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
    category: 'Minecraft карта',
    links: ['https://www.planetminecraft.com/project/dragon-quests/']
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
    category: 'Веб-сайт',
    logo: roflCallsOrderWebsiteLogo,
    links: ['https://github.com/VityaSchel/glad-valakas-website']
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
    category: 'Веб-сайт',
    logo: stigfinnareLogo,
    links: ['http://stats.utidteam.com/']
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
    public: false,
    hidden: false,
    category: 'Веб-сайт',
    logo: wantToBeAProgrammerLogo,
    links: ['https://github.com/VityaSchel/YouWantToBecomeAProgrammer']
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
    category: 'Бот Telegram',
    links: ['https://github.com/VityaSchel/bridgedb-tgbot']
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
    hidden: true,
    category: 'Приложение Android'
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
    category: 'Веб-сайт'
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
    category: 'Веб-сайт',
    logo: uselessCanvasBasedTextEditorLogo,
    links: ['https://github.com/VityaSchel/useless-canvas-based-text-editor']
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
    category: 'Веб-сайт'
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
    category: 'Веб-сайт',
    links: ['https://github.com/VityaSchel/bad-ux-support-widget']
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
    category: 'Веб-сайт'
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
    category: 'Расширение Chrome'
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
    hidden: false,
    category: 'Приложение Android'
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
    category: 'Приложение Android',
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
    category: 'Веб-сайт'
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
    category: 'Веб-сайт',
    links: ['https://6oj54.csb.app/']
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
    category: 'Игра Windows 10'
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
    category: 'Веб-сайт'
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
    category: 'Игра Windows 10'
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
    category: 'Веб-сайт'
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
    category: 'Веб-сайт'
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
    category: 'Веб-сайт'
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
    category: 'Игра Windows 10'
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
    category: 'Веб-сайт'
  }
]
