import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'eng',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('rus').create({
      title: 'Микролендинги для Инстаграм: экспертам, бизнесу, блогерам',
      h1: 'Создаю микролендинги для Инстаграм'
    }),

    new MLanguage('eng').create({
      title: 'Microlandings for Instagram: for bloggers, experts and business',
      h1: 'I create micro landings for Instagram'
    }),

    new MLanguage('esp').create({
      title: 'Micro paginas web para Instagram: para expertos, empresas, blogueros',
      h1: 'Creo micro paginas web para Instagram'
    })
  ]
})
