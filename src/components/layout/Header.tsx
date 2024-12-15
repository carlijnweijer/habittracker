import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav>
      <ul className="flex gap-4 font-bold">
        <li>
          <Link href="/">Habits</Link>
        </li>
        <li>
          <Link href="/me">Profile</Link>
        </li>
        <li>
          <Link href="/premium">Premium</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
