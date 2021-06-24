# Tailwindcss-sample

* To see the output of the tailwindcss utilities.

     > npx tailwindcss-cli build css/tailwind.css -o build/tailwind.css
     
* Create a package.json file.

     > npm init -y
     
* Install the tailwindcss, postcss, autoprefixer, vite packages.

     > npm install -D tailwindcss postcss autoprefixer vite
     
* Add the below code inside the package.json file that run the vite server.

     "scripts": {
        "dev": "vite"
     },
     
* Create tailwindcss and postcss config file.

     > npx tailwindcss init -p
     
* To run the server.

     > npm run dev
