// ===== 2.1 物件：一支咖啡豆 =====
const bean1 = {
  id: 1,
  origin: "衣索比亞",
  isArchived: false
};

console.log("第一支豆子的產地：", bean1.origin);
console.log("讀取不存在的屬性 roaster：", bean1.roaster); // 應該印出 undefined

// ===== 2.2 陣列：豆子清單 =====
const beans = [
  bean1,
  { id: 2, origin: "巴西", isArchived: true }
];

console.log("豆子清單筆數：", beans.length);
console.log("第一支豆子：", beans[0]);
console.log("越界讀取 beans[5]：", beans[5]); // 補上你覺得應該寫的東西

// ===== 2.3 函式：新增豆子（含驗證） =====
function addBean(beanList, newBean) {
  if (newBean.origin === "") {
    console.log("產地不能是空的");
    return;
  }
  beanList.push(newBean);
}

addBean(beans, { id: 3, origin: "肯亞", isArchived: false });
addBean(beans, { id: 4, origin: "", isArchived: false }); // 這筆應該會被擋下來

console.log("新增後的豆子清單筆數：", beans.length); // 猜猜看會是多少？

// ===== 2.4 filter / find / map =====
const activeBeans = beans.filter(bean => bean.isArchived === false); // 篩選出 isArchived === false 的豆子
console.log("未封存的豆子：", activeBeans);

const targetBean = beans.find(bean => bean.origin === "巴西"); // 找出 origin === "巴西" 的豆子
console.log("找到的豆子：", targetBean);

const allOrigins = beans.map(bean => bean.origin); // 把所有豆子轉換成只有產地名稱的陣列
console.log("所有產地：", allOrigins);

// ===== 2.5 資料關聯：豆子 + 購買紀錄 =====
const purchases = [
  { id: 101, beanId: 1, price: 450 },
  { id: 102, beanId: 1, price: 480 },
  { id: 103, beanId: 2, price: 380 }
];

const bean1Purchases = purchases.filter(p => p.beanId === 1); // 篩選出 beanId === 1 的所有購買紀錄
console.log("衣索比亞的購買紀錄：", bean1Purchases);