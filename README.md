# built_Vite_in_Razor
這邊拿先前已建立好的RazorPages
接下來直接說明如何載入Vite
<br>
開始前可以先了解razorPage的架構

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
to vite.config.js
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
下載 Microsoft.AspNetCore.SpaServices.Extensions
<a href="https://learn.microsoft.com/zh-tw/aspnet/core/client-side/spa-services?view=aspnetcore-7.0#hot-module-replacement">SpaServices 參考文件</a>
```
dotnet add package Microsoft.AspNetCore.SpaServices.Extensions
```
to Program.cs
將這段```
  app.MapRazorPages();
```
改成```
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





