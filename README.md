# Restaurant Website with Tabbed-Viewing

## You can view a live version of this project [here](https://animated-kelpie-10c93b.netlify.app/).

## Intro
This project is a restaurant website that utilises tabbed-viewing to display different pages within a single index.html file. The website consists of three main pages: Home, Menu, and Contact. By incorporating tabbed-viewing through webpack.js bundles, the HTML elements for each page are dynamically created within their respective JavaScript files.

## Purpose
The primary objective of this project was for me to learn and gain practical experience with webpack. By developing this website, I aimed to familiarise myself with webpack's configuration, understand the usage of ES6 modules, and explore some of its plugins, such as htmlwebpackplugin and copywebpackplugin.

## What I learned

*Webpack Configuration: I gained hands-on experience in setting up and configuring webpack for a web development project. This involved defining entry points, output paths, loaders, and plugins to optimise the bundling process.
*ES6 Modules: By leveraging the import/export syntax, I learned how to organise and structure JavaScript code into modular components, allowing for better code organisation and maintainability.
*Webpack Plugins: I explored the usage of webpack plugins, specifically htmlwebpackplugin and copywebpackplugin. The htmlwebpackplugin facilitated the automatic generation of the index.html file with the necessary script tags, while the copywebpackplugin assisted in copying static assets to the output directory.
*Responsive Design: Although visual details were not the primary focus of this project, I ensured that the website is responsive. This involved implementing CSS rules and techniques to adapt the layout and styling based on different screen sizes.

## Additional Notes
There are a few points worth mentioning:

*As this project was primarily aimed at learning webpack, the visual details might not be as polished as they could be.The focus was on implementing tabbed-viewing functionality and understanding webpack's configuration.
*One area that I would address if given more time is resolving the dependency cycle. A dependency cycle occurs when two or more modules depend on each other, causing potential issues. The current code relies on the JS file that renders each tab to also render the event listeners for the navbar links. To fix this, I could refactor the code and add the navbar to the index.html file. This way, I could remove the event listeners within the JS file for each page, as it would already be part of the core html structure. In turn, this would fix the dependency cycle.

## Usage 
Please feel free to explore the project's code, review the website in action, and use it for your own learning or business purposes.
