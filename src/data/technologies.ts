import { ReactComponent as reactLogo } from '../assets/images/technologiesLogos/react.svg'
import { ReactComponent as nextLogo } from '../assets/images/technologiesLogos/nextjs.svg'
import { ReactComponent as preactLogo } from '../assets/images/technologiesLogos/preact.svg'
import { ReactComponent as createReactAppLogo } from '../assets/images/technologiesLogos/create-react-app.svg'
import { ReactComponent as viteLogo } from '../assets/images/technologiesLogos/vite.svg'
import { ReactComponent as javaScriptLogo } from '../assets/images/technologiesLogos/javascript.svg'
import { ReactComponent as mongoDBLogo } from '../assets/images/technologiesLogos/mongodb.svg'
import { ReactComponent as redisLogo } from '../assets/images/technologiesLogos/redis.svg'
import { ReactComponent as levelDBLogo } from '../assets/images/technologiesLogos/leveldb.svg'
import { ReactComponent as kubernetesLogo } from '../assets/images/technologiesLogos/kubernetes.svg'
import { ReactComponent as dockerLogo } from '../assets/images/technologiesLogos/docker.svg'
import { ReactComponent as nginxLogo } from '../assets/images/technologiesLogos/nginx.svg'
import { ReactComponent as apacheLogo } from '../assets/images/technologiesLogos/apache.svg'
import { ReactComponent as mysqlLogo } from '../assets/images/technologiesLogos/mysql.svg'
import { ReactComponent as postgresqlLogo } from '../assets/images/technologiesLogos/postgresql.svg'
import { ReactComponent as expressLogo } from '../assets/images/technologiesLogos/express.svg'
import { ReactComponent as fastifyLogo } from '../assets/images/technologiesLogos/fastify.svg'
import { ReactComponent as reduxLogo } from '../assets/images/technologiesLogos/redux.svg'
import { ReactComponent as tailwindLogo } from '../assets/images/technologiesLogos/tailwind.svg'
import { ReactComponent as shadcnLogo } from '../assets/images/technologiesLogos/shadcnui.svg'
import { ReactComponent as jestLogo } from '../assets/images/technologiesLogos/jest.svg'
import { ReactComponent as threejsLogo } from '../assets/images/technologiesLogos/threejs.svg'
import { ReactComponent as nodejsLogo } from '../assets/images/technologiesLogos/nodejs.svg'
import { ReactComponent as typescriptLogo } from '../assets/images/technologiesLogos/typescript.svg'
import { ReactComponent as babelLogo } from '../assets/images/technologiesLogos/babel.svg'
import { ReactComponent as materialUILogo } from '../assets/images/technologiesLogos/material-ui.svg'
import { ReactComponent as reactstrapLogo } from '../assets/images/technologiesLogos/reactstrap.svg'
import { ReactComponent as telegramBotAPILogo } from '../assets/images/technologiesLogos/telegram.svg'
import { ReactComponent as pituhonLogo } from '../assets/images/technologiesLogos/python.svg'
import { ReactComponent as phpLogo } from '../assets/images/technologiesLogos/php.svg'
import { ReactComponent as vkAPILogo } from '../assets/images/technologiesLogos/vk.svg'
import { ReactComponent as yandexAliceLogo } from '../assets/images/technologiesLogos/yandex-alice.svg'
import { ReactComponent as unityLogo } from '../assets/images/technologiesLogos/unity.svg'
import { ReactComponent as photonEngineLogo } from '../assets/images/technologiesLogos/photon-engine.svg'
import { ReactComponent as golangLogo } from '../assets/images/technologiesLogos/golang.svg'
import { ReactComponent as tauriLogo } from '../assets/images/technologiesLogos/tauri.svg'
import { ReactComponent as electronLogo } from '../assets/images/technologiesLogos/electron.svg'
import { ReactComponent as openaiLogo } from '../assets/images/technologiesLogos/openai.svg'
// import { ReactComponent as csharpLogo } from '../assets/images/technologiesLogos/csharp.svg'
import { ReactComponent as figmaLogo } from '../assets/images/technologiesLogos/figma.svg'
// import { ReactComponent as sketchLogo } from '../assets/images/technologiesLogos/sketch.svg'
import { ReactComponent as sparkArLogo } from '../assets/images/technologiesLogos/spark-ar.svg'
import { ReactComponent as webpackLogo } from '../assets/images/technologiesLogos/webpack.svg'
import { ReactComponent as rollupLogo } from '../assets/images/technologiesLogos/rollup-logo.svg'
import { ReactComponent as javaLogo } from '../assets/images/technologiesLogos/java.svg'
import { ReactComponent as reactNativeLogo } from '../assets/images/technologiesLogos/react-native.svg'
import { ReactComponent as expoLogo } from '../assets/images/technologiesLogos/expo.svg'
import { ReactComponent as swiftLogo } from '../assets/images/technologiesLogos/swift.svg'
import { ReactComponent as remixLogo } from '../assets/images/technologiesLogos/remix.svg'
import { ReactComponent as serviceWorkerLogo } from '../assets/images/technologiesLogos/workbox.svg'

