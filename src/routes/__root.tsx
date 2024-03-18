import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

function Root() {
  return (
    <>
      <nav className="flex gap-2 p-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/user" className="[&.active]:font-bold">
          User
        </Link>
      </nav>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}

// 404 최상단 배치
function NotFound() {
  return <p className="p-2">Not Found!!</p>;
}

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});
