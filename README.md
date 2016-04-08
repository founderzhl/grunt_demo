grunt 前端整体打包方案及Grunt打造前端自动化工作流

1. 先配置好package.json、Gruntfile.js两个文件

2. 执行命令自动下载相对应的Grunt插件

  命令行执行:

  //设置机器上对应的git环境变量
  如：
  
  set PATH=%PATH%;C:\Program Files (x86)\Git\bin
  
  npm install

3. 启动文件变更监控(livereload)

  命令行执行:
  
  grunt live

4. 编码完成后Build

  命令行执行:
  
  grunt build

    参考学习的地址
  
    http://gruntjs.com/getting-started#package.json
    
    http://tgideas.qq.com/webplat/info/news_version3/804/808/811/m579/201307/216460.shtml
  
