let clickCount = 0;
let intervalId;

document.addEventListener("click", function (e) {
  clickCount++;
  createMessage(e.pageX, e.pageY);

  if (clickCount === 15) {
    startAutoMessages();
  }
});
// 轻小说 破坏掉的世界
function createMessage(x, y) {
  fetch("../resource/zh-hans/Messages.json")
    .then((response) => response.json())
    .then((data) => {
    const messages = data.messages;
    const colors = data.colors;

    const message = document.createElement("div");
    message.className = "message";
    message.textContent =
    messages[Math.floor(Math.random() * messages.length)];
    message.style.position = "absolute";
    message.style.color = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(message);

    // 延迟执行布局计算
    requestAnimationFrame(() => {
      // 获取元素的宽度和高度
      const messageWidth = message.offsetWidth;
      const messageHeight = message.offsetHeight;

      // 确保消息在视窗内显示
      if (x + messageWidth > window.innerWidth) {
        x = window.innerWidth - messageWidth;
      }
      if (y + messageHeight > window.innerHeight) {
        y = window.innerHeight - messageHeight;
      }

      message.style.left = `${x}px`;
      message.style.top = `${y}px`;
    });

    setTimeout(() => {
      message.remove();
    }, 2000);
  })
    .catch((error) => console.error("Error fetching the messages:", error));
}

function startAutoMessages() {
  intervalId = setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createMessage(x, y);
  }, 300);
}

function remindURL(url, language = "zh-CN") {
  let confirmMessage;
  if (language === "zh-CN" || language === null) {
    confirmMessage =
      "你确定要跳转到以下链接吗? (失效可反馈 侵权删)\n(对于任何通过本网站链接到的第三方网站，我们不对其内容负责。使用本网站即表示您同意以上免责声明)\n" +
      url;
  } else if (language === "en-US") {
    confirmMessage =
      "Are you sure you want to jump to the following link? (Invalid can be fed back and deleted for infringement)\n(We are not responsible for the content of any third-party websites linked through this website. By using this website, you agree to the above disclaimer)\n" +
      url;
  }
  if (confirm(confirmMessage)) {
    window.open(url, "_blank");
  }
}

function remindText(text) {
  const confirmMessage = text;
  confirm(confirmMessage);
}
