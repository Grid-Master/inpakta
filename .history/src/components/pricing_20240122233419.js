import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiCheckCircle, AiOutlineClose } from '../assets/icons/vander';

export default function Pricing() {
  const [businessPrice, setBusinessPrice] = useState(20);
  const [professionalPrice, setProfessionalPrice] = useState(40);

  let businessUpdate = parseFloat(businessPrice * 0.05).toFixed(1);

  let professionalUpdate = parseFloat(professionalPrice * 0.025).toFixed(1);
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
          <div className="p-6">
            <h5 className="text-2xl leading-normal font-semibold">Mini</h5>
            <p className="text-slate-400 mt-2">
              Чаще всего: для визитных сайтов, юристов, адвокатов, галлерей, знаменитостей.
            </p>
            <div className="flex mt-4">
              <span className="text-lg font-semibold">$</span>
              <span className="text-5xl font-semibold mb-0 ms-1">130</span>
            </div>
            <p className="text-slate-400 uppercase text-xs">В месяц</p>

            <div className="mt-6">
              <Link
                to=""
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400/5 hover:bg-amber-400 rounded border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white">
                Оформить подписку
              </Link>

              {/* <p className="text-slate-400 text-sm mt-3">
                No credit card required. Free 14-days trial
              </p> */}
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-slate-800">
            <ul className="list-none text-slate-400">
              <li className="font-semibold text-slate-900 dark:text-white text-sm uppercase">
                Включает
              </li>

              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                <span className="text-slate-900 dark:text-white me-1 font-semibold">
                  3 часа работы специалистов
                </span>{' '}
                {/* of AI generation */}
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{' '}
                <span className="text-slate-900 dark:text-white me-1 font-semibold">
                  до 50 гб хранилища
                </span>{' '}
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{' '}
                <span className="text-slate-900 dark:text-white me-1 font-semibold">
                  1 сотрудник в системе
                </span>
              </li>
              <li className="flex items-center mt-2 text-slate-400">
                <AiOutlineClose className="h-[18px] w-[18px] me-2" />
                Анализ рынка
              </li>
              <li className="flex items-center mt-2 text-slate-400">
                <AiOutlineClose className="h-[18px] w-[18px] me-2" />
                Генерация отчета
              </li>
            </ul>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
          <div className="p-6">
            <h5 className="text-2xl leading-normal font-semibold">Standart</h5>
            <p className="text-slate-400 mt-2">
              Чаще всего: для рекламных компаний, представительств, маркетинговых агенств
            </p>

            <div className="relative">
              <div className="flex mt-4">
                <span className="text-lg font-semibold">$</span>
                <span className="">
                  <input type="hidden" id="business-amount" className="form-control" />
                  <p className="text-5xl font-semibold mb-0 ms-1" id="busi-amt">
                    180
                  </p>
                  <p className="text-slate-400 uppercase text-xs">в месяц</p>
                </span>
              </div>

              <div className="relative mt-4">
                <label htmlFor="business-price" className="form-label"></label>
                <input
                  id="business-price"
                  type="range"
                  defaultValue="20"
                  min={20}
                  max={200}
                  onChange={(e) => setBusinessPrice(e.target.value)}
                  className="w-full h-1 bg-gray-50 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
                <span className="font-semibold text-lg absolute end-0 -top-5">
                  <input type="hidden" id="business-update" className="form-control" />
                  <span className=""></span>
                  <p className="inline-block" id="busi-update">
                    {businessUpdate}
                  </p>
                  <span>X</span>
                </span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                to=""
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded">
                Оформить подписку
              </Link>
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-slate-800">
            <ul className="list-none text-slate-400">
              <li className="font-semibold text-slate-900 dark:text-white text-sm uppercase">
                Веключает
              </li>

              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{' '}
                <span className="text-slate-900 dark:text-white me-1 font-semibold">
                  10 часов работы специалистов
                </span>
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{' '}
                <span className="text-slate-900 dark:text-white me-1 font-semibold">
                  до 100 гб хранилища
                </span>{' '}
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{' '}
                <span className="text-slate-900 dark:text-white me-1 font-semibold">
                  до 2 сотрудников в системе
                </span>{' '}
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" /> Upto{' '}
                <span className="text-slate-900 dark:text-white mx-1 font-semibold">
                  Анализ рынка
                </span>
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{' '}
                <span className="text-slate-900 dark:text-white me-1 font-semibold">
                  Генерация отчетов
                </span>{' '}
                - 4 в год
              </li>
            </ul>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
          <div className="p-6">
            <h5 className="text-2xl leading-normal font-semibold">Professional</h5>
            <p className="text-slate-400 mt-2">For growing & established creators</p>

            <div className="relative">
              <div className="flex mt-4">
                <span className="text-lg font-semibold">$</span>
                <span className="">
                  <input type="hidden" id="professional-amount" className="form-control" />
                  <p className="text-5xl font-semibold mb-0 ms-1" id="pro-amt">
                    {professionalPrice}
                  </p>
                  <p className="text-slate-400 uppercase text-xs">per month</p>
                </span>
              </div>

              <div className="relative mt-4">
                <label htmlFor="professional-price" className="form-label"></label>
                <input
                  id="professional-price"
                  type="range"
                  defaultValue="40"
                  min={40}
                  max={400}
                  onChange={(e) => setProfessionalPrice(e.target.value)}
                  className="w-full h-1 bg-gray-50 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer"
                />
                <span className="font-semibold text-lg absolute end-0 -top-5">
                  <input type="hidden" id="professional-update" className="form-control" />
                  <span className=""></span>
                  <p className="inline-block" id="pro-update">
                    {professionalUpdate}
                  </p>
                  <span>X</span>
                </span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                to=""
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded">
                Buy Now
              </Link>
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-slate-800">
            <ul className="list-none text-slate-400">
              <li className="font-semibold text-slate-900 dark:text-white text-sm uppercase">
                Features:
              </li>

              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{' '}
                <span className="text-slate-900 dark:text-white me-1 font-semibold">
                  200 mins/mo
                </span>{' '}
                of AI generation
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{' '}
                <span className="text-slate-900 dark:text-white me-1 font-semibold">400 GB</span>{' '}
                storage
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{' '}
                <span className="text-slate-900 dark:text-white me-1 font-semibold">Unlimited</span>{' '}
                exports
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" /> Upto{' '}
                <span className="text-slate-900 dark:text-white mx-1 font-semibold">1</span> user
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />{' '}
                <span className="text-slate-900 dark:text-white me-1 font-semibold">160/mo</span>{' '}
                iStock
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
