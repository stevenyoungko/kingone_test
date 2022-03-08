// 1. 透過原型繼承可以讓本來沒有這個屬性的物件去存取其他物件的屬性。

// 2. 閉包是個可以捕捉外部變數的函式，它包含了一個函式，以及函式被建立時所在的環境。
function test1() {
  var x = ' 123'
  function test2() {
    console.log(x)
  }
  test2()
}
test1()

// 3. 是js的一個技術名稱，用來向server取得資料。

// 4. 
// Event Bubbling指的是當點擊某個DOM 元素上，
// 這個事件會觸發DOM 的event handler，接下來會再觸發他parent的event handler,直到最上層。

// 5. 分為嚴格相等和一般相等，嚴格相等多了型別檢查。

// 6. 同源政策，要滿足同源必需是以下三種條件，如果想要跨來源請求，就必須透過其他方法，ex: proxy
    // 1 .相同的 (protocol)
    // 2. 相同的 (domain)
    // 3. 相同的 (port)

// 7. SPA，透過js去渲染裡面的內容，以vue來說 使用nuxt 可以做到 SSR (Server Side Render)來改善 SEO的問題。

// 8.
for (let i = 0; i <= 100; i ++) {
  if (i % 3 === 0) {
    console.log('fizz')
  }
  if (i % 5 === 0) {
    console.log('buzz')
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz')
  } else {
    console.log(i)
  }
}

// 9.
var x = 1;         
var y = 5;        
for (var n = 1 ; n < 6 ; n ++) {            
  for (var i = 0 ; i < y ; i ++) {                
    document.write("&nbsp");            
  }            
  if (n < 3) {                
    y--            
  } else {                
    y++            
  }            
  for(var j = 0 ; j < 2 * x - 1 ; j ++) {                
    document.write("*");            
  }            
  if (n < 3) {                
    x++;            
  } else {                
    x--;           
  }            

  document.write("<br>")        
}

// 10.
function add(a, b) {
  if (a && b) {
    return a + b
  } else {
    return y => a + y
  }
}

// 11.
1020

// 12.
"goh angasal a m'i"

// 13.
"bar"

// 14.
'HelloWorld'
報錯

// 15.
2

// 16.
one
three
two