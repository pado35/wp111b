# 03_HTML進階
---

## 3.1 HTML表單
HTML表單是一種用於向網站訪問者收集信息的交互元素。使用HTML表單，您可以收集訪問者的姓名、電子郵件、地址、意見反饋等等。表單通常由一系列輸入字段和提交按鈕組成。

HTML表單的基本結構如下：

```
html
Copy code
<form>
  <!-- 表單內容 -->
</form>
```
其中，<form>元素用於定義表單，</form>則表示表單的結束。

表單中常用的輸入字段包括：

1. `<input type="text">`：用於收集短文本，比如姓名、電話號碼等。
2. `<input type="email">`：用於收集電子郵件地址。
3. `<input type="password">`：用於收集密碼，輸入的文字將被隱藏。
4. `<input type="checkbox">`：用於收集多個選項中的零個或多個選項。
5. `<input type="radio">`：用於收集多個選項中的一個選項。
6. `<select>和<option>`：用於收集下拉框中的選項。
7. `<textarea>`：用於收集長文本，比如意見反饋等。

表單提交按鈕使用`<input type="submit">`元素，當用戶單擊提交按鈕時，表單數據將被提交到指定的URL地址。

HTML表單還有許多屬性和細節，需要根據具體情況進行設置和調整。


## 3.2 HTML圖片、音頻和視頻

在 HTML 中，可以使用 `<img>`、`<audio>` 和 `<video>` 等元素來添加圖片、音頻和視頻等多媒體內容。

### 3.2.1 添加圖片
要添加圖片，可以使用 `<img>` 元素，該元素必須包含一個 src 屬性，指定圖片文件的 URL。以下是一個簡單的圖片示例：

```
html
Copy code
<img src="path/to/image.jpg" alt="圖片描述">
```
其中 src 屬性指定圖片文件的 URL，alt 屬性用於提供圖片的描述，有助於視力障礙者更好地理解圖片。

### 3.2.2 添加音頻
要添加音頻，可以使用 `<audio>` 元素，該元素必須包含一個 src 屬性，指定音頻文件的 URL。以下是一個簡單的音頻示例：

```
html
Copy code
<audio src="path/to/audio.mp3" controls></audio>
```

其中 src 屬性指定音頻文件的 URL，controls 屬性用於顯示播放控件，允許用戶播放、暫停和調整音量等操作。

### 3.2.3 添加視頻
要添加視頻，可以使用 `<video>` 元素，該元素必須包含一個 src 屬性，指定視頻文件的 URL。以下是一個簡單的視頻示例：

```
html
Copy code
<video src="path/to/video.mp4" controls></video>
```
其中 src 屬性指定視頻文件的 URL，controls 屬性用於顯示播放控件，允許用戶播放、暫停和調整音量等操作。

除了 src 屬性，`<audio>` 和 `<video>` 元素還可以包含其他許多屬性和子元素，用於控制播放器的外觀和行為，例如 autoplay 屬性用於自動播放，loop 屬性用於循環播放，`<source>` 元素用於指定多個視頻源，以便在不同的瀏覽器和設備上播放不同的格式等等。


## 3.3 HTML超連結

在 HTML 中，可以使用超連結（Hyperlink）來連接不同的網頁或網站，讓用戶可以方便地跳轉到相關內容。超連結通常以藍色字體顯示，當用戶單擊該連結時，瀏覽器會跳轉到相應的頁面。

要添加超連結，可以使用 `<a>`（Anchor）元素，該元素必須包含一個 href 屬性，指定連結的 URL。以下是一個簡單的超連結示例：
```
html
Copy code
<a href="http://www.example.com">點擊這裡跳轉到示例網站</a>
```
其中 href 屬性指定連結的 URL，`<a>` 元素內部的內容是用於顯示超連結的文本。當用戶單擊該連結時，瀏覽器會跳轉到 href 屬性指定的網頁或網站。

除了簡單的 URL 連結，`<a>` 元素還可以用於設置內部錨點（Anchor），用於在同一頁面中跳轉到不同的部分。要設置內部錨點，可以在 href 屬性中指定 # 字符和錨點名稱，例如：

```
html
Copy code
<a href="#section1">跳轉到第一節</a>

...

<h2 id="section1">第一節</h2>
```
其中 href 屬性指定了 #section1，這意味著當用戶單擊該連結時，瀏覽器會跳轉到 id 屬性為 section1 的元素（在本例中是一個標題）。要設置內部錨點，目標元素必須包含一個 id 屬性，其值與 href 屬性中指定的錨點名稱相同。


## 3.4 HTML嵌套

在 HTML 中，可以將多個元素嵌套在一起，以便創建複雜的頁面佈局和視覺效果。元素嵌套是指一個元素包含另一個元素，例如：

```
html
Copy code
<div>
  <h1>標題</h1>
  <p>這是一段文字。</p>
</div>
```
在這個例子中，`<div>` 元素包含了一個 `<h1>` 標題和一個 `<p>` 段落。注意，這些元素的開始標籤和結束標籤必須按正確的順序嵌套，也就是說，結束標籤必須按照與開始標籤相反的順序出現。

嵌套還可以用於創建表格、列表和其他複雜的頁面元素。例如，以下代碼創建了一個有序列表和一個無序列表：

```
html
Copy code
<ol>
  <li>項目1</li>
  <li>項目2
    <ul>
      <li>子項目1</li>
      <li>子項目2</li>
    </ul>
  </li>
  <li>項目3</li>
</ol>
```

在這個例子中，`<ol>` 元素包含了三個 `<li>` 元素，其中第二個 `<li>` 元素又包含了一個無序列表。注意，嵌套的元素必須縮進一個或多個縮進（通常使用四個空格或一個制表符），以幫助區分層次結構。

在使用元素嵌套時，要注意不要過度使用。過多的嵌套會導致代碼變得難以閱讀和維護，而且也會影響頁面的性能。