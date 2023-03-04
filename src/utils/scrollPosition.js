// 获取页面元素
const pullToRefreshEl = document.getElementById('pull-to-refresh');

// 定义一些变量来跟踪手指的移动
let startY = 0;
let currentY = 0;
let isDragging = false;

// 监听 touchstart 事件以开始跟踪手指的移动
pullToRefreshEl.addEventListener('touchstart', (event) => {
  // 如果页面没有滚动到顶部，则不进行操作
  if (window.scrollY !== 0) {
    return;
  }
  
  // 记录起始位置
  startY = event.touches[0].pageY;
  currentY = startY;
  isDragging = true;
  
  // 添加一个 class，用于显示下拉刷新的内容
  pullToRefreshEl.classList.add('refreshing');
});

// 监听 touchmove 事件以跟踪手指的移动
pullToRefreshEl.addEventListener('touchmove', (event) => {
  // 如果页面没有滚动到顶部或者没有开始拖动，则不进行操作
  if (!isDragging || window.scrollY !== 0) {
    return;
  }
  
  // 阻止默认行为，以便页面不会滚动
  event.preventDefault();
  
  // 记录当前位置
  currentY = event.touches[0].pageY;
  
  // 计算手指移动的距离，并将页面向下移动相同的距离
  const distance = currentY - startY;
  pullToRefreshEl.style.transform = `translateY(${distance}px)`;
});

// 监听 touchend 事件以完成下拉刷新
pullToRefreshEl.addEventListener('touchend', () => {
  // 如果页面没有滚动到顶部或者没有开始拖动，则不进行操作
  if (!isDragging || window.scrollY !== 0) {
    return;
  }
  
  // 标记为已完成拖动
  isDragging = false;
  
  // 将页面重置为原始位置
  pullToRefreshEl.style.transform = '';
  
  // 移除下拉刷新的内容并添加一个提示消息
  pullToRefreshEl.classList.remove('refreshing');
  const messageEl = document.createElement('div');
  messageEl.textContent = '页面已更新';
  pullToRefreshEl.appendChild(messageEl);
  
  // 两秒后移除提示消息
  setTimeout(() => {
    messageEl.remove();
  }, 2000);
});