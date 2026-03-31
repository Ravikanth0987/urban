function AdminNavbar() {

  const logout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href = "/admin"; // redirect to login
  };

  return (
    <>
      <h3>Urban Compass Admin</h3>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </>
  );
}

export default AdminNavbar;