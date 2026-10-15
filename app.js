/**
 * YouTube Music Clone - Client Application Logic
 * Audio Synthesis Engine, State Management, Interactivity
 */

// -----------------------------------------------------------------------------
// TRACKS & SHELVES DATA REPOSITORY
// -----------------------------------------------------------------------------
const TRACKS = [
  {
    id: 'track-1',
    title: 'Neon Drift Odyssey',
    artist: 'Synthwave Legion',
    album: 'Neon Drift (Deluxe)',
    duration: 215,
    cover: 'assets/images/album_synthwave.jpg',
    genre: 'Energia',
    chords: [261.63, 329.63, 392.00, 523.25], // C Major 7
    lyrics: [
      { time: 0, text: '♪ Sintetizadores no horizonte de neon ♪' },
      { time: 8, text: 'Correndo pelas avenidas da meia-noite' },
      { time: 18, text: 'Acelere o motor, sinta o pulso digital' },
      { time: 30, text: 'Luzes violeta refletem na pista infinita' },
      { time: 45, text: 'Nada pode parar o fluxo do futuro' },
      { time: 60, text: '♪ Solo de sintetizador retrowave ♪' },
      { time: 90, text: 'Nos limites da cidade cibernética' },
      { time: 120, text: 'O som viaja na velocidade da luz' }
    ]
  },
  {
    id: 'track-2',
    title: 'Rainy Night Coffee',
    artist: 'Lofi Girl & Chill Beats',
    album: 'Rainy Nights Vol. 1',
    duration: 184,
    cover: 'assets/images/album_lofi.jpg',
    genre: 'Para relaxar',
    chords: [220.00, 261.63, 329.63, 392.00], // A Minor 7
    lyrics: [
      { time: 0, text: '♪ Gotas de chuva batem na janela ♪' },
      { time: 12, text: 'O vapor do café sobe suavemente' },
      { time: 25, text: 'Caderno aberto, rascunhos da mente' },
      { time: 42, text: 'Lofi suave para acalmar a alma' },
      { time: 65, text: 'A noite é calma, o mundo desacelera' },
      { time: 95, text: 'Bateria analógica com estalo de vinil' },
      { time: 130, text: 'Foco total no momento presente' }
    ]
  },
  {
    id: 'track-3',
    title: 'Midnight Velvet',
    artist: 'NYA',
    album: 'Neon Soul',
    duration: 198,
    cover: 'assets/images/album_urban.jpg',
    genre: 'Energia',
    chords: [174.61, 220.00, 261.63, 311.13], // F Minor 7
    lyrics: [
      { time: 0, text: 'Sob as luzes da metrópole vibrante' },
      { time: 15, text: 'Passos decididos cortam o silêncio' },
      { time: 28, text: 'Voz suave, batida envolvente' },
      { time: 45, text: 'Sinta o groove dominar cada movimento' },
      { time: 70, text: 'Neon Soul brilhando no topo do mundo' },
      { time: 105, text: 'A energia nunca morre' }
    ]
  },
  {
    id: 'track-4',
    title: 'Deep Focus Flow',
    artist: 'Mind Wave Studio',
    album: 'Alpha Waves 432Hz',
    duration: 240,
    cover: 'assets/images/album_lofi.jpg',
    genre: 'Foco',
    chords: [196.00, 246.94, 293.66, 369.99], // G Major 7
    lyrics: [
      { time: 0, text: 'Ondas cerebrais em frequência alpha' },
      { time: 30, text: 'Eliminando distrações externas' },
      { time: 70, text: 'Conexão profunda e clareza mental' },
      { time: 120, text: 'A mente flui sem atrito' }
    ]
  },
  {
    id: 'track-5',
    title: 'Hyper Pulse Runner',
    artist: 'Cyber Rush',
    album: 'Cardio Velocity',
    duration: 172,
    cover: 'assets/images/album_synthwave.jpg',
    genre: 'Treino',
    chords: [146.83, 220.00, 293.66, 440.00], // D Minor
    lyrics: [
      { time: 0, text: 'Batimentos a 150 BPM' },
      { time: 15, text: 'Superando o limite a cada passo' },
      { time: 35, text: 'Força e resistência total' },
      { time: 60, text: 'Não pare agora!' }
    ]
  },
  {
    id: 'track-6',
    title: 'Highway Sunset Drive',
    artist: 'Coastline Mirage',
    album: 'Pacific Cruising',
    duration: 226,
    cover: 'assets/images/album_urban.jpg',
    genre: 'Viagem',
    chords: [261.63, 329.63, 392.00, 493.88], // C Maj 7
    lyrics: [
      { time: 0, text: 'Janelas abertas, brisa do litoral' },
      { time: 20, text: 'O sol se pondo no retrovisor' },
      { time: 50, text: 'Música perfeita para a estrada' },
      { time: 90, text: 'Sem destino certo, apenas o caminho' }
    ]
  }
];

