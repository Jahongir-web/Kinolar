
// Xoxlagan joyda ishlatish uchun tayyor funksiyalar.


// hujjatdan biror elementni tanlab olish funksiyasi.

var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};


// hujjatdan bir turdagi barcha elementlarni tanlab olish funksiyasi.

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

// Element xosil qiluvchi funksiya.

var createElement = function(tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute(`class`, className);

  if (text) {
    element.textContent = text;
  }

  return element;

};

// videoning id si yordamida youtubedagi linkini oluvchi funksiya.

var getYoutubeVideoLink = function (videoId) {
  return `https://youtube.com/watch?v=${videoId}`;
};


// videoning id si yordamida youtubedagi katta rasmini oluvchi funksiya.

var getYoutubeVideoBigThumbnail = function (videoId) {
  return `http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
};


// videoning id si yordamida youtubedagi kichik rasmini oluvchi funksiya.

var getYoutubeVideoThumbnail = function (videoId) {
  return `http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`;
};