import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'eng',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('rus').create({
      title: 'Микролендинги для Инстаграм: экспертам, бизнесу, блогерам',
      h1: 'Микролендинги для Инстаграм',
      aboutp1: 'Привет! Я Вика и я создаю микролендинги для Instagram. Это небольшие сайты с контактами и полезной информацией. Такие как этот, например.',
      aboutp2: 'Разместить ссылку на свой микролендинг в профиле инстаграм - это простой способ доступно рассказать клиентам о ваших продуктах и услугах, не ограничивая себя форматом постов, сториз или рилз.',
      h2: 'Нужен микролендинг? Пиши!',
      h2about:'Что разместить в микролендинге?',
      h3about: 'Кнопки',
      paboutbuttons: 'По кнопкам ваши клиенты смогут перейти в мессенджер для связи или консультации, скачать различные материалы, перейти на ваши аккаунты в других социальных сетях или посмотреть портфолио.',
      h3content: 'Полезный контент за рамками формата Instagram',
      paboutcontent: 'Важная для клиента информация без утомительного перелистывания сториз и #поиска_по_хэштегам',
      liprice: 'Прайс-листы',
      lihours: 'Часы работы и расписание',
      lifoto: 'Фотогалерея',
      livideo: 'Видео Youtube и Vimeo',
      lilongread: 'Статьи и лонгриды',
      licalc: 'Онлайн-калькулятор',
      limap: 'Карта проезда',
      buttonssamples: 'Вот типичные примеры кнопок для микролендинга:',
      btn1: 'Написать в WhatsApp',
      btn2: 'Скачать гайд',
      btn3: 'Перейти на канал Youtube',
      btn4: 'Заказать услугу'



    }),

    new MLanguage('eng').create({
      title: 'Microlandings for Instagram: for bloggers, experts and business',
      h1: 'Micro landings for Instagram',
      aboutp1: 'Hi! I\'m Tori and I create micro-landings for Instagram. These are small sites with contacts and useful information. Such as this one, for example.',
      aboutp2: 'Placing a link to your microlanding on your Instagram profile is an easy way to tell customers about your products and services in an accessible way, without limiting yourself to posts, stories, or reels.',
      h2: 'Do you need microlanding? Write me!',
      h2about:'What to include in a microlanding?',
      h3about: 'Buttons',
      paboutbuttons: 'Using the buttons, your customers will be able to go to the messenger for communication or consultation, download various materials, go to your accounts on other social networks or view your portfolio.',
      h3content: 'Useful content beyond the Instagram format',
      paboutcontent: 'Important information for the client without tedious scrolling through stories and #search_by_hashtags',
      liprice: 'Price-lists',
      lihours: 'Opening hours and schedule',
      lifoto: 'Photo gallerie',
      livideo: 'Videos from Youtube and Vimeo channels',
      lilongread: 'Articles and longreads',
      licalc: 'Online calculator',
      limap: 'Road map',
      buttonssamples: 'Here are typical microlanding buttons:',
      btn1: 'Write to WhatsApp',
      btn2: 'Download guide',
      btn3: 'Go to Youtube channel',
      btn4: 'Order a service'
    }),

    new MLanguage('esp').create({
      title: 'Micro paginas web para Instagram: para expertos, empresas, blogueros',
      h1: 'Micro paginas web para Instagram',
      aboutp1: '¡Hola! Soy Tori y creo micro paginas web para Instagram. Son pequeños sitios con contactos e información útil. Como este, por ejemplo.',
      aboutp2: 'Colocar un enlace a tu microlanding en tu perfil de Instagram es una manera fácil de informar a los clientes sobre tus productos y servicios de una manera accesible, sin limitarte a publicaciones, historias o reels.',
      h2: '¿Quieres micro pagina web? ¡Escríbeme!',
      h2about:'¿Qué incluir en un micro pagina web?',
      h3about: 'Botones',
      paboutbuttons: 'Usando los botones, sus clientes podrán ir al mensajero para comunicación o consulta, descargar varios materiales, ver sus cuentas en otras redes sociales o ver su cartera.',
      h3content: 'Contenido útil más allá del formato de Instagram',
      paboutcontent: 'Información importante para el cliente sin el tedioso desplazamiento por las historias y #search_by_hashtags',
      liprice: 'Lista de precios',
      lihours: 'Horario',
      lifoto: 'Galería de fotos',
      livideo: 'Vídeos de los canales de Youtube y Vimeo',
      lilongread: 'Artículos y lecturas largas',
      licalc: 'Calculadora en línea',
      limap: 'Mapa vial',
      buttonssamples: 'Aquí hay botones típicos de micro paginas web',
      btn1: 'Escribe al WhatsApp',
      btn2: 'Descargar guía',
      btn3: 'Ir al canal de Youtube',
      btn4: 'Pedir un servicio'
    })
  ]
})
