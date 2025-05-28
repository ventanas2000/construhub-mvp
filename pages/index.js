import { useState } from "react";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ConstruHub</h1>
      <input
        type="text"
        placeholder="Buscar plomero, electricista..."
        className="p-2 border rounded w-full"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {user ? (
        <p>Bienvenido, {user.email}</p>
      ) : (
        <a href="/login" className="text-blue-500">Iniciar sesión</a>
      )}
    </div>
  );
}
