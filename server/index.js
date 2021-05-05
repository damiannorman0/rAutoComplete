const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors())
const port = 3000;
const options = Array(100)
  .fill(0)
  .map((_, index) => `${index % 5}${index}Option`);

app.get("/autocomplete", (req, res) => {
    const f = (req.query.filter || '').toLowerCase();
    const result = options.filter((item = '') => {
      return item.toLowerCase().startsWith(f);
    });
    return res.json(result);
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
