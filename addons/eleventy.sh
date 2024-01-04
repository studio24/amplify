: ' 
Steps:

1.) Install @11ty/eleventy, @11ty/eleventy-img, @factorial/eleventy-plugin-twig, then install @grimlink/eleventy-plugin-sass as a dev dependency
2.) Clone git repo
3.) CD into folder
4.) Move _includes folder from ./assets-src to ../assets-src (and everything else depending on a user prompt asking whether or not they want a local copy of the docs), then move _data/, configs/, and eleventy.js into the root folder
5.) Amend gitignore to include assets-src/passthroughs
6.) Rename README.md to eleventy.md and move it into the docs folder in the root.
'
# Install Eleventy and relevant dependencies
echo "Installing Eleventy with image, twig and sass plugins..."
nvm use
npm install @11ty/eleventy @11ty/eleventy-img @factorial/eleventy-plugin-twig
npm install @grimlink/eleventy-plugin-sass --save-dev

# Get amplify-eleventy-module from Git
echo "Grabbing Eleventy Amplify Addon from git..."
git clone git@github.com:studio24/amplify-eleventy-module.git

# Move new files from repo folder to 
echo "Extracting relevant files and moving them into the root folder..."
cd amplify-eleventy-module
mv ./assets-src/_includes ../assets-src
mv _data configs .eleventy.js ../
mv README.md ../docs/eleventy.md

echo "Moving back to root folder"
cd ../

echo "Removing amplify-eleventy-module folder"
rm -rf amplify-eleventy-module

echo "Adding Eleventy passthrough folder to gitignore..."
echo "\n #Eleventy - Ignore passthrough folder \n assets-src/passthrough" >> .gitignore

echo "Successfully installed Eleventy!"
echo "See docs/eleventy.md for things to do next"