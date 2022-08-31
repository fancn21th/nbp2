# nbp2 中文命名 转 英文命名 拼音法

> naming by pinyin

## motivation 动机

在项目中我们经常要把中文名转换成 `路由名`，`变量名`，`文件名`，`文件夹名` ...

输入一个 中文名数组 输出 一个 文件名映射表， 只需要维护 中文名数组即可。

## install 安装

安装并不推荐，如果想使用最新版本请使用 `npx` 命令

```shell
npm i -g nbp2
```

## Usage 使用

### commands 命令

-   help 帮助文档

```shell
npx nbp2 help
```

-   run 运行

```shell
npx nbp2 run
```

### flags 参数

-   style

```shell
npx nbp2 run -s camelCase
```

-   prefix

```shell
npx nbp2 run --prefix xxx
```

-   suffix

```shell
npx nbp2 run --suffix xxx
```

## contribute 贡献

欢迎提交 Issue，进而 MR。

基于 [create-node-cli](https://github.com/ahmadawais/create-node-cli) ，请先熟悉她 。
