// 今日（現在）の日付情報を取得する
const today = new Date();

// 「年」を取得する
const year = today.getFullYear();

// 「月」を取得する（注意：0から始まるため1を足す）
const month = today.getMonth() + 1;

// 「日」を取得する
const date = today.getDate();

// 形式を整えてコンソールに出力する
console.log(year + "年" + month + "月" + date + "日");