const SHELVES = [
  {
    id: 'listen-again',
    subtitle: 'CONTINUE DE ONDE PAROU',
    title: 'Ouvir novamente',
    genre: 'all',
    items: [
      { id: 'track-1', title: 'Neon Drift Odyssey', artist: 'Synthwave Legion', cover: 'assets/images/album_synthwave.jpg', type: 'Música' },
      { id: 'track-2', title: 'Rainy Night Coffee', artist: 'Lofi Girl & Chill Beats', cover: 'assets/images/album_lofi.jpg', type: 'Música' },
      { id: 'track-3', title: 'Midnight Velvet', artist: 'NYA', cover: 'assets/images/album_urban.jpg', type: 'Música' },
      { id: 'track-4', title: 'Deep Focus Flow', artist: 'Mind Wave Studio', cover: 'assets/images/album_lofi.jpg', type: 'Álbum' },
      { id: 'track-5', title: 'Hyper Pulse Runner', artist: 'Cyber Rush', cover: 'assets/images/album_synthwave.jpg', type: 'Música' },
      { id: 'track-6', title: 'Highway Sunset Drive', artist: 'Coastline Mirage', cover: 'assets/images/album_urban.jpg', type: 'Playlist' }
    ]
  },
  {
    id: 'mixed-for-you',
    subtitle: 'RECOMENDAÇÕES PERSONALIZADAS',
    title: 'Seus mixes favoritos',
    genre: 'all',
    items: [
      { id: 'track-2', title: 'Meu Supermix', artist: 'Lofi Girl, NYA e Synthwave Legion', cover: 'assets/images/album_lofi.jpg', type: 'Playlist • YouTube Music' },
      { id: 'track-1', title: 'Mix de Synthwave', artist: 'Synthwave Legion, Kavinsky, Gunship', cover: 'assets/images/album_synthwave.jpg', type: 'Playlist • Atualizado hoje' },
      { id: 'track-3', title: 'Mix Descoberta', artist: 'Novos lançamentos recomendados', cover: 'assets/images/album_urban.jpg', type: 'Playlist • YouTube Music' },
      { id: 'track-4', title: 'Mix de Foco Profundo', artist: 'Músicas instrumentais para trabalhar', cover: 'assets/images/album_lofi.jpg', type: 'Playlist • Foco' }
    ]
  },
  {
    id: 'trending-hits',
    subtitle: 'EM ALTA NO BRASIL',
    title: 'Sucessos do momento',
    genre: 'all',
    items: [
      { id: 'track-3', title: 'Top 50 Brasil', artist: 'As músicas mais tocadas hoje', cover: 'assets/images/album_urban.jpg', type: 'Parada • 1,4M visualizações' },
      { id: 'track-1', title: 'Hits Eletrônicos 2026', artist: 'Melhores da música eletrônica', cover: 'assets/images/album_synthwave.jpg', type: 'Playlist • Tendência' },
      { id: 'track-5', title: 'Workout Power Beats', artist: 'Para treinar com máxima energia', cover: 'assets/images/album_synthwave.jpg', type: 'Playlist • Fitness' },
      { id: 'track-6', title: 'Vibes Acústicas', artist: 'Voz e violão relaxantes', cover: 'assets/images/album_urban.jpg', type: 'Álbum • 2026' }
    ]
  }
];

