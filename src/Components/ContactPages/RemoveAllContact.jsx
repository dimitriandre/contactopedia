const RemoveAllContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-danger form-control"
        onClick={() => props.handleRemoveAllContacts()}
      >
        Remove all
      </button>
    </div>
  );
};

export default RemoveAllContact;
