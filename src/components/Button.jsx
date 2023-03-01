export default function Button(props) {
  const { name, addClass, onclick } = props;
  const classname = `button ${addClass}`;

  return (
    <button type="button" className={classname} onClick={onclick}>{name}</button>
  );
}
