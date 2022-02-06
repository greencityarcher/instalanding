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
      h2: 'Нужен микролендинг? Пиши!'
    }),

    new MLanguage('eng').create({
      title: 'Microlandings for Instagram: for bloggers, experts and business',
      h1: 'Micro landings for Instagram',
      aboutp1: 'Hi! I\'m Tori and I create micro-landings for Instagram. These are small sites with contacts and useful information. Such as this one, for example.',
      aboutp2: 'Placing a link to your microlanding on your Instagram profile is an easy way to tell customers about your products and services in an accessible way, without limiting yourself to posts, stories, or reels.',
      h2: 'Do you need microlanding? Write me!'
    }),

    new MLanguage('esp').create({
      title: 'Micro paginas web para Instagram: para expertos, empresas, blogueros',
      h1: 'Micro paginas web para Instagram',
      aboutp1: '¡Hola! Soy Tori y creo micro paginas web para Instagram. Son pequeños sitios con contactos e información útil. Como este, por ejemplo.',
      aboutp2: 'Colocar un enlace a tu microlanding en tu perfil de Instagram es una manera fácil de informar a los clientes sobre tus productos y servicios de una manera accesible, sin limitarte a publicaciones, historias o reels.',
      h2: '¿Quieres micro pagina web? ¡Escríbeme!'
    })
  ]
})
