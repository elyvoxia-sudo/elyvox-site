/**
 * ============================================================
 * ELYVOX.IA — Bannière de consentement Loi 25 du Québec
 * Version : 1.0.0
 * ============================================================
 *
 * INSTALLATION (1 seule ligne dans le <head> du site client) :
 * <script src="elyvox-banniere-loi25.js"></script>
 *
 * CONFIGURATION : Modifier les 4 variables ci-dessous uniquement.
 * ============================================================
 */

(function () {

  // ============================================================
  // ✏️ CONFIGURATION DU CLIENT — À MODIFIER PAR CLIENT
  // ============================================================

  var WEBHOOK_URL = 'https://elyvox.app.n8n.cloud/webhook/consentement-loi25';
var CLIENT_ID = 'elyvox-site';
var NOM_ENTREPRISE = 'Elyvox.IA';
var COULEUR_ACCENT = '#0f3460';

  // ============================================================
  // ⚠️ NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE
  // ============================================================

  var STORAGE_KEY = 'elyvox_consent_' + CLIENT_ID;
  var CONSENT_TEXT = 'En soumettant ce formulaire, vous consentez à ce que ' + NOM_ENTREPRISE + ' collecte et utilise vos renseignements personnels aux fins décrites, conformément à la Loi 25 du Québec sur la protection des renseignements personnels. Vous pouvez retirer votre consentement à tout moment en nous contactant.';

  // Ne pas réafficher si déjà consenti
  if (localStorage.getItem(STORAGE_KEY)) return;

  // ============================================================
  // CSS
  // ============================================================

  var css = `
    #elyvox-banner {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      background: #ffffff;
      border-top: 2px solid ` + COULEUR_ACCENT + `;
      padding: 16px 24px;
      box-shadow: 0 -4px 32px rgba(0,0,0,0.10);
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      box-sizing: border-box;
    }
    #elyvox-banner.ev-visible {
      transform: translateY(0);
    }
    #elyvox-banner * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    #ev-inner {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
    }
    #ev-text { flex: 1; min-width: 220px; }
    #ev-title {
      font-size: 14px;
      font-weight: 600;
      color: #111;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    #ev-badge {
      font-size: 10px;
      font-weight: 600;
      background: #E6F1FB;
      color: ` + COULEUR_ACCENT + `;
      padding: 2px 8px;
      border-radius: 20px;
      letter-spacing: 0.3px;
    }
    #ev-desc {
      font-size: 12px;
      color: #555;
      line-height: 1.5;
    }
    #ev-desc a {
      color: ` + COULEUR_ACCENT + `;
      text-decoration: underline;
    }
    #ev-actions {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-shrink: 0;
      flex-wrap: wrap;
    }
    .ev-btn {
      font-size: 13px;
      font-weight: 500;
      padding: 9px 20px;
      border-radius: 8px;
      cursor: pointer;
      border: 1px solid #ddd;
      background: #fff;
      color: #555;
      font-family: inherit;
      transition: all 0.15s;
      white-space: nowrap;
    }
    .ev-btn:hover { background: #f5f5f5; }
    .ev-btn-primary {
      background: ` + COULEUR_ACCENT + `;
      color: #fff;
      border-color: ` + COULEUR_ACCENT + `;
    }
    .ev-btn-primary:hover {
      opacity: 0.88;
      background: ` + COULEUR_ACCENT + `;
    }
    .ev-btn-link {
      background: transparent;
      border-color: transparent;
      font-size: 12px;
      color: #888;
      text-decoration: underline;
      padding: 9px 10px;
    }
    .ev-btn-link:hover { background: transparent; color: #555; }

    /* MODAL PRÉFÉRENCES */
    #ev-modal-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 1000000;
    }
    #ev-modal-overlay.ev-open { display: block; }
    #ev-modal {
      display: none;
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      border-radius: 12px;
      padding: 28px;
      width: 460px;
      max-width: 92vw;
      z-index: 1000001;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      box-shadow: 0 8px 40px rgba(0,0,0,0.16);
    }
    #ev-modal.ev-open { display: block; }
    #ev-modal-title {
      font-size: 16px;
      font-weight: 600;
      color: #111;
      margin-bottom: 4px;
    }
    #ev-modal-sub {
      font-size: 12px;
      color: #777;
      margin-bottom: 20px;
      line-height: 1.5;
    }
    .ev-pref-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #f2f2f2;
    }
    .ev-pref-info { flex: 1; padding-right: 16px; }
    .ev-pref-name {
      font-size: 13px;
      font-weight: 600;
      color: #111;
      margin-bottom: 2px;
    }
    .ev-pref-desc {
      font-size: 11px;
      color: #888;
      line-height: 1.4;
    }
    .ev-toggle {
      position: relative;
      width: 40px; height: 22px;
      flex-shrink: 0;
    }
    .ev-toggle input { opacity: 0; width: 0; height: 0; }
    .ev-slider {
      position: absolute;
      inset: 0;
      background: #ccc;
      border-radius: 22px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .ev-slider:before {
      content: '';
      position: absolute;
      width: 16px; height: 16px;
      left: 3px; top: 3px;
      background: #fff;
      border-radius: 50%;
      transition: transform 0.2s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }
    .ev-toggle input:checked + .ev-slider { background: ` + COULEUR_ACCENT + `; }
    .ev-toggle input:checked + .ev-slider:before { transform: translateX(18px); }
    .ev-toggle input:disabled + .ev-slider { opacity: 0.5; cursor: not-allowed; }
    #ev-modal-footer {
      display: flex;
      gap: 10px;
      margin-top: 20px;
      justify-content: flex-end;
    }

    /* FORMULAIRE CONSENTEMENT */
    #ev-form-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 1000000;
    }
    #ev-form-overlay.ev-open { display: block; }
    #ev-form {
      display: none;
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      border-radius: 12px;
      padding: 28px;
      width: 440px;
      max-width: 92vw;
      z-index: 1000001;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      box-shadow: 0 8px 40px rgba(0,0,0,0.16);
    }
    #ev-form.ev-open { display: block; }
    #ev-form-title {
      font-size: 16px;
      font-weight: 600;
      color: #111;
      margin-bottom: 16px;
    }
    .ev-input {
      width: 100%;
      font-size: 13px;
      padding: 10px 14px;
      border-radius: 8px;
      border: 1px solid #ddd;
      color: #111;
      font-family: inherit;
      margin-bottom: 10px;
      outline: none;
      transition: border-color 0.15s;
    }
    .ev-input:focus { border-color: ` + COULEUR_ACCENT + `; }
    #ev-consent-text-box {
      font-size: 11px;
      color: #666;
      background: #f8f8f8;
      border-radius: 8px;
      padding: 12px 14px;
      margin: 12px 0;
      line-height: 1.6;
      border: 1px solid #eee;
    }
    #ev-check-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin: 14px 0 18px;
    }
    #ev-check-row input[type="checkbox"] {
      margin-top: 2px;
      flex-shrink: 0;
      width: 16px; height: 16px;
      accent-color: ` + COULEUR_ACCENT + `;
      cursor: pointer;
    }
    #ev-check-row label {
      font-size: 12px;
      color: #555;
      line-height: 1.5;
      cursor: pointer;
    }
    #ev-form-footer {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
    }

    /* TOAST */
    #ev-toast {
      display: none;
      position: fixed;
      bottom: 24px; right: 24px;
      background: ` + COULEUR_ACCENT + `;
      color: #fff;
      font-size: 13px;
      font-weight: 500;
      padding: 12px 20px;
      border-radius: 8px;
      z-index: 1000002;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      animation: ev-fadein 0.3s ease;
    }
    @keyframes ev-fadein {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  // ============================================================
  // HTML
  // ============================================================

  var html = `
    <style>` + css + `</style>

    <!-- BANNIÈRE PRINCIPALE -->
    <div id="elyvox-banner">
      <div id="ev-inner">
        <div id="ev-text">
          <div id="ev-title">
            Protection de vos renseignements personnels
            <span id="ev-badge">Loi 25</span>
          </div>
          <p id="ev-desc">
            Ce site collecte des renseignements personnels conformément à la Loi 25 du Québec.
            En continuant, vous consentez à leur utilisation selon notre
            <a href="/politique-confidentialite" target="_blank">politique de confidentialité</a>.
          </p>
        </div>
        <div id="ev-actions">
          <button class="ev-btn ev-btn-link" onclick="evOpenPrefs()">Personnaliser</button>
          <button class="ev-btn" onclick="evDecline()">Refuser</button>
          <button class="ev-btn ev-btn-primary" onclick="evOpenForm()">Accepter</button>
        </div>
      </div>
    </div>

    <!-- MODAL PRÉFÉRENCES -->
    <div id="ev-modal-overlay" onclick="evClosePrefs()"></div>
    <div id="ev-modal">
      <p id="ev-modal-title">Gérer mes préférences</p>
      <p id="ev-modal-sub">Choisissez les finalités pour lesquelles vous autorisez la collecte de vos renseignements personnels.</p>

      <div class="ev-pref-row">
        <div class="ev-pref-info">
          <p class="ev-pref-name">Fonctionnement essentiel</p>
          <p class="ev-pref-desc">Requis pour le bon fonctionnement du site. Ne peut être désactivé.</p>
        </div>
        <label class="ev-toggle">
          <input type="checkbox" checked disabled>
          <span class="ev-slider"></span>
        </label>
      </div>

      <div class="ev-pref-row">
        <div class="ev-pref-info">
          <p class="ev-pref-name">Communications et infolettre</p>
          <p class="ev-pref-desc">Envoi de nos communications, offres et nouvelles de services.</p>
        </div>
        <label class="ev-toggle">
          <input type="checkbox" id="ev-pref-marketing" checked>
          <span class="ev-slider"></span>
        </label>
      </div>

      <div class="ev-pref-row">
        <div class="ev-pref-info">
          <p class="ev-pref-name">Analyse et amélioration</p>
          <p class="ev-pref-desc">Nous aide à comprendre comment le site est utilisé pour l'améliorer.</p>
        </div>
        <label class="ev-toggle">
          <input type="checkbox" id="ev-pref-analytics" checked>
          <span class="ev-slider"></span>
        </label>
      </div>

      <div id="ev-modal-footer">
        <button class="ev-btn" onclick="evClosePrefs()">Annuler</button>
        <button class="ev-btn ev-btn-primary" onclick="evSavePrefs()">Enregistrer mes choix</button>
      </div>
    </div>

    <!-- FORMULAIRE CONSENTEMENT -->
    <div id="ev-form-overlay"></div>
    <div id="ev-form">
      <p id="ev-form-title">Confirmer votre consentement</p>
      <input class="ev-input" type="text" id="ev-nom" placeholder="Votre nom complet *">
      <input class="ev-input" type="email" id="ev-email" placeholder="Votre adresse courriel *">
      <input class="ev-input" type="tel" id="ev-tel" placeholder="Votre téléphone (optionnel)">
      <div id="ev-consent-text-box"></div>
      <div id="ev-check-row">
        <input type="checkbox" id="ev-check">
        <label for="ev-check">J'ai lu et j'accepte les conditions ci-dessus. Je comprends que je peux retirer mon consentement à tout moment en contactant l'entreprise.</label>
      </div>
      <div id="ev-form-footer">
        <button class="ev-btn" onclick="evCloseForm()">Annuler</button>
        <button class="ev-btn ev-btn-primary" onclick="evSubmit()">Confirmer mon consentement</button>
      </div>
    </div>

    <!-- TOAST DE CONFIRMATION -->
    <div id="ev-toast">✓ Consentement enregistré avec succès</div>
  `;

  // ============================================================
  // INJECTION HTML
  // ============================================================

  document.body.insertAdjacentHTML('beforeend', html);
  document.getElementById('ev-consent-text-box').textContent = CONSENT_TEXT;

  // ============================================================
  // FONCTIONS
  // ============================================================

  var selectedFinalites = ['Contact'];

  // Afficher la bannière après 800ms
  setTimeout(function () {
    var b = document.getElementById('elyvox-banner');
    if (b) b.classList.add('ev-visible');
  }, 800);

  function evHideBanner() {
    var b = document.getElementById('elyvox-banner');
    if (b) b.classList.remove('ev-visible');
  }

  window.evOpenPrefs = function () {
    document.getElementById('ev-modal-overlay').classList.add('ev-open');
    document.getElementById('ev-modal').classList.add('ev-open');
  };

  window.evClosePrefs = function () {
    document.getElementById('ev-modal-overlay').classList.remove('ev-open');
    document.getElementById('ev-modal').classList.remove('ev-open');
  };

  window.evSavePrefs = function () {
    selectedFinalites = ['Contact'];
    var marketing = document.getElementById('ev-pref-marketing');
    var analytics = document.getElementById('ev-pref-analytics');
    if (marketing && marketing.checked) selectedFinalites.push('Newsletter');
    if (analytics && analytics.checked) selectedFinalites.push('Analyse');
    evClosePrefs();
    evOpenForm();
  };

  window.evOpenForm = function () {
    evHideBanner();
    document.getElementById('ev-form-overlay').classList.add('ev-open');
    document.getElementById('ev-form').classList.add('ev-open');
  };

  window.evCloseForm = function () {
    document.getElementById('ev-form-overlay').classList.remove('ev-open');
    document.getElementById('ev-form').classList.remove('ev-open');
    var b = document.getElementById('elyvox-banner');
    if (b) b.classList.add('ev-visible');
  };

  window.evDecline = function () {
    evHideBanner();
    localStorage.setItem(STORAGE_KEY, 'declined');
    evSendWebhook({
      consentement: false,
      nom: 'Anonyme',
      email: 'noreply@anonyme.ca',
      telephone: '',
      finalite: 'Refus',
    });
  };

  window.evSubmit = function () {
    var nom   = document.getElementById('ev-nom').value.trim();
    var email = document.getElementById('ev-email').value.trim();
    var tel   = document.getElementById('ev-tel').value.trim();
    var check = document.getElementById('ev-check').checked;

    if (!nom)   { alert('Veuillez entrer votre nom.'); return; }
    if (!email) { alert('Veuillez entrer votre courriel.'); return; }
    if (!check) { alert('Veuillez cocher la case de consentement.'); return; }

    evCloseForm();
    localStorage.setItem(STORAGE_KEY, 'accepted');

    evSendWebhook({
      consentement: true,
      nom: nom,
      email: email,
      telephone: tel,
      finalite: selectedFinalites.join(', '),
    });

    evShowToast();
  };

  function evSendWebhook(data) {
    var payload = Object.assign({}, data, {
      url_source: window.location.href,
      texte_consentement: CONSENT_TEXT,
      client_id: CLIENT_ID,
    });

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      mode: 'no-cors',
    }).catch(function () {});
  }

  function evShowToast() {
    var t = document.getElementById('ev-toast');
    t.style.display = 'block';
    setTimeout(function () { t.style.display = 'none'; }, 4000);
  }

})();
