## volta

```
volta pin node[@x.x.x] yarn[@x.x.x]
```

可以下载对应版本工具链，node 不写版本采用当前 lts 版本，yarn 采用最新 1.x 版本。并将其应用到项目目录上，在 package.json 中写入版本：

```
  "volta": {
    "node": "16.13.1",
    "yarn": "1.22.17"
  },

```

可以锁定 node、yarn 版本，进入项目目录后，自动使用 package.json 中声明的版本。

不需要 nvm，指向固定文件，再根据所在目录选择或下载对应版本工具链。

```sh
➜  ~ ls -al /root/.volta/bin
total 51040
drwxr-xr-x. 2 root root     4096 Dec 26 21:13 .
drwxr-xr-x. 7 root root     4096 Dec 26 21:13 ..
lrwxrwxrwx. 1 root root       27 Dec 26 21:13 node -> /root/.volta/bin/volta-shim
lrwxrwxrwx. 1 root root       27 Dec 26 21:13 npm -> /root/.volta/bin/volta-shim
lrwxrwxrwx. 1 root root       27 Dec 26 21:13 npx -> /root/.volta/bin/volta-shim
-rwxr-xr-x. 1 root root 18939069 Sep  8 02:55 volta
-rwxr-xr-x. 1 root root 15588161 Sep  8 02:55 volta-migrate
-rwxr-xr-x. 1 root root 17722853 Sep  8 02:55 volta-shim
lrwxrwxrwx. 1 root root       27 Dec 26 21:13 yarn -> /root/.volta/bin/volta-shim
```

## window Developer mode

https://docs.microsoft.com/zh-cn/windows/apps/get-started/enable-your-device-for-development#accessing-settings-for-developers

## yarn workspace

在总项目 package.json 中通过 workspaces 声明子项目所在目录，执行 yarn 自动安装项目根目录和子项目目录下 package.json 声明的依赖。
