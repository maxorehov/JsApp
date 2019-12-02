const HTMLPlugin = require('html-webpack-plugin');//Экспортируем  класс HTMLPlugin из node_modules

module.exports = { //Экспортируем объект
	entry: ['@babel/polyfill', './src/index.js'],// Исходник 
	output: {
		path: __dirname + '/dist', //Директория для готовых файлов
		filename: 'bundle.js' //Имя готового файла
	},
	devServer: { //конфигурация сервера разработки
		contentBase: __dirname + '/dist' //дирректория для запуска 
	}, 
	plugins: [ // подключение плагинов в webpack
		new HTMLPlugin({ //подключение плагина HTML
			filename: 'index.html', //имя готового файла
			template: './src/index.html' // шаблон файла
		})
	],
	resolve: {
		extensions: ['.js']//автоматическое добавление .js
	},
	module: {
		rules: [
		  { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	  }
}