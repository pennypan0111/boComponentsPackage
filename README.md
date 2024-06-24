## **【 Step 1.確認依賴項目 】**

- 確認 `package.json` 中，是否已安裝以下套件，如沒有則需先安裝：
- 以下依賴項目需連線到 `npm config set registry https://registry.npmjs.org/` 才可安裝。
  ```
  "@element-plus/icons-vue": "^2.3.1",
  "@fortawesome/fontawesome-svg-core": "^6.5.1",
  "@fortawesome/free-brands-svg-icons": "^6.5.1",
  "@fortawesome/free-regular-svg-icons": "^6.5.1",
  "@fortawesome/free-solid-svg-icons": "^6.5.1",
  "@fortawesome/vue-fontawesome": "^3.0.5",
  "bootstrap": "^4.6.2",
  "element-plus": "^2.4.4"
  ```

----------------------

## **【 Step 2.開始安裝 bo-components-p 】**

- 安裝 `bo-components-p` 套件：
  ```
  npm install bo-components-p
  ```

----------------------

## **【 Step 3.套件引用 】**

- 在 `main.js` 檔案中，全域引用 `bo-components-p` 套件：
  ```
  import { BOMethods, BOComponent } from 'bo-components-p'
  app.use(BOMethods)
  app.use(BOComponent)
  ```

----------------------

## **【 Step 4.樣式引用 】**

- 在 `main.js` 檔案中，全域引用 `bootstrap`、`element-plus`、`bo-components-p` 的樣式，且引入層級順序必須如下：
  ```
  import '../node_modules/bootstrap/dist/css/bootstrap.css'
  import '../node_modules/element-plus/dist/index.css'
  import '../node_modules/bo-components-p/dist/style.css'
  ```

----------------------

## **【 Step 5.各 methods 使用方法 】**

- `.vue` 檔案中使用方法如下：

  - **《 BOMessageBox | 泡泡視窗 》**

    - title：呈現的標題，可任意填入字串<br>
    - message：呈現的內文，可任意填入字串<br>
    - type：呈現的狀態，共三種，分別為('success'、'warning'、'error')，皆須以字串方式<br>
    - buttonText：呈現的按鈕文字，可任意填入字串<br>
    ```
    this.$BOMessageBox('title', 'message', 'type', 'buttonText')
    ```

  - **《 BOLoading | 加載畫面 》**
    ```
    this.$BOLoading() // 加載
    this.$BOLoading().close() // 加載結束
    ```

----------------------

## **【 Step 6.各 component 使用方法 】**

