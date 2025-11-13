import React, { useEffect, useState } from "react";

export default function Settings() {
  const THEME_KEY = "admin_theme_v1";
  const [dark, setDark] = useState(
    () => localStorage.getItem(THEME_KEY) === "dark"
  );
  const [profile, setProfile] = useState(() => {
    try {
      return (
        JSON.parse(localStorage.getItem("admin_profile_v1")) || {
          name: "Admin",
        }
      );
    } catch {
      return { name: "Admin" };
    }
  });

  useEffect(() => {
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function saveProfile() {
    localStorage.setItem("admin_profile_v1", JSON.stringify(profile));
    alert("Profile saved");
  }

  return (
    <div>
      <h3 className="text-xl mb-4">Settings</h3>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h4 className="mb-2">Theme</h4>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={dark}
            onChange={(e) => setDark(e.target.checked)}
          />{" "}
          Dark mode
        </label>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h4 className="mb-2">Profile</h4>
        <input
          className="border p-2 mb-2 w-full"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
        <button className="btn" onClick={saveProfile}>
          Save Profile
        </button>
      </div>
    </div>
  );
}
