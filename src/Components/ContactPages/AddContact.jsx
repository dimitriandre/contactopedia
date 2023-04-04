const AddContact = () => {
  return (
    <div>
      <div className="border col-12 text-white p-2">
        <div className="row p-2">
          <div className="col-12 text-white-50">Add a new Contact</div>
          <div className="col-12 col-md-4 p-1">
            <input
              className="form-control form-control-sm"
              placeholder="Name..."
            ></input>
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              className="form-control form-control-sm"
              placeholder="Email..."
            ></input>
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              className="form-control form-control-sm"
              placeholder="Phone..."
            ></input>
          </div>
          <div className="col-12 col-md-4 p-1 offset-md-4">
            <button className="btn btn-primary btn-sm form-control">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
