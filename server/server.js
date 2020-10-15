const mongoose = require('mongoose');

const app = require('./app');
const { PORT, DB_URI } = require('./config');

mongoose
	.connect(DB_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Database Connected :)');
		app.listen(PORT, () => console.log(`Server is Running On ${PORT}`));
	})
	.catch((err) => {
		console.error('Failed To Connect To Database:', err);
	});
