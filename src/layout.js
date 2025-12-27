const base = import.meta.env.BASE_URL

export const renderLayout = (app) => {
  app.innerHTML = `
    <div class="envelope-overlay" id="envelope-overlay">
      <div class="envelope-perspective">
        <div class="envelope" aria-label="Открыть приглашение">
          <div class="envelope-canvases">
          <div class="envelope-text">
            <div class="script">С любовью</div>
            <div class="names">Максим & Дарья</div>
            <div class="date">27 · 06 · 2026</div>
          </div>
          <div class="envelope-text">
            <div class="script">С любовью</div>
            <div class="names">Максим & Дарья</div>
            <div class="date">27 · 06 · 2026</div>
          </div>
            <canvas id="env-base"></canvas>
            <canvas class="env-part" id="env-top"></canvas>
            <canvas class="env-part" id="env-left"></canvas>
            <canvas class="env-part" id="env-right"></canvas>
            <canvas class="env-part" id="env-bottom"></canvas>
          </div>
          <div class="seal" id="open-envelope" role="button" aria-label="Открыть конверт" tabindex="0">
            <img src="${base}media/md.png" alt="Печатка" />
          </div>
          <div class="seal-note-card">Нажмите, чтобы открыть</div>
        </div>
      </div>
    </div>

    <div class="page hidden" id="page">
      <div class="bg-blur decor-one"></div>
      <div class="bg-blur decor-two"></div>

      <header class="hero classic" id="top">
        <div class="hero-bg">
          <video class="hero-bg-video" src="${base}media/IMG_7378.MP4" autoplay muted loop playsinline></video>
          <div class="hero-bg-overlay"></div>
        </div>
        <div class="hero-text">
          <p class="eyebrow">Приглашение</p>
          <h1 class="header-text">Максим & Дарья</h1>
          <h1 class="header-text">Максим & Дарья</h1>
          <p class="lead">
            Мы приглашаем вас разделить день, когда наши истории станут одной.
            Тёплый вечер у воды, музыка и свет гирлянд — будем счастливы видеть вас.
          </p>
          <div class="date-row">
            <span class="date-chip">27 июня 2026</span>
            <span class="date-chip">Вилла-отель «Provence» · сбор гостей 15:00</span>
          </div>
          <div class="hero-actions">
            <button class="btn primary" data-scroll="#rsvp">Ответить</button>
            <button class="btn ghost" data-scroll="#timeline">Программа</button>
          </div>
        </div>
      </header>

      <section class="section silk-card" id="details">
        <div class="section-header center">
          <p class="eyebrow">Дорогие гости</p>
          <h2>С большим удовольствием ждём вас на нашей свадьбе</h2>
          <p class="muted">
            Просим поддержать цветовую гамму: нюдовые оттенки, оливка, мягкий коричневый и светлый беж.
            Будем благодарны, если вместо цветов выберете тёплые слова или бутылку вина для нашей семейной коллекции.
          </p>
        </div>
        <div class="location-card">
          <div>
            <p class="eyebrow">Локация</p>
            <h3>Вилла-отель «Provence»</h3>
            <p class="muted">г. Наро-Фоминск, Щекутино, 22. Сбор гостей в 15:00 · Церемония в 16:00 · Ужин до позднего вечера</p>
          </div>
          <div class="calendar-pill">
            <span class="month">Июнь</span>
            <span class="day">27</span>
            <span class="year">2026</span>
          </div>
        </div>
      </section>

      <section class="section countdown" id="countdown" aria-labelledby="countdown-title">
        <div class="section-header center">
          <p class="eyebrow">До свадьбы осталось</p>
          <h2 id="countdown-title">Соберёмся вместе 27 июня 2026</h2>
        </div>
        <div class="countdown-grid">
          <div class="countdown-item">
            <span class="value" id="cd-days">—</span>
            <span class="label">дней</span>
          </div>
          <div class="countdown-item">
            <span class="value" id="cd-hours">—</span>
            <span class="label">часов</span>
          </div>
          <div class="countdown-item">
            <span class="value" id="cd-minutes">—</span>
            <span class="label">минут</span>
          </div>
          <div class="countdown-item">
            <span class="value" id="cd-seconds">—</span>
            <span class="label">секунд</span>
          </div>
        </div>
      </section>

      <section class="section timeline" id="timeline" aria-labelledby="timeline-title">
        <div class="section-header center">
          <p class="eyebrow">Программа дня</p>
          <h2 id="timeline-title">Лаконично, чтобы насладиться каждым моментом</h2>
        </div>
        <div class="timeline-list">
          <div class="timeline-item">
            <div class="time">15:00</div>
            <div class="dot"></div>
            <div class="info">
              <h3>Сбор гостей</h3>
              <p>Welcome-коктейль, музыка, знакомство с пространством и фото.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="time">16:00</div>
            <div class="dot"></div>
            <div class="info">
              <h3>Церемония у воды</h3>
              <p>Клятвы и лёгкий ветер. Просим занять места за 10 минут до начала.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="time">17:00</div>
            <div class="dot"></div>
            <div class="info">
              <h3>Праздничный банкет</h3>
              <p>Сезонное меню, живые истории и бокалы, наполненные теплом.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="time">21:00</div>
            <div class="dot"></div>
            <div class="info">
              <h3>Торт</h3>
              <p>Сладкая традиция, которую мы не можем обойти стороной.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="time">22:00</div>
            <div class="dot"></div>
            <div class="info">
              <h3>Вечернее шоу</h3>
              <p>Музыка, танцы и искры — остаёмся до позднего вечера.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section kids" id="kids" aria-labelledby="kids-title">
        <div class="section-header center">
          <p class="eyebrow">А помните, какими мы были?</p>
          <h2 id="kids-title">Немного детских кадров</h2>
          <p class="muted">Нажмите на фото — покажем детские снимки.</p>
          <p class="muted">Нажмите на фото — покажем детские снимки.</p>
        </div>
        <div class="kids-grid">
          <button class="kids-card tall adult" data-person="daria">
            <img src="${base}media/children/1-10.jpg" alt="Дарья" />
            <span class="kids-label">Дарья</span>
          </button>
          <button class="kids-card adult" data-person="maxim">
            <img src="${base}media/children/1-58.jpg" alt="Максим" />
            <span class="kids-label">Максим</span>
          </button>
        </div>
        <div class="modal" id="kids-modal" aria-hidden="true">
          <div class="modal-backdrop" data-close-modal></div>
          <div class="modal-content" role="dialog" aria-modal="true">
            <button class="modal-close" data-close-modal aria-label="Закрыть">×</button>
            <div class="modal-body" id="kids-modal-body"></div>
          </div>
        </div>
      </section>

      <section class="section dresscode" id="dresscode">
        <div class="section-header center">
          <p class="eyebrow">Dress code</p>
          <h2>Поддержите палитру дня</h2>
          <p class="muted">
            Светлый беж, нюд, пыльно-оливковый, тёплый коричневый, какао и молочный — любые сочетания приветствуются.
          </p>
        </div>
        <div class="swatches dots">
          <span class="dot-swatch" style="--tone: #f6f1e7"></span>
          <span class="dot-swatch" style="--tone: #d9c7ae"></span>
          <span class="dot-swatch" style="--tone: #efc8c3"></span>
          <span class="dot-swatch" style="--tone: #9ab48c"></span>
          <span class="dot-swatch" style="--tone: #b9a595"></span>
        </div>
      </section>

      <section class="section gallery" aria-labelledby="gallery-title">
        <div class="section-header center">
          <p class="eyebrow">Вдохновение</p>
          <h2 id="gallery-title">Немного нас и настроения</h2>
        </div>
        <div class="gallery-grid">
          <div class="gallery-card tall">
            <img src="${base}media/1-1.jpg" alt="Кадр 1" />
          </div>
          <div class="gallery-card wide">
            <img src="${base}media/1-24.jpg" alt="Кадр 2" />
          </div>
          <div class="gallery-card">
            <img src="${base}media/1-26.jpg" alt="Кадр 3" />
          </div>
          <div class="gallery-card">
            <img src="${base}media/1-32.jpg" alt="Кадр 4" />
          </div>
          <div class="gallery-card">
            <img src="${base}media/1-42.jpg" alt="Кадр 5" />
          </div>
          <div class="gallery-card">
            <img src="${base}media/1-53.jpg" alt="Кадр 6" />
          </div>
          <div class="gallery-card">
            <img src="${base}media/1-55.jpg" alt="Кадр 7" />
          </div>
        </div>
        <div class="mobile-slider" id="mobile-slider">
          <div class="mobile-slide active"><img src="${base}media/1-1.jpg" alt="Кадр 1" /></div>
          <div class="mobile-slide"><img src="${base}media/1-24.jpg" alt="Кадр 2" /></div>
          <div class="mobile-slide"><img src="${base}media/1-26.jpg" alt="Кадр 3" /></div>
          <div class="mobile-slide"><img src="${base}media/1-32.jpg" alt="Кадр 4" /></div>
          <div class="mobile-slide"><img src="${base}media/1-42.jpg" alt="Кадр 5" /></div>
          <div class="mobile-slide"><img src="${base}media/1-53.jpg" alt="Кадр 6" /></div>
          <div class="slider-controls" aria-hidden="false">
            <button class="slider-arrow prev" type="button" aria-label="Предыдущее фото">‹</button>
            <div class="slider-dots" role="tablist" aria-label="Слайды галереи"></div>
            <button class="slider-arrow next" type="button" aria-label="Следующее фото">›</button>
          </div>
        </div>
      </section>

      <section class="section contacts" id="contacts" aria-labelledby="contacts-title">
        <div class="section-header center">
          <p class="eyebrow">Контакты</p>
          <h2 id="contacts-title">Свяжитесь с нами</h2>
          <p class="muted">
            По всем вопросам и сюрпризам — лучше заранее написать.
          </p>
        </div>
        <div class="contacts-grid">
          <div class="contact-card">
            <p class="card-eyebrow">Ведущая</p>
            <h3>Ирина</h3>
            <p class="muted">По всем вопросам, связанным с сюрпризами.</p>
            <a class="contact-link" href="tel:+79299756698">+7 929 975-66-98</a>
          </div>
          <div class="contact-card">
            <p class="card-eyebrow">Невеста</p>
            <h3>Дарья</h3>
            <p class="muted">Если нужен быстрый контакт с невестой.</p>
            <a class="contact-link" href="tel:+79999786937">+7 999 978-69-37</a>
          </div>
          <div class="contact-card">
            <p class="card-eyebrow">Жених</p>
            <h3>Максим</h3>
            <p class="muted">Если нужен быстрый контакт с женихом.</p>
            <a class="contact-link" href="tel:+79851359529">+7 985 135-95-29</a>
          </div>
        </div>
      </section>

      <section class="section rsvp" id="rsvp" aria-labelledby="rsvp-title">
        <div class="section-header center">
          <p class="eyebrow">RSVP</p>
          <h2 id="rsvp-title">Подтвердите присутствие до 1 мая</h2>
          <h2 id="rsvp-title">Подтвердите присутствие до 1 мая</h2>
          <p class="muted">
            Это поможет подготовить меню и рассадку. Ответ занимает минуту.
          </p>
        </div>
        <form id="rsvp-form" class="rsvp-form">
          <div class="form-grid">
            <label>
              Имя и фамилия
              <input type="text" name="name" placeholder="Ваше имя" required />
            </label>
            <label>
              Телефон
              <input type="phone" name="contact" placeholder="+7..." required />
              Телефон
              <input type="phone" name="contact" placeholder="+7..." required />
            </label>
            <label>
              Статус
              <select name="status" required>
                <option value="">Выберите вариант</option>
                <option value="yes">Буду с вами</option>
                <option value="no">Не смогу присутствовать</option>
              </select>
            </label>
          </div>
          <fieldset class="alcohol">
            <legend>Предпочтения по напиткам</legend>
            <label><input type="checkbox" name="alcohol" value="sparkling" /> Игристое</label>
            <label><input type="checkbox" name="alcohol" value="white" /> Белое вино</label>
            <label><input type="checkbox" name="alcohol" value="red" /> Красное вино</label>
            <label><input type="checkbox" name="alcohol" value="whiskey" /> Виски</label>
            <label><input type="checkbox" name="alcohol" value="no-alcohol" /> Без алкоголя</label>
          </fieldset>
          <label class="full">
            Сообщение
            <textarea name="message" rows="3" placeholder="Что угодно, что нам стоит знать"></textarea>
          </label>
          <div class="form-actions">
            <button type="submit" class="btn primary">Отправить</button>
            <span class="form-status" aria-live="polite"></span>
          </div>
        </form>
      </section>
    </div>
    <audio id="wedding-song" src="${base}audio/song.mp3" preload="auto" autoplay loop></audio>
  `
}
