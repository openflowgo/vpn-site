export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-20 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">
            OpenFlow Go
          </a>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#how" className="transition hover:text-white">
              Как это работает
            </a>
            <a href="#devices" className="transition hover:text-white">
              Устройства
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <a
            href="https://t.me/openflowgo_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
          >
            Открыть бота
          </a>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 rounded-full border border-zinc-700 px-4 py-1 text-sm text-zinc-300">
          Бесплатный WireGuard VPN через Telegram
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Получите VPN-доступ за пару минут
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-300 md:text-xl">
          OpenFlow Go помогает быстро подключить VPN через Telegram-бота.
          Выберите устройство, получите конфиг или QR-код и подключитесь без
          лишней переписки.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://t.me/openflowgo_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            Получить доступ
          </a>

          <a
            href="#how"
            className="rounded-2xl border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-900"
          >
            Как это работает
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-4xl gap-4 text-left md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">Подключение</p>
            <p className="mt-2 text-lg font-semibold">Через Telegram-бота</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">Формат доступа</p>
            <p className="mt-2 text-lg font-semibold">.conf и QR-код</p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-400">Устройства</p>
            <p className="mt-2 text-lg font-semibold">iPhone, Android, Windows, macOS</p>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold">Как это работает</h2>
          <p className="mt-3 text-zinc-400">
            Без сложной регистрации и без ручного общения на каждом шаге.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Шаг 1</p>
            <h3 className="mt-2 text-xl font-semibold">Открываете бота</h3>
            <p className="mt-3 text-zinc-400">
              Переходите в Telegram и нажимаете «Получить доступ».
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Шаг 2</p>
            <h3 className="mt-2 text-xl font-semibold">Выбираете устройство</h3>
            <p className="mt-3 text-zinc-400">
              iPhone, Android, Windows или macOS.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Шаг 3</p>
            <h3 className="mt-2 text-xl font-semibold">Получаете доступ</h3>
            <p className="mt-3 text-zinc-400">
              Бот отправляет конфиг или QR-код и подсказывает, что делать дальше.
            </p>
          </div>
        </div>
      </section>

      <section id="devices" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold">Поддерживаемые устройства</h2>
          <p className="mt-3 text-zinc-400">
            Подключение адаптировано под популярные платформы.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">iPhone</h3>
            <p className="mt-3 text-zinc-400">
              Подключение по QR-коду через WireGuard.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">Android</h3>
            <p className="mt-3 text-zinc-400">
              Импорт готового .conf файла в WireGuard.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">Windows</h3>
            <p className="mt-3 text-zinc-400">
              Быстрый импорт .conf файла в приложение WireGuard.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">macOS</h3>
            <p className="mt-3 text-zinc-400">
              Подключение через WireGuard с готовым конфигом.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">Быстрый старт</h3>
            <p className="mt-3 text-zinc-400">
              Доступ можно получить за пару минут прямо через Telegram.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">Понятный процесс</h3>
            <p className="mt-3 text-zinc-400">
              Пользователь выбирает устройство и сразу получает следующий шаг.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">Поддержка при проблемах</h3>
            <p className="mt-3 text-zinc-400">
              Если что-то не получилось, можно сразу написать в бота.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Бесплатный доступ</h2>
              <p className="mt-4 text-zinc-400">
                OpenFlow Go — личный проект с бесплатной выдачей доступа через Telegram-бота.
              </p>

              <ul className="mt-6 space-y-3 text-zinc-300">
                <li>• Конфиг для WireGuard</li>
                <li>• QR-код для iPhone</li>
                <li>• Пошаговая инструкция</li>
                <li>• Поддержка через Telegram</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-center">
              <p className="text-sm text-zinc-400">Стоимость</p>
              <p className="mt-3 text-5xl font-bold">0 ₽</p>
              <p className="mt-4 text-zinc-400">
                Чтобы начать, просто откройте бота и выберите устройство.
              </p>

              <div className="mt-8 flex flex-col gap-3">
  <a
    href="https://t.me/openflowgo_bot"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full rounded-2xl bg-white px-5 py-3 text-center font-medium text-black transition hover:opacity-90"
  >
    Получить через Telegram
  </a>

  <button
    className="block w-full rounded-2xl border border-zinc-700 px-5 py-3 text-center font-medium text-white transition hover:bg-zinc-900"
    onClick={() => alert("Скоро будет доступно")}
  >
    Получить напрямую
  </button>
</div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold">Частые вопросы</h2>
          <p className="mt-3 text-zinc-400">
            Самое важное перед подключением.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">Как получить доступ?</h3>
            <p className="mt-3 text-zinc-400">
              Откройте Telegram-бота, выберите устройство и получите конфиг или QR-код.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">Это правда бесплатно?</h3>
            <p className="mt-3 text-zinc-400">
              Да, сейчас доступ выдаётся бесплатно в рамках личного проекта.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">Что нужно для подключения?</h3>
            <p className="mt-3 text-zinc-400">
              Нужен установленный WireGuard. Бот подскажет, что делать дальше.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-center md:flex-row md:text-left">
          <div>
            <p className="text-lg font-semibold">Готовы подключиться?</p>
            <p className="mt-1 text-sm text-zinc-400">
              Откройте бота и получите доступ за пару минут.
            </p>
          </div>

          <a
            href="https://t.me/openflowgo_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
          >
            Открыть Telegram-бота
          </a>
        </div>
      </section>
    </main>
  );
}