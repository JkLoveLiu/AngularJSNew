AngularJS的小项目

仿中国农业银行App制作而成。部分界面借鉴了中国银行的app。

可以用 5+app 打包成Android可执行文件

一个期末作业(这是第三版，基本上是重写了一遍，前两版在另一个仓库)，非常粗糙（上交以后应该不会继续完善了）

```
目录说明
|-- AngularJSNew
		|-- index.html					// 入口文件
		|-- css							// 样式类文件
		|	|-- icon						// 单色图标
		|	|	|--								// icon相关文件
		|	|-- icon-color					// 彩色图标
		|	|	|--								// 彩色icon相关文件
		|	|-- global_css.css				// 全局样式文件
		|	|-- home.css					// 首页样式文件
		|	|-- index.css					// 主页的样式文件
		|	|-- myInfo.css					// 我的页的样式文件
		|	|-- myInfo_aboutMy.css			// 我的页=>关于我的样式文件
		|	|-- myInfo_account.css			// 我的页=>我的账户样式文件
		|	|-- myInfo_IONotes.css			// 我的页=>收支记录样式文件
		|-- data						// json数据存放位置
		|	|-- data.json					// 其他数据地址
		|	|-- TransactionData.json		// 交易记录地址
		|-- js							// js配置地址
		|   |-- controllerJS.js				// 控制器的js文件
		|   |-- directive.js				// 自定义指令的js文件
		|   |-- routerConfig.js				// ionic路由js文件
		|-- templates					// 模板文件
		|	|-- directiveTemplate			// 自定义指令模板地址
		|   |   |-- headerDiv.html				// 首页头部模板
		|   |	|-- homeContentBody.html		// 首页内容中部模板
		|   |	|-- homeContentHead.html		// 首页内容头部模板
		|   |	|-- myInfoTemplate.html			// 我的页列表模板
		|	|-- routerTemplate				// 路由模板地址
		|   |   |-- aboutMyTemplate.html		// 关于我们页
		|   |	|-- homeTemplate.html			// 首页
		|   |	|-- indexTemplate.html			// 启动页
		|   |	|-- IONotesTemplate.html		// 收支记录页
		|   |	|-- myInfoAccountTemplate.html	// 我的账户页
		|-- img							// 图片存放位置
		|-- lib							// 引用文件地址
		|   |-- ionic						// ionic存放位置
		|-- unpackage					// 5+app不会打包的文件夹
		|-- manifest.json				// 5+app打包需要的json文件
		|-- README.md					// 介绍文件
```
