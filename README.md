# webbundlers-play
A repo to run experiments to best create postable bundles (across different projects)


### Problem ? 
- browserify, webpack, requireJS are great tools as bundlers
- But .. a bundled packet from one shall work in another. Shall it not ? 

That is the target of this one. amongst other experiments and playing


### Startup
- run `npm run dev`
- go to `http://localhost:8098/index.html`

### Solution - 
best and easiest is to use webpack instead of requireJS and browserify. it is super simple, and super awesome. port browserify (it is in it's own world). requireJS follows commonJS more but still is not that smooth to use one bundle in another. with webpack and weback projects re-usability is super simple



- for stage - run `npm run dist` && `npm run serve` (this will generate main.js into dist/main.js)


#### Webpack is awesome

- makes it super simple
- Using https://webpack.github.io/docs/library-and-externals.html to achieve this
- what is in the repo is a super-simple implementation of same with 2 apps `app1` and `app2`
- app1 services is packaged as a var (using `output.library` option)  as `appler` and `app2` then accesses `appler` that (using `externals` option) 

