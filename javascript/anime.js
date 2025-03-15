fetch('../resource/review.json')
  .then(response => response.json())
  .then(data => {
    const animeListContainer = document.getElementById('anime-list');
    data.forEach(anime => {
      const animeItem = document.createElement('div');
      animeItem.classList.add('anime-item');
      animeItem.innerHTML = `
        <h2>${anime.title}</h3>
        <p><strong>评分:</strong>${anime.rating}</p>
        <p><strong>评论:</strong>${anime.review}</p>
        <p><strong>播放来源：</strong><a href="${anime.link}" target="_blank">${anime.name}</a></p>
      `;
      animeListContainer.appendChild(animeItem);
    });
  })
  .catch(error => {
    console.error('加载番剧数据失败：', error);
});