- `.vue` 檔案中使用方法如下：

  - **《 Layout 樣式 A：　上方表頭 + 上方選單 》**

    - `BOTopHeader` 的 `props` 傳入設定：
      ```
      | props      | type   | required | default   |
      | :--------- | :----- | :------- | :-------- |
      | logoUrl    | String | true     | -         |
      | bgColor    | String | false    | #272C33   |
      | layoutType | String | false    | container |
      ```

    - `BOTopMenu` 的 `props` 傳入設定：
      ```
      | props           | type   | required | default   |
      | :-------------- | :----- | :------- | :-------- |
      | layoutType      | String | false    | container |
      | textColor       | String | false    | -         |
      | activeTextColor | String | false    | -         |
      | activeIndex     | String | false    | -         |
      ```

    - `BOMenuItem` 的 `props` 傳入設定：
      ```
      | props      | type   | required | default   |
      | :--------- | :----- | :------- | :-------- |
      | routeName  | String | true     | -         |
      | routeTitle | String | true     | menu item |
      | routeIndex | String | true     | -         |
      | textColor  | String | false    | #272C33   |
      ```

    - 檔案中使用範例：
      ```
      <template>
        <BOTopHeader logoUrl="yourImageUrlPath"></BOTopHeader>
        <BOTopMenu>
          <BOMenuItem routeName="yourRouterName" routeTitle="yourMenuTitle" routeIndex="yourMenuIndex"></BOMenuItem>
        </BOTopMenu>
      </template>
      ```

  - **《 Layout 樣式 B：　上方表頭 + 左側選單 》**

    - `BOLayoutHeader` 的 `props` 傳入設定：
      ```
      | props      | type   | required | default   |
      | :--------- | :----- | :------- | :-------- |
      | bgColor    | String | false    | #272C33   |
      | logoUrl    | String | true     | -         |
      | layoutType | String | false    | container |
      ```

    - `BOLayoutMenu` 的 `props` 傳入設定：
      ```
      | props        | type    | required | default      |
      | :----------- | :------ | :------- | :----------- |
      | bgColor      | String  | false    | #272C33      |
      | logoUrlSmall | String  | true     | -            |
      | logoUrlLarge | String  | true     | -            |
      | menuVisible  | Boolean | true     | -            |
      | userAccount  | String  | true     | user name    |
      | userId       | String  | true     | 0001         |
      | userIcon     | Object  | false    | faCircleUser |
      ```

    - `BOMenuGroup` 的 `props` 傳入設定：
      ```
      | props         | type   | required | default     |
      | :------------ | :----- | :------- | :---------- |
      | groupIndex    | String | true     | -           |
      | groupTitle    | String | false    | group item  |
      | groupItemIcon | Object | false    | faFileLines |
      ```

    - `BOMenuItem` 的 `props` 傳入設定：
      ```
      | props      | type   | required | default   |
      | :--------- | :----- | :------- | :-------- |
      | routeName  | String | true     | -         |
      | routeTitle | String | true     | menu item |
      | routeIndex | String | true     | -         |
      | textColor  | String | false    | #272C33   |
      ```

    - 檔案中使用範例：
      ```
      <template>
        <BOLayoutHeader logoUrl="yourImageUrlPath" @displayMenu="getDisplayMenuVal"></BOLayoutHeader>

        <BOLayoutMenu
          :menuVisible="menuVal" <!-- 綁定 data() 中的資料，建議不要更動 -->
          logoUrlSmall="yourImageUrlPath"
          logoUrlLarge="yourImageUrlPath"
          userAccount="yourUserAccount"
          userId="yourUserId" 
        >

          <BOMenuGroup groupTitle="yourGroupTitle" groupIndex="yourMenuIndex">
            <BOMenuItem textColor="yourColor" routeName="yourRouterName" routeTitle="yourMenuTitle" routeIndex="yourMenuIndexChildren"></BOMenuItem>
            <BOMenuItem textColor="yourColor" routeName="yourRouterName" routeTitle="yourMenuTitle" routeIndex="yourMenuIndexChildren"></BOMenuItem>
          </BOMenuGroup>

        </BOLayoutMenu>
      </template>

      <script>
        export default {
          data() {
            return {
              menuVal: true
            }
          },
          mounted () {
            window.addEventListener('resize', this.handleWindowResize)
          },
          methods: {
            getDisplayMenuVal() {
              this.menuVal = !this.menuVal
            },
            handleWindowResize () {
              if (window.innerWidth > 992) {
                this.menuVal = true
              } else {
                this.menuVal = false
              }
            }
          }
        }
      </script>
      ```

  - **《 Countdown | 倒數計時器 》**

    - `BOCountdown` 的 `props` 傳入設定：
      ```
      | props          | type   | required | default |
      | :------------- | :----- | :------- | :------ |
      | hours          | Number | false    | -       |
      | minutes        | Number | false    | -       |
      | seconds        | Number | false    | -       |
      | actionDescribe | String | false    | ' '     |
      ```

    - `BOCountdown` 的 `emit` 事件定義：
      ```
      | emits  | illustrate               |
      | :----- | :----------------------- |
      | timeUp | 當倒數計時結束時觸發此事件 |
      ```
    
    - 檔案中使用範例：
      ```
      <BOCountdown :hours="23" :minutes="60" :seconds="0" actionDescribe="後自動登出" @timeUp="handleTimeUp"></BOCountdown>
      ```