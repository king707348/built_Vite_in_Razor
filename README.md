# built_Vite_in_Razor
這邊先前已建立好RazorPages
接下來直接說明如何載入Vite

### setup Vite
cd 到Razor資料夾後
一樣是大家熟悉的 
這邊我是命名vite (分得清楚前後端就好)
```npm create vite@latest```
...
```cd vite```
  // run
```npm install```
### set Vite
到vite.config.js
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


這邊我先下班了 have a good day.
