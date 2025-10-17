<div align="center">

# 🎵 Spotify Clone - Music Player

![Spotify Clone](https://img.shields.io/badge/Spotify-Clone-1db954?style=for-the-badge&logo=spotify&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-1db954?style=for-the-badge)
![Real--time](https://img.shields.io/badge/Real--time-Features-1db954?style=for-the-badge)

*A fully functional Spotify clone built with HTML, CSS, and JavaScript featuring real-time music playback, playlist management, and modern UI/UX design.*

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-1db954?style=for-the-badge&logo=netlify)](https://lively-dodol-cc397c.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github)](https://github.com/sunbyte16)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sunil-kumar-bb88bb31a/)

</div>

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎶 Music Player
- ▶️ **Play/Pause Controls** - Full music playback control
- ⏭️ **Skip Forward/Backward** - Navigate through songs
- 📊 **Progress Bar** - Visual progress indicator with seek functionality
- 🔊 **Volume Control** - Adjustable volume with mute option
- 🔀 **Shuffle Mode** - Random song playback
- 🔁 **Repeat Mode** - Loop current song or entire playlist
- 📋 **Queue Management** - View and manage current playlist

</td>
<td width="50%">

### 🎨 User Interface
- 🎨 **Modern Design** - Spotify-inspired dark theme
- 📱 **Responsive Layout** - Works on desktop, tablet, and mobile
- ✨ **Smooth Animations** - Fluid transitions and hover effects
- 📂 **Sidebar Navigation** - Collapsible sidebar with quick access
- 🔍 **Search Functionality** - Real-time search through music library
- 🖼️ **Album Art Display** - High-quality album covers

</td>
</tr>
<tr>
<td width="50%">

### 📚 Music Library
- 🎵 **Song Management** - Browse through 30+ songs
- 👤 **Artist & Album Views** - Organized music library
- ❤️ **Favorites System** - Mark songs as favorites
- ➕ **Playlist Creation** - Create custom playlists
- 📝 **Playlist Management** - Add, remove, and organize playlists

</td>
<td width="50%">

### ⌨️ Keyboard Shortcuts
- `Spacebar` - Play/Pause
- `←` - Previous song
- `→` - Next song
- `M` - Mute/Unmute
- `S` - Toggle shuffle
- `R` - Toggle repeat

</td>
</tr>
<tr>
<td colspan="2">

### 💾 Data Persistence
- 💾 **Local Storage** - Saves favorites and playlists
- 📶 **Offline Support** - Works without internet connection
- 🔄 **Session Management** - Remembers user preferences

</td>
</tr>
</table>

## 🚀 Quick Start

### 📋 Prerequisites
- 🌐 A modern web browser (Chrome, Firefox, Safari, Edge)
- 🖥️ A local web server (optional but recommended)

### 📦 Installation

<div align="center">

**1️⃣ Clone or Download the project files**
```bash
git clone https://github.com/sunbyte16/spotify-clone.git
cd spotify-clone
```

**2️⃣ File Structure**
```
📁 spotify-clone/
├── 📄 index.html
├── 🎨 styles.css
├── ⚡ script.js
├── 📁 images/
│   ├── 🖼️ 1.jpg to 30.jpg (album covers)
│   └── 🏷️ logo.png
└── 📁 songs/
    └── 🎵 1.mp3 to 30.mp3 (audio files)
```

**3️⃣ Start the Application**

<table>
<tr>
<td width="50%">

**Option A: Direct File Opening**
- Simply open `index.html` in your web browser
- ⚠️ Note: Some features may be limited due to CORS restrictions

</td>
<td width="50%">

**Option B: Local Server (Recommended)**
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

</td>
</tr>
</table>

**🌐 Then open `http://localhost:8000` in your browser**

</div>

## 📁 Project Structure

```
📁 spotify-clone/
├── 📄 index.html          # Main HTML structure
├── 🎨 styles.css          # CSS styling and animations
├── ⚡ script.js           # JavaScript functionality
├── 📖 README.md           # This documentation
├── 🔧 sw.js               # Service worker for offline support
├── 📁 images/             # Album covers and assets
│   ├── 🖼️ 1.jpg          # Album cover for song 1
│   ├── 🖼️ 2.jpg          # Album cover for song 2
│   ├── 📄 ...
│   ├── 🖼️ 30.jpg         # Album cover for song 30
│   └── 🏷️ logo.png       # Application logo
└── 📁 songs/              # Audio files
    ├── 🎵 1.mp3          # Audio file for song 1
    ├── 🎵 2.mp3          # Audio file for song 2
    ├── 📄 ...
    └── 🎵 30.mp3         # Audio file for song 30
```

## 🎵 Music Library

<div align="center">

| 🎵 Songs | 🖼️ Album Covers | 🎨 Features |
|:--------:|:---------------:|:-----------:|
| **30+** | **30+** | **Real-time Playback** |
| Various Genres | High Quality | **Responsive Design** |
| Auto-generated | Professional | **Offline Support** |

</div>

The application comes with a pre-loaded music library containing:
- 🎵 **30 Songs** - Various genres and styles
- 🖼️ **30 Album Covers** - High-quality images
- 👤 **Artist Information** - Organized metadata
- ⏱️ **Duration Tracking** - Automatic song length detection

### 🎵 Adding Your Own Music

To add your own music:

<table>
<tr>
<td width="33%">

**1️⃣ Add Audio Files**
- Place your `.mp3` files in the `songs/` folder
- Name them sequentially (31.mp3, 32.mp3, etc.)

</td>
<td width="33%">

**2️⃣ Add Album Covers**
- Place corresponding images in the `images/` folder
- Use the same naming convention (31.jpg, 32.jpg, etc.)

</td>
<td width="33%">

**3️⃣ Update the Library**
- Modify the `loadMusicLibrary()` function in `script.js`
- Update the loop range to include your new songs

</td>
</tr>
</table>

## 🎨 Customization

### Changing the Theme

Edit `styles.css` to customize colors:

```css
:root {
    --primary-color: #1db954;    /* Spotify green */
    --background-color: #121212; /* Dark background */
    --text-color: #ffffff;      /* White text */
    --secondary-color: #b3b3b3; /* Gray text */
}
```

### Adding New Features

The application is modular and easy to extend:

1. **New Player Controls** - Add buttons and event listeners
2. **Additional Views** - Create new content sections
3. **Enhanced Search** - Implement advanced filtering
4. **Social Features** - Add sharing and collaboration

## 🔧 Technical Details

### Browser Compatibility
- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+

### Performance
- **Lazy Loading** - Images load on demand
- **Efficient Rendering** - Optimized DOM updates
- **Memory Management** - Proper cleanup of event listeners
- **Responsive Design** - Smooth performance on all devices

### Audio Format Support
- **MP3** - Primary format
- **WAV** - Supported by modern browsers
- **OGG** - Alternative format
- **M4A** - Apple format

## 🐛 Troubleshooting

### Common Issues

**Audio Not Playing**
- Check browser audio permissions
- Ensure audio files are accessible
- Verify file paths are correct

**Images Not Loading**
- Check image file paths
- Ensure images exist in the `images/` folder
- Verify image formats are supported

**Local Storage Issues**
- Clear browser cache and cookies
- Check if private/incognito mode is disabled
- Verify browser supports localStorage

**CORS Errors**
- Use a local web server instead of opening files directly
- Configure server to allow cross-origin requests

### Performance Issues

**Slow Loading**
- Optimize image sizes
- Compress audio files
- Enable browser caching

**Memory Usage**
- Close unused browser tabs
- Restart browser periodically
- Check for memory leaks in developer tools

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Development Guidelines

- Follow existing code style
- Add comments for complex logic
- Test on multiple browsers
- Ensure responsive design
- Update documentation

## 🔧 Technical Details

<div align="center">

| 🌐 Browser Compatibility | ⚡ Performance | 🎵 Audio Format Support |
|:------------------------:|:-------------:|:----------------------:|
| **Chrome** 60+ | **Lazy Loading** | **MP3** - Primary format |
| **Firefox** 55+ | **Efficient Rendering** | **WAV** - Supported by modern browsers |
| **Safari** 12+ | **Memory Management** | **OGG** - Alternative format |
| **Edge** 79+ | **Responsive Design** | **M4A** - Apple format |

</div>

## 🐛 Troubleshooting

### Common Issues

<table>
<tr>
<td width="50%">

**🔊 Audio Not Playing**
- Check browser audio permissions
- Ensure audio files are accessible
- Verify file paths are correct

**🖼️ Images Not Loading**
- Check image file paths
- Ensure images exist in the `images/` folder
- Verify image formats are supported

</td>
<td width="50%">

**💾 Local Storage Issues**
- Clear browser cache and cookies
- Check if private/incognito mode is disabled
- Verify browser supports localStorage

**🌐 CORS Errors**
- Use a local web server instead of opening files directly
- Configure server to allow cross-origin requests

</td>
</tr>
</table>

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

<div align="center">

| 🎨 Design | 🔧 Tools | 📚 Resources |
|:---------:|:--------:|:-----------:|
| **Spotify** - Design inspiration | **Font Awesome** - Icons | **Google Fonts** - Typography |
| **Modern UI/UX** - Best practices | **VS Code** - Development | **MDN** - Documentation |
| **Responsive Design** - Mobile-first | **Git** - Version control | **Stack Overflow** - Community |

</div>

## 📞 Support

If you encounter any issues or have questions:

1. 🔍 **Check** the troubleshooting section
2. 🔎 **Search** existing issues
3. ➕ **Create** a new issue with details
4. 📧 **Contact** the maintainers

---

<div align="center">

## 👨‍💻 Created By 𝙎𝙪𝙣𝙞𝙡 𝙎𝙝𝙖𝙧𝙢𝙖 ❤️

[![GitHub](https://img.shields.io/badge/GitHub-sunbyte16-181717?style=for-the-badge&logo=github)](https://github.com/sunbyte16)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sunil_Kumar-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sunil-kumar-bb88bb31a/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live_Demo-1db954?style=for-the-badge&logo=netlify)](https://lively-dodol-cc397c.netlify.app)

**🎵 Enjoy your music! 🎵**

*Made with ❤️ for music lovers everywhere.*

</div>
