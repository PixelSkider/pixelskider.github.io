fetch('../resource/repository.json')
  .then(response => response.json())
  .then(data => {
    const repositoryListContainer = document.getElementById('repository-list');
    data.forEach(repository => {
      const repositoryItem = document.createElement('div');
      repositoryItem.classList.add('repository-item');
      repositoryItem.innerHTML = `
        <h2><strong>名称: </strong>${repository.title}</h3>
        <p><strong>语言: </strong>${repository.language}</p>
        <p><strong>说明: </strong>${repository.description}</p>
        <p><strong>链接: </strong><a href="${repository.link}" target="_blank">${repository.link}</a></p>
      `;
      repositoryListContainer.appendChild(repositoryItem);
    });
  })
  .catch(error => {
    console.error('加载项目数据失败：', error);
  });
