import { createFileRoute, useNavigate } from "@tanstack/react-router";

function User() {
  const navigate = useNavigate();

  const handleOnClick = (id: number) => () => {
    navigate({ to: `/user/$userId`, params: { userId: id.toString() } });
  };

  return (
    <>
      <div className="p-2">Hello from User!</div>
      <nav className="flex gap-2 p-2">
        <button type="button" onClick={handleOnClick(1)}>
          User1
        </button>
        <button type="button" onClick={handleOnClick(2)}>
          User2
        </button>
        <button type="button" onClick={handleOnClick(3)}>
          User3
        </button>
        <button type="button" onClick={handleOnClick(4)}>
          User4
        </button>
      </nav>
    </>
  );
}

export const Route = createFileRoute("/user/")({ component: User });
