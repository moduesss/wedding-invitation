export const renderLayout = (app) => {
  app.innerHTML = `
    <div class="envelope-overlay" id="envelope-overlay">
      <div class="envelope-perspective">
        <div class="envelope" aria-label="Открыть приглашение">
          <div class="envelope-shadow"></div>
          <div class="envelope-left"></div>
          <div class="envelope-right"></div>
          <div class="envelope-bottom"></div>
          <div class="envelope-flap"></div>
          <div class="envelope-text">
            <div class="script">С любовью</div>
            <div class="names">Максим & Даша</div>
            <div class="date">07 · 06 · 2025</div>
          </div>
          <button class="seal" id="open-envelope" aria-label="Открыть конверт">
            <span class="seal-letter">M & D</span>
          </button>
          <div class="seal-note-card">Нажмите, чтобы открыть</div>
        </div>
      </div>
    </div>

    <div class="page hidden" id="page">
      <div class="bg-blur decor-one"></div>
      <div class="bg-blur decor-two"></div>

      <header class="hero classic" id="top">
        <div class="hero-text">
          <p class="eyebrow">Приглашение</p>
          <h1>Максим & Даша</h1>
          <p class="lead">
            Мы приглашаем вас разделить день, когда наши истории станут одной.
            Тёплый вечер у воды, музыка и свет гирлянд — будем счастливы видеть вас.
          </p>
          <div class="date-row">
            <span class="date-chip">7 июня 2025</span>
            <span class="date-chip">Усадьба у озера · сбор гостей 16:00</span>
          </div>
          <div class="hero-actions">
            <button class="btn primary" data-scroll="#rsvp">Ответить</button>
            <button class="btn ghost" data-scroll="#timeline">Программа</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-frame">
            <img src="/media/IMG_7358.JPG" alt="Максим и Даша" />
            <div class="soft-border"></div>
          </div>
          <video class="hero-video" src="/media/IMG_7378.MP4" autoplay muted loop playsinline></video>
          <p class="muted caption">Несколько секунд нашего настроения</p>
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
            <h3>Усадьба у озера, Подмосковье</h3>
            <p class="muted">Сбор гостей в 16:00 · Церемония в 17:00 · Ужин и танцы до позднего вечера</p>
          </div>
          <div class="calendar-pill">
            <span class="month">Июнь</span>
            <span class="day">07</span>
            <span class="year">2025</span>
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
            <div class="time">16:00</div>
            <div class="dot"></div>
            <div class="info">
              <h3>Сбор гостей</h3>
              <p>Welcome-коктейль, музыка, знакомство с пространством и фото.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="time">17:00</div>
            <div class="dot"></div>
            <div class="info">
              <h3>Церемония у воды</h3>
              <p>Клятвы и лёгкий ветер. Просим занять места за 10 минут до начала.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="time">18:30</div>
            <div class="dot"></div>
            <div class="info">
              <h3>Ужин и тосты</h3>
              <p>Сезонное меню, живые истории и бокалы, наполненные теплом.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="time">21:00</div>
            <div class="dot"></div>
            <div class="info">
              <h3>Танцы под звёздами</h3>
              <p>Свободная атмосфера, пледы на случай вечерней прохлады и любимые треки.</p>
            </div>
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
          <span class="dot-swatch" style="--tone: #835a40"></span>
          <span class="dot-swatch" style="--tone: #3f362e"></span>
        </div>
      </section>

      <section class="section gallery" aria-labelledby="gallery-title">
        <div class="section-header center">
          <p class="eyebrow">Вдохновение</p>
          <h2 id="gallery-title">Немного нас и настроения</h2>
        </div>
        <div class="gallery-grid">
          <div class="gallery-card tall">
            <img src="/media/IMG_7352.JPG" alt="Мы" />
          </div>
          <div class="gallery-card wide">
            <img src="/media/IMG_7364.JPG" alt="Наша прогулка" />
          </div>
          <div class="gallery-card">
            <img src="/media/IMG_7374.JPG" alt="Тепло заката" />
          </div>
          <div class="gallery-card">
            <img src="/media/IMG_7358.JPG" alt="Максим и Даша" />
          </div>
          <div class="gallery-card video-card">
            <video src="/media/IMG_7378.MP4" controls loop playsinline></video>
          </div>
          <div class="gallery-card">
            <img src="/media/IMG_7793.PNG" alt="Детали" />
          </div>
        </div>
      </section>

      <section class="section rsvp" id="rsvp" aria-labelledby="rsvp-title">
        <div class="section-header center">
          <p class="eyebrow">RSVP</p>
          <h2 id="rsvp-title">Подтвердите присутствие до 10 мая</h2>
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
              Email или телефон
              <input type="text" name="contact" placeholder="+7..." required />
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
    <audio id="wedding-song" src="/audio/song.mp3" preload="auto" autoplay loop></audio>
  `
}
