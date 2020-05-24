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
    ----------------------------------------------------------Commit to git -----------------------------------------------------------



    

    
