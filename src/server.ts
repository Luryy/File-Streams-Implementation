import app from './app';

setInterval(() => {
  const processUsage = process.memoryUsage();

  const totalUsedMemoryInMb = Math.floor(processUsage.rss / (1024 * 1024));

  console.log(`Used Memory: ${totalUsedMemoryInMb} MB`);
}, 5 * 1000);

const port = process.env.APP_PORT || 3333;

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
