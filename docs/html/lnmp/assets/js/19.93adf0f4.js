(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{207:function(e,t,r){"use strict";r.r(t);var n=r(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),r("p",[e._v('The LEMP deployment package contains a sequence software (referred to as "components") required for LEMP to run. The important information such as the component name, installation directory path, configuration file path, port, version, etc. are listed below.')]),e._v(" "),r("h2",{attrs:{id:"path"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#path","aria-hidden":"true"}},[e._v("#")]),e._v(" Path")]),e._v(" "),r("h3",{attrs:{id:"directories-for-application"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#directories-for-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Directories for Application")]),e._v(" "),r("p",[e._v("Suggested directory: "),r("em",[e._v("/data/wwwroot")]),r("br"),e._v("\nExample application directory: "),r("em",[e._v("/data/wwwroot/www.example.com")])]),e._v(" "),r("blockquote",[r("p",[e._v("The URL: "),r("em",[e._v("http://Internet IP")]),e._v(" will access the example application")])]),e._v(" "),r("h3",{attrs:{id:"nginx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[e._v("#")]),e._v(" Nginx")]),e._v(" "),r("p",[e._v("Nginx vhost configuration file: "),r("em",[e._v("/etc/nginx/conf.d/default.conf")]),r("br"),e._v("\nNginx main configuration file: "),r("em",[e._v("/etc/nginx/nginx.conf")]),r("br"),e._v("\nNginx logs file: "),r("em",[e._v("/var/log/nginx")]),r("br"),e._v("\nNginx rewrite rules directory: "),r("em",[e._v("/etc/nginx/conf.d/rewrite")])]),e._v(" "),r("p",[r("strong",[e._v("default.conf")]),e._v(" includes one "),r("a",{attrs:{href:"https://support.websoft9.com/docs/linux/webs-nginx.html#vhost",target:"_blank",rel:"noopener noreferrer"}},[e._v("server{}"),r("OutboundLink")],1),e._v(" configuration items whitch matched the "),r("strong",[e._v("Example application")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("server\n{\nlisten 80;\nserver_name www.example.com  example.com;\nindex index.html index.htm index.php;\nroot  /data/wwwroot/www.example.com;\nerror_log /var/log/nginx/example.com-error.log crit;\naccess_log  /var/log/nginx/example.com-access.log;\n\ninclude conf.d/extra/*.conf;\n\n## Includes one of your Rewrite rules if you need, examples\n # include conf.d/rewrite/wordpress.conf;\n # include conf.d/rewrite/joomla.conf;\n}\n")])])]),r("blockquote",[r("p",[e._v("How many websites you need, you should add the same number of "),r("strong",[e._v("server{ }")]),e._v(" to "),r("strong",[e._v("default.conf")])])]),e._v(" "),r("h3",{attrs:{id:"php"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[e._v("#")]),e._v(" PHP")]),e._v(" "),r("p",[e._v("PHP configuration file: "),r("em",[e._v("/etc/php.ini")]),r("br"),e._v("\nPHP Modules configurations directory: "),r("em",[e._v("/etc/php.d")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# Installed PHP Modules\nCore  date  libxml  openssl  pcre  zlib  filter  hash  Reflection  SPL  session  standard    \nbcmath  bz2  calendar  ctype  curl  dom  mbstring  fileinfo  ftp  gd  gettext  gmp  iconv  \nimap  intl  json  ldap  exif  mcrypt  mysqlnd  odbc  PDO  Phar  posix  recode  shmop  \nSimpleXML  snmp  soap  sockets  sqlite3  sysvmsg  sysvsem  sysvshm  tokenizer  xml  xmlwriter  xsl  mysqli  \npdo_dblib  pdo_mysql  PDO_ODBC  pdo_sqlite  wddx  xmlreader  xmlrpc  igbinary  imagick  zip  redis  Zend OPcache  \n")])])]),r("h3",{attrs:{id:"mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[e._v("#")]),e._v(" MYSQL")]),e._v(" "),r("p",[e._v("MySQL installation directory: "),r("em",[e._v("/usr/local/mysql")]),r("br"),e._v("\nMySQL data directory: "),r("em",[e._v("/data/mysql")]),r("br"),e._v("\nMySQL configuration file: "),r("em",[e._v("/etc/my.cnf")]),r("br"),e._v("\nMySQL Web Management URL: "),r("em",[e._v("http://Internet IP/9panel")]),e._v(", get credential from "),r("router-link",{attrs:{to:"/stack-accounts.html"}},[e._v("Username and Password")])],1),e._v(" "),r("h3",{attrs:{id:"phpmyadmin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin","aria-hidden":"true"}},[e._v("#")]),e._v(" phpMyAdmin")]),e._v(" "),r("p",[e._v("phpMyAdmin configuration file: "),r("em",[e._v("/etc/nginx/conf.d/phpmyAdmin.conf")])]),e._v(" "),r("h3",{attrs:{id:"redis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),r("p",[e._v("Redis configuration file: "),r("em",[e._v("/etc/redis.conf")]),r("br"),e._v("\nRedis data directory: "),r("em",[e._v("/var/lib/redis")]),r("br"),e._v("\nRedis logs file: "),r("em",[e._v("/var/log/redis/redis.log")])]),e._v(" "),r("h2",{attrs:{id:"ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ports","aria-hidden":"true"}},[e._v("#")]),e._v(" Ports")]),e._v(" "),r("p",[e._v("You can control(open or shut down) ports by "),r("strong",[r("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security Group Setting"),r("OutboundLink")],1)]),e._v(" of your Cloud Server whether the port can be accessed from Internet.")]),e._v(" "),r("p",[e._v("These ports should be opened for this application:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Number")]),e._v(" "),r("th",[e._v("Use")]),e._v(" "),r("th",[e._v("Necessity")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("MySQL")]),e._v(" "),r("td",[e._v("3306")]),e._v(" "),r("td",[e._v("Remote connect MySQL")]),e._v(" "),r("td",[e._v("Optional")])]),e._v(" "),r("tr",[r("td",[e._v("HTTP")]),e._v(" "),r("td",[e._v("80")]),e._v(" "),r("td",[e._v("HTTP requests for LEMP")]),e._v(" "),r("td",[e._v("Required")])]),e._v(" "),r("tr",[r("td",[e._v("HTTPS")]),e._v(" "),r("td",[e._v("443")]),e._v(" "),r("td",[e._v("HTTPS requests LEMP")]),e._v(" "),r("td",[e._v("Optional")])])])]),e._v(" "),r("h2",{attrs:{id:"version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[e._v("#")]),e._v(" Version")]),e._v(" "),r("p",[e._v("You can see the version from product page of Marketplace. However, after being deployed to your server, the components will be automatically updated, resulting in a certain change in the version number. Therefore, the exact version number should be viewed by running the command on the server:")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# Linux Version\nlsb_release -a\n\n# PHP Version\nphp -v\n\n# List Installed PHP Modules\nphp -m\n\n# Nginx version\nnginx -v\n\n# List Installed Nginx Modules\nnginx -V\n\n# MySQL version\nmysql -V\n\n# Redis version\nredis-server -v\n")])])])])},[],!1,null,null,null);t.default=a.exports}}]);