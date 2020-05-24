This is a boiler plate project for React with Typescript. It uses express as its server and  webpack for bundling tool.

All the files contains comments to explain the boiler plate code. If you need to go through all the steps of development you can go through following documentation.

Steps for creating boiler plate.
Stage 1: React + Typescript
    Step 1: Create a blank folder(react-typescript-boilerplate) and open in vs code.
    Step 2: Setup git repo 
        Step 2.1: Initialize git repo
            git init
        Step 2.2: Commit to git 
            git add README.md 
            git commit README.md -m "Commit after step 2.2"
        step 2.3: Push to git repo "https://github.com/RahulPol/react-typescript-boilerplate"
            git push https://github.com/RahulPol/react-typescript-boilerplate master
    Step 3: Create directory structure for react
        react-typescript-boilerplate/
        ├─ dist/
        └─ src/
            └─ components/
    Step 4: Initialize the project
        npm init
        
        Note:
        Override following values 
        {
            "description": "React + Express (Typescript + Webpack) boilerplate"
            "git": "https://github.com/RahulPol/react-typescript-boilerplate.git"
            "author": Rahul Pol
        }
    Step 5: Install dependencies
        npm install --save react react-dom        
    Step 6: Install dev dependencies
        npm install --save-dev  @types/react @types/react-dom  (type declaration files for react & react-dom for intellisense)
        npm i -D typescript        
        
        Note:
        I am installing only react & reactDOM as main depnendency cause we don't want typescript as our main dependeny it is just a development tool and not a project dependency. The typescript will convert your .ts/.tsx files into .js file using typescript compiler. This .js file contains your project dependencies(react & reactDOM for the moment and later express) and your code files(react components for the moment and later your server files) which will be served by your server. Thus, we don't require typescript when publishing the final output.
    Step 7: Add .gitignore file 
        ignore node modules 
    Step 8: Add typescript configuration file
        Add a tsconfig.json file into your root diretory. This will tell typescript compiler, how the output should look like. Checkout the config file for more details.
    Step 9: add some sample .ts files and check the compiler works as expectd
    ----------------------------------------------------------Commit to git -------------------------------------------------------
    Step 10: Remove the sample .ts files 
    Step 11: Writes some code
        Step 11.1: Add main/root component in the src folder. This is the only react component that should reside outside of component directory.
            ./src/index.tsx
        Step 11.2: Add a demo component in component directory. In future, it is adivced that all your sub component reside in this directory. Of course you will have subdirectories to logically group your components but you do not add react component outside of this directory.
            ./src/component/Hello.tsx (demo component)
        Step 11.3: Add html file in root directory. In this file, 
            Add target where your main component will attach itself. 
            Add reference to your root compoenent js file.(index.js)
            ./index.html        
        Step 11.4: Compile your code 
            tsc
        Step 11.5: Check the output by opening index.html file
            You'll get an error: Uncaught TypeError: Failed to resolve module specifier "react". Relative references must start with either "/", "./", or "../".
        ----------------------------------------------------------Commit to git -------------------------------------------------------
        Step 11.6: Hacks 
            The reason behind the failure is, the typescript compiler just converted your .ts files into .js files and did not pull dependencies(react & react-dom) and pushed them into ./dist/ directory. 
                To avoid this we will add react & react-dom dependencies into our index.html and remove the reference from ./dist/index.js & ./dist/Hello.js
            Even after this your code won't work as your browser doesn't understand how to resovle Hello module dependency. You can read more about module resolution at https://www.typescriptlang.org/docs/handbook/module-resolution.html
                To avoid this make an absolute reference to Hello module in ./dist/index.js file.
            Now your code works. 

            This is end of React + Typescript stage.
        ----------------------------------------------------------Commit to git -------------------------------------------------------
Stage 2: React + Typescript + Webpack    
    There are few problems with pervious stage, 
        1. You need to always modify ./dist/*.js files after you run typescript compiler. 
        2. Another problem is that we have to include external dependencies in ./index.html, again this is a pain as our project might have hundreds of dependencies. 
    We need something that will look up in our ./dist/*.js files and automatically add the dependencies and perform module resolution.And that is the whole reason of webpack, in addition to above things it also provide lots of benifits as we will see.
    
    Step 12: Install webpack dev dependency
        npm install --save-dev webpack webpack-cli

        Note: Again this is a dev dependency and not a project one.
    Step 13: Create a webpack configuration file in root directory. Check what we are doing in this file.
        ./webpack.config.js
    Step 14: Install loaders
        npm i -D ts-loader source-map-loader

        Note: The ts-loader is glue between typescript and webpack. It enables webpack to compile typescript files.
    Step 15: Create a script in your package json
        {
            "webpack": "webpack"
        }            
    Step 16: Before we run above command 
        1. delete your dist folder, 
        2. remove the react & react-dom dependency from index.html
        3. refer ./dist/main.js script file instead of index.js in ./index.html And run command
        
        npm run webpack
    
    Now your code works.        
    Isn't this a magic. We haven't specified webpack which is our staring file neither we specified where to store the output. The code still works because webpack have some defaults, it stores its output in ./dist/ folder & spit out main.js as final output file.
    
    In addition to some default magic webpack has,
    1. Included your dependencies in final output.
    2. Resolved module imports.
    3. Minified your final js
    4. Included source-map for debugging.
    And much more...
    ----------------------------------------------------------Commit to git -------------------------------------------------------