document.getElementById('generate-button').addEventListener('click', function() {
  // Сгенерировать случайное фото
  const imageUrl = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}`;
  const imageElement = document.getElementById('generated-image');
  imageElement.style.display = 'block';
  imageElement.src = imageUrl;

  // Сгенерировать случайное видео (просто пример, можешь заменить на реальное видео API)
  const videoElement = document.getElementById('generated-video');
  videoElement.style.display = 'block';
  videoElement.src = 'https://www.w3schools.com/html/mov_bbb.mp4'; // Пример видео
});
