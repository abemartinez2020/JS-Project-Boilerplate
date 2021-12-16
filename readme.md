# Boilerplate For Simple JavaScript Projects

- Small projects in which you need to use a bundler (webpack) and a transcompiler (Babel).

## Steps to setup boilerplate

### Note: make sure you have Node.js installed.

1. Clone repository from: [https://github.com/abemartinez2020/JS-Project-Boilerplate](https://github.com/abemartinez2020/JS-Project-Boilerplate)
2. Open terminal, go to the directory where you want to clone the repository into, and enter following command:`git clone xxxx `
3. Install project and dev dependencies by running the following command in the terminal: `npm install `

## SCSS folder

- If you're planning on **not** using scss, you can remove it.
- If you do plan on using scss, then make sure to globally install SASS. To do this, go into the terminal and enter the following command: `npm install -g sass`

### Compiling your SCSS

You can do it by:

1. going to your project file path, and entering the following command every time you want to compile: `sass /scss/main.scss dist/css/main.cs`
   **OR**
2. Install an extension onto your text editor that compiles your scss code and watches for any changes in your scss. I use Live SASS Compiler on VS Code.
