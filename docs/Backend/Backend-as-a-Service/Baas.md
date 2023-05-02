# Backend as a service
## Introduction
Baas (Backend as a service)，讓開發者能夠專注在網站的 UI 以及前端的邏輯上面，而不用去管理後端相關的事情，有些 Baas 框架甚至連 hosting 相關的事情會一起處理。

## Feature of Baas
不同框架可能有不一樣的 feature:
- Database Management
    - 管理資料庫，讓前端開發者可以不用認知到資料庫的存在，只需使用定義好的 API 或 sdk 去拿取資料就好。
- Cloud Storage
    - 管理使用者上傳的資料 (e.g. 檔案），並存在雲端上。
- User authentication
    - 提供管理使用者的相關 API。
    - 舉例來說：前端呼叫 `Baas.signup("username", "password")`後，Baas 服務會自動建立新的使用者，並將使用者資料存到資料庫，也可能會自動加密密碼、限制權限等等。
- Push notification
    - 提供推送通知到手機的功能 (For Andriod, IOS)
- Hosting
    - 管理部屬後端的相關事情，讓開發者不需要自己找個 server 並部屬程式碼

![](https://www.cloudflare.com/img/learning/serverless/glossary/backend-as-a-service-baas/what-is-backend-as-a-service.svg)
（擷取自 Cloudflare)

## Examples
常見的 Baas framework 有
- Firebase
- Parse Server

## Conclusion
Baas 的好處是讓開發者能夠專注在開發前端的邏輯，並且省去開發後端的一些 [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code)，像是 CRUD 以及 user authentication。也可以想成其他公司或是社群的人幫忙我們寫了這些常見的 bolerplate code。

Baas 的缺點是對第三方平台的依賴，當你在使用服務提供的 api 或 sdk 發生錯誤時，仍然有可能需要去檢查原始碼是怎麼寫的才能找出原因，或是當有特定需求是服務是 Baas 沒有提供的，就需要自己寫，而且可能還需要符合 Baas 規定的特殊架構。

如果要開發一個簡單功能的 Web app，蠻適合使用 Frontend + Baas 的，若後端的邏輯較複雜，則可能要在 Baas 加上自己寫的後端 code。

## Reference
- https://www.cloudflare.com/learning/serverless/glossary/backend-as-a-service-baas/