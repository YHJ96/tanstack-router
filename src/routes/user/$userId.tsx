import { createFileRoute } from "@tanstack/react-router";

function UserDetail() {
  const { userId } = Route.useParams();
  return <div className="px-2">Hello {userId}</div>;
}

export const Route = createFileRoute("/user/$userId")({
  component: UserDetail,
});
