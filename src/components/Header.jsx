import { useState } from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Menu open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
}
