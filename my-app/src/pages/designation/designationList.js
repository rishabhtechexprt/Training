import React, { useState } from 'react';
import Navbar from '../components/navbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tracker from '../components/tracker';
import Breadindication3 from '../components/breadcrumbs3';
function DesignationList() {
  const [Designations, setDesignation] = useState([
    { id: 1, name: 'Developer', description: 'Information Technology' },
    { id: 2, name: 'Salesforce', description: 'Sales and admin' },
    { id: 3, name: 'Finance', description: 'Finance and Accounting' },
    { id: 4, name: 'Salesforce', description: 'Sales and admin' },
    { id: 5, name: 'Salesforce', description: 'Sales and admin' },
    { id: 6, name: 'Salesforce', description: 'Sales and admin' },
    { id: 7, name: 'Salesforce', description: 'Sales and admin' },
  ]);

  const [editing, setEditingDepartment] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addDesignation = () => {
    if (formData.name && formData.description) {
      const newDesignation = {
        id: Designations.length + 1,
        name: formData.name,
        description: formData.description,
      };

      setDesignation([...Designations, newDesignation]);
      setFormData({ name: '', description: '' });
    }
  };

  const deleteDesignation = (id) => {
    setDesignation(Designations.filter((designation) => designation.id !== id));
  };

  return (
    <>
      <Navbar />
      <Breadindication3 />
      <div className="px-2 py-2">
        <Tracker/>
        
        <form>
          <div className="row align-items-end px-3">
            <div className="col-md-4 mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Designation Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Enter Designation name...'
                className="form-control"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="description" className="form-label fw-bold">
                Description:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder='Enter Description...'
                className="form-control"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-2 mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={addDesignation}
              >
                Add Designation
              </button>
            </div>
          </div>
        </form>
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
        <table className="table table-striped ">
          <thead className='sticky-top bg-light'>
            <tr>
              <th>ID</th>
              <th>Designation Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Designations.map((designation) => (
              <tr key={designation.id}>
                <td>{designation.id}</td>
                <td>{designation.name}</td>
                <td>{designation.description}</td>
                <td>
                  <button>
                    <EditIcon />
                  </button>
                  <button onClick={() => deleteDesignation(designation.id)}>
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
         
        </table>
        <div className="col-md-12 text-center">
          <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default DesignationList;