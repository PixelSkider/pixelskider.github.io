document.addEventListener("click", function (e) {
  createMessage(e.pageX, e.pageY);
});

function createMessage(x, y) {
  const messages = [
    // KALUDDDDDDDDDDDD
    "晨雾中消溶的森林",
    "牛乳的污渍",
    "绚丽的落英",
    "风之结晶",
    "墙挂的鲱鱼",
    "倒立的刺猬",
    "袋中的脏器",
    "上锁的红色魔法书",
    "甜蜜至骨的死期",
    "徘徊在暮色中的无头小丑",
    "厚重的绘本",
    "温暖的旋律",
    "黑白交错的锯齿线",
    "摇拽的小船",
    "受创的茧",
    "红色的水",
    "灰色之风",
    "七只眼的青蛙",
    "无尽的橙色道路",
    "银色闪耀的布料",
    "吞下蟒蛇的狮子",
    "圆形的彩虹",
    "堆积成山的金币",
    "小碗里的糖果",
    "燃烧旺盛的路标",
    "在星河里游泳的鱼",
    "红发少女",
    "燃烧着掉落着的无数的书",
    "火焰中游动的蛇",
    "缺陷崩溃的银色的月亮",
    "自相残杀的姐妹公主",
    "死者说出谎言",
    "搏动的大铃",
    "从天倾注的牛奶柱",
    "空中舞动的绸带",
  ];
  const colors = ["#FF0000", "#FF3030", "#FF4040", "#FF0000", "#8B0000"];

  const message = document.createElement("div");
  message.className = "message";
  message.textContent = messages[Math.floor(Math.random() * messages.length)];
  message.style.left = `${x}px`;
  message.style.top = `${y}px`;
  message.style.color = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 2000);
}
