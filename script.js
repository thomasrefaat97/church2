let btn = document.getElementById('btn')

onscroll = function () {
  if (scrollY >= 400) {
    btn.style.display = 'flex'
    btn.style.scrollBehavior = 'smooth'
  }

  else {
    btn.style.display = 'none'
  }
}







const verses = [
  "الرب نوري وخلاصي ممن أخاف (مزمور 27:1)",
  "سلامي أترك لكم، سلامي أعطيكم (يوحنا 14:27)",
  "ذوقوا وانظروا ما أطيب الرب (مزمور 34:8)",
  "الرب راعيَّ فلا يعوزني شيء (مزمور 23:1)",
  "الرب قريب لكل الذين يدعونه (مزمور 145:18)",
  "اسكبوا قلوبكم قدامه، الله ملجأ لنا (مزمور 62:8)",
  "تعالوا إليّ يا جميع المتعبين وأنا أريحكم (متى 11:28)",
  "الرب صخرتي وحصني ومنقذي (مزمور 18:2)",
  "فرح الرب هو قوتكم (نحميا 8:10)",
  "طوبى لأنقياء القلب لأنهم يعاينون الله (متى 5:8)"
];

// اختيار آية عشوائية
const randomVerse = verses[Math.floor(Math.random() * verses.length)];
document.getElementById("verse").textContent = randomVerse;













function copyLink(btn) {
  const link = "https://thomasrefaat97.github.io/church2/";

  navigator.clipboard.writeText(link).then(() => {
    const icon = btn.querySelector("i");

    // غير للأيقونة صح
    icon.className = "fa-solid fa-check";

    // بعد 2 ثانية ترجع للنسخ
    setTimeout(() => {
      icon.className = "fa-regular fa-copy";
    }, 2000);
  });
}






window.addEventListener("scroll", function () {
  document.querySelectorAll(".fade-in").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
          el.classList.add("show");
      }
  });
});





// تحميل الآيات المخزنة عند فتح الصفحة
window.onload = function() {
  let savedVerses = JSON.parse(localStorage.getItem("verses")) || [];
  let box = document.getElementById("versesBox");

  if (savedVerses.length > 0) {
    box.innerHTML = ""; // امسح الجملة التعريفية
    savedVerses.forEach(text => {
      let verseElement = document.createElement("div");
      verseElement.className = "verse";
      verseElement.textContent = text;
      box.appendChild(verseElement);
    });
  }
};

function addVerse() {
  let input = document.getElementById("verseInput");
  let text = input.value.trim();
  if (text !== "") {
    let box = document.getElementById("versesBox");
    
    // لو أول مرة بيكتب نمسح الجملة التعريفية
    if (box.querySelector("p")) {
      box.innerHTML = "";
    }
    
    let verseElement = document.createElement("div");
    verseElement.className = "verse";
    verseElement.textContent = text;
    
    box.appendChild(verseElement);
    
    // خزّن الآيات في localStorage
    let savedVerses = JSON.parse(localStorage.getItem("verses")) || [];
    savedVerses.push(text);
    localStorage.setItem("verses", JSON.stringify(savedVerses));
    
    input.value = "";
  }
}


