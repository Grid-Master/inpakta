import React from 'react';
import {
  FiEdit2,
  FiAirplay,
  FiCreditCard,
  FiGlobe,
  FiLayout,
  FiLifeBuoy,
} from '../assets/icons/vander';
export default function AiFeatures() {
  const featureData = [
    {
      icon: FiEdit2,
      title: 'Ваш собственный сайт',
      desc: 'Бесплатно команда опытных специалистов создаст вам уникальный собственный бизнес.',
    },
    {
      icon: FiAirplay,
      title: '1200 часов поддержки',
      desc: '24/7 наша команда готова к сотрудничеству, помогая Вам завоевывать вершины.',
    },
    {
      icon: FiCreditCard,
      title: 'Аудит вашего бизнеса',
      desc: 'Получайте регулярно отчеты о доходности вашего бизнеса.',
    },
    {
      icon: FiGlobe,
      title: 'Хостинг, домен, хранилище',
      desc: 'Вам не нужно заботиться о размещении сайта, выбора хостинга и хранения данных. Наша команда все сделает за вас.',
    },
    {
      icon: FiLifeBuoy,
      title: 'Анализ вашего рынка',
      desc: 'Получайте все статистики запросов рынка прямо в личном кабинете. Изучайте свою аудиторию прямо из IMPAKTA AKTIV. ',
    },
    {
      icon: FiLifeBuoy,
      title: 'Анализ вашего рынка',
      desc: 'Получайте все статистики запросов рынка прямо в личном кабинете. Изучайте свою аудиторию прямо из IMPAKTA AKTIV. ',
    },
  ];
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            The future of AI.
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Artificial intelligence makes it fast easy to create content for your blog, social
            media, website, and more!
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
          {featureData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="group flex duration-500 xl:p-3" key={index}>
                <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-amber-400/5 group-hover:bg-amber-400 group-hover:text-white border-2 border-amber-400/20 text-amber-400 rounded-lg text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 ms-4">
                  <h4 className="mb-0 text-lg font-semibold">{item.title}</h4>
                  <p className="text-slate-400 mt-2">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
