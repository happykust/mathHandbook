<template>
  <Head>
    <Title>MathHandbook - твой справочник по математике</Title>
  </Head>
  <div class="w-full max-w-screen-xl container mx-auto mb-5">
    <MHeader class="my-7" />
    <img src="~/assets/images/banner.png" alt="Banner" class="max-w-screen-xl mx-auto">
    <h1 class="font-bold text-2xl my-8 ml-2">Только у нас</h1>
    <div class="grid grid-cols-4 grid-rows-1 gap-12 h-48 mt-8 mx-10 max-w-screen-xl">
      <div class="w-full h-full bg-gray-50 shadow-lg rounded-xl py-6 px-3 text-center">
        <span class="material-symbols-outlined text-6xl mb-5 mt-3">browse_gallery</span>
        <p class="font-semibold">Актуальный материал</p>
      </div>
      <div class="w-full h-full bg-gray-50 shadow-lg rounded-xl py-6 px-3 text-center">
        <span class="material-symbols-outlined text-6xl mb-5 mt-3">chat</span>
        <p class="font-semibold">Быстрая поддержка</p>
      </div>
      <div class="w-full h-full bg-gray-50 shadow-lg rounded-xl py-6 px-3 text-center">
        <span class="material-symbols-outlined text-6xl mb-5 mt-3">collections_bookmark</span>
        <p class="font-semibold">Лучшее объяснение тем</p>
      </div>
      <div class="w-full h-full bg-gray-50 shadow-lg rounded-xl py-6 px-3 text-center">
        <span class="material-symbols-outlined text-6xl mb-5 mt-3">edit_note</span>
        <p class="font-semibold">Возможность пройти тесты</p>
      </div>
    </div>
    <section class="bg-white dark:bg-gray-900 mt-16">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Последний материал</h2>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Статья
                  </span>
              <span class="text-sm">3 дня назад</span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <NuxtLink to="/posts/limits">
                Пределы в математике: что это такое
              </NuxtLink>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Предел функции — это одно из базовых понятий математического анализа. С пределом связаны такие термины, как непрерывность, производная и интеграл. Но самое главное — это мощный инструмент для анализа явлений в реальном мире.</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="avatar" />
                <span class="font-medium dark:text-white">
                          Дмитрий Кузнецов
                      </span>
              </div>
              <NuxtLink to="/posts/limits" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                Подробнее
                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </NuxtLink>
            </div>
          </article>

          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Статья
                  </span>
              <span class="text-sm">14 дней назад</span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <NuxtLink to="/posts/volumes">
                Объем параллелепипеда
              </NuxtLink>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Объем – это геометрическая характеристика любого трехмерного объекта, им обладает в том числе и параллелепипед. Объемом называется размер (или вместимость) занимаемого трехмерной фигурой пространства.</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                <span class="font-medium dark:text-white">
                          Юлия Стрекушкина
                      </span>
              </div>
              <NuxtLink to="/posts/volumes" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                Подробнее
                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </NuxtLink>
            </div>
          </article>

          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-5 text-gray-500">
                  <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                      Статья
                  </span>
              <span class="text-sm">25 дней назад</span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <NuxtLink to="/posts/systems">
                Системы уравнений с двумя переменными
              </NuxtLink>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">В математике насчитывается достаточно много видов систем уравнений. Для более удобного их изучения и нахождения решений их разделяют на несколько групп с определёнными характеристиками.</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img class="w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                <span class="font-medium dark:text-white">
                          Юлия Стрекушкина
                      </span>
              </div>
              <NuxtLink to="/posts/systems" class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                Подробнее
                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </NuxtLink>
            </div>
          </article>

        </div>
      </div>
    </section>
  </div>
  <MFooter class="mt-2" />
</template>

<script>
import MHeader from "~/components/header.vue";
import MFooter from "~/components/footer.vue";

export default {
  components: {MFooter, MHeader}
}
</script>