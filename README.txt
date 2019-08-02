1.Introduction
  The SCMS is based on the vue-admin-template(https://github.com/PanJiaChen/vue-admin-template)
  The template is built with Element UI & axios & iconfont & permission control & lint
  Please read the documentation(https://panjiachen.github.io/vue-element-admin-site/guide/)

2.Setup development environment
  (1). Download and install latest node.js(https://nodejs.org/en/)
  (2). Download and install latest Visual studio code(https://code.visualstudio.com/)
  (3). Install Visual studio code extensions: ESlint and Vetur
  (4). Setting Extensions(file->preference->settings->user tab->Edit in settings.json), following is the example of settings.json
        {
            "emmet.syntaxProfiles": {
                "vue-html": "html",
                "vue": "html"
            },
            "eslint.options": {
                "extensions": [
                    ".js",
                    ".vue"
                ]
            },
            "eslint.validate": [
            "javascript",{
                "language": "vue",
                "autoFix": true
            },"html",
            "vue"
            ],

            "vetur.validation.template": false,
            "editor.minimap.enabled": false,
            "workbench.colorTheme": "Visual Studio Dark",
            "editor.renderWhitespace": "none",
            "eslint.autoFixOnSave": true,
            "workbench.startupEditor": "newUntitledFile",
            "breadcrumbs.enabled": false,
        }

3. Build steps
  (1). Download source of scms project from server
  (2). Open the source directory with Visual studio code
  (3). Open cmd console and enter the project directory
  (4). Install dependency by using npm install command
         npm install --registry=https://registry.npm.taobao.org
  (5). To run and debug on windows, run npm run dev command 
         npm run dev
       The web browser will automatically open http://localhost:9528 
  (6). Make build for production environment with following command
        npm run build:prod
       Please find the packaged files in /dist directory
