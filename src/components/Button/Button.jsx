export function Button(props) {
  return (
    <div className="search-form__field-action">
      <button type={props.type} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
}