// -----------------------------------------------------------------------------
// PROCEDURAL AUDIO SYNTHESIZER (WEB AUDIO API)
// -----------------------------------------------------------------------------
class ProceduralAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.timer = null;
    this.volume = 0.8;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTrack(track) {
    this.init();
    this.stop();
    this.isPlaying = true;

    // Soft warm synth chord progression
    const chordNotes = track.chords || [261.63, 329.63, 392.00, 523.25];
    chordNotes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Lowpass filter for smooth ambient warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600 + idx * 200, this.ctx.currentTime);

      // Gentle tremolo/envelope
      gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08 / chordNotes.length, this.ctx.currentTime + 1.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      this.oscillators.push({ osc, gain });
    });

    // Sub-bass line
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(chordNotes[0] / 2, this.ctx.currentTime);
    subGain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    subOsc.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start();
    this.oscillators.push({ osc: subOsc, gain: subGain });
  }

  pause() {
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
    }
    this.isPlaying = false;
  }

  resume() {
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.1);
    }
    this.isPlaying = true;
  }

  stop() {
    this.oscillators.forEach(({ osc, gain }) => {
      try {
        gain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05);
        osc.stop(this.ctx.currentTime + 0.1);
      } catch (e) {}
    });
    this.oscillators = [];
    this.isPlaying = false;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }
}

// -----------------------------------------------------------------------------
// APPLICATION STATE CONTROLLER
// -----------------------------------------------------------------------------
class YouTubeMusicApp {
  constructor() {
    this.audio = new ProceduralAudioEngine();
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.currentTime = 0;
    this.activeFilter = 'Tudo';
    this.isMuted = false;
    this.lastVolume = 0.8;
    this.isShuffle = false;
    this.repeatMode = 'all'; // 'off', 'all', 'one'
    this.likedTracks = new Set();
    this.dislikedTracks = new Set();
    this.animationFrame = null;

    this.cacheDom();
    this.renderFilterChips();
    this.renderShelves();
    this.renderQuickPicks();
    this.renderQueue();
    this.setupEventListeners();
    this.loadTrack(0, false);
  }

  cacheDom() {
    this.sidebar = document.getElementById('sidebar');
    this.menuToggleBtn = document.getElementById('menu-toggle-btn');
    this.chipCloud = document.getElementById('chip-cloud');
    this.shelvesContainer = document.getElementById('shelves-container');
    this.quickPicksContainer = document.getElementById('quick-picks-container');
    
    // Player DOM
    this.playerThumb = document.getElementById('player-thumb');
    this.playerTitle = document.getElementById('player-title');
    this.playerArtist = document.getElementById('player-artist');
    this.playPauseBtn = document.getElementById('play-pause-btn');
    this.playIcon = document.getElementById('play-icon');
    this.pauseIcon = document.getElementById('pause-icon');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.shuffleBtn = document.getElementById('shuffle-btn');
    this.repeatBtn = document.getElementById('repeat-btn');
    this.likeBtn = document.getElementById('like-btn');
    this.dislikeBtn = document.getElementById('dislike-btn');
    
    // Timeline
    this.timelineSlider = document.getElementById('timeline-slider');
    this.timelineProgress = document.getElementById('timeline-progress');
    this.timeCurrent = document.getElementById('time-current');
    this.timeTotal = document.getElementById('time-total');

    // Volume
    this.volumeSlider = document.getElementById('volume-slider');
    this.volumeBtn = document.getElementById('volume-btn');
    this.volumeIcon = document.getElementById('volume-icon');

    // Drawers & Search
    this.lyricsDrawer = document.getElementById('lyrics-drawer');
    this.lyricsBtn = document.getElementById('lyrics-btn');
    this.closeLyricsBtn = document.getElementById('close-lyrics-btn');
    this.lyricsContainer = document.getElementById('lyrics-content');
    
    this.queueDrawer = document.getElementById('queue-drawer');
    this.queueBtn = document.getElementById('queue-btn');
    this.closeQueueBtn = document.getElementById('close-queue-btn');
    this.queueList = document.getElementById('queue-list');

    this.searchInput = document.getElementById('search-input');
    this.searchClearBtn = document.getElementById('search-clear-btn');
    this.searchDropdown = document.getElementById('search-dropdown');
    this.toast = document.getElementById('toast');
  }