// How to count projects for each technology:
// 1. Go to loop with each project, continue if any of these conditions meet:
// 2. If project stack includes key of technology
// 3. If project stack includes name of technology
// 4. If project stack includes any of aliases of technology

export default {
  react: {
    name: 'React',
    logo: reactLogo,
    startedLearning: new Date(2021, 1, 1),
    category: 'frontend'
  },
  next: {
    name: 'Next.js',
    logo: nextLogo,
    startedLearning: new Date(2021, 2, 1),
    category: 'frontend',
    aliases: ['NextJS']
  },
  vite: {
    name: 'Vite',
    logo: viteLogo,
    startedLearning: new Date(2021, 11, 25),
    category: 'frontend'
  },
  typescript: {
    name: 'TypeScript',
    logo: typescriptLogo,
    startedLearning: new Date(2021, 3, 19),
    category: 'frontend'
  },
  tailwind: {
    name: 'Tailwind',
    logo: tailwindLogo,
    startedLearning: new Date(2023, 9, 1),
    category: 'frontend',
    aliases: ['TailwindCSS']
  },
  shadcnui: {
    name: '@shadcn/ui',
    logo: shadcnLogo,
    startedLearning: new Date(2023, 8, 17),
    category: 'frontend'
  },
  materialUI: {
    name: 'Material UI',
    logo: materialUILogo,
    startedLearning: new Date(2021, 1, 24),
    category: 'frontend',
    aliases: ['MUI']
  },
  reactstrap: {
    name: 'Reactstrap',
    logo: reactstrapLogo,
    startedLearning: new Date(2021, 3, 5),
    category: 'frontend'
  },
  remix: {
    name: 'Remix',
    logo: remixLogo,
    startedLearning: new Date(2024, 0, 10),
    category: 'frontend'
  },
  serviceWorkers: {
    name: 'Service Worker (workbox)',
    logo: serviceWorkerLogo,
    startedLearning: new Date(2021, 8, 5),
    category: 'frontend',
    aliases: ['workbox', 'Service Worker']
  },
  threejs: {
    name: 'ThreeJS',
    logo: threejsLogo,
    startedLearning: new Date(2021, 5, 5),
    category: 'frontend'
  },
  reactThreeFiber: {
    name: 'react-three-fiber',
    logo: threejsLogo,
    startedLearning: new Date(2021, 5, 5),
    category: 'frontend',
    aliases: ['ThreeJS']
  },
  preact: {
    name: 'Preact',
    logo: preactLogo,
    startedLearning: new Date(2021, 11, 25),
    category: 'frontend'
  },
  createReactApp: {
    name: 'Create React App',
    logo: createReactAppLogo,
    startedLearning: new Date(2021, 7, 30),
    category: 'frontend',
    aliases: ['React']
  },
  javascript: {
    name: 'JavaScript',
    logo: javaScriptLogo,
    startedLearning: new Date(2020, 3, 2),
    category: 'frontend',
    aliases: ['Vanilla JS', 'React', 'NodeJS']
  },
  jest: {
    name: 'Jest',
    logo: jestLogo,
    startedLearning: new Date(2021, 4, 3),
    category: 'frontend'
  },
  webpack: {
    name: 'webpack',
    logo: webpackLogo,
    startedLearning: new Date(2021, 3, 1),
    category: 'frontend',
    aliases: ['webpack']
  },
  rollup: {
    name: 'Rollup',
    logo: rollupLogo,
    startedLearning: new Date(2022, 0, 6),
    category: 'frontend',
    aliases: ['rollup']
  },
  babel: {
    name: 'Babel',
    logo: babelLogo,
    startedLearning: new Date(2021, 1, 2),
    category: 'frontend',
    aliases: ['create-react-app']
  },
  mongoDB: {
    name: 'MongoDB',
    logo: mongoDBLogo,
    startedLearning: new Date(2020, 4, 3),
    category: 'backend'
  },
  levelDB: {
    name: 'LevelDB',
    logo: levelDBLogo,
    startedLearning: new Date(2021, 4, 23),
    category: 'backend'
  },
  mySQL: {
    name: 'MySQL',
    logo: mysqlLogo,
    startedLearning: new Date(2019, 3, 26),
    category: 'backend'
  },
  postgreSQL: {
    name: 'PostgreSQL',
    logo: postgresqlLogo,
    startedLearning: new Date(2020, 6, 2),
    category: 'backend'
  },
  kubernetes: {
    name: 'Kubernetes',
    logo: kubernetesLogo,
    startedLearning: new Date(2021, 5, 13),
    category: 'devops'
  },
  docker: {
    name: 'Docker',
    logo: dockerLogo,
    startedLearning: new Date(2021, 5, 13),
    category: 'devops'
  },
  nginx: {
    name: 'Nginx',
    logo: nginxLogo,
    startedLearning: new Date(2021, 10, 15),
    category: 'devops'
  },
  apache: {
    name: 'Apache',
    logo: apacheLogo,
    startedLearning: new Date(2019, 3, 20),
    category: 'devops'
  },
  express: {
    name: 'Express',
    logo: expressLogo,
    startedLearning: new Date(2020, 6, 27),
    category: 'backend'
  },
  fastify: {
    name: 'Fastify',
    logo: fastifyLogo,
    startedLearning: new Date(2021, 4, 23),
    category: 'backend'
  },
  reduxToolkit: {
    name: 'redux-toolkit',
    logo: reduxLogo,
    startedLearning: new Date(2021, 11, 6),
    category: 'frontend'
  },
  reactRedux: {
    name: 'react-redux',
    logo: reduxLogo,
    startedLearning: new Date(2021, 8, 19),
    category: 'frontend',
    aliases: ['redux']
  },
  rtkQuery: {
    name: 'rtk-query',
    logo: reduxLogo,
    startedLearning: new Date(2021, 11, 6),
    category: 'frontend'
  },
  tauri: {
    name: 'Tauri',
    logo: tauriLogo,
    startedLearning: new Date(2022, 0, 9),
    category: 'apps'
  },
  electron: {
    name: 'Electron',
    logo: electronLogo,
    startedLearning: new Date(2023, 10, 14),
    category: 'apps'
  },
  golang: {
    name: 'Go',
    logo: golangLogo,
    startedLearning: new Date(2022, 2, 29),
    category: 'apps'
  },
  nodejs: {
    name: 'NodeJS',
    logo: nodejsLogo,
    startedLearning: new Date(2020, 6, 13),
    category: 'apps'
  },
  redis: {
    name: 'Redis',
    logo: redisLogo,
    startedLearning: new Date(2021, 7, 26),
    category: 'backend'
  },
  // python: {
  //   name: 'Python',
  //   logo: pituhonLogo,
  //   startedLearning: new Date(2014, 4, 10),
  //   category: 'apps'
  // },
  php: {
    name: 'PHP',
    logo: phpLogo,
    startedLearning: new Date(2011, 10, 11),
    category: 'backend'
  },
  telegramBotAPI: {
    name: 'Telegram Bot API',
    logo: telegramBotAPILogo,
    startedLearning: new Date(2018, 6, 14),
    category: 'bot',
    addFromCategory: 'bot/telegram'
  },
  telegramCoreAPI: {
    name: 'Telegram User API',
    logo: telegramBotAPILogo,
    startedLearning: new Date(2018, 6, 14),
    category: 'bot',
    aliases: ['Telegram MTProto']
  },
  vkAPI: {
    name: 'VK Bot API',
    logo: vkAPILogo,
    startedLearning: new Date(2015, 10, 3),
    category: 'bot',
    addFromCategory: 'bot/vk',
    aliases: ['VK API', 'VK-IO']
  },
  yandexAliceAPI: {
    name: 'Yandex.Alice Dialogs',
    logo: yandexAliceLogo,
    startedLearning: new Date(2020, 3, 18),
    category: 'bot',
    addFromCategory: 'bot/yandex_alice',
    aliases: ['Яндекс.Диалоги API']
  },
  gpt: {
    name: 'OpenAI GPT API',
    logo: openaiLogo,
    startedLearning: new Date(2023, 11, 15),
    category: 'ai',
    aliases: ['gpt', 'GPT']
  },
  whisper: {
    name: 'OpenAI Whisper',
    logo: openaiLogo,
    startedLearning: new Date(2023, 11, 15),
    category: 'ai'
  },
  openaiModeration: {
    name: 'OpenAI Moderation',
    logo: openaiLogo,
    startedLearning: new Date(2024, 0, 10),
    category: 'ai'
  },
  markovify: {
    name: 'Markovify',
    logo: pituhonLogo,
    startedLearning: new Date(2020, 6, 15),
    category: 'ai'
  },
  unity: {
    name: 'Unity',
    logo: unityLogo,
    startedLearning: new Date(2016, 7, 27),
    category: 'gamedev'
  },
  photonEngine: {
    name: 'Photon Engine',
    logo: photonEngineLogo,
    startedLearning: new Date(2019, 1, 16),
    category: 'gamedev'
  },
  // cSharp: {
  //   name: 'C#',
  //   logo: csharpLogo,
  //   startedLearning: new Date(2016, 8, 2),
  //   category: 'gamedev'
  // },
  figma: {
    name: 'Figma',
    logo: figmaLogo,
    startedLearning: new Date(2019, 5, 11),
    category: 'design',
    aliases: ['Figma Plugin API', 'Figma REST API']
  },
  // sketch: {
  //   name: 'Sketch',
  //   logo: sketchLogo,
  //   startedLearning: new Date(2020, 9, 20),
  //   category: 'design'
  // },
  sparkAr: {
    name: 'Spark AR',
    logo: sparkArLogo,
    startedLearning: new Date(2022, 0, 30),
    category: 'design'
  },
  reactNative: {
    name: 'React Native',
    logo: reactNativeLogo,
    startedLearning: new Date(2021, 7, 30),
    category: 'mobile',
    aliases: ['react-native']
  },
  expo: {
    name: 'Expo',
    logo: expoLogo,
    startedLearning: new Date(2021, 7, 30),
    category: 'mobile',
    aliases: ['expo']
  },
  java: {
    name: 'Java',
    logo: javaLogo,
    startedLearning: new Date(2018, 11, 2),
    category: 'mobile'
  },
  swift: {
    name: 'Swift',
    logo: swiftLogo,
    startedLearning: new Date(2023, 8, 28),
    category: 'mobile',
    aliases: ['SwiftUI']
  },
}