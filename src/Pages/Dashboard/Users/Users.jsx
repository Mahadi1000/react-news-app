import users from "../../../../public/users.json";

const Users = () => {

  return (
    <div className="h-[100vh] overflow-y-auto">
      <h1 className="text-xl font-semibold">Users Table</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Email</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={`Avatar of ${item.name}`} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.country}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.company.name}<br/>
                  <span className="badge badge-ghost badge-sm">{item.company.catchPhrase}</span>
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
            ))}
          </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </div>
  )
}

export default Users