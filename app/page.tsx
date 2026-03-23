export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold">
            OpenFlow Go
          </a>

          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#tarifs" className="hover:text-white">
              Доступ
            </a>
            <a href="#how" className="hover:text-white">
              Как это работает
            </a>
          </nav>

          <a
            href="https://t.me/openflowgo_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black"
          >
            Написать в Telegram
          </a>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-zinc-700 px-4 py-1 text-sm text-zinc-300">
          Безопасный WireGuard VPN
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Надёжный VPN для стабильного доступа в интернет
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-300 md:text-xl">
          Быстрое подключение, простая настройка и бесплатный доступ через
          Telegram по заявке.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#tarifs"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            Получить доступ
          </a>

          <a
            href="https://t.me/openflowgo_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-900"
          >
            Написать в Telegram
          </a>
        </div>
      </section>
<section className="mx-auto max-w-6xl px-6 pb-20">
  <h2 className="mb-8 text-3xl font-bold">Почему выбирают OpenFlow Go</h2>

  <div className="grid gap-6 md:grid-cols-3">
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold">Быстрое подключение</h3>
      <p className="mt-3 text-zinc-400">
        Получаете доступ сразу после заявки без сложной настройки.
      </p>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold">Стабильная работа</h3>
      <p className="mt-3 text-zinc-400">
        Серверы настроены для стабильного соединения без обрывов.
      </p>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold">Поддержка в Telegram</h3>
      <p className="mt-3 text-zinc-400">
        Помогу с настройкой и отвечу на любые вопросы.
      </p>
    </div>
  </div>
</section>
      <section id="tarifs" className="mx-auto max-w-6xl px-6 pb-20">
  <h2 className="mb-8 text-3xl font-bold">Доступ</h2>

  <div className="grid gap-6 md:grid-cols-2">
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
      <h3 className="text-2xl font-semibold">Бесплатный доступ</h3>
      <p className="mt-4 text-4xl font-bold">0 ₽</p>
      <p className="mt-4 text-zinc-400">
        Доступ предоставляется бесплатно в рамках личного проекта.
      </p>
      <a
        href="https://t.me/openflowgo_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block w-full rounded-2xl bg-white px-5 py-3 text-center font-medium text-black"
      >
        Получить доступ
      </a>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
      <h3 className="text-2xl font-semibold">Что входит</h3>
      <ul className="mt-4 space-y-3 text-zinc-400">
        <li>• Конфиг для WireGuard</li>
        <li>• Помощь с подключением</li>
        <li>• Доступ по заявке через Telegram</li>
      </ul>
      <a
        href="https://t.me/openflowgo_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block w-full rounded-2xl border border-zinc-700 px-5 py-3 text-center font-medium text-white"
      >
        Написать в Telegram
      </a>
    </div>
  </div>
</section>
<section className="mx-auto max-w-6xl px-6 pb-20">
  <h2 className="mb-8 text-3xl font-bold">Частые вопросы</h2>

  <div className="grid gap-6 md:grid-cols-3">
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold">Как получить доступ?</h3>
      <p className="mt-3 text-zinc-400">
        Вы выбираете тариф, пишете мне в Telegram, и после подтверждения оплаты
        я отправляю данные для подключения.
      </p>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold">Как получить доступ?</h3>
      <p className="mt-3 text-zinc-400">
        Доступ выдаётся вручную после заявки через Telegram.
      </p>
    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-semibold">Что нужно для подключения?</h3>
      <p className="mt-3 text-zinc-400">
        Нужен установленный WireGuard. Я дам конфиг и подскажу, как подключиться.
      </p>
    </div>
  </div>
</section>
      <section id="how" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-8 text-3xl font-bold">Как это работает</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Шаг 1</p>
            <h3 className="mt-2 text-xl font-semibold">Оставляете заявку</h3>
            <p className="mt-3 text-zinc-400">
              Оставляете заявку и переходите в Telegram.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Шаг 2</p>
            <h3 className="mt-2 text-xl font-semibold">Получаете подтверждение</h3>
            <p className="mt-3 text-zinc-400">
              После заявки подтверждается доступ.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Шаг 3</p>
            <h3 className="mt-2 text-xl font-semibold">Получаете конфиг</h3>
            <p className="mt-3 text-zinc-400">
              Вы получаете данные для подключения WireGuard и можете начать
              пользоваться сервисом.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}