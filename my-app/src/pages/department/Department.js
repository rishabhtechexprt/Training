import React, { useState } from 'react';
import Navbar from '../components/navbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tracker from '../components/tracker';
import Breadindication2 from '../components/breadcrumbs2';
function DepartmentList() {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'HR', description: 'Human Resources' },
    { id: 2, name: 'HR', description: 'Human Resources' },
    { id: 3, name: 'HR', description: 'Human Resources' },
    { id: 4, name: 'IT', description: 'Information Technology' },
    { id: 5, name: 'IT', description: 'Information Technology' },
    { id: 6, name: 'IT', description: 'Information Technology' },
    { id: 7, name: 'Finance', description: 'Finance and Accounting' },
    { id: 8, name: 'Finance', description: 'Finance and Accounting' },
  ]);

  const [editingDepartment, setEditingDepartment] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addDepartment = () => {
    if (formData.name && formData.description) {
      const newDepartment = {
        id: departments.length + 1,
        name: formData.name,
        description: formData.description,
      };

      setDepartments([...departments, newDepartment]);
      setFormData({ name: '', description: '' });
    }
  };

  const deleteDepartment = (id) => {
    setDepartments(departments.filter((department) => department.id !== id));
  };

  return (
    <>
      <Navbar />
      <Breadindication2 />
      <div className="px-2 py-2">
        <Tracker/>
       
        <form>
          <div className="row align-items-end px-3">
            <div className="col-md-4 mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Department Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Enter Department name...'
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
                onClick={addDepartment}
              >
                Add Department
              </button>
            </div>
          </div>
        </form>
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
        <table className="table table-striped  ">
          <thead className='sticky-top bg-light'>
            <tr>
              <th>ID</th>
              <th>Department Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department) => (
              <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.name}</td>
                <td>{department.description}</td>
                <td>
                  <button>
                    <EditIcon />
                  </button>
                  <button onClick={() => deleteDepartment(department.id)}>
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

export default DepartmentList;
