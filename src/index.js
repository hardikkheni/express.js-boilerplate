import app from './app';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`
    ***************************************
    *                                     *
    *      Server up & running on         *
    *      http://localhost:${PORT}          *
    *                                     *
    ***************************************
    `);
});
