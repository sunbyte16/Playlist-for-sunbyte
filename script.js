// Music Player Application
class SpotifyClone {
    constructor() {
        this.currentSongIndex = 0;
        this.isPlaying = false;
        this.isShuffled = false;
        this.isRepeating = false;
        this.volume = 0.7;
        this.playlist = [];
        this.currentPlaylist = [];
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        this.userPlaylists = JSON.parse(localStorage.getItem('userPlaylists')) || [];
        
        this.audio = document.getElementById('audioPlayer');
        this.initializeElements();
        this.loadMusicLibrary();
        this.setupEventListeners();
        this.updateUI();
    }

    initializeElements() {
        // Player elements
        this.playPauseBtn = document.getElementById('playPauseBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.progressBar = document.getElementById('progress');
        this.progressHandle = document.getElementById('progressHandle');
        this.currentTimeEl = document.getElementById('currentTime');
        this.totalTimeEl = document.getElementById('totalTime');
        this.volumeBtn = document.getElementById('volumeBtn');
        this.volumeProgress = document.getElementById('volumeProgress');
        this.volumeHandle = document.getElementById('volumeHandle');
        this.shuffleBtn = document.getElementById('shuffleBtn');
        this.repeatBtn = document.getElementById('repeatBtn');
        this.queueBtn = document.getElementById('queueBtn');

        // UI elements
        this.songTitle = document.getElementById('songTitle');
        this.artistName = document.getElementById('artistName');
        this.albumCover = document.getElementById('albumCover');
        this.musicGrid = document.getElementById('musicGrid');
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');
        this.playlistList = document.getElementById('playlistList');
        this.playlistsGrid = document.getElementById('playlistsGrid');
        this.libraryContent = document.getElementById('libraryContent');

        // Navigation elements
        this.navItems = document.querySelectorAll('.nav-item');
        this.contentSections = document.querySelectorAll('.content-section');
        this.navToggle = document.getElementById('navToggle');
        this.sidebar = document.querySelector('.sidebar');

        // Modal elements
        this.queueModal = document.getElementById('queueModal');
        this.queueList = document.getElementById('queueList');
        this.createPlaylistModal = document.getElementById('createPlaylistModal');
        this.createPlaylistBtn = document.getElementById('createPlaylistBtn');
        this.playlistNameInput = document.getElementById('playlistNameInput');
        this.playlistDescInput = document.getElementById('playlistDescInput');
        this.confirmCreatePlaylistBtn = document.getElementById('confirmCreatePlaylistBtn');
    }

    loadMusicLibrary() {
        // Generate music library from available files
        this.playlist = [];
        for (let i = 1; i <= 30; i++) {
            this.playlist.push({
                id: i,
                title: `Song ${i}`,
                artist: `Artist ${i}`,
                album: `Album ${i}`,
                duration: this.getRandomDuration(),
                cover: `images/${i}.jpg`,
                audio: `songs/${i}.mp3`,
                isFavorite: this.favorites.includes(i)
            });
        }
        this.currentPlaylist = [...this.playlist];
        this.renderMusicGrid();
        this.renderPlaylists();
    }

    getRandomDuration() {
        const minutes = Math.floor(Math.random() * 4) + 2;
        const seconds = Math.floor(Math.random() * 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    setupEventListeners() {
        // Audio events
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.nextSong());
        this.audio.addEventListener('canplay', () => this.updateUI());

        // Player controls
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.prevBtn.addEventListener('click', () => this.previousSong());
        this.nextBtn.addEventListener('click', () => this.nextSong());
        this.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
        this.repeatBtn.addEventListener('click', () => this.toggleRepeat());

        // Progress bar
        const progressContainer = document.querySelector('.progress-bar');
        progressContainer.addEventListener('click', (e) => this.seekTo(e));

        // Volume controls
        this.volumeBtn.addEventListener('click', () => this.toggleMute());
        const volumeBar = document.querySelector('.volume-bar');
        volumeBar.addEventListener('click', (e) => this.setVolume(e));

        // Navigation
        this.navItems.forEach(item => {
            item.addEventListener('click', () => this.switchSection(item.dataset.section));
        });

        // Search
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

        // Quick access
        document.querySelectorAll('.quick-access-item').forEach(item => {
            item.addEventListener('click', () => this.handleQuickAccess(item.dataset.action));
        });

        // Library tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchLibraryTab(btn.dataset.tab));
        });

        // Modal controls
        this.queueBtn.addEventListener('click', () => this.showQueue());
        this.createPlaylistBtn.addEventListener('click', () => this.showCreatePlaylistModal());
        this.confirmCreatePlaylistBtn.addEventListener('click', () => this.createPlaylist());

        // Close modals
        document.getElementById('closeQueueBtn').addEventListener('click', () => this.hideQueue());
        document.getElementById('closeCreatePlaylistBtn').addEventListener('click', () => this.hideCreatePlaylistModal());

        // Sidebar toggle
        this.navToggle.addEventListener('click', () => this.toggleSidebar());

        // Click outside modals to close
        this.queueModal.addEventListener('click', (e) => {
            if (e.target === this.queueModal) this.hideQueue();
        });
        this.createPlaylistModal.addEventListener('click', (e) => {
            if (e.target === this.createPlaylistModal) this.hideCreatePlaylistModal();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    renderMusicGrid() {
        this.musicGrid.innerHTML = '';
        this.currentPlaylist.forEach((song, index) => {
            const musicItem = document.createElement('div');
            musicItem.className = 'music-item';
            musicItem.innerHTML = `
                <img src="${song.cover}" alt="${song.title}" onerror="this.src='images/logo.png'">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
                <div class="music-item-controls">
                    <button class="play-btn" data-index="${index}">
                        <i class="fas fa-play"></i>
                    </button>
                    <button class="favorite-btn ${song.isFavorite ? 'favorited' : ''}" data-id="${song.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            `;
            
            musicItem.addEventListener('click', () => this.playSong(index));
            musicItem.querySelector('.play-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                this.playSong(index);
            });
            musicItem.querySelector('.favorite-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleFavorite(song.id);
            });
            
            this.musicGrid.appendChild(musicItem);
        });
    }

    renderPlaylists() {
        this.playlistList.innerHTML = '';
        this.userPlaylists.forEach(playlist => {
            const playlistItem = document.createElement('div');
            playlistItem.className = 'playlist-item';
            playlistItem.innerHTML = `
                <span>${playlist.name}</span>
                <button class="delete-playlist-btn" data-id="${playlist.id}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            playlistItem.addEventListener('click', () => this.loadPlaylist(playlist));
            playlistItem.querySelector('.delete-playlist-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                this.deletePlaylist(playlist.id);
            });
            
            this.playlistList.appendChild(playlistItem);
        });
    }

    playSong(index) {
        this.currentSongIndex = index;
        const song = this.currentPlaylist[index];
        
        this.audio.src = song.audio;
        this.audio.load();
        
        this.songTitle.textContent = song.title;
        this.artistName.textContent = song.artist;
        this.albumCover.src = song.cover;
        
        this.audio.play().then(() => {
            this.isPlaying = true;
            this.updatePlayPauseButton();
        }).catch(error => {
            console.error('Error playing song:', error);
        });
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.audio.pause();
            this.isPlaying = false;
        } else {
            this.audio.play().then(() => {
                this.isPlaying = true;
            }).catch(error => {
                console.error('Error playing song:', error);
            });
        }
        this.updatePlayPauseButton();
    }

    previousSong() {
        if (this.currentSongIndex > 0) {
            this.currentSongIndex--;
        } else {
            this.currentSongIndex = this.currentPlaylist.length - 1;
        }
        this.playSong(this.currentSongIndex);
    }

    nextSong() {
        if (this.isRepeating) {
            this.playSong(this.currentSongIndex);
            return;
        }
        
        if (this.isShuffled) {
            this.currentSongIndex = Math.floor(Math.random() * this.currentPlaylist.length);
        } else {
            if (this.currentSongIndex < this.currentPlaylist.length - 1) {
                this.currentSongIndex++;
            } else {
                this.currentSongIndex = 0;
            }
        }
        this.playSong(this.currentSongIndex);
    }

    toggleShuffle() {
        this.isShuffled = !this.isShuffled;
        this.shuffleBtn.style.color = this.isShuffled ? '#1db954' : '#b3b3b3';
    }

    toggleRepeat() {
        this.isRepeating = !this.isRepeating;
        this.repeatBtn.style.color = this.isRepeating ? '#1db954' : '#b3b3b3';
    }

    seekTo(e) {
        const progressBar = e.currentTarget;
        const clickX = e.offsetX;
        const width = progressBar.offsetWidth;
        const duration = this.audio.duration;
        const newTime = (clickX / width) * duration;
        this.audio.currentTime = newTime;
    }

    setVolume(e) {
        const volumeBar = e.currentTarget;
        const clickX = e.offsetX;
        const width = volumeBar.offsetWidth;
        this.volume = clickX / width;
        this.audio.volume = this.volume;
        this.volumeProgress.style.width = `${this.volume * 100}%`;
        this.updateVolumeButton();
    }

    toggleMute() {
        if (this.audio.volume > 0) {
            this.audio.volume = 0;
            this.volumeProgress.style.width = '0%';
        } else {
            this.audio.volume = this.volume;
            this.volumeProgress.style.width = `${this.volume * 100}%`;
        }
        this.updateVolumeButton();
    }

    updateProgress() {
        if (this.audio.duration) {
            const progress = (this.audio.currentTime / this.audio.duration) * 100;
            this.progressBar.style.width = `${progress}%`;
            this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
        }
    }

    updateDuration() {
        this.totalTimeEl.textContent = this.formatTime(this.audio.duration);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    updatePlayPauseButton() {
        const icon = this.playPauseBtn.querySelector('i');
        icon.className = this.isPlaying ? 'fas fa-pause' : 'fas fa-play';
    }

    updateVolumeButton() {
        const icon = this.volumeBtn.querySelector('i');
        if (this.audio.volume === 0) {
            icon.className = 'fas fa-volume-mute';
        } else if (this.audio.volume < 0.5) {
            icon.className = 'fas fa-volume-down';
        } else {
            icon.className = 'fas fa-volume-up';
        }
    }

    updateUI() {
        this.updatePlayPauseButton();
        this.updateVolumeButton();
        this.shuffleBtn.style.color = this.isShuffled ? '#1db954' : '#b3b3b3';
        this.repeatBtn.style.color = this.isRepeating ? '#1db954' : '#b3b3b3';
    }

    switchSection(section) {
        // Update navigation
        this.navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === section) {
                item.classList.add('active');
            }
        });

        // Show/hide sections
        this.contentSections.forEach(content => {
            content.classList.add('hidden');
            if (content.id === `${section}Section`) {
                content.classList.remove('hidden');
            }
        });

        // Load section content
        switch(section) {
            case 'library':
                this.loadLibraryContent();
                break;
            case 'playlists':
                this.loadPlaylistsContent();
                break;
        }
    }

    handleSearch(query) {
        if (query.trim() === '') {
            this.currentPlaylist = [...this.playlist];
            this.renderMusicGrid();
            return;
        }

        const filteredSongs = this.playlist.filter(song => 
            song.title.toLowerCase().includes(query.toLowerCase()) ||
            song.artist.toLowerCase().includes(query.toLowerCase()) ||
            song.album.toLowerCase().includes(query.toLowerCase())
        );

        this.currentPlaylist = filteredSongs;
        this.renderMusicGrid();
    }

    handleQuickAccess(action) {
        switch(action) {
            case 'play-all':
                this.currentPlaylist = [...this.playlist];
                this.playSong(0);
                break;
            case 'shuffle':
                this.toggleShuffle();
                this.currentPlaylist = [...this.playlist];
                this.currentSongIndex = Math.floor(Math.random() * this.currentPlaylist.length);
                this.playSong(this.currentSongIndex);
                break;
            case 'favorites':
                this.currentPlaylist = this.playlist.filter(song => song.isFavorite);
                this.renderMusicGrid();
                break;
        }
    }

    switchLibraryTab(tab) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tab === tab) {
                btn.classList.add('active');
            }
        });

        this.loadLibraryContent(tab);
    }

    loadLibraryContent(tab = 'songs') {
        this.libraryContent.innerHTML = '';
        
        switch(tab) {
            case 'songs':
                this.renderMusicGrid();
                break;
            case 'artists':
                this.renderArtists();
                break;
            case 'albums':
                this.renderAlbums();
                break;
        }
    }

    renderArtists() {
        const artists = [...new Set(this.playlist.map(song => song.artist))];
        const artistsGrid = document.createElement('div');
        artistsGrid.className = 'music-grid';
        
        artists.forEach(artist => {
            const artistItem = document.createElement('div');
            artistItem.className = 'music-item';
            artistItem.innerHTML = `
                <div class="artist-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <h3>${artist}</h3>
                <p>Artist</p>
            `;
            artistsGrid.appendChild(artistItem);
        });
        
        this.libraryContent.appendChild(artistsGrid);
    }

    renderAlbums() {
        const albums = [...new Set(this.playlist.map(song => song.album))];
        const albumsGrid = document.createElement('div');
        albumsGrid.className = 'music-grid';
        
        albums.forEach(album => {
            const albumItem = document.createElement('div');
            albumItem.className = 'music-item';
            albumItem.innerHTML = `
                <div class="album-cover">
                    <i class="fas fa-compact-disc"></i>
                </div>
                <h3>${album}</h3>
                <p>Album</p>
            `;
            albumsGrid.appendChild(albumItem);
        });
        
        this.libraryContent.appendChild(albumsGrid);
    }

    loadPlaylistsContent() {
        this.playlistsGrid.innerHTML = '';
        
        this.userPlaylists.forEach(playlist => {
            const playlistItem = document.createElement('div');
            playlistItem.className = 'music-item';
            playlistItem.innerHTML = `
                <div class="playlist-cover">
                    <i class="fas fa-list"></i>
                </div>
                <h3>${playlist.name}</h3>
                <p>${playlist.songs.length} songs</p>
            `;
            
            playlistItem.addEventListener('click', () => this.loadPlaylist(playlist));
            this.playlistsGrid.appendChild(playlistItem);
        });
    }

    toggleFavorite(songId) {
        const song = this.playlist.find(s => s.id === songId);
        if (song) {
            song.isFavorite = !song.isFavorite;
            if (song.isFavorite) {
                this.favorites.push(songId);
            } else {
                this.favorites = this.favorites.filter(id => id !== songId);
            }
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
            this.renderMusicGrid();
        }
    }

    showQueue() {
        this.queueList.innerHTML = '';
        this.currentPlaylist.forEach((song, index) => {
            const queueItem = document.createElement('div');
            queueItem.className = 'queue-item';
            if (index === this.currentSongIndex) {
                queueItem.style.background = 'rgba(29, 185, 84, 0.2)';
            }
            
            queueItem.innerHTML = `
                <img src="${song.cover}" alt="${song.title}" onerror="this.src='images/logo.png'">
                <div class="queue-item-info">
                    <h4>${song.title}</h4>
                    <p>${song.artist}</p>
                </div>
            `;
            
            queueItem.addEventListener('click', () => {
                this.playSong(index);
                this.hideQueue();
            });
            
            this.queueList.appendChild(queueItem);
        });
        
        this.queueModal.classList.add('show');
    }

    hideQueue() {
        this.queueModal.classList.remove('show');
    }

    showCreatePlaylistModal() {
        this.createPlaylistModal.classList.add('show');
        this.playlistNameInput.focus();
    }

    hideCreatePlaylistModal() {
        this.createPlaylistModal.classList.remove('show');
        this.playlistNameInput.value = '';
        this.playlistDescInput.value = '';
    }

    createPlaylist() {
        const name = this.playlistNameInput.value.trim();
        const description = this.playlistDescInput.value.trim();
        
        if (name) {
            const newPlaylist = {
                id: Date.now(),
                name: name,
                description: description,
                songs: [],
                createdAt: new Date().toISOString()
            };
            
            this.userPlaylists.push(newPlaylist);
            localStorage.setItem('userPlaylists', JSON.stringify(this.userPlaylists));
            this.renderPlaylists();
            this.hideCreatePlaylistModal();
        }
    }

    loadPlaylist(playlist) {
        this.currentPlaylist = playlist.songs.length > 0 ? playlist.songs : [...this.playlist];
        this.renderMusicGrid();
        this.switchSection('home');
    }

    deletePlaylist(playlistId) {
        if (confirm('Are you sure you want to delete this playlist?')) {
            this.userPlaylists = this.userPlaylists.filter(p => p.id !== playlistId);
            localStorage.setItem('userPlaylists', JSON.stringify(this.userPlaylists));
            this.renderPlaylists();
        }
    }

    toggleSidebar() {
        this.sidebar.classList.toggle('collapsed');
    }

    handleKeyboard(e) {
        switch(e.code) {
            case 'Space':
                e.preventDefault();
                this.togglePlayPause();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                this.previousSong();
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.nextSong();
                break;
            case 'KeyM':
                e.preventDefault();
                this.toggleMute();
                break;
            case 'KeyS':
                e.preventDefault();
                this.toggleShuffle();
                break;
            case 'KeyR':
                e.preventDefault();
                this.toggleRepeat();
                break;
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SpotifyClone();
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
