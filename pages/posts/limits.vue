<template>
  <Head>
    <Title>[MH] Пределы в математике: что это такое</Title>
  </Head>
  <div class="w-full max-w-screen-xl container mx-auto mb-5">
    <MHeader class="my-7" />
    <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article
            class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
            <address class="flex items-center mb-6 not-italic">
              <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img class="mr-4 w-16 h-16 rounded-full"
                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="avatar">
                <div>
                  <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Дмитрий Кузнецов</a>
                  <p class="text-base text-gray-500 dark:text-gray-400">3 дня назад</p>
                </div>
              </div>
            </address>
            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              Что такое предел функции
            </h1>
          </header>
          <p>Сначала вспомним, что такое функция и аргумент.
            <br><br>
            Функция — это математическое правило, которое получает на вход число и возвращает какой-то результат. Например, в функции y = x2 число умножается на само себя. Передали 2, получили 4.
            <br><br>
            Аргумент — это число, которое мы передаём, то есть подставляем в функцию. В нашем примере аргумент равен 2.
            <br><br>
            В общем виде функция записывается так:</p>
          <img class="my-4" src="~/assets/images/posts/limits/image1.png" alt="image1">
          <p>Здесь f — это функция, x — её аргумент, y — результат её выполнения.
            <br><br>
            Предел функции — это значение, к которому стремится функция, когда её аргумент приближается к определённому значению. Проще всего разобраться в этом на примере.
            <br><br>
            Напишем простую функцию:</p>
          <img class="my-4" src="~/assets/images/posts/limits/image2.png" alt="image2">
          <p>Представим, что x стремится к числу 2, но не достигает его:
            <br><br>
            1,9; 1,99; 1,999…1,99999.
            <br><br>
            Тогда y будет стремиться к 4:
            <br><br>
            3,61; 3,9601; 3,996001…3,9999600001.
            <br><br>
            Число будет всё больше и больше, но никогда не достигнет числа 4, а только приблизится к нему.
            <br><br>
            Получается, что предел для функции при x, стремящемся к 2, равен 4.
            <br><br>
            Предел в математике обозначается с помощью lim:</p>
          <img class="my-4" src="~/assets/images/posts/limits/image3.png" alt="image3">
          <p>Читается выражение так: для функции y = f(x) пределом называется такое число a, к которому приближается y при x, стремящемся к определённой точке x0. Стремление обозначается стрелкой.
            <br><br>
            Слово «стремится» означает, что переменная приближается к пределу на сколь угодно малую величину, но никогда не достигает его.
            <br><br>
            Посмотрим на другую формулу:</p>
          <img class="my-4" src="~/assets/images/posts/limits/image4.png" alt="image4">
          <p>И сразу построим для неё график:</p>
          <img class="my-4" src="~/assets/images/posts/limits/image5.png" alt="image5">
          <h1 class="font-bold my-5 text-2xl">Как решать пределы</h1>
          <p>Чтобы вычислить предел, во многих случаях достаточно подставить в функцию значение, к которому стремится её аргумент.
            <br><br>
            При возникновении неопределённостей, то есть отсутствия решения при подстановке числа, используются разные подходы: упрощение выражений с помощью деления многочленов на переменную в максимальной степени, умножение на сопряжённое выражение, правило Лопиталя и другие приёмы. О таких случаях мы подробно поговорим дальше.
            <br><br>
            Один из самых простых способов решения — использовать теоремы о пределах. Это математические правила, которые упрощают вычисления.
            <br><br>
            Например, предел функции y = c равен c при любом x.
            <br><br>
            Проверим на графике:</p>
          <img class="my-4" src="~/assets/images/posts/limits/image6.png" alt="image6">
          <p>Как мы видим, при любом x функция принимает одно и то же значение: y = 8.
            <br><br>
            Существуют и другие теоремы для быстрого решения пределов:
            <br><br>
            1. Предел суммы нескольких функций равен сумме их пределов <br>
            2. Предел произведения функций равен произведению их пределов <br>
            3. Предел частного двух функций равен частному их пределов. Работает при условии, что знаменатель не обращается в ноль. <br><br>

            Некоторые задачи можно решить с помощью приведения к первому или второму замечательному пределу. В этом случае не нужно раскрывать содержащиеся в них неопределённости — это уже сделано и оформлено в готовый шаблон
          </p>
        </article>
      </div>
    </main>
  </div>
  <MFooter class="mt-2" />
</template>

<script>
import MHeader from "~/components/header.vue";
import MFooter from "~/components/footer.vue";

export default {
  name: "MPostLimits",
  components: {MFooter, MHeader}
}
</script>