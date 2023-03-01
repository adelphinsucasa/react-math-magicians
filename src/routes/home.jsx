export default function Home() {
  let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ';
  text += 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,';
  text += ' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ';
  text += 'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ';
  text += 'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ';
  text += 'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  return (
    <div id="home">
      <h1>Welcome to our page!</h1>
      <p>{text}</p>
      {' '}
      <p>{text}</p>
    </div>
  );
}
