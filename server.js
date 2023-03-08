const express = require('express');
const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('App iniciada en http://localhost:' + port);
});
