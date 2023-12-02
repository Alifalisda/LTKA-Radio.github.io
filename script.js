document.addEventListener('DOMContentLoaded', function () {
    // Get all audio elements in the document
    var audioElements = document.querySelectorAll('audio');

    // Iterate through each audio element and assign a unique ID
    audioElements.forEach(function (audio, index) {
      // Create a unique ID based on the element's index
      var uniqueId = 'voice' + (index + 1);

      // Set the unique ID to the audio element
      audio.id = uniqueId;

      // Log the assigned ID (you can remove this line in production)
      console.log('Assigned ID ' + uniqueId + ' to audio element.');
    });
  });

  // Tambahkan event listener untuk setiap gambar dan suara
var gambarArray = [];
var suaraArray = [];
var isSuaraPlaying = [];

// Isi array dengan elemen gambar dan suara
for (var i = 1; i <= 100; i++) {
gambarArray.push(document.getElementById('image' + i));
suaraArray.push(document.getElementById('voice' + i));
isSuaraPlaying.push(false);
}

// Tambahkan event listener untuk setiap gambar
gambarArray.forEach(function(gambar, index) {
gambar.addEventListener('click', function() {
    for (var j = 0; j < isSuaraPlaying.length; j++) {
    if (j !== index && isSuaraPlaying[j]) {
    suaraArray[j].pause();
    suaraArray[j].currentTime = 0;
    isSuaraPlaying[j] = false;
    }
}

if (isSuaraPlaying[index]) {
    // Jika suara sedang diputar, berhenti memutarnya
    suaraArray[index].pause();
    suaraArray[index].currentTime = 0; // Setel waktu kembali ke awal
    isSuaraPlaying[index] = false;
} else {
    // Jika suara tidak sedang diputar, mulai memutarnya
    suaraArray[index].play();
    isSuaraPlaying[index] = true;
}
});
});
var semuacards = document.querySelectorAll('.cards');
    semuacards.forEach(function (info) {
        info.classList.add('hidden');
    });

// Fungsi untuk menampilkan elemen berdasarkan provinsi yang diklik

function showElement(provinsi) {
// Semua elemen terkait disembunyikan terlebih dahulu
    var semuaInfo = document.querySelectorAll('.cards');
    semuaInfo.forEach(function (info) {
        info.classList.add('hidden');
    });
    // Hanya elemen terkait dengan provinsi yang diklik yang ditampilkan
    for (var i=1; i<= 100; i++) {
        var elemenInfo = document.querySelectorAll('#' + provinsi + i);
        elemenInfo.forEach(function (info) {
        info.classList.remove('hidden');
    });
    }
    
      // Tambahkan kelas 'highlight' pada elemen yang baru diklik
    
    
    var liTerpilih = document.querySelector('.bisa li[onclick="showElement(\'' + provinsi + '\')"]');
    if (liTerpilih.classList.contains('highlight')) {
        liTerpilih.classList.remove('highlight'); // Jika sudah ada, hapus
    } else {
        liTerpilih.classList.add('highlight'); // Jika belum ada, tambahkan
    }
    
}
// var lastClickedElement = null;
// var lastClickedProvince = null;
// function bisayuk(prov) {
//     var myList = document.querySelector('myList');

// // Mengambil semua elemen li dalam ul
//     var listItems = myList.getElementsByTagName('li');
//     // liTerpilih.classList.add('highlight');
//     // if (lastClickedProvince !== prov) {
//     //     // Hapus kelas 'highlight' dari elemen terakhir yang diklik
//     //     lastClickedElement.classList.remove('highlight');
//     //   }
    
//     // lastClickedElement = liTerpilih;
//     // // Simpan referensi elemen terakhir dan provinsi terakhir
//     // lastClickedProvince = provinsi;
//     if (liTerpilih.classList.contains('highlight')) {
//         liTerpilih.classList.remove('highlight'); // Jika sudah ada, hapus
//     } else {
//         liTerpilih.classList.add('highlight'); // Jika belum ada, tambahkan
//     }
// }


function showAll() {
// Hapus kelas 'hidden' dari semua elemen terkait
    for (var i=1; i<= 50; i++) {
        var semuaInfo = document.querySelectorAll(".cards");
        semuaInfo.forEach(function (info) {
        info.classList.remove('hidden');
        });
        
    }
    var all = document.querySelector('.bisa li[onclick="showAll()"]');
    all.classList.add('highlight');
    if (all.classList.contains('highlight')) {
        all.classList.remove('highlight'); // Jika sudah ada, hapus
    } else {
        all.classList.add('highlight'); // Jika belum ada, tambahkan
    }

}
// document.querySelectorAll('.cards').forEach(function(card) {
//     card.addEventListener('click', function() {
//         // Get data from the clicked card
//         var cardTitle = card.querySelector('.layer h2').innerText;
//         var cardImageSrc = card.querySelector('.image').src;
//         var cardAudioSrc = card.querySelector('.source').src;

//         // Create a div for the big card
//         const div = document.createElement("div");
//         div.className = "cardsBig";
//         div.innerHTML = `
//             <div class="layerBig">
//                 <h2>halo</h2>
//             </div>
//             <img id="bigImage" src="${cardImageSrc}" alt="Big Card Image">
//             <audio id="bigVoice" controls>
//                 <source id="bigSource" src="${cardAudioSrc}" type="audio/mp3">
//             </audio>
//         `;

//         // Remove the previous big card if exists
//         const bigCardContainer = document.getElementById('bigCardContainer');
    

//         // Append the new big card to the container
//         bigCardContainer.appendChild(div);

//         // Optionally, you can play the audio automatically
//         document.getElementById('bigVoice').load();
//         document.getElementById('bigVoice').play();
//     });
// });

      