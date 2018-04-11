# Static Web Starter Kit (Html)


<img src="./thumb.jpg">


- 封測站(Html)
  
  * {YOUR_DEMO_PATH}


## 發佈程式（封測站）

```
將src
上傳(覆蓋)到 {YOUR_FTP_PATH}

```

## Features

* [JQuery 3] (https://jquery.com/download/) JavaScript Library
* [Bootstrap 4.0.0](http://bootstrap.hexschool.com/docs/4.0/components/popovers/) CSS Framework


## 開發環境

該專案開發工具使用 gulp 進行編譯scss 與 browsersync, 進而加速開發

- 安裝
- 
```bash
$ yarn
```

- 啟動

```bash
$ yarn dev
```

- 壓縮圖片

```bash
$ yarn img
```




## App Structure

中文版或英文版若有該語言區分的資源, 則跟common建立相同的資料結構


```
.
├── etc
│   └── nginx
│       └── default.conf                        # docker compose 需要的 Nginx 設定檔
├── src                                         # App source code
│   ├── common                                  # 不分語系 共用資源資料夾
│   │   ├── img                                 # 圖片
│   │   ├── js                                  # 單一的Javascript (非Plugin)
│   │   │   ├── helper                          # 自定義常用到的工具JS
│   │   │   └── page                            # 給各頁面的獨立JS
│   │   ├── plugin                              # 套件模組 (例如JQuery,Bootstrap,BlockUI)
│   │   └── style                               # build client app
│   │       ├── css/dist                             # SCSS編譯完成的路徑
│   │       ├── font                            # 字型檔
│   │       └── scss                            # SCSS資料夾
│   ├── index.html                              # 首頁
├── .gitlab-ci.yml                              # GITLAB-CI 持續整合測試設定檔
└── docker-compose.yml.sample                   # Docker Compose 部屬設定檔案
```
