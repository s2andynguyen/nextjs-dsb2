export default async function customers() {
  console.log('Fetching revenue data...');
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log('Data fetch completed after 3 seconds.');
  return (
    <h1>data: {' '}</h1>
  )
}
