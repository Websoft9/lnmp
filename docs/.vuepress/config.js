module.exports = {

//针对不同项目，需要修改的参数有：base,title,description,repo以及nav,sidebar 文件夹下的导航js文件

base: '/docs/lnmp/',
dest: 'html/lnmp',

head: [
  ['link', { rel: 'icon', href: '/favicon.ico' }]
],

//vuepress多语言，区别于主题多语言
locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'LEMP(LNMP) Administrator Guide',
      description: 'You can get the Installation of Image,Administrator,Configuration of the LNMP from this documentation.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'LNMP 管理员手册',
      description: '本文档由 Websoft9 公司提供，用于指导用户学习 LNMP 的安装部署与基本运维技术，包括：部署、初始化安装、安装网站、安装扩展、HTTPS、SMTP、备份升级和连接云服务器操作等基本操作，帮助您在最短的时间里学会在Linux上使用Nginx+PHP+MySQL的组合，成为一名合格的云计算运维工程师。'
    }
},

themeConfig: {
	 
	//Basic configuration
	displayAllHeaders: false, // 默认值：false
  activeHeaderLinks: true, // 默认值：true
  displayAllHeaders: false, // 默认值：false
  sidebar: 'auto', // 默认值：false

  //Github 
  repo: 'Websoft9/ansible-lnmp',
  editLinks: true,
  docsDir: 'docs',
  docsBranch: 'main',

  //主题多语言
  locales: {
    '/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      serviceWorker: {
         updatePopup: {
         message: "New content is available.",
         buttonText: "Refresh"
          }
        },
  
    //top-menu
    nav: require('./nav/en'),
    //left-menu
    sidebar:require('./sidebar/en'),
  },  
  
  '/zh/': {
    label: '中文',
    selectText: '语言',
    editLinkText: '在Github上编辑',
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: {
        message: "此文档有可用的更新",
        buttonText: "刷新"
      }
    },
  
    //页眉
    nav: require('./nav/zh'),
    //侧边栏导航
    sidebar: require('./sidebar/zh'),
  
  },
  
},   
}
}