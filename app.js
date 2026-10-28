// ==========================================================================
// Happiness Project — Application Logic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- STATE ---
  let currentCategory = 'all';
  let currentJoke = null;
  let jokesEnduredCount = 0;
  let seenJokeIds = new Set();

  // LocalStorage Keys
  const STORAGE_KEYS = {
    FAVORITES: 'hp_favorites_v1',
    RATINGS: 'hp_ratings_v1',
    USER_VOTES: 'hp_user_votes_v1'
  };

  // --- DOM ELEMENTS ---
  // Navigation & Tabs
  const tabGenerator = document.getElementById('tabGenerator');
  const tabFavourites = document.getElementById('tabFavourites');
  const generatorView = document.getElementById('generatorView');
  const favouritesView = document.getElementById('favouritesView');
  const brandHomeLink = document.getElementById('brandHomeLink');
  const backToGenBtn = document.getElementById('backToGenBtn');
  const favCountBadge = document.getElementById('favCountBadge');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  const soundStatusText = document.getElementById('soundStatusText');

  // Generator & Cards
  const generateJokeBtn = document.getElementById('generateJokeBtn');
  const mainJokeCard = document.getElementById('mainJokeCard');
  const cardCategoryTag = document.getElementById('cardCategoryTag');
  const cardJokeId = document.getElementById('cardJokeId');
  const cardJokeSetup = document.getElementById('cardJokeSetup');
  const cardJokePunchline = document.getElementById('cardJokePunchline');
  const cardJokeAuthor = document.getElementById('cardJokeAuthor');
  const saveCringeBtn = document.getElementById('saveCringeBtn');
  const saveStarIcon = document.getElementById('saveStarIcon');
  const saveBtnText = document.getElementById('saveBtnText');
  const copyJokeBtn = document.getElementById('copyJokeBtn');
  const speakJokeBtn = document.getElementById('speakJokeBtn');
  const categoryBtns = document.querySelectorAll('.cat-btn');

  // Ratings
  const rateExhaledBtn = document.getElementById('rateExhaledBtn');
  const rateGoodBtn = document.getElementById('rateGoodBtn');
  const rateCryingBtn = document.getElementById('rateCryingBtn');
  const countExhaled = document.getElementById('countExhaled');
  const countGood = document.getElementById('countGood');
  const countCrying = document.getElementById('countCrying');

  // Joke of the Day
  const dailyJokeSetup = document.getElementById('dailyJokeSetup');
  const dailyJokePunchline = document.getElementById('dailyJokePunchline');
  const dailyJokeCategory = document.getElementById('dailyJokeCategory');
  const dailyJokeDate = document.getElementById('dailyJokeDate');
  const dailySaveBtn = document.getElementById('dailySaveBtn');

  // Extras
  const statJokesEndured = document.getElementById('statJokesEndured');
  const statBraincells = document.getElementById('statBraincells');
  const emergencyRoastBtn = document.getElementById('emergencyRoastBtn');
  const randomizeAllBtn = document.getElementById('randomizeAllBtn');

  // Favourites Page
  const favCardsGrid = document.getElementById('favCardsGrid');
  const favEmptyState = document.getElementById('favEmptyState');
  const favSearchInput = document.getElementById('favSearchInput');
  const favCategoryFilter = document.getElementById('favCategoryFilter');
  const clearAllFavsBtn = document.getElementById('clearAllFavsBtn');

  // Toast Container
  const toastContainer = document.getElementById('toastContainer');

  // ==========================================================================
  // CONFETTI ENGINE (HTML5 Canvas)
  // ==========================================================================
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  let confettiParticles = [];
  let isConfettiRunning = false;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function triggerConfetti(originX = window.innerWidth / 2, originY = window.innerHeight / 2, count = 45) {
    const colors = ['#FFE600', '#FF5E8E', '#00F0FF', '#25E27D', '#9D80FE', '#121212', '#FFFFFF'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      confettiParticles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        size: Math.random() * 10 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        life: 1,
        decay: Math.random() * 0.02 + 0.015,
        shape: Math.random() > 0.4 ? 'rect' : 'circle'
      });
    }

    if (!isConfettiRunning) {
      isConfettiRunning = true;
      requestAnimationFrame(renderConfetti);
    }
  }

  function renderConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.vx *= 0.98; // drag
      p.rotation += p.rotationSpeed;
      p.life -= p.decay;

      if (p.life <= 0) {
        confettiParticles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.strokeStyle = '#121212';
      ctx.lineWidth = 1.5;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      ctx.restore();
    }

    if (confettiParticles.length > 0) {
      requestAnimationFrame(renderConfetti);
    } else {
      isConfettiRunning = false;
    }
  }

  // ==========================================================================
  // TOAST NOTIFICATION UTILITY
  // ==========================================================================
  function showToast(message, emoji = '✨') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="font-size: 1.25rem;">${emoji}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.95)';
      setTimeout(() => toast.remove(), 320);
    }, 2800);
  }

  // ==========================================================================
  // LOCAL STORAGE MANAGERS
  // ==========================================================================
  function getFavorites() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('Could not read favorites from localStorage', e);
      return [];
    }
  }

  function saveFavorites(favs) {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
      updateFavBadge();
    } catch (e) {
      console.warn('Could not write favorites to localStorage', e);
    }
  }

  function isJokeFavorited(jokeId) {
    const favs = getFavorites();
    return favs.some(f => f.id === jokeId);
  }

  function getRatings() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.RATINGS);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  }

  function saveRatings(ratings) {
    try {
      localStorage.setItem(STORAGE_KEYS.RATINGS, JSON.stringify(ratings));
    } catch (e) {}
  }

  function getUserVotes() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER_VOTES);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  }

  function saveUserVotes(votes) {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_VOTES, JSON.stringify(votes));
    } catch (e) {}
  }

  function updateFavBadge() {
    const favs = getFavorites();
    favCountBadge.textContent = favs.length;
  }

  // ==========================================================================
  // JOKE DISPLAY & LOGIC
  // ==========================================================================

  function renderJoke(joke, animate = true) {
    currentJoke = joke;
    seenJokeIds.add(joke.id);

    // Card Animation
    if (animate) {
      mainJokeCard.classList.remove('animating');
      void mainJokeCard.offsetWidth; // trigger reflow
      mainJokeCard.classList.add('animating');
    }

    // Category styling
    cardCategoryTag.textContent = joke.categoryLabel;
    cardCategoryTag.className = 'category-tag';
    if (joke.category === 'dad') cardCategoryTag.classList.add('tag-dad');
    else if (joke.category === 'pun') cardCategoryTag.classList.add('tag-pun');
    else if (joke.category === 'roast') cardCategoryTag.classList.add('tag-roast');

    // Joke numbers
    cardJokeId.textContent = `JOKE #${String(joke.id).padStart(2, '0')}`;
    cardJokeSetup.textContent = joke.setup;
    cardJokePunchline.textContent = joke.punchline;
    cardJokeAuthor.textContent = joke.author || 'Anonymous Comedian';

    // Update Favorite Button State
    updateSaveButtonState();

    // Update Rating Counts & User Vote
    updateRatingUI();

    // Increment jokes endured counter
    jokesEnduredCount++;
    statJokesEndured.textContent = jokesEnduredCount;
    statBraincells.textContent = jokesEnduredCount * 14;
  }

  function getRandomJoke(category = currentCategory) {
    let pool = getJokesByCategory(category);

    // Filter out recently seen jokes if possible
    let available = pool.filter(j => !seenJokeIds.has(j.id));
    if (available.length === 0) {
      // Reset seen pool for this category
      pool.forEach(j => seenJokeIds.delete(j.id));
      available = pool;
    }

    const randomIndex = Math.floor(Math.random() * available.length);
    return available[randomIndex] || pool[0];
  }

  function generateNewJoke() {
    soundManager.playBoing();
    const joke = getRandomJoke(currentCategory);
    renderJoke(joke, true);

    // Mini confetti burst around the button
    const rect = generateJokeBtn.getBoundingClientRect();
    triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
  }

  function updateSaveButtonState() {
    if (!currentJoke) return;
    const favorited = isJokeFavorited(currentJoke.id);

    if (favorited) {
      saveCringeBtn.classList.add('saved-active');
      saveStarIcon.textContent = '⭐';
      saveBtnText.textContent = 'Saved to Cringe Vault! 💖';
    } else {
      saveCringeBtn.classList.remove('saved-active');
      saveStarIcon.textContent = '⭐';
      saveBtnText.textContent = 'Save the Cringe ⭐';
    }
  }

  function toggleFavoriteCurrentJoke() {
    if (!currentJoke) return;
    const favs = getFavorites();
    const index = favs.findIndex(f => f.id === currentJoke.id);

    if (index > -1) {
      favs.splice(index, 1);
      saveFavorites(favs);
      updateSaveButtonState();
      soundManager.playPop();
      showToast('Removed from your Cringe Vault', '🗑️');
    } else {
      favs.unshift({
        ...currentJoke,
        savedAt: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
      });
      saveFavorites(favs);
      updateSaveButtonState();
      soundManager.playChime();

      // Trigger Confetti
      const rect = saveCringeBtn.getBoundingClientRect();
      triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 35);

      const funnyReplies = [
        'Saved! Your sense of humor is now under federal investigation.',
        'Added to your personal Archive of Shame ⭐',
        'Saved! We will pretend we didn\'t see you like this.',
        'Secured in the Cringe Vault for future blackmail.'
      ];
      const randomMsg = funnyReplies[Math.floor(Math.random() * funnyReplies.length)];
      showToast(randomMsg, '⭐');
    }

    renderFavouritesGrid();
  }

  // ==========================================================================
  // RATING SYSTEM
  // ==========================================================================

  function getJokeRatingData(jokeId) {
    const ratings = getRatings();
    if (!ratings[jokeId]) {
      // Deterministic baseline counts based on joke id so numbers feel lively & authentic
      const baseSeed = (jokeId * 17) % 80;
      ratings[jokeId] = {
        exhaled: 12 + baseSeed,
        good: 8 + Math.floor(baseSeed * 0.75),
        crying: 4 + Math.floor(baseSeed * 0.4)
      };
      saveRatings(ratings);
    }
    return ratings[jokeId];
  }

  function updateRatingUI() {
    if (!currentJoke) return;
    const data = getJokeRatingData(currentJoke.id);
    const userVotes = getUserVotes();
    const userVote = userVotes[currentJoke.id];

    countExhaled.textContent = `${data.exhaled} exhales`;
    countGood.textContent = `${data.good} skull moments`;
    countCrying.textContent = `${data.crying} breakdowns`;

    // Highlight user's previous selection
    rateExhaledBtn.classList.toggle('user-voted', userVote === 'exhaled');
    rateGoodBtn.classList.toggle('user-voted', userVote === 'good');
    rateCryingBtn.classList.toggle('user-voted', userVote === 'crying');
  }

  function handleRatingClick(reactionType) {
    if (!currentJoke) return;
    const ratings = getRatings();
    const userVotes = getUserVotes();
    const jokeId = currentJoke.id;

    if (!ratings[jokeId]) {
      ratings[jokeId] = getJokeRatingData(jokeId);
    }

    const previousVote = userVotes[jokeId];

    if (previousVote === reactionType) {
      // Undo vote
      ratings[jokeId][reactionType] = Math.max(0, ratings[jokeId][reactionType] - 1);
      delete userVotes[jokeId];
      showToast('Reaction rescinded. Taking back your laugh?', '🔄');
    } else {
      if (previousVote) {
        ratings[jokeId][previousVote] = Math.max(0, ratings[jokeId][previousVote] - 1);
      }
      ratings[jokeId][reactionType] = (ratings[jokeId][reactionType] || 0) + 1;
      userVotes[jokeId] = reactionType;

      // Play Sound & Micro-feedback
      if (reactionType === 'exhaled') {
        soundManager.playExhale();
        showToast('Nose puff detected. +1 dopamine token 💨', '💨');
      } else if (reactionType === 'good') {
        soundManager.playSkullBonk();
        showToast('💀 Rest In Peace to your sophisticated humor.', '💀');
      } else if (reactionType === 'crying') {
        soundManager.playCryingSlide();
        const rect = rateCryingBtn.getBoundingClientRect();
        triggerConfetti(rect.left + rect.width / 2, rect.top, 30);
        showToast('😭 Emotional damage confirmed. Here is a tissue.', '😭');
      }
    }

    saveRatings(ratings);
    saveUserVotes(userVotes);
    updateRatingUI();
  }

  // ==========================================================================
  // JOKE OF THE DAY INITIALIZATION
  // ==========================================================================
  function initDailyJoke() {
    const dailyJoke = getJokeOfTheDay();
    const today = new Date();
    dailyJokeDate.textContent = `📅 ${today.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}`;
    dailyJokeSetup.textContent = dailyJoke.setup;
    dailyJokePunchline.textContent = dailyJoke.punchline;
    dailyJokeCategory.textContent = `Category: ${dailyJoke.categoryLabel}`;

    dailySaveBtn.onclick = () => {
      const favs = getFavorites();
      if (!favs.some(f => f.id === dailyJoke.id)) {
        favs.unshift({
          ...dailyJoke,
          savedAt: 'Today (Daily Special)'
        });
        saveFavorites(favs);
        soundManager.playChime();
        const rect = dailySaveBtn.getBoundingClientRect();
        triggerConfetti(rect.left + rect.width / 2, rect.top, 25);
        showToast('Daily Special locked in your Cringe Vault!', '⭐');
      } else {
        showToast('Daily joke is already in your Cringe Vault!', '👀');
      }
      renderFavouritesGrid();
      updateSaveButtonState();
    };
  }

  // ==========================================================================
  // FAVOURITES PAGE / CRINGE MUSEUM
  // ==========================================================================
  function renderFavouritesGrid() {
    const favs = getFavorites();
    const query = favSearchInput.value.toLowerCase().trim();
    const selectedCat = favCategoryFilter.value;

    let filtered = favs.filter(joke => {
      const matchCat = (selectedCat === 'all') || (joke.category === selectedCat);
      const matchQuery = !query || 
        joke.setup.toLowerCase().includes(query) || 
        joke.punchline.toLowerCase().includes(query) ||
        (joke.author && joke.author.toLowerCase().includes(query));
      return matchCat && matchQuery;
    });

    favCardsGrid.innerHTML = '';

    if (favs.length === 0) {
      favEmptyState.style.display = 'block';
      favCardsGrid.style.display = 'none';
      return;
    } else {
      favEmptyState.style.display = 'none';
      favCardsGrid.style.display = 'grid';
    }

    if (filtered.length === 0) {
      favCardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; background: #fff; border: 3px solid #121212; border-radius: 12px; box-shadow: 4px 4px 0px #121212;">
          <h4 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.35rem;">No matching cringe found!</h4>
          <p style="color: #666; font-size: 0.95rem;">Try relaxing your search terms or filter.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(joke => {
      const card = document.createElement('div');
      card.className = 'fav-card';

      let catBadgeClass = 'tag-dad';
      if (joke.category === 'pun') catBadgeClass = 'tag-pun';
      else if (joke.category === 'roast') catBadgeClass = 'tag-roast';

      card.innerHTML = `
        <div>
          <div class="fav-card-header">
            <span class="category-tag ${catBadgeClass}" style="font-size: 0.78rem; padding: 0.2rem 0.65rem;">
              ${joke.categoryLabel || joke.category}
            </span>
            <span style="font-size: 0.78rem; font-weight: 700; color: #777;">
              ${joke.savedAt || 'Saved'}
            </span>
          </div>
          <div class="fav-card-setup">${joke.setup}</div>
          <div class="fav-card-punchline">${joke.punchline}</div>
        </div>

        <div class="fav-card-footer">
          <span>By: ${joke.author || 'Anonymous Dad'}</span>
          <div class="fav-btn-group">
            <button class="fav-btn-sm fav-copy-btn" title="Copy to clipboard" data-id="${joke.id}">📋 Copy</button>
            <button class="fav-btn-sm fav-btn-delete fav-del-btn" title="Delete joke" data-id="${joke.id}">🗑️ Drop</button>
          </div>
        </div>
      `;

      // Event handlers for card buttons
      const copyBtn = card.querySelector('.fav-copy-btn');
      copyBtn.addEventListener('click', () => {
        copyJokeText(`${joke.setup}\n\n${joke.punchline}\n(via Happiness Project)`);
      });

      const delBtn = card.querySelector('.fav-del-btn');
      delBtn.addEventListener('click', () => {
        deleteFavorite(joke.id);
      });

      favCardsGrid.appendChild(card);
    });
  }

  function deleteFavorite(jokeId) {
    let favs = getFavorites();
    favs = favs.filter(j => j.id !== jokeId);
    saveFavorites(favs);
    soundManager.playPop();
    showToast('Joke expelled from Cringe Vault!', '👋');
    renderFavouritesGrid();
    updateSaveButtonState();
  }

  function clearAllFavorites() {
    const favs = getFavorites();
    if (favs.length === 0) {
      showToast('Your vault is already squeaky clean!', '🧹');
      return;
    }

    if (confirm('Are you absolutely certain you want to purge your entire Cringe Vault? This trauma cannot be undone.')) {
      saveFavorites([]);
      soundManager.playSadTrombone();
      showToast('All cringe safely incinerated.', '🔥');
      renderFavouritesGrid();
      updateSaveButtonState();
    }
  }

  // ==========================================================================
  // TEXT COPY & SPEECH SYNTHESIS
  // ==========================================================================
  function copyJokeText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        soundManager.playPop();
        showToast('Copied! Go ruin a family group chat 📲', '📋');
      }).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      soundManager.playPop();
      showToast('Copied to clipboard!', '📋');
    } catch (e) {
      showToast('Could not auto-copy. Please copy manually.', '⚠️');
    }
    document.body.removeChild(ta);
  }

  function speakCurrentJoke() {
    if (!('speechSynthesis' in window)) {
      showToast('Text-to-speech not supported on this device!', '🔇');
      return;
    }

    if (!currentJoke) return;
    window.speechSynthesis.cancel(); // Stop any pending speech

    const utterance1 = new SpeechSynthesisUtterance(currentJoke.setup);
    utterance1.rate = 0.95;
    utterance1.pitch = 1.05;

    const utterance2 = new SpeechSynthesisUtterance(currentJoke.punchline);
    utterance2.rate = 0.9;
    utterance2.pitch = 1.15;

    // Small pause between setup and punchline
    window.speechSynthesis.speak(utterance1);
    setTimeout(() => {
      window.speechSynthesis.speak(utterance2);
    }, 450);

    showToast('📢 Reading aloud with maximum dramatic flair...', '🎙️');
  }

  // ==========================================================================
  // VIEW SWITCHING (Tabs)
  // ==========================================================================
  function switchView(targetTab) {
    soundManager.playPop();
    if (targetTab === 'generator') {
      tabGenerator.classList.add('active');
      tabGenerator.setAttribute('aria-selected', 'true');
      tabFavourites.classList.remove('active');
      tabFavourites.setAttribute('aria-selected', 'false');

      generatorView.classList.add('active');
      favouritesView.classList.remove('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      tabFavourites.classList.add('active');
      tabFavourites.setAttribute('aria-selected', 'true');
      tabGenerator.classList.remove('active');
      tabGenerator.setAttribute('aria-selected', 'false');

      favouritesView.classList.add('active');
      generatorView.classList.remove('active');
      renderFavouritesGrid();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ==========================================================================
  // EVENT LISTENERS
  // ==========================================================================

  // Tab View Navigation
  tabGenerator.addEventListener('click', () => switchView('generator'));
  tabFavourites.addEventListener('click', () => switchView('favourites'));
  brandHomeLink.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('generator');
  });
  backToGenBtn.addEventListener('click', () => switchView('generator'));

  // Big Laugh Button
  generateJokeBtn.addEventListener('click', generateNewJoke);

  // Category Selector Buttons
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      soundManager.playPop();
      categoryBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');

      currentCategory = btn.getAttribute('data-cat');
      generateNewJoke();
    });
  });

  // Action Buttons
  saveCringeBtn.addEventListener('click', toggleFavoriteCurrentJoke);

  copyJokeBtn.addEventListener('click', () => {
    if (!currentJoke) return;
    const shareText = `${currentJoke.setup}\n\n${currentJoke.punchline}\n\n(from Happiness Project — A Little Dose of Stupid)`;
    copyJokeText(shareText);
  });

  speakJokeBtn.addEventListener('click', speakCurrentJoke);

  // Rating Buttons
  rateExhaledBtn.addEventListener('click', () => handleRatingClick('exhaled'));
  rateGoodBtn.addEventListener('click', () => handleRatingClick('good'));
  rateCryingBtn.addEventListener('click', () => handleRatingClick('crying'));

  // Sound Toggle Button
  function updateSoundUI() {
    const isMuted = soundManager.isMuted();
    soundIcon.textContent = isMuted ? '🔇' : '🔊';
    soundStatusText.textContent = isMuted ? 'Muted' : 'Sound On';
    soundToggleBtn.style.background = isMuted ? '#E0E0E0' : '#FFFDF5';
  }

  soundToggleBtn.addEventListener('click', () => {
    const muted = soundManager.toggleMute();
    updateSoundUI();
    showToast(muted ? 'Sound muted 🔇' : 'Sound effects enabled 🔊', muted ? '🔇' : '🔊');
    if (!muted) soundManager.playBoing();
  });

  // Emergency Roast Button
  emergencyRoastBtn.addEventListener('click', () => {
    soundManager.playRimshot();
    // Switch category to roast
    currentCategory = 'roast';
    categoryBtns.forEach(b => {
      const isRoast = b.getAttribute('data-cat') === 'roast';
      b.classList.toggle('active', isRoast);
      b.setAttribute('aria-checked', isRoast ? 'true' : 'false');
    });

    const joke = getRandomJoke('roast');
    renderJoke(joke, true);
    triggerConfetti(window.innerWidth / 2, window.innerHeight / 2, 40);
    showToast('🚨 EMERGENCY ROAST DISPATCHED!', '🔥');
  });

  // Randomize All Button
  randomizeAllBtn.addEventListener('click', () => {
    currentCategory = 'all';
    categoryBtns.forEach(b => {
      const isAll = b.getAttribute('data-cat') === 'all';
      b.classList.toggle('active', isAll);
      b.setAttribute('aria-checked', isAll ? 'true' : 'false');
    });
    generateNewJoke();
  });

  // Favourites Filtering & Clearing
  favSearchInput.addEventListener('input', renderFavouritesGrid);
  favCategoryFilter.addEventListener('change', renderFavouritesGrid);
  clearAllFavsBtn.addEventListener('click', clearAllFavorites);

  // Keyboard Shortcuts: Spacebar to generate joke, S to save
  window.addEventListener('keydown', (e) => {
    // Don't trigger when typing in search input
    if (document.activeElement === favSearchInput) return;

    if (e.code === 'Space' && generatorView.classList.contains('active')) {
      e.preventDefault();
      generateNewJoke();
    } else if (e.key === 's' || e.key === 'S') {
      if (generatorView.classList.contains('active')) {
        e.preventDefault();
        toggleFavoriteCurrentJoke();
      }
    } else if (e.key === '1') {
      handleRatingClick('exhaled');
    } else if (e.key === '2') {
      handleRatingClick('good');
    } else if (e.key === '3') {
      handleRatingClick('crying');
    }
  });

  // ==========================================================================
  // INITIAL BOOTSTRAP
  // ==========================================================================
  updateSoundUI();
  updateFavBadge();
  initDailyJoke();

  // Load first joke
  const initialJoke = getRandomJoke('all');
  renderJoke(initialJoke, false);

});
