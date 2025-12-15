// Sözler: Değişmez (const) bir dizi kullanmak daha iyi.
const quotes = [
    "Başarının sırrı, nerede olduğunla değil, nereye baktığınla ilgilidir.",
    "Hata yapmaktan korkmayın. Başarı, hatalardan sonra gelenlerdir.",
    "Büyük işler başarmak istiyorsan, küçük adımlarla başla.",
    "Yapabileceğinize inanın ve yarı yoldasınız demektir.",
    "Gelecek, hayallerinin güzelliğine inananlara aittir.",
    "Bugünün ertelemesi, yarının pişmanlığıdır."
];

// DOM Elementleri (Tek bir yerde tanımla)
const quoteDisplay = document.getElementById('quote-display'); 
const themeToggleBtn = document.getElementById('theme-toggle'); //tema değiştirme düğmesini bulur vedeğişkene kaydeder
const THEME_KEY = 'userTheme'; //kullanıcının tema tercihini kaydederken kullanılan anahtar adı

// Rastgele Söz Getirme (Kısa Ok Fonksiyonu)
const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
};

// Tema Yönetimi Fonksiyonu
const toggleTheme = () => {
    // classList.toggle() hem ekler hem de kaldırır, kodu kısaltır.
    const isDark = document.body.classList.toggle('dark-theme');
    
    // LocalStorage'a kaydetme ve buton metnini güncelleme
    const themeStatus = isDark ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, themeStatus); //kullanıcının son seçtiği temayı kaydederek hatırlanmasını sağlar.

    themeToggleBtn.textContent = isDark // mevcut temaya göre düğme üzerindeki emojiyi değiştirir.
        ? '☀️ Temayı Aydınlat ☀️' 
        : '🌙 Temayı Karart 🌙';
};

// Sayfa Yüklenirken Temayı Uygulama Fonksiyonu
const loadTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    
    // Eğer kaydedilmiş tema 'dark' ise, temayı otomatik olarak dark yap.
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    // Butonu da mevcut temaya göre ayarla (toggleTheme fonksiyonu bunu hallediyor gibi davranabiliriz)
    // Ya da doğrudan if ile ayarlarız:
    themeToggleBtn.textContent = savedTheme === 'dark' 
        ? '☀️ Temayı Aydınlat ☀️' 
        : '🌙 Temayı Karart 🌙';
};

// Olay Dinleyicileri (En sonda toplu halde)
document.getElementById('new-quote-btn').addEventListener('click', getRandomQuote);//yeni söz getir tuşuna basıldığında getrandomquote fonk çalıştırır.
themeToggleBtn.addEventListener('click', toggleTheme);//tema değiştir tuşuna basıldığında toggletheme fonk çalıştırır.

// Uygulama Başlatma
loadTheme(); //tema tercihini yükler
getRandomQuote(); //rastgele söz getirir.