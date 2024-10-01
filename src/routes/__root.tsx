import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="w-full h-full flex justify-center">
      <Outlet />
    </div>
  );
}
