#Notes
#Added npm (package manager) using
npm init
#added bundler
parcel (easy to configure)
parcel Creates a DEV build, Creates server to host app
it is also doing HMR (hot module replacement) hot reload
it is using file watching algorithm
parcel does Image optimization
it is also doing minification
it is also doing bundling
it is also doing Compressing
code splitting
differential bundling - to support old browsers
Diagonostics
Error Handling
HTTPS
Tree Shaking - remove unused code
Content Hashing
Different dev and prod build

#npx means executing a package
#start parcel server using
npx parcel index.html
#remove cdn links of react and react dom from index.html
#<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
#<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
#we will install using npm that will avoid more cdn calls as it will be available in local node modules

