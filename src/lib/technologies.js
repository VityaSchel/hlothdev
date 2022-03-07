import { ReactComponent as reactLogo } from '../assets/images/technologiesLogos/react.svg'
import { ReactComponent as nextLogo } from '../assets/images/technologiesLogos/nextjs.svg'
import { ReactComponent as reactNativeLogo } from '../assets/images/technologiesLogos/react-native.svg'
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
import { ReactComponent as webpackLogo } from '../assets/images/technologiesLogos/webpack.svg'
import { ReactComponent as jestLogo } from '../assets/images/technologiesLogos/jest.svg'
import { ReactComponent as threejsLogo } from '../assets/images/technologiesLogos/threejs.svg'
import { ReactComponent as nodejsLogo } from '../assets/images/technologiesLogos/nodejs.svg'
import { ReactComponent as typescriptLogo } from '../assets/images/technologiesLogos/typescript.svg'
import { ReactComponent as babelLogo } from '../assets/images/technologiesLogos/babel.svg'
import { ReactComponent as materialUILogo } from '../assets/images/technologiesLogos/material-ui.svg'
import { ReactComponent as reactstrapLogo } from '../assets/images/technologiesLogos/reactstrap.svg'
import { ReactComponent as telegramBotAPILogo } from '../assets/images/technologiesLogos/telegram.svg'

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
    category: 'frontend'
  },
  reactNative: {
    name: 'React Native',
    logo: reactNativeLogo,
    startedLearning: new Date(2021, 7, 30),
    category: 'mobile',
    aliases: ['react-native']
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
  typescript: {
    name: 'typescript',
    logo: typescriptLogo,
    startedLearning: new Date(2021, 3, 19),
    category: 'frontend'
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
    category: 'backend'
  },
  docker: {
    name: 'Docker',
    logo: dockerLogo,
    startedLearning: new Date(2021, 5, 13),
    category: 'backend'
  },
  nginx: {
    name: 'Nginx',
    logo: nginxLogo,
    startedLearning: new Date(2021, 10, 15),
    category: 'backend'
  },
  apache: {
    name: 'Apache',
    logo: apacheLogo,
    startedLearning: new Date(2019, 3, 20),
    category: 'backend'
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
  redux: {
    name: 'redux',
    logo: reduxLogo,
    startedLearning: new Date(2021, 8, 19),
    category: 'frontend'
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
  webpack: {
    name: 'webpack',
    logo: webpackLogo,
    startedLearning: new Date(2021, 3, 1),
    category: 'frontend',
    aliases: ['React']
  },
  vite: {
    name: 'Vite',
    logo: viteLogo,
    startedLearning: new Date(2021, 11, 25),
    category: 'frontend'
  },
  babel: {
    name: 'babel',
    logo: babelLogo,
    startedLearning: new Date(2021, 1, 2),
    category: 'backend',
    aliases: ['React']
  },
  jest: {
    name: 'Jest',
    logo: jestLogo,
    startedLearning: new Date(2021, 4, 3),
    category: 'backend'
  },
  threejs: {
    name: 'threejs',
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
  nodejs: {
    name: 'NodeJS',
    logo: nodejsLogo,
    startedLearning: new Date(2020, 6, 13),
    category: 'backend'
  },
  redis: {
    name: 'Redis',
    logo: redisLogo,
    startedLearning: new Date(2021, 7, 26),
    category: 'backend'
  },
  java: {
    name: 'Java',
    logo: jestLogo,
    startedLearning: new Date(2018, 11, 2),
    category: 'mobile'
  },
  python: {
    name: 'Python',
    logo: jestLogo,
    startedLearning: new Date(2014, 4, 10),
    category: 'backend'
  },
  php: {
    name: 'PHP',
    logo: jestLogo,
    startedLearning: new Date(2011, 10, 11),
    category: 'backend'
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
  telegramBotAPI: {
    name: 'Telegram Bot API',
    logo: telegramBotAPILogo,
    startedLearning: new Date(2018, 6, 14),
    category: 'bot',
    addFromCategory: 'bot/telegram'
  },
  vkAPI: {
    name: 'VK Bot API',
    logo: telegramBotAPILogo,
    startedLearning: new Date(2015, 10, 3),
    category: 'bot',
    addFromCategory: 'bot/vk'
  },
  yandexAliceAPI: {
    name: 'Яндекс.Диалог API (Алиса)',
    logo: telegramBotAPILogo,
    startedLearning: new Date(2020, 3, 18),
    category: 'bot',
    addFromCategory: 'bot/yandex_alice'
  },
  unity: {
    name: 'Unity',
    logo: telegramBotAPILogo,
    startedLearning: new Date(2016, 7, 27),
    category: 'gamedev'
  },
  photonEngine: {
    name: 'Photon Engine',
    logo: telegramBotAPILogo,
    startedLearning: new Date(2019, 1, 16),
    category: 'gamedev'
  },
  cSharp: {
    name: 'C#',
    logo: telegramBotAPILogo,
    startedLearning: new Date(2016, 8, 2),
    category: 'gamedev'
  },
  figma: {
    name: 'Figma',
    logo: telegramBotAPILogo,
    startedLearning: new Date(2019, 5, 11),
    category: 'design'
  },
  sketch: {
    name: 'Sketch',
    logo: telegramBotAPILogo,
    startedLearning: new Date(2020, 9, 20),
    category: 'design'
  },
}