  setupEventListeners() {
    // Menu Sidebar toggle
    this.menuToggleBtn.addEventListener('click', () => {
      this.sidebar.classList.toggle('collapsed');
    });

    // Play/Pause button
    this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
    this.prevBtn.addEventListener('click', () => this.playPrevious());
    this.nextBtn.addEventListener('click', () => this.playNext());

    // Timeline Scrubbing
    this.timelineSlider.addEventListener('click', (e) => this.handleSeek(e));

    // Volume
    this.volumeSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      this.audio.setVolume(val);
      this.isMuted = val === 0;
      this.updateVolumeIcon(val);
    });

    this.volumeBtn.addEventListener('click', () => {
      if (this.isMuted) {
        this.volumeSlider.value = this.lastVolume || 0.8;
        this.audio.setVolume(this.lastVolume || 0.8);
        this.isMuted = false;
      } else {
        this.lastVolume = parseFloat(this.volumeSlider.value);
        this.volumeSlider.value = 0;
        this.audio.setVolume(0);
        this.isMuted = true;
      }
      this.updateVolumeIcon(parseFloat(this.volumeSlider.value));
    });

    // Feedback (Like / Dislike)
    this.likeBtn.addEventListener('click', () => this.toggleLike());
    this.dislikeBtn.addEventListener('click', () => this.toggleDislike());

    // Drawers
    this.lyricsBtn.addEventListener('click', () => {
      this.queueDrawer.classList.remove('open');
      this.lyricsDrawer.classList.toggle('open');
      this.lyricsBtn.classList.toggle('active', this.lyricsDrawer.classList.contains('open'));
      this.queueBtn.classList.remove('active');
    });

    this.closeLyricsBtn.addEventListener('click', () => {
      this.lyricsDrawer.classList.remove('open');
      this.lyricsBtn.classList.remove('active');
    });

    this.queueBtn.addEventListener('click', () => {
      this.lyricsDrawer.classList.remove('open');
      this.queueDrawer.classList.toggle('open');
      this.queueBtn.classList.toggle('active', this.queueDrawer.classList.contains('open'));
      this.lyricsBtn.classList.remove('active');
    });

    this.closeQueueBtn.addEventListener('click', () => {
      this.queueDrawer.classList.remove('open');
      this.queueBtn.classList.remove('active');
    });

    // Search bar functionality
    this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    this.searchClearBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchClearBtn.classList.remove('active');
      this.searchDropdown.classList.remove('open');
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-center')) {
        this.searchDropdown.classList.remove('open');
      }
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      if (e.code === 'Space') {
        e.preventDefault();
        this.togglePlayPause();
      } else if (e.code === 'ArrowRight') {
        this.seekRelative(5);
      } else if (e.code === 'ArrowLeft') {
        this.seekRelative(-5);
      } else if (e.code === 'KeyM') {
        this.volumeBtn.click();
      }
    });
  }

  // ---------------------------------------------------------------------------
  // FILTER CHIPS
  // ---------------------------------------------------------------------------
  renderFilterChips() {
    const chips = ['Tudo', 'Para relaxar', 'Energia', 'Treino', 'Foco', 'Viagem'];
    this.chipCloud.innerHTML = chips.map(chip => `
      <button class="filter-chip ${chip === this.activeFilter ? 'active' : ''}" data-filter="${chip}">
        ${chip}
      </button>
    `).join('');

    this.chipCloud.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.activeFilter = e.currentTarget.dataset.filter;
        this.renderFilterChips();
        this.filterContent();
      });
    });
  }

  filterContent() {
    const cards = document.querySelectorAll('.music-card, .quick-pick-item');
    cards.forEach(card => {
      const genre = card.dataset.genre;
      if (this.activeFilter === 'Tudo' || genre === this.activeFilter) {
        card.style.display = '';
        card.style.animation = 'fadeIn 0.25s ease-out';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // ---------------------------------------------------------------------------
  // SHELVES & CAROUSELS RENDERING
  // ---------------------------------------------------------------------------
  renderShelves() {
    this.shelvesContainer.innerHTML = SHELVES.map(shelf => `
      <section class="shelf" id="shelf-${shelf.id}">
        <div class="shelf-header">
          <div class="shelf-title-group">
            <span class="shelf-subtitle">${shelf.subtitle}</span>
            <h2 class="shelf-title">${shelf.title}</h2>
          </div>
          <div class="shelf-controls">
            <button class="shelf-arrow-btn" onclick="app.scrollCarousel('track-${shelf.id}', -400)" title="Anterior">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <button class="shelf-arrow-btn" onclick="app.scrollCarousel('track-${shelf.id}', 400)" title="Próximo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
          </div>
        </div>
        <div class="carousel-track" id="track-${shelf.id}">
          ${shelf.items.map(item => {
            const trackData = TRACKS.find(t => t.id === item.id) || TRACKS[0];
            return `
              <div class="music-card" data-track-id="${item.id}" data-genre="${trackData.genre}" onclick="app.playTrackById('${item.id}')">
                <div class="card-thumbnail-wrapper">
                  <img class="card-thumbnail" src="${item.cover}" alt="${item.title}" loading="lazy" />
                  <div class="play-overlay">
                    <button class="card-play-btn" aria-label="Tocar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                    <div class="playing-bars">
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
                <div class="card-info">
                  <div class="card-title">${item.title}</div>
                  <div class="card-subtitle">${item.artist}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `).join('');
  }

  // ---------------------------------------------------------------------------
  // QUICK PICKS (4-ROW LIST GRID)
  // ---------------------------------------------------------------------------
  renderQuickPicks() {
    this.quickPicksContainer.innerHTML = TRACKS.map(track => `
      <div class="quick-pick-item" data-track-id="${track.id}" data-genre="${track.genre}" onclick="app.playTrackById('${track.id}')">
        <div class="quick-pick-thumb-wrapper">
          <img class="quick-pick-thumb" src="${track.cover}" alt="${track.title}" />
          <div class="quick-pick-play-overlay">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
        <div class="quick-pick-info">
          <div class="quick-pick-title">${track.title}</div>
          <div class="quick-pick-meta">${track.artist} • ${track.album}</div>
        </div>
        <div class="quick-pick-actions">
          <button class="icon-btn" onclick="event.stopPropagation(); app.showToast('Adicionado à fila')" title="Adicionar à fila">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/></svg>
          </button>
        </div>
      </div>
    `).join('');
  }

  // ---------------------------------------------------------------------------
  // QUEUE DRAWER
  // ---------------------------------------------------------------------------
  renderQueue() {
    this.queueList.innerHTML = TRACKS.map((t, idx) => `
      <li class="queue-item ${idx === this.currentTrackIndex ? 'active' : ''}" onclick="app.loadTrack(${idx}, true)">
        <img class="queue-item-thumb" src="${t.cover}" alt="${t.title}" />
        <div class="queue-item-info">
          <div class="queue-item-title">${t.title}</div>
          <div class="queue-item-artist">${t.artist}</div>
        </div>
        <span class="time-display">${this.formatTime(t.duration)}</span>
      </li>
    `).join('');
  }

  // ---------------------------------------------------------------------------
  // PLAYBACK STATE MACHINE
  // ---------------------------------------------------------------------------
  loadTrack(index, autoplay = true) {
    this.currentTrackIndex = (index + TRACKS.length) % TRACKS.length;
    const track = TRACKS[this.currentTrackIndex];
    this.currentTime = 0;

    // Update player info
    this.playerThumb.src = track.cover;
    this.playerTitle.textContent = track.title;
    this.playerArtist.textContent = `${track.artist} • ${track.album}`;
    this.timeTotal.textContent = this.formatTime(track.duration);
    this.timeCurrent.textContent = '0:00';
    this.timelineProgress.style.width = '0%';

    // Update highlight states
    this.updatePlayingHighlights();
    this.renderLyrics();
    this.renderQueue();

    // Like states
    this.likeBtn.classList.toggle('active', this.likedTracks.has(track.id));
    this.dislikeBtn.classList.toggle('active', this.dislikedTracks.has(track.id));

    if (autoplay) {
      this.play();
    }
  }

  play() {
    const track = TRACKS[this.currentTrackIndex];
    this.audio.playTrack(track);
    this.isPlaying = true;
    this.playIcon.style.display = 'none';
    this.pauseIcon.style.display = 'block';
    this.startProgressTicker();
    this.updatePlayingHighlights();
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.playIcon.style.display = 'block';
    this.pauseIcon.style.display = 'none';
    this.stopProgressTicker();
    this.updatePlayingHighlights();
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  playNext() {
    this.loadTrack(this.currentTrackIndex + 1, true);
  }

  playPrevious() {
    if (this.currentTime > 3) {
      this.currentTime = 0;
    } else {
      this.loadTrack(this.currentTrackIndex - 1, true);
    }
  }

  playTrackById(trackId) {
    const idx = TRACKS.findIndex(t => t.id === trackId);
    if (idx !== -1) {
      this.loadTrack(idx, true);
    }
  }

  // ---------------------------------------------------------------------------
  // TIMELINE & PROGRESS
  // ---------------------------------------------------------------------------
  startProgressTicker() {
    this.stopProgressTicker();
    let lastTimestamp = performance.now();

    const tick = (now) => {
      const delta = (now - lastTimestamp) / 1000;
      lastTimestamp = now;

      if (this.isPlaying) {
        const track = TRACKS[this.currentTrackIndex];
        this.currentTime += delta;

        if (this.currentTime >= track.duration) {
          this.playNext();
          return;
        }

        const pct = (this.currentTime / track.duration) * 100;
        this.timelineProgress.style.width = `${pct}%`;
        this.timeCurrent.textContent = this.formatTime(this.currentTime);

        this.syncLyrics(this.currentTime);
      }

      this.animationFrame = requestAnimationFrame(tick);
    };

    this.animationFrame = requestAnimationFrame(tick);
  }

  stopProgressTicker() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  handleSeek(e) {
    const rect = this.timelineSlider.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const track = TRACKS[this.currentTrackIndex];

    this.currentTime = ratio * track.duration;
    this.timelineProgress.style.width = `${ratio * 100}%`;
    this.timeCurrent.textContent = this.formatTime(this.currentTime);
    this.syncLyrics(this.currentTime);
  }

  seekRelative(seconds) {
    const track = TRACKS[this.currentTrackIndex];
    this.currentTime = Math.max(0, Math.min(track.duration, this.currentTime + seconds));
    const ratio = this.currentTime / track.duration;
    this.timelineProgress.style.width = `${ratio * 100}%`;
    this.timeCurrent.textContent = this.formatTime(this.currentTime);
    this.syncLyrics(this.currentTime);
  }

  // ---------------------------------------------------------------------------
  // LYRICS SYNCHRONIZATION
  // ---------------------------------------------------------------------------
  renderLyrics() {
    const track = TRACKS[this.currentTrackIndex];
    if (!track.lyrics || track.lyrics.length === 0) {
      this.lyricsContainer.innerHTML = `<div class="lyrics-line active">Letra instrumental para esta música.</div>`;
      return;
    }

    this.lyricsContainer.innerHTML = track.lyrics.map((l, i) => `
      <div class="lyrics-line" id="lyric-${i}" onclick="app.seekToLyric(${l.time})">${l.text}</div>
    `).join('');
  }

  syncLyrics(time) {
    const track = TRACKS[this.currentTrackIndex];
    if (!track.lyrics) return;

    let activeIndex = -1;
    for (let i = 0; i < track.lyrics.length; i++) {
      if (time >= track.lyrics[i].time) {
        activeIndex = i;
      } else {
        break;
      }
    }

    const lines = this.lyricsContainer.querySelectorAll('.lyrics-line');
    lines.forEach((line, i) => {
      if (i === activeIndex) {
        if (!line.classList.contains('active')) {
          line.classList.add('active');
          line.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        line.classList.remove('active');
      }
    });
  }

  seekToLyric(time) {
    this.currentTime = time;
    this.syncLyrics(time);
  }

  // ---------------------------------------------------------------------------
  // SEARCH ENGINE
  // ---------------------------------------------------------------------------
  handleSearch(query) {
    const cleanQuery = query.trim().toLowerCase();
    this.searchClearBtn.classList.toggle('active', cleanQuery.length > 0);

    if (cleanQuery.length === 0) {
      this.searchDropdown.classList.remove('open');
      return;
    }

    const matches = TRACKS.filter(t => 
      t.title.toLowerCase().includes(cleanQuery) ||
      t.artist.toLowerCase().includes(cleanQuery) ||
      t.genre.toLowerCase().includes(cleanQuery)
    );

    if (matches.length === 0) {
      this.searchDropdown.innerHTML = `<div class="search-result-item"><span class="search-result-artist">Nenhum resultado encontrado</span></div>`;
    } else {
      this.searchDropdown.innerHTML = matches.map(t => `
        <div class="search-result-item" onclick="app.playTrackById('${t.id}'); app.searchDropdown.classList.remove('open');">
          <img class="search-result-thumb" src="${t.cover}" alt="${t.title}" />
          <div class="search-result-info">
            <span class="search-result-title">${t.title}</span>
            <span class="search-result-artist">${t.artist} • ${t.genre}</span>
          </div>
        </div>
      `).join('');
    }

    this.searchDropdown.classList.add('open');
  }

  // ---------------------------------------------------------------------------
  // UI HELPERS & NOTIFICATIONS
  // ---------------------------------------------------------------------------
  toggleLike() {
    const track = TRACKS[this.currentTrackIndex];
    if (this.likedTracks.has(track.id)) {
      this.likedTracks.delete(track.id);
      this.likeBtn.classList.remove('active');
      this.showToast('Removido das músicas com gostei');
    } else {
      this.likedTracks.add(track.id);
      this.dislikedTracks.delete(track.id);
      this.likeBtn.classList.add('active');
      this.dislikeBtn.classList.remove('active');
      this.showToast('Adicionado às Músicas com gostei');
    }
  }

  toggleDislike() {
    const track = TRACKS[this.currentTrackIndex];
    if (this.dislikedTracks.has(track.id)) {
      this.dislikedTracks.delete(track.id);
      this.dislikeBtn.classList.remove('active');
    } else {
      this.dislikedTracks.add(track.id);
      this.likedTracks.delete(track.id);
      this.dislikeBtn.classList.add('active');
      this.likeBtn.classList.remove('active');
      this.showToast('Entendido. Vamos sugerir menos músicas como esta');
    }
  }

  scrollCarousel(id, offset) {
    const el = document.getElementById(id);
    if (el) el.scrollBy({ left: offset, behavior: 'smooth' });
  }

  updatePlayingHighlights() {
    const activeTrack = TRACKS[this.currentTrackIndex];
    document.querySelectorAll('.music-card, .quick-pick-item').forEach(el => {
      const isCurrent = el.dataset.trackId === activeTrack.id;
      el.classList.toggle('is-playing', isCurrent && this.isPlaying);
    });
  }

  updateVolumeIcon(val) {
    if (val === 0) {
      this.volumeIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
    } else if (val < 0.5) {
      this.volumeIcon.innerHTML = `<path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>`;
    } else {
      this.volumeIcon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
    }
  }

  showToast(message) {
    this.toast.textContent = message;
    this.toast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toast.classList.remove('show');
    }, 2800);
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
}

// Instantiate App on DOM Ready
let app = null;
window.addEventListener('DOMContentLoaded', () => {
  app = new YouTubeMusicApp();
});
