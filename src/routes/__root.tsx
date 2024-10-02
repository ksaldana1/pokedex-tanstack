import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="w-full h-full flex justify-center">
      <div style={{ width: 360, height: 640 }}>
        <Outlet />
      </div>
    </div>
  );
}
