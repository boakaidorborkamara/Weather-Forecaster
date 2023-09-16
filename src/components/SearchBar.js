import React from "react";

{
  /* search section  */
}
<div className="col-lg-4 px-5  " id="aside">
  {/* close button  */}
  <div className="text-white py-5 d-flex justify-content-end">
    <button
      type="button"
      className="btn-close btn-close-white"
      aria-label="Close"
    ></button>
  </div>

  {/* search box  */}
  <div>
    <form className="form-inline my-2 my-lg-0 d-flex">
      <input
        className="form-control mr-sm-2 rounded-0"
        type="search"
        placeholder="Search location"
      />
      <button class="btn rounded-0 btn-secondary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>

  {/* default countries  */}
  <ul className="list-group list-group-flush mt-5 ">
    <li className="list-group-item my-3 text-white ">Liberia</li>
    <li className="list-group-item my-3 text-white ">Ghana</li>
    <li className="list-group-item my-3 text-white">Guinea</li>
  </ul>
</div>;
