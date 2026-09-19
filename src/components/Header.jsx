import { NavLink } from 'react-router';

export function Header() {
  return (
    <header>
      <h1>Task Tracker</h1>

      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </nav>
    </header>
  );
}
