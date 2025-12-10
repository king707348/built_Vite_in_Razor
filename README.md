# 🚀 在 ASP.NET Core Razor Pages 專案中整合 Vite
建立razor
```
dotnet new webapp -o ur_project_name
```
開始前可以先了解razorPages的架構

### setup Vite
cd 到你建立好的Razor資料夾後,一樣是前端熟悉的建立vite
<br>
這邊我是命名vite (分得清楚前後端就好)
```
npm create vite@latest
```
開啟vite後下載
```
cd vite
npm install
```
### set Vite
to vite.config.js<br>
build.manifest：啟用後，Vite 會生成一個 manifest.json 文件，這對於 ASP.NET Core 處理靜態資源的發佈和快取非常重要。<br>
base: '/_content/'：如果您計劃將 Vite 產出的靜態資源放在一個特定的路徑下（例如 wwwroot/dist），則需要設定這個基底路徑，但在您的情境中，由於使用 Proxy，這不是開發時的關鍵。

```
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  server: {
    hmr: {
      protocol: "ws",
    },
  },
});
```
to /Pages/Shared/_Layout.cshtml
加上```<div id="app"></div>```
```
    <div class="container">
        <main role="main" class="pb-3">
            @RenderBody()

            <div id="app"></div>
        </main>
    </div>
```
下載 Microsoft.AspNetCore.SpaServices.Extensions<br>
參考文獻<a href="https://learn.microsoft.com/zh-tw/aspnet/core/client-side/spa-services?view=aspnetcore-7.0#hot-module-replacement">SpaServices</a>
```
dotnet add package Microsoft.AspNetCore.SpaServices.Extensions
```
to Program.cs
將這段```app.MapRazorPages();```
改成
```
  app.UseEndpoints(endpoints =>
  {
      endpoints.MapRazorPages();
  });
  
  if (app.Environment.IsDevelopment())
  {
      app.UseSpa(spa =>
      {
          spa.UseProxyToSpaDevelopmentServer("http://localhost:5173/");
      });
  }
```
使用UseEndpoints讓他找到相對的端點

最後將這段加到/Pages/Shared/_Layout.cshtml的head
```
  <environment names="Development">
  <script type="module" src="http://localhost:5173/@@vite/client"></script>
  <script type="module" defer src="http://localhost:5173/src/main.js"></script>
  </environment>
```
cd 到 vite(前端資料夾)
```npm run dev```
跑完vite後再按f5給Razor跑完就完成了

![09-18_003](https://github.com/king707348/built_Vite_in_Razor/assets/48721403/c1a1b6fb-5b82-41c6-a122-58b3d4a383b9)
這邊我對style做些微修改

Razor和Vite有各自放css、js的地方<br>
就看個人喜好 如何管理比較好